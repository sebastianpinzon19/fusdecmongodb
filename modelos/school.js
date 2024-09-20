const mongoose = require('mongoose');  

const schoolSchema = new mongoose.Schema({  
    idSchool: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    schoolName: {  
        type: String,  
        required: true // Nombre de la escuela, es un campo obligatorio  
    },  
    schoolEmail: {  
        type: String,  
        required: false, // Email de la escuela, no es obligatorio  
        match: /.+\@.+\..+/ // Expresión regular para validar formato de email  
    },  
    students: {  
        type: [mongoose.Schema.Types.ObjectId], // Array de estudiantes relacionados  
        ref: 'Student' // Asumiendo referencia al modelo Student  
    }  
});  

module.exports = mongoose.model('School', schoolSchema);