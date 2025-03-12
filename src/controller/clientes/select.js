

export function select({ request, response, database }) {

    const { nome } = request.query

    const filters = nome ? { nome } : null

    const emprestimos = database.select("emprestimos", filters)

    return response.end(JSON.stringify(emprestimos))
}