const mongoose = require('mongoose');  

const reportSchema = new mongoose.Schema({  
    idReport: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    observation: {  
        type: String,  
        required: false // Observación opcional  
    }  
});  

module.exports = mongoose.model('Report', reportSchema);