const connection = require('../database/connection');
module.exports = {
    async paginate(query, page, limit) {
        page = page || 1;
        limit = limit || 10;
        query.clearSelect();
        const [row_count] = await query.count();
        query.clearSelect();
        query
            .offset((page - 1 ) * limit)
            .limit(limit);
        return {
            page,
            total: row_count['count(*)']
        };
    }
}
