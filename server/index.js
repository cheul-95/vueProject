const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 기존 API 라우트는 유지
const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

// Vue 빌드 결과물을 정적 파일로 제공
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// SPA 라우팅 처리 (Vue 라우터가 처리하도록)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
