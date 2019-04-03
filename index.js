const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

d = new Date();
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/me', (req, res) => res.send('Play soccer this week.'))
  .post('/you',(req,res) => res.send(`${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`))
  .post('/sun',(req,res) => res.send(`${d.toLocaleDateString()}`))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
