

export function update({request, response, database}){
    const {id} = request.params
    const {nome, cpf, telefone, valor} = request.body



    

    database.update('emprestimos', id, {
        nome, 
        cpf, 
        telefone, 
        valor, 
        updated_at: 
        new Date()
    })

    return response.end()
}