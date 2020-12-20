const mongoose = require('mongoose');

const marioSchema = new mongoose.Schema( {
    name: String,
    weight: Number
} );
const marioModel =  mongoose.model( 'mariochar', marioSchema );
module.exports = marioModel;
