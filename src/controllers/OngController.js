const repo = require('../repository/OngRepository');
const incidents = require('../repository/IncidentRepository');
const collection = require('../resource/collection');
const resource = require('../resource/ong');
const incident = require('../resource/incident');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;
        const {data, meta} = await repo.fetch({page});
        const resultSet = collection(data, resource);
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
        const resultSet = collection(data, incident);
        response.header('X-Total-Count', meta.total);
        return response.json(resultSet);
    }
}
