const express = require('express');
const app = express();
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const path = require('path')

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(require('./key/admin.json')),
  databaseURL: "https://porn-roll-default-rtdb.firebaseio.com"
});

const db = getFirestore();

let rank

app.get("/", async (req, res)=> {
    try{
        const videoRef = db.collection("musicas")
        const response = await videoRef.orderBy("Qtd", "desc").get()
        let responseArr = []
        response.forEach(doc => {
            responseArr.push({...doc.data(), id: doc.id})
        })
        responseArr.sort(function(a, b) {
            return a - b;
          });
        console.log(responseArr)
        res.render('index', {data: responseArr})

        rank = responseArr
    }catch(err){
        res.send(err)
    }
})

app.get("/update/:id", async (req, res)=> {
    try{
        db.collection("musicas").doc(req.params.id).update({Qtd: admin.firestore.FieldValue.increment(1)});
        res.render('update')
    }catch(err){
        res.send(err)
        
    }
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('updated', () => {
        io.emit("updateTable", {data: rank})
        console.log('updated');
      });
});

server.listen(process.env.PORT || 5000, () => {console.log("Express server listening on port 5000")});