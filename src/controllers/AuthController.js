const repo = require('../repository/OngRepository');
const resource = require('../resource/ong');

module.exports = {
    async login(request, response) {
        const {email} = request.body;
        if (!email || '' === email) {
            return response.status(400).json({error: "Empty email"});
        }
        const row = await repo.byEmail(email);
        if (!row) {
            return response.status(404).json({error: "User not found"});
        }
        return response.json(resource(row));
    },
    async user(request, response) {
        const ong_id = request.headers.authorization;
        if (!ong_id || '' === ong_id) {
            return response.status(400).json({error: "Empty Authorization"});
        }
        const row = await repo.byId(ong_id);
        if (!row) {
            return response.status(404).json({error: "User not found"});
        }
        return response.json(resource(row));
    }
}
