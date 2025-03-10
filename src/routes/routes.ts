import { Router } from "express";
import { getCepData } from "../controllers/cepController";

const routes = Router();

routes.get("/bycep/:cep", getCepData);

export default routes;
