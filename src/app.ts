import express from "express";
import routes from "./routers/routes";

const app = express();

app.use(express.json());
app.use("/users", routes);

export default app;
