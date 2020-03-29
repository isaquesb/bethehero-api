const repo = require('../../src/repository/OngRepository');

describe('Generate Unique ID', () => {
    it('should generate an uniquye ID', () => {
        const id = repo.generateId();
        expect(id).toHaveLength(8);
    });
});
