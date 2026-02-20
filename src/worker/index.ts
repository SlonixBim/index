import { Hono } from "hono";
import contact from "../api/contact";

const app = new Hono<{ Bindings: Env }>();

app.route('/api/contact', contact);

export default app;
