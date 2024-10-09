const mongoose = require('mongoose');  

const commandSchema = new mongoose.Schema({  
    idCommand: {  
        type: String, // Storing Guid as a string  
        required: true,  
        unique: true  
    },  
    commandName: {  
        type: String,  
        required: true  
    },  
    commandStatus: {  
        type: Boolean,  
        default: true  
    },  
    ubicacionComando: {  
        type: String,  
        required: false  
    },  
    idFundation: {  
        type: String, // Storing as string for reference to the Fundation  
        required: true  
    },  
    brigades: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to the Brigade model  
        ref: 'Brigade'  
    }  
});  

module.exports = mongoose.model('Command', commandSchema);