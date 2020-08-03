import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  console.log('Hello World!');
});
