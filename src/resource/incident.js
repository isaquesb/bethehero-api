const ongResource = require('./ong');
const cb = (data) => {
    const row = {
        id: data.id,
        title: data.title,
        description: data.description,
        value: data.value,
        created_at: data.created_at ? new Date(data.created_at) : null,
        ong: null
    }
    if (data.ong_name) {
        const ong = {};
        for (const key in data) {
            if (0 === key.indexOf('ong_')) {
                ong[key.replace('ong_', '')] = data[key];
            }
        }
        row.ong = ongResource(ong);
    }
    return row;
};

module.exports = cb;
