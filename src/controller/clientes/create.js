import {randomUUID} from 'node:crypto'

export function create({ request, response }) {
    const { nome, cpf, telefone, endereco } = request.body
    const cliente = {
        id: randomUUID(),
        nome,
        cpf,
        telefone,
        endereco,
        created_at: new Date(),
        updated_at: new Date() 
    }

    response.writeHead(201).end(JSON.stringify(cliente))
}