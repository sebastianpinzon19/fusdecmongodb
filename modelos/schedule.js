const mongoose = require('mongoose');  

const scheduleSchema = new mongoose.Schema({  
    idSchedule: {  
        type: String, // Almacenando Guid como una cadena  
        required: true,  
        unique: true  
    },  
    scheduleTitle: {  
        type: String, // Título del horario  
        required: true // Campo obligatorio  
    },  
    scheduleStartDate: {  
        type: Date, // Fecha de inicio del horario  
        required: true // Campo obligatorio  
    },  
    scheduleEndDate: {  
        type: Date, // Fecha de finalización del horario  
        required: true // Campo obligatorio  
    },  
    scheduleStatus: {  
        type: Boolean, // Estado del horario (activo/inactivo)  
        required: true // Campo obligatorio  
    },  
    studentSchedules: [{  
        type: mongoose.Schema.Types.ObjectId, // Array de referencias a EditionSchedule  
        ref: 'EditionSchedule' // Referencia al modelo EditionSchedule  
    }]  
});  

module.exports = mongoose.model('Schedule', scheduleSchema);