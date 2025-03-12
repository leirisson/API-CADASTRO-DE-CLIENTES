import {randomUUID} from 'node:crypto'

export function create({ request, response, database }) {
    const { nome, cpf, telefone, valor, endereco } = request.body

    const emprestimo = {
        id: randomUUID(),
        nome,
        cpf,
        telefone,
        valor,
        endereco,
        created_at: new Date(),
        updated_at: new Date() 
    }

    database.insert("emprestimos", emprestimo)

    response.writeHead(201).end(JSON.stringify(emprestimo))
}