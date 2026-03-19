import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

import { voteRouter, logVotes } from './controllers/voteController.js';
import { foodRouter } from './controllers/foodController.js';

app.use(cors());

app.use('/', voteRouter);
app.use('/', foodRouter);

app.listen(PORT, () => {
  console.log(`투표 서버 실행: http://localhost:${PORT}`);
  console.log('투표: GET /vote?choice=cat 또는 /vote?choice=dog');
  console.log('투표: GET /results');
  console.log('음식: GET /food/all');
  console.log('음식: GET /food/:category (korean|chinese|japanese)');
  logVotes();
});
