const mongoose = require('mongoose');  

const unitSchema = new mongoose.Schema({  
    idUnit: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    unitName: {  
        type: String,  
        required: true // Nombre de la unidad, es un campo obligatorio  
    },  
    unitState: {  
        type: Boolean,  
        default: true // Estado de la unidad, por defecto es verdadero  
    },  
    unitLocation: {  
        type: String,  
        required: false // Ubicación de la unidad, no es obligatorio  
    },  
    idBrigade: {  
        type: String, // Almacenando como cadena para referencia a la Brigade  
        required: true  
    },  
    brigade: {  
        type: mongoose.Schema.Types.ObjectId, // Asumiendo referencia al modelo Brigade  
        ref: 'Brigade' // Referencia al modelo Brigade  
    },  
    students: {  
        type: [mongoose.Schema.Types.ObjectId], // Array de estudiantes relacionados  
        ref: 'Student' // Asumiendo referencia al modelo Student  
    }  
});  

module.exports = mongoose.model('Unit', unitSchema);