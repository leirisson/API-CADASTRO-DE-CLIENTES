import { create } from "../controller/clientes/create.js";

export const clientes = [
    // {
    //     method: "GET",
    //     path: "/clientes",
    //     controller: create
    // },
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