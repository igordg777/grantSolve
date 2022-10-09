const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());

// app.get('/', function (req, res) {
//     console.log('Пришёл запрос с фронта');
//     res.send('express работает');
// })
app.get('/sendtg', function (req, res) {
    console.log("В этом месте будет тг-бот")
    res.send({ result: 'Сообщение в тг успешно отправленно' })
})

app.listen(5000, console.log('Сервер успешно запущен'));


