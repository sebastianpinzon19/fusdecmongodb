const mongoose = require('mongoose');  

const brigadeSchema = new mongoose.Schema({  
    idBrigade: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    brigadeName: {  
        type: String,  
        required: true // Nombre de la brigada, es un campo obligatorio  
    },  
    brigadeLocation: {  
        type: String,  
        required: false // Ubicación de la brigada, no es obligatorio  
    },  
    brigadeStatus: {  
        type: Boolean,  
        default: true // Estado de la brigada, por defecto es verdadero  
    },  
    idCommand: {  
        type: String, // Almacenando como cadena para referencia a la Command  
        required: true  
    },  
    command: {  
        type: mongoose.Schema.Types.ObjectId, // Asumiendo referencia al modelo Command  
        ref: 'Command' // Referencia al modelo Command  
    },  
    units: {  
        type: [mongoose.Schema.Types.ObjectId], // Array de unidades relacionadas  
        ref: 'Unit' // Asumiendo referencia al modelo Unit  
    }  
});  

module.exports = mongoose.model('Brigade', brigadeSchema);