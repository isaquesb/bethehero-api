const repo = require('../repository/OngRepository');
const incidents = require('../repository/IncidentRepository');
const resource = require('../resource');
const resultResource = require('../resource/ong');
const incidentResource = require('../resource/incident');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;
        const {data, meta} = await repo.fetch({page});
        const resultSet = resource(data, resultResource);
        response.header('X-Total-Count', meta.total);
        return response.json(resultSet);
    },
    async store(request, response) {
        const id = await repo.store(request.body);
        return response.json({id});
    },
    async incidents(request, response) {
        const { ong_id } = request.params;
        const {page = 1} = request.query;
        const {data, meta} = await incidents.fetch({page, ong_id});
        const resultSet = resource(data, incidentResource);
        response.header('X-Total-Count', meta.total);
        return response.json(resultSet);
    }
}
