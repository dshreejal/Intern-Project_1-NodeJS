const request = require('supertest');

const app = require('../app');

let server;
beforeAll((done) => {
    server = app.listen(4000, () => {
        console.log("Server started on port 4000");
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('GET /api/articles', () => {
    it("should return all articles", async () => {
        const response = await request(app).get('/api/articles');
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);
        expect(response.body.message).toBe('Data fetched successfully');
        expect(response.body.error).toBeNull();
    })
})