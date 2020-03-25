const connection = require('../database/connection');
const paginator = require('./Paginator');

module.exports = {
    async fetch(params) {
        params = params || {};
        const query = connection('bth_incident');
        if (params.ong_id) {
            query.where('ong_id', params.ong_id);
        }
        const meta = await paginator.paginate(query, params.page || 1, 10);
        const rowSet = await query
            .from('bth_incident as incidents')
            .join('bth_ong as ongs', 'ongs.id', '=', 'incidents.ong_id')
            .select([
                'incidents.*',
                'ongs.name as ong_name',
                'ongs.email as ong_email',
                'ongs.cellphone as ong_cellphone',
                'ongs.city as ong_city',
                'ongs.uf as ong_uf',
                'ongs.created_at as ong_created_at',
            ]);
        return {
            data: rowSet,
            meta
        };
    },
    async store(data, ong_id) {
        const { title, description, value } = data;
        const [id] = await connection('bth_incident').insert({
            title,
            description,
            value,
            ong_id
        });
        return id;
    },
    async delete(id, ong_id) {
        const row = await connection('bth_incident')
            .where('id', id)
            .select('ong_id')
            .first();
        if (!row) {
            return null;
        }
        if (row.ong_id !== ong_id) {
            return false;
        }
        await connection('bth_incident')
            .where('id', id)
            .delete();
        return true;
    }
}
