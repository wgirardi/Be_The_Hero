const connection = require('../database/connection');
const crypto = require('crypto');  // gerar um ID aleatorio 

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');  // gerar um ID aleatorio 
    
        await connection('ongs').insert({
            id, 
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
}



/**
* Rota / Recurso
/**
/**
 * Métodos HTTP:
 * 
 * GET: Listar/ Buscar uma Informacao do back-end
 * POST: Criar uma informacao do back-end
 * PUT: Alterar uma informacao do back-end
 * DELETE: Deletar uma informacao do back-enfd
 * 
 */
/**
 * Tipos de parametros 
 * 
 * Query Params: Parametros nomeados e enviados na rota apos ? ( Filtros Paginaçao )
 * Route Params: Parametros utilizados para identificar recursos 
 * Request Body: Corpo da requisiçao , utilizado para criar ou alterar recursos 
 */
/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()  // Ferramenta para o Banco SQL KNEX.JS
 */