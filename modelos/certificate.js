const mongoose = require('mongoose');  

const certificateSchema = new mongoose.Schema({  
    idCertificate: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    verificationCode: {  
        type: String,  
        required: true // Código de verificación, es un campo obligatorio  
    },  
    nameOfIssuerCert: {  
        type: String,  
        required: true // Nombre del emisor del certificado, es un campo obligatorio  
    },  
    certificateStatus: {  
        type: Boolean,  
        required: true // Estado del certificado, es un campo obligatorio  
    },  
    idStudent: {  
        type: String, // Almacenando como cadena para referencia al modelo Student  
        required: true // Campo obligatorio  
    },  
    idCourse: {  
        type: String, // Almacenando como cadena para referencia al modelo Course  
        required: true // Campo obligatorio  
    },  
    audit: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Audit  
        ref: 'Audit', // Referencia al modelo Audit  
        required: false // Opcional, para asociar la auditoría si existe  
    },  
    student: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Student  
        ref: 'Student', // Referencia al modelo Student  
        required: true // Obligatorio para asociar el certificado a un estudiante  
    },  
    course: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Course  
        ref: 'Course', // Referencia al modelo Course  
        required: true // Obligatorio para asociar el certificado a un curso  
    }  
});  

module.exports = mongoose.model('Certificate', certificateSchema);