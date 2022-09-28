const mongoose = require('mongoose');


const resultSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    student: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Student'

    },
    // include the array of ids of all comments in this post schema itself
    interview: 
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Interview'
        }
    
},{
    timestamps: true
});

const Result = mongoose.model('Result', resultSchema);
module.exports = Result