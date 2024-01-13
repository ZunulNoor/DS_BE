const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 2500;
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["POST", "DELETE", "PUT", "GET"]
}));

app.use('/api', require('./API/USER/router'));
app.use('/api', require('./API/ProjectFile/router'))
app.use('/api', require('./API/ProjectGroup/router'))
app.use('/api', require('./API/GroupHead/router'))
app.use('/api', require('./API/SubHead/router'))
app.use('/api', require('./API/ChartOFAcc/router'))
app.use('/api', require('./API/Voucher/router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})