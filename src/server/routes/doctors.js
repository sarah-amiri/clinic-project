var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

let doctors = [
    {
        id: 1,
        fname: 'امیر', lname: 'امینیان',
        specialty: 'متخصص ارتوپدی',
        attendance: { morning: [], afternoon: [2, 3] },
        description: 'متخصص جراحی استخوان مفاصل و ستون فقرات-نحوه ی پذیرش بیمار : بیماران ارتوپدی'
    },
    {
        id: 2,
        fname: 'وحید', lname: 'زنگوری',
        specialty: 'جراحی عمومی',
        attendance: { morning: [], afternoon: [2] },
        description: 'متخصص جراحی عمومی فلوشیپ جراحی سرطان-نحوه ی پذیرش بیمار : سرطان سینه (برست )- و معده- و سنگ صفرا'
    },
    {
        id: 3,
        fname: 'مریم', lname: 'شفیعی',
        specialty: 'متخصص داخلی -فوق تخصص کلیه و فشار خون و آنکولوژی',
        attendance: { morning: [], afternoon: [4] },
        description: 'متخصص داخلی فوق تخصص کلیه –فشارخون-دیالیز-پیوند-نحوه ی پذیرش بیمار :بیمارانی با مشکل دفع پروتئین- فشار خون -بیماران پیوندی،دیالیزی-'
    },
    {
        id: 4,
        fname: 'محمدرضا', lname: 'روان بد',
        specialty: 'متخصص داخلی - فوق تخصص خون و آنکولوژی',
        attendance: { morning: [2], afternoon: [] },
        description: ''
    }
    
];
let appointments = [
    {
        doctorId: 3,
        morning: [],
        afternoon: [
            [], [], [], [], [
                { '3': { taken: false, userId: 0 } },
                { '3/15': { taken: true, userId: 0 } },
                { '3/30': { taken: false, userId: 0 } },
                { '3/45': { taken: true, userId: 2285049889 } },
                { '4': { taken: false, userId: 0 } },
                { '4/15': { taken: false, userId: 0 } },
                { '4/30': { taken: false, userId: 0 } },
                { '4/45': { taken: true, userId: 2285049889 } },
                { '5': { taken: false, userId: 0 } },
                { '5/15': { taken: false, userId: 0 } },
                { '5/30': { taken: false, userId: 0 } },
                { '5/45': { taken: false, userId: 0 } },
                { '6': { taken: false, userId: 0 } },
                { '6/15': { taken: false, userId: 0 } },
                { '6/30': { taken: false, userId: 0 } },
                { '6/45': { taken: true, userId: 0 } },
                { '7': { taken: false, userId: 0 } },
                { '7/15': { taken: true, userId: 0 } },
                { '7/30': { taken: true, userId: 0 } },
                { '7/45': { taken: true, userId: 0 } },
            ],
            [], [], []
        ]
    }
]

router.get('/', function (req, res) {
    res.send(doctors);
});
router.post('/id', (req, res) => {
    const id = +req.body.id;
    const doctor = doctors.find(doc => doc.id === id);
    res.send(doctor);
});
router.post('/specialty', (req, res) => {
    const sp = req.body.specialty;
    const doctorSp = doctors.filter(doc => {
        if (doc.specialty === sp) {
            return { id: doc.id, fname: doc.fname, lname: doc.lname };
        }
    });
    res.send(doctorSp);
})

module.exports = router;