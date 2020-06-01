import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        '1',
        '2',
        '3'
    ]);
})

app.listen(3333);