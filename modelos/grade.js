const mongoose = require('mongoose');  

const gradeSchema = new mongoose.Schema({  
    idGrade: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    idReport: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Obligatorio para relacionar con un reporte específico  
    },  
    approved: {  
        type: Boolean,  
        required: true // Campo obligatorio para indicar si la nota está aprobada  
    },  
    observationGrade: {  
        type: String, // Observaciones sobre la calificación, puede ser nulo  
        default: null // Valor por defecto puede ser nulo  
    },  
    report: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Report  
        ref: 'Report', // Referencia al modelo Report  
        required: true // Campo obligatorio para establecer la relación con el reporte  
    },  
    studentGrades: [{  
        type: mongoose.Schema.Types.ObjectId, // Array de referencias a StudentGrade  
        ref: 'StudentGrade' // Referencia al modelo StudentGrade  
    }]  
});  

module.exports = mongoose.model('Grade', gradeSchema);