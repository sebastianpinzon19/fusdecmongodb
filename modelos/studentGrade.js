const mongoose = require('mongoose');  

const studentGradeSchema = new mongoose.Schema({  
    idStudent: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar al estudiante  
    },  
    idGrade: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar la calificación  
    },  
    grade: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Grade  
        ref: 'Grade', // Referencia a la colección Grade  
        required: true // Campo obligatorio para establecer la relación con la calificación  
    },  
    student: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Student  
        ref: 'Student', // Referencia a la colección Student  
        required: true // Campo obligatorio para establecer la relación con el estudiante  
    }  
});  

module.exports = mongoose.model('StudentGrade', studentGradeSchema);