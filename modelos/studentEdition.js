const mongoose = require('mongoose');  

const studentEditionSchema = new mongoose.Schema({  
    idStudent: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar al estudiante  
    },  
    idEdition: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar la edición  
    },  
    edition: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Edition  
        ref: 'Edition', // Referencia a la colección Edition  
        required: true // Campo obligatorio para establecer la relación con la edición  
    },  
    student: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Student  
        ref: 'Student', // Referencia a la colección Student  
        required: true // Campo obligatorio para establecer la relación con el estudiante  
    }  
});  

module.exports = mongoose.model('StudentEdition', studentEditionSchema);