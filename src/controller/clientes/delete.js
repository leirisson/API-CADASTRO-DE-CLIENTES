

export function deleteEmp({request, response, database}){

    const {id} = request.params

    database.delete('emprestimos', id)

    return response.end()

}