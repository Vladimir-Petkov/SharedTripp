const config = require('../config/config');
const models = require('../models');

module.exports = {
    startIndex: function (req, res) {
        models.Tripps.find().then((trips) => {
            const hbsObject = {
                pageTitle: 'Home Page',
                isLoggedIn: req.cookies[config.cookie] !== undefined,
                email: req.cookies.user.email,
                trips
            };
            // console.log(hbsObject);

            res.render('home.hbs', hbsObject);
        })
    },
};