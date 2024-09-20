const mongoose = require('mongoose');  

const courseSchema = new mongoose.Schema({  
    idCourse: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    courseName: {  
        type: String,  
        required: true  
    },  
    courseDescription: {  
        type: String,  
        required: false  
    },  
    courseHourlyIntensity: {  
        type: String,  
        required: false  
    },  
    courseEstatus: {  
        type: Boolean,  
        default: true  
    },  
    idFundation: {  
        type: String, // Almacenando como cadena para referencia a la Fundación  
        required: true  
    },  
    editions: {  
        type: [mongoose.Schema.Types.ObjectId], // Asumiendo referencias al modelo de Edición  
        ref: 'Edition'  
    },  
    certificates: {  
        type: [mongoose.Schema.Types.ObjectId], // Asumiendo referencias al modelo de Certificado  
        ref: 'Certificate'  
    }  
});  

module.exports = mongoose.model('Course', courseSchema);