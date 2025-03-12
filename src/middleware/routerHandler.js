import { routes } from "../routes.js";
import {extractQueryParams} from '../utils/extractQueryParams.js'

export function routerHandler(request, response){
    const route = routes.find( route => {
        return route.method === request.method && route.path.test(request.url)
    })

    if(route) {
        const routeParams = request.url.match(route.path)
        
        const {query, ...params} = routeParams.groups

        request.params = params
        request.body = query ? extractQueryParams(query) : {}

        return route.controller({request, response})
    }
}