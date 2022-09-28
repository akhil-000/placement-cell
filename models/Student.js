const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    studentid: {
        type: String,
        required: true
    },

    studentname: {
        type: String,
        required: true
    },

    studentstatus: {
        type: String,
        required: true
    },

  
    batch: {
        type: Number,
        required: true
    },

    DSA: {
        type: Number,
        required: true
    },

    WebD: {
        type: Number,
        required: true
    },

    React: {
        type: Number,
        required: true
    },



    // include the array of ids of all comments in this post schema itself
    interviews: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Interview'
        }
    ]
},{
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;