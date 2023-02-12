import express, { json } from "express";
import { router } from "./routes";
import cors from "cors";

const application = express();
application.use(cors());
application.use(express.json());

application.use(router);

application.listen(3333);
