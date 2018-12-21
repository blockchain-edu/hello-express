import * as express from 'express';

const app = express();

app.get('/invoice', (req, res) => {
    const address = 'muoRvov495zRtS7DDJ6eFMbd7KjF7YS7YV';
    return res.json({
        invoice: `bitcoin:${address}?amount=${req.query.amount}`
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
