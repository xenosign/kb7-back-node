import express from 'express';
import cors from 'cors';

const haonCypher = [
  '안녕 날 소개하지',
  '이름은 김하온 직업은 traveler',
  '취미는 tachi meditation 독서 영화 시청',
  '랩 해 터 털어 너 그리고 날 위해',
  '증오는 빼는 편이야 가사에서 질리는 맛이기에',
  '나는 텅 비어 있고 proly 셋 정도의 guest',
  '진리를 묻는다면 시간이 필요해 let me guess',
  '아니면 너의 것을 말해줘 내가 배울수있게',
  '난 추악함에서 오히려 더 배우는 편이야 man',
  '거울 보는 듯한 삶 mirror mirror on the wa wall',
  '관찰하는 셈이지 이 모든걸 wu wut',
  '뻐 뻔한걸 뻔하지않게 switch up',
  '뻔하지 않은 게 뻔하게 되는 중이니까 ya know',
  "I ain't trynna be something I just trynna be me",
  '그대들은 verse 채우기 위해서 화나 있지',
  '물결 거스르지 않고 즐겨 transurfing',
  '원한다면 곧장 내 손으로 들어올테니 um',
  '생이란 이 얼마나 허무하며 아름다운가',
  '왜 우린 존재 자체로 행복할 수 없는가',
  '우린 어디서 와 어디로 가는 중인가',
  '원해 모든 것을 하나로 아울러주는 답',
  '배우면 살아 비록 학교 뛰쳐나왔어도',
  '깨어 있기를 반복해도 머리 위로 흔들리는 pendulum',
  '난 꽤나 커다란 여정의 시작 앞에 서 있어',
  '따라와줘 원한다면 나 외로운건 싫어서',
];

const corsRouter = express.Router();

corsRouter.get('/cors/on', cors(), (req, res) => {
  res.json({
    status: 'CORS ON',
    message: 'CORS 서버 설정이 되어있는 END POINT 입니다!',
  });
});

corsRouter.get('/cors/off', (req, res) => {
  res.json({
    status: 'CORS OFF',
    message:
      'CORS 서버 설정이 되어있지 않은 END POINT 입니다! 서버는 응답을 보냈지만, 브라우저가 차단!!',
  });
});

corsRouter.get('/cors/ex', (req, res) => {
  res.status(200).json(haonCypher);
});

export { corsRouter };
