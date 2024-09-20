const mongoose = require('mongoose');  

const studentAttendanceSchema = new mongoose.Schema({  
    idStudent: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar al estudiante  
    },  
    student: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Student  
        ref: 'Student', // Referencia al modelo Student  
        required: true // Campo obligatorio para establecer la relación con el estudiante  
    },  
    idAttendance: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Campo obligatorio para identificar la asistencia  
    },  
    attendance: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Attendance  
        ref: 'Attendance', // Referencia al modelo Attendance  
        required: true // Campo obligatorio para establecer la relación con la asistencia  
    }  
});  

module.exports = mongoose.model('StudentAttendance', studentAttendanceSchema);