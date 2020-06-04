const config = require('../config/config');
const models = require('../models');

module.exports = {

  getCreate: function (req, res) {
    const hbsObject = {
      pageTitle: 'Create Page',
      isLoggedIn: req.cookies[config.cookie] !== undefined,
      email: req.cookies.user.email
    };

    return res.render('./tripps/create.hbs', hbsObject);
  },

  postCreate: function (req, res) {
    let { startingAndEndPoint, dataAndTime, carImage, seats, description } = req.body;
    const creator = req.user.id;
    let [ startingPoint, endPoint ] = startingAndEndPoint.split(' - ');
    let [ data, time ] = dataAndTime.split(' - ');
    seats = +seats;

    models.Tripps.create({ startingPoint, endPoint, data, time, seats, description, carImage, creator }).then((createdTripp) => {
      res.redirect('/');
    })
  },

  getDetails: function (req, res) {
    let id = req.params._id;

    models.Tripps.findById(id)
      .then((trip) => {
        const hbsObject = {
          pageTitle: 'Create Page',
          isLoggedIn: req.cookies[config.cookie] !== undefined,
          email: req.cookies.user.email,
          trip
        };

        res.render('./tripps/details.hbs', hbsObject);
      })
  },

  // postEdit: (req, res, next) => {
  //   const { courseId } = req.params;
  //   const { merchant, total, category, description, checkbox } = req.body;
  //   const isChecked = checkbox === 'on';

  //   models.Expense.findByIdAndUpdate(courseId, { merchant, total, category, description, checkbox }).then((updatedCourse) => {
  //     res.redirect(`/details/${courseId}`);
  //   });
  // },
  getDelete: function (req, res) {
    let id = req.params._id;
    
    models.Tripps.findByIdAndRemove(id)
      .then(() => {
        return res.redirect('/');
      })
  },
  // postDelete: function (req, res) {
  //   let id = req.params.id;
  //   deleteBook(id)
  //     .then(() => {
  //       return res.redirect('/');
  //     })
  // },
  // about: function (req, res) {
  //   const hbsObject = {
  //     pageTitle: 'Create Page',
  //     isLoggedIn: req.cookies[config.cookie] !== undefined,
  //     username: config.user.username
  //   };

  //   res.render('404.hbs', hbsObject);
  // },
  getProfile: function (req, res) {
    const hbsObject = {
      pageTitle: 'Create Page',
      isLoggedIn: req.cookies[config.cookie] !== undefined,
      email: req.cookies.user.email
    };

    res.render('./users/profile.hbs', hbsObject);
  }
};