


export async function jsonHandler(request, response){
    const buffer = []

    for await (const chunk of request){
        buffer.push(chunk)
    }

    try {
        request.body = JSON.parse(Buffer.concat(buffer).toString())
    } catch (error) {
        request.body = null
    }
}