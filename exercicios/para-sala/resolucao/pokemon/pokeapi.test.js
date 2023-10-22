const request = require('supertest')
const api = "https://pokeapi.co/api/v2"

describe('Testando a API do Pokemon', () => {
    test('Deve retornar o id do pokemon', async () => {
        const response = await request(api).get('/pokemon/ditto')
        expect(response.body.id).toBe(132)
        expect(response.statusCode).toBe(200)
    })

    test('Deve retornar o nome do pokemon', async () => {
        const response = await request(api).get('/pokemon/96')
        expect(response.body.name).toBe('drowzee')
        expect(response.statusCode).toBe(200)
    })
    
})