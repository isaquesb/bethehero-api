const incidents = require('../repository/IncidentRepository');
const resource = require('../resource');
const resultResource = require('../resource/incident');

module.exports = {
    async incidents(request, response) {
        const ong_id = request.headers.authorization;
        const {page = 1} = request.query;
        const {data, meta} = await incidents.fetch({page, ong_id});
        const resultSet = resource(data, resultResource);
        response.header('X-Total-Count', meta.total);
        return response.json(resultSet);
    }
}
