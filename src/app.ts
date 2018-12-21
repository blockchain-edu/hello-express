import * as express from 'express';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/invoice', (req, res) => {
    const address = 'muoRvov495zRtS7DDJ6eFMbd7KjF7YS7YV'; // use address generated from 
    return res.json({
        invoice: `bitcoin:${address}?amount=${req.query.amount}`
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
