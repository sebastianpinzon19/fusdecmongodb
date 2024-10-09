const mongoose = require('mongoose');  

const auditSchema = new mongoose.Schema({  
    idAudit: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    auditDate: {  
        type: Date, // Almacenando la fecha de la auditoría  
        required: true // Campo obligatorio  
    },  
    nameOfIssuerAudit: {  
        type: String,  
        required: true // Nombre del emisor de la auditoría, es un campo obligatorio  
    },  
    idCertificate: {  
        type: String, // Almacenando como cadena para referencia al modelo Certificate  
        required: true // Campo obligatorio  
    },  
    certificate: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Certificate  
        ref: 'Certificate', // Referencia al modelo Certificate  
        required: true // Obligatorio para asociar la auditoría con un certificado  
    }  
});  

module.exports = mongoose.model('Audit', auditSchema);