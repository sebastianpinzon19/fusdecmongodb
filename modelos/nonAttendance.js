const mongoose = require('mongoose');  

const nonAttendanceSchema = new mongoose.Schema({  
    idNonAttendance: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    idAttendance: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Obligatorio para relacionar con una asistencia específica  
    },  
    idReport: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Obligatorio para relacionar con un reporte específico  
    },  
    attendance: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Attendance  
        ref: 'Attendance', // Referencia al modelo Attendance  
        required: true // Campo obligatorio para establecer la relación con la asistencia  
    },  
    report: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Report  
        ref: 'Report', // Referencia al modelo Report  
        required: true // Campo obligatorio para establecer la relación con el reporte  
    },  
    studentNonAttendances: [{  
        type: mongoose.Schema.Types.ObjectId, // Array de referencias a StudentNonAttendance  
        ref: 'StudentNonAttendance' // Referencia al modelo StudentNonAttendance  
    }]  
});  

module.exports = mongoose.model('NonAttendance', nonAttendanceSchema);