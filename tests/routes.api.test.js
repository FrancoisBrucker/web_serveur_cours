
const request = require('supertest');

const app = require('../app');

let user;
let server;

beforeAll(async () => {
    user = await request.agent(app);
    server = await app.listen(3000);
});

afterAll(async () => {
    await server.close();
});


test('GET /api/current/numerologie/François', (done) => {
    user
        .get('/api/current/numerologie/François')
        .expect(200)
        .expect(function(res) {
            expect(res.body).toMatchObject(
                {
                    "prenom": "François",
                    "numero": 8,
                }
            )
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done()
        })
})

