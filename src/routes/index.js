import { passRouterPath } from "../utils/passRouterPath.js";
import { clientes } from "./clientes.js";


export const routes = [...clientes].map(route => ({
    ...route,
    path: passRouterPath(route.path)
}))