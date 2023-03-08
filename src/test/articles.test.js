const request = require('supertest');
const Article = require('../models/Article')
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
    beforeAll(async () => {
        // Create some sample articles in the database
        const articles = [
            { title: 'Article 1', description: 'Body of article 1' },
            { title: 'Article 2', description: 'Body of article 2' },
            { title: 'Article 3', description: 'Body of article 3' }
        ];
        await Article.insertMany(articles);
    });
    afterAll(async () => {
        // Delete all articles from the database
        await Article.deleteMany();
    });

    it("should return all articles", async () => {
        const response = await request(app).get('/api/articles');
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);
        expect(response.body.message).toBe('Data fetched successfully');
        expect(response.body.error).toBeNull();
    });

    it('should return an empty list if there are no articles', async () => {
        // Delete all articles from the database
        await Article.deleteMany();
        const response = await request(app).get('/api/articles');
        // Check HTTP status code
        expect(response.status).toBe(200);
        // Check response body

        expect(response.body.data.length).toBe(0);
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.message).toBe('Data fetched successfully');
        expect(response.body.error).toBeNull();
    });
})