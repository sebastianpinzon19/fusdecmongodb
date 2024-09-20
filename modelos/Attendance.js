const mongoose = require('mongoose');  

const attendanceSchema = new mongoose.Schema({  
    idAttendance: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    attendanceDate: {  
        type: Date,  
        required: true // Fecha de asistencia, es un campo obligatorio  
    },  
    attendanceStatus: {  
        type: Boolean,  
        required: true // Estado de asistencia, es un campo obligatorio  
    },  
    nonAttendance: {  
        type: mongoose.Schema.Types.ObjectId, // Asumiendo referencia al modelo NonAttendance  
        ref: 'NonAttendance', // Referencia al modelo NonAttendance  
        required: false // No es obligatorio  
    },  
    studentAttendances: {  
        type: [mongoose.Schema.Types.ObjectId], // Array de asistencias de estudiantes relacionadas  
        ref: 'StudentAttendance' // Asumiendo referencia al modelo StudentAttendance  
    }  
});  

module.exports = mongoose.model('Attendance', attendanceSchema);