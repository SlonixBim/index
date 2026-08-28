import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * GitHub OAuth Step 1: Redirect the user to GitHub's authorization page.
 * Decap CMS will call this endpoint when the user clicks "Login with GitHub".
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;

  if (!clientId) {
    return res.status(500).json({ error: "GITHUB_OAUTH_CLIENT_ID is not configured" });
  }

  // Build the GitHub OAuth authorization URL
  const params = new URLSearchParams({
    client_id: clientId,
    scope: "repo,user",
    redirect_uri: `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}/api/callback`,
  });

  const githubAuthUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;

  res.redirect(githubAuthUrl);
}
