const incidents = require('../repository/IncidentRepository');
const collection = require('../resource/collection');
const resource = require('../resource/incident');

module.exports = {
    async incidents(request, response) {
        const ong_id = request.headers.authorization;
        const {page = 1} = request.query;
        const {data, meta} = await incidents.fetch({page, ong_id});
        const resultSet = collection(data, resource);
        response.header('X-Total-Count', meta.total);
        return response.json(resultSet);
    }
}
