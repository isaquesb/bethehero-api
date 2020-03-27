const repo = require('../repository/IncidentRepository');
const collection = require('../resource/collection');
const resource = require('../resource/incident');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;
        const {data, meta} = await repo.fetch({page});
        const resultSet = collection(data, resource);
        response.header('X-Total-Count', meta.total);
        return response.json(resultSet);
    },
    async store(request, response) {
        const ong_id = request.headers.authorization;
        const id = await repo.store(request.body, ong_id);
        return response.json({id});
    },
    async delete(request, response) {
        const ong_id = request.headers.authorization;
        const { id } = request.params;
        const deleted = await repo.delete(id, ong_id);
        if (null === deleted) {
            return response.status(404).json({error: 'Register not found'});
        }
        if (false === deleted) {
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        return response.status(204).send();
    }
}
