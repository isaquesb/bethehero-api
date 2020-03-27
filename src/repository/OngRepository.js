const crypto = require('crypto');
const connection = require('../database/connection');
const paginator = require('./Paginator');

module.exports = {
    async fetch(params) {
        params = params || {};
        const query = connection('bth_ong');
        const meta = await paginator.paginate(query, params.page || 1, 10);
        const rowSet = await query.select('*');
        return {
            data: rowSet,
            meta
        };
    },
    async byEmail(email) {
        return await connection('bth_ong')
            .select('*')
            .where('email', email)
            .first();
    },
    async store(data) {
        const { name, email, cellphone, city, uf } = data;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('bth_ong').insert({
            id,
            name,
            email,
            cellphone,
            city,
            uf
        });
        return id;
    }
}
