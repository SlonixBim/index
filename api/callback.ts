import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * GitHub OAuth Step 2: Exchange the authorization code for an access token.
 * GitHub redirects here after the user approves access.
 * We then send the token back to the CMS via postMessage.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: "GitHub OAuth credentials not configured" });
  }

  try {
    // Exchange the code for an access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(401).send(renderMessage("error", data));
    }

    // Send the token back to the CMS popup window via postMessage
    return res.status(200).send(
      renderMessage("success", {
        token: data.access_token,
        provider: "github",
      })
    );
  } catch (error) {
    console.error("OAuth callback error:", error);
    return res.status(500).send(renderMessage("error", { error: "Failed to exchange token" }));
  }
}

/**
 * Renders an HTML page that sends the auth result back to the
 * parent CMS window via postMessage, then closes the popup.
 * Uses a <script> block with a JSON blob to avoid quote-escaping bugs.
 */
function renderMessage(status: string, content: object) {
  // Safely encode the JSON content as a base64 string to avoid
  // any quote/escaping issues inside the inline <script> tag.
  const jsonStr = JSON.stringify(content);
  const base64 = Buffer.from(jsonStr).toString("base64");

  return `<!DOCTYPE html>
<html>
  <head><title>CMS Authentication</title></head>
  <body>
    <script>
      (function() {
        var status = "${status}";
        var content = JSON.parse(atob("${base64}"));
        var contentStr = JSON.stringify(content);
        var message = "authorization:github:" + status + ":" + contentStr;

        if (window.opener) {
          window.opener.postMessage("authorizing:github", "*");
          window.opener.postMessage(message, "*");
        }
        setTimeout(function() { window.close(); }, 500);
      })();
    </script>
    <p>Authenticating with GitHub... This window should close automatically.</p>
  </body>
</html>`;
}
