import { Hono } from "hono";
import contact from "../api/contact";
import enroll from "../api/enroll";

interface Env {
  RESEND_API_KEY: string;
  GOOGLE_SHEET_ID: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
  GOOGLE_PRIVATE_KEY: string;
}

const app = new Hono<{ Bindings: Env }>();

app.route('/api/contact', contact);
app.route('/api/enroll', enroll);

export default app;
