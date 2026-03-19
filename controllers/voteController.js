import express from 'express';

const router = express.Router();

// 투표 결과 저장 (서버 내 변수)
const votes = {
  cat: 0,
  dog: 0,
};

// 투표한 사람 이름 배열
const voters = [];

function logVotes() {
  console.log('\n========== 투표 현황 ==========');
  console.log(`  cat: ${votes.cat}표`);
  console.log(`  dog: ${votes.dog}표`);
  console.log(`  총합: ${votes.cat + votes.dog}표`);
  console.log('  투표자:', voters.length ? voters.join(', ') : '(없음)');
  console.log('==============================\n');
}

router.get('/vote', (req, res) => {
  // 허용된 파라미터(name, choice) 외 다른 키가 있으면 거부
  const allowedKeys = ['name', 'choice'];
  const hasInvalidParam = Object.keys(req.query).some(
    (key) => !allowedKeys.includes(key)
  );
  if (hasInvalidParam) {
    return res.status(400).send('잘못된 요청입니다.');
  }

  const choice = req.query.choice?.toLowerCase();
  const name = (req.query.name || '').trim();

  // choice는 dog 또는 cat 만 허용
  if (choice !== 'cat' && choice !== 'dog') {
    return res.status(400).send('잘못된 요청입니다.');
  }

  if (choice === 'cat') {
    votes.cat++;
    if (name) voters.push(name);
    console.log(`[투표] cat +1${name ? ` (${name})` : ''}`);
    logVotes();
    return res.send(`cat 투표 완료! (현재: ${votes.cat}표)`);
  }

  // choice === 'dog'
  votes.dog++;
  if (name) voters.push(name);
  console.log(`[투표] dog +1${name ? ` (${name})` : ''}`);
  logVotes();
  return res.send(`dog 투표 완료! (현재: ${votes.dog}표)`);
});

router.get('/results', (req, res) => {
  res.json(votes);
});

export { router as voteRouter, logVotes };

