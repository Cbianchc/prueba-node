const express = require('express');
//despues de instalar express llamos a la libreria
const app = express();
//constante app usa express

const port = process.env.port || 3000;
//esto va a ser dinamico, el puerto lo da el hosting

app.set('view engine', 'ejs');
//linea para el motor del plantillas pug o ejs
app.set('views', __dirname + '/views');
//esto le dice donde van a estar las plantillas 


app.use(express.static(__dirname + "/public"));
//esto es un Middleware
//esta aca para que se lea antes del router
//ruta estatica donde va a estar en css y todo


//configuracion de Router / rutas
app.get('/', (req, res) => {
    res.render("index", {titulo: "Respuesta titulo dinamico v2"})
}) 
//ya no es send - ahora es render
//el titulo puede venir de una base de datos
//esto que dice aca, va a la carpeta ejs al archivo index
//alla se puede pintar como variable 

app.get('/servicios', (req, res) => { 
    res.render("servicios", {tituloServicios: 'Mensaje dimanico desde servicios v3!'})
}) 

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo4: "404",
        descripcion: "Titulo de la dedscripcion"
    })
})


app.listen(port, () => {
    console.log('servidor escuchando desde el puerto', port)
}) 


//esto estaba en el pack.json
//"test": "echo \"Error: no test specified\" && exit 1"