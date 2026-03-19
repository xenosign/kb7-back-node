import express from 'express';

const router = express.Router();

const foodData = [
  { category: 'korean', food: '제육' },
  { category: 'korean', food: '돈까스' },
  { category: 'korean', food: '광어회' },
  { category: 'chinese', food: '탄탄면' },
  { category: 'chinese', food: '어향동고' },
  { category: 'chinese', food: '마파두부' },
  { category: 'japanese', food: '초밥' },
  { category: 'japanese', food: '라멘' },
  { category: 'japanese', food: '타코야끼' },
];

router.get('/food/all', (req, res) => {
  res.json(foodData);
});

router.get('/food/:category', (req, res) => {
  const category = (req.params.category || '').toLowerCase();
  const result = foodData.filter(
    (item) => item.category.toLowerCase() === category,
  );

  if (result.length === 0) {
    return res.status(404).send('잘못된 요청입니다.');
  }

  res.json(result);
});

router.get('/food/send', (req, res) => {
  res.json('데이터 수신 완료');
});

export { router as foodRouter };
