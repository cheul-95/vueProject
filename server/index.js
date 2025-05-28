const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projects');

const app = express();
const port = 3001;

app.use(cors());
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
