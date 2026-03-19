const express = require('express');
const app = express();
const PORT = 3000;

const { voteRouter, logVotes } = require('./controllers/voteController');
const { foodRouter } = require('./controllers/foodController');

app.use('/', voteRouter);
app.use('/', foodRouter);

app.listen(PORT, () => {
  console.log(`투표 서버 실행: http://localhost:${PORT}`);
  console.log('투표: GET /vote?choice=cat 또는 /vote?choice=dog');
  console.log('투표: GET /results');
  console.log('음식: GET /foods');
  console.log('음식: GET /foods/:category (korean|chinese|japanese)');
  logVotes();
});
