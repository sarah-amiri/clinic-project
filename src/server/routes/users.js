var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

let users = [
    { firstname: 'سارا', lastname: 'امیری', id: '2285049889', password: '123456', gender: 'زن'}
];

router.get('/', (req, res) => {
    res.send('works!');
});

router.post('/register', (req, res) => {
    let id = +req.body.id;
    let user = users.filter(u => u.id == id);
    var token = jwt.sign({ userid: id }, 'login-to-appoinement', { expiresIn: '1h' });
    if (user.length) {
        res.status(200).send({ success: false, msg: 'User exists' });
    } else {
        users.push(req.body);
        res.status(200).send({ success: true, token: token });
    }
});
router.post('/login', (req, res) => {
    let id = +req.body.id;
    let pass = req.body.password;
    
    let user = users.filter(u => (u.id == id && u.password == pass));
    var token = jwt.sign({ userid: id }, 'login-to-appoinement', { expiresIn: '1m' });
    if (user.length) {
        res.status(200).send({ success: true, token: token });
    } else {
        res.status(200).send({ success: false, msg: 'Wrong id or password' });
    }
})

module.exports = router;