const mongoose = require('mongoose');  

const studentNonAttendanceSchema = new mongoose.Schema({  
    idStudent: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar al estudiante  
    },  
    idNonAttendance: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar la no asistencia  
    },  
    student: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Student  
        ref: 'Student', // Referencia a la colección Student  
        required: true // Campo obligatorio para establecer la relación con el estudiante  
    },  
    nonAttendance: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo NonAttendance  
        ref: 'NonAttendance', // Referencia a la colección NonAttendance  
        required: true // Campo obligatorio para establecer la relación con la no asistencia  
    }  
});  

module.exports = mongoose.model('StudentNonAttendance', studentNonAttendanceSchema);