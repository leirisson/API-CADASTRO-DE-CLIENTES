import fs from "node:fs/promises"

const DATABASE_PATH = new URL("../database.json", import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, 'utf8')
            .then((data) => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })

    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    insert(tabela, data) {
        if (Array.isArray(this.#database[tabela])) {
            this.#database[tabela].push(data)
        } else {
            this.#database[tabela] = [data]
        }

        this.#persist()
    }

    select(tabela, filters){

        let data = this.#database[tabela] ?? []

        if(filters){
            data = data.filter((row) => {
              return Object.entries(filters).some(([key, value]) => {
                return row[key].toLowerCase().includes(value.toLowerCase())
              })
            })

        }

        return data

    }

    update(tabela, id, data){

        const rowIndex = this.#database[tabela].findIndex(row => (row.id === id))

        if(rowIndex){
            this.#database[tabela][rowIndex] = {
                ...this.#database[tabela][rowIndex],
                ...data
            }

            this.#persist()
        }

    }

    delete(tabela, id){
        const rowIndex = this.#database[tabela].findIndex(row => (row.id === id))

        if(rowIndex){
            this.#database[tabela].splice(rowIndex, 1)

            this.#persist()
        }
    }
}