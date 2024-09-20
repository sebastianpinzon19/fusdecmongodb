const mongoose = require('mongoose');  

const editionSchema = new mongoose.Schema({  
    idEdition: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    title: {  
        type: String,  
        required: true // Título de la edición, es un campo obligatorio  
    },  
    editionStartDate: {  
        type: Date, // Almacenando la fecha de inicio de la edición  
        required: true // Campo obligatorio  
    },  
    editionEndDate: {  
        type: Date, // Almacenando la fecha de finalización de la edición  
        required: true // Campo obligatorio  
    },  
    editionStatus: {  
        type: Boolean,  
        required: true // Estado de la edición (activa/inactiva), es un campo obligatorio  
    },  
    idCourse: {  
        type: String, // Almacenando como cadena para referencia al modelo Course  
        required: true // Campo obligatorio  
    },  
    course: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Course  
        ref: 'Course', // Referencia al modelo Course  
        required: true // Obligatorio para asociar la edición a un curso  
    },  
    editionSchedules: [{  
        type: mongoose.Schema.Types.ObjectId, // Array de referencias a EditionSchedule  
        ref: 'EditionSchedule' // Referencia al modelo EditionSchedule  
    }],  
    studentEditions: [{  
        type: mongoose.Schema.Types.ObjectId, // Array de referencias a StudentEdition  
        ref: 'StudentEdition' // Referencia al modelo StudentEdition  
    }]  
});  

module.exports = mongoose.model('Edition', editionSchema);