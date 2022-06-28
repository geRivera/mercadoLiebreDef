const express = require('express'); //invoca el metodo de express en node modules
const app = express();

const path = require('path'); //unifica las rutas entre los sistemas operativos
const publicPath = path.resolve(__dirname,'./public'); // resolve resuelve la ruta indicada

app.use(express.static(publicPath)); //permite el uso de archivos de una manera estática, le indica a express que es un recurso

app.listen(3000,()=> {
    console.log('Servidor vivo en puerto 3000'); //para levantar el servidor
});

app.get('/',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'./views/home.html'));//permite enviar archivo al navegador
});

app.get('/register',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'./views/register.html'));//permite enviar archivo al navegador
});

app.get('/login',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'./views/login.html'));//permite enviar archivo al navegador
});