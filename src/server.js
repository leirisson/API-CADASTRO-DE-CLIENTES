import http from 'node:http'
import { jsonHandler } from './middleware/jsonHandler.js'
import { routerHandler } from './middleware/routerHandler.js'


async function listener(request, response) {

    await jsonHandler(request, response)

    routerHandler(request, response)

}

http.createServer(listener).listen(3335)

