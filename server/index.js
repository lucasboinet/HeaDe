const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('public'))
app.use(express.json({ extended: false }));
app.use(cors());
app.options('*', cors())

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));