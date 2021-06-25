const express = require("express")
const app = express()
var cowsay = require("cowsay")
const PORT = 8081

app.get('/', function(req, res) {
    res.end(
        cowsay.say({
            text: "Información de Libros",
            e: 'rYa',
            T: 'L|',
            r: true,

        }),
    )
});

// Get route
app.get('/libros', (req, res) => {
    res.json([{
            text: "CAZADORES DE SOMBRAS 1",
            author: "CLARE,CASSANDRA",
            categoria: "Ficción",
            publicacion: "01-11-2016"
        },
        {
            text: "ORGULLO Y PREJUICIO",
            author: "AUSTEN,JANE",
            categoria: "Novela",
            publicacion: "15-08-2014"
        },
        {
            text: "MARFIL",
            author: "MERCEDES,RON",
            categoria: "Ficción adulto joven",
            publicacion: "23-05-2019"
        }
    ])
})




app.listen(PORT, () => {
    console.log(`El servidor está inicializado en el puerto ${PORT}`)
});