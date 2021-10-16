const express = require('express')
const app = express();
app.use(express.json({extended: false}))
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port`))