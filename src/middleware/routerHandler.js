import { Database } from '../database/database.js'
import { routes } from "../routes/index.js";
// import { extractQueryParams } from '../utils/extractQueryParams.js'

const database = new Database()

export function routerHandler(request, response) {
    const route = routes.find(route => {
        return route.method === request.method && route.path === request.url
    })


    if (route) {

        return route.controller({ request, response, database })
    }

    return response.writeHead(404).end('Pagina não encontrada.')
}