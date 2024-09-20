const mongoose = require('mongoose');  

const fundationSchema = new mongoose.Schema({  
    idFundation: {  
        type: String, // Storing Guid as a string  
        required: true,  
        unique: true  
    },  
    fundationName: {  
        type: String,  
        required: true  
    },  
    commands: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to the Command model  
        ref: 'Command' // Reference to Command model  
    },  
    courses: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to the Course model  
        ref: 'Course' // Reference to Course model  
    }  
});  

module.exports = mongoose.model('Fundation', fundationSchema);