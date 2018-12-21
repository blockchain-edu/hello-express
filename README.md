# hello-express

## Set up

```
$ yarn # or npm install
$ yarn build # npm run build
```

`src/app.ts` がトランスパイルされ、 `dist/src/app.js` が生成される。

## Run server

```
$ yarn start # or $ npm start
```

## Example

### Request

```
localhost:3000/invoice?amount=0.1
```

### Response

```json
{
    "invoice": "bitcoin:muoRvov495zRtS7DDJ6eFMbd7KjF7YS7YV?amount=0.1"
}
```
