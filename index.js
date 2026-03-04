const express = require('express');
const app = express();
const PORT = 3000;

// 투표 결과 저장 (서버 내 변수)
const votes = {
  cat: 0,
  dog: 0,
};

// 터미널에 투표 결과 출력
function logVotes() {
  console.log('\n========== 투표 현황 ==========');
  console.log(`  cat: ${votes.cat}표`);
  console.log(`  dog: ${votes.dog}표`);
  console.log(`  총합: ${votes.cat + votes.dog}표`);
  console.log('==============================\n');
}

app.get('/vote', (req, res) => {
  const choice = req.query.choice?.toLowerCase();

  if (choice === 'cat') {
    votes.cat++;
    console.log(`[투표] cat +1`);
    logVotes();
    res.send(`cat 투표 완료! (현재: ${votes.cat}표)`);
  } else if (choice === 'dog') {
    votes.dog++;
    console.log(`[투표] dog +1`);
    logVotes();
    res.send(`dog 투표 완료! (현재: ${votes.dog}표)`);
  } else {
    res
      .status(400)
      .send('choice 쿼리에 cat 또는 dog를 전달해주세요. 예: /vote?choice=cat');
  }
});

app.get('/results', (req, res) => {
  res.json(votes);
});

app.listen(PORT, () => {
  console.log(`투표 서버 실행: http://localhost:${PORT}`);
  console.log('투표: GET /vote?choice=cat 또는 /vote?choice=dog');
  logVotes();
});
