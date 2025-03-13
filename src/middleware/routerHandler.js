import { Database } from '../database/database.js'
import { routes } from "../routes/index.js";
import { extractQueryParams } from '../utils/extractQueryParams.js'

const database = new Database()

export function routerHandler(request, response) {
    const route = routes.find(route => {
        return route.method === request.method && route.path.test(request.url)
    })


    if (route) {
        const routeParams = request.url.match(route.path)

        const {query, ...params} = routeParams.groups

        

        request.query = query ? extractQueryParams(query) : {}
        request.params = params

        return route.controller({ request, response, database })
    }

    return response.writeHead(404).end('Pagina não encontrada.')
}