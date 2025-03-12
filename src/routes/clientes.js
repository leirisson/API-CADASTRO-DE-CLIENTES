import { create } from "../controller/clientes/create.js";
import { select } from '../controller/clientes/select.js';
import { update } from '../controller/clientes/update.js'

export const clientes = [
    {
        method: "GET",
        path: "/emprestimos",
        controller: select
    },
    {
        method: "POST",
        path: "/emprestimos",
        controller: create
    },
    {
        method: "PUT",
        path: "/emprestimos/:id",
        controller: update
    },
    // {
    //     method: "DELETE",
    //     path: "/emprestimos",
    //     controller: create
    // }
]