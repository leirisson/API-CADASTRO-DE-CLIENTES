import { create } from "../controller/clientes/create.js";
import { select } from '../controller/clientes/select.js'

export const clientes = [
    {
        method: "GET",
        path: "/clientes",
        controller: select
    },
    {
        method: "POST",
        path: "/clientes",
        controller: create
    },
    // {
    //     method: "PUT",
    //     path: "/clientes",
    //     controller: create
    // },
    // {
    //     method: "DELETE",
    //     path: "/clientes",
    //     controller: create
    // }
]