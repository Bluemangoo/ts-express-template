import express from 'express';

const app = express();
app.get('/', (_req, res) => {
  res.send('Hello Typescript world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
