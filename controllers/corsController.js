import express from 'express';
import cors from 'cors';

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

export { corsRouter };
