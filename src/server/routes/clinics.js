var express = require('express');
var router = express.Router();

let clinics = [
    {
        id: 1,
        name: 'درمانگاه گوش و حلق و بینی',
        specialties: ['متخصص گوش و حلق و بینی'],
        phone: '123456789'
    },
    {
        id: 2,
        name: 'درمانگاه چشم',
        specialties: ['متخصص چشم فلوشیب - شبکیه', 'متخصص چشم فلوشیب - قرنیه', 'متخصص چشم پزشکی -فوق تخصص چشم اطفال'],
        phone: '987654321'
    },
    {
        id: 3,
        name: 'درمانگاه داخلی',
        specialties: ['متخصص داخلی', 'متخصص داخلی - فوق تخصص خون و آنکولوژی', 'متخصص داخلی -فوق تخصص کلیه و فشار خون و آنکولوژی', 'متخصص داخلی -فوق تخصص گوارش و کبد'],
        phone: '012376540'
    },
    {
        id: 4,
        name: 'درمانگاه جراحی',
        specialties: ['جراحی عمومی', 'بیهوشی'],
        phone: '123678943'
    },
    {
        id: 5,
        name: 'درمانگاه زنان و زایمان',
        specialties: 'متخصص زنان و زایمان',
        phone: '111555666'
    }
]

router.get('/', function (req, res) {
    let names = [];
    clinics.forEach(clinic => names.push(clinic.name));
    res.send(names);
});
router.post('/clinic', (req, res) => {
    const name = req.body.name;
    const clinic = clinics.find(clc => clc.name === name);
    res.send(clinic);
});
module.exports = router;