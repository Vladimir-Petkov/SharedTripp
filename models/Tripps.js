const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const trippsShema = new mongoose.Schema({

    startingPoint: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    endPoint: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    data: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    time: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    seats: {
        type: mongoose.Schema.Types.Number,
        required: true
    },

    description: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    carImage: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    creator: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = new mongoose.model('Tripps', trippsShema);