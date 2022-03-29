const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//conectando com o banco
const conn = require('./db/conn')

//rotas
const productRoutes = require('./routes/productsRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.use("/products", productRoutes)


app.listen(3000)