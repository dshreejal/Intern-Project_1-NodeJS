const articleService = require('../../services/articles');
const app = require('../../app');
const Article = require('../../models/Article');

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

describe('It should add a new article to db', () => {
    test('add article', async () => {
        const response = await articleService.addArticle("New article", "This is new article description", "article.png", "e222eda5d1073984f5b3a56d")
        expect(response).not.toBe(null);
    })
})

describe('It should fetch the added article', () => {

    test('fetch added article', async () => {
        const result = await articleService.fetchArticle("", "", 1, 1);
        expect(result[0].title).toEqual("New article");
    });

    afterEach(async () => {
        await Article.deleteMany();
    });
})
