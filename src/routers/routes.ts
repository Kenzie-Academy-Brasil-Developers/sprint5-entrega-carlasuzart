import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";

const routes = Router();

routes.post("", userCreateController);
routes.get("", userListController);
routes.get("/:id", userListOneController);
routes.delete("/:id", userDeleteController);

export default routes;
