const mongoose = require('mongoose');  

const editionScheduleSchema = new mongoose.Schema({  
    idEdition: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Obligatorio para asociar con una edición específica  
    },  
    idSchedule: {  
        type: String, // Almacenando Guid como una cadena  
        required: true // Obligatorio para asociar con un horario específico  
    },  
    schedule: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Schedule  
        ref: 'Schedule', // Referencia al modelo Schedule  
        required: true // Obligatorio para establecer la relación con el horario  
    },  
    edition: {  
        type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Edition  
        ref: 'Edition', // Referencia al modelo Edition  
        required: true // Obligatorio para establecer la relación con la edición  
    }  
});  

module.exports = mongoose.model('EditionSchedule', editionScheduleSchema);