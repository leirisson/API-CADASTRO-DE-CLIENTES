import http from 'node:http'
import { jsonHandler } from './middleware/jsonHandler.js'


async function listener(request, response){
    await jsonHandler(request, response)

}

http.createServer(listener).listen(3335)

