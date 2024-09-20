const mongoose = require('mongoose');  

const studentSchema = new mongoose.Schema({  
    idStudent: {  
        type: String,  
        required: true,  
        unique: true  
    },  
    studentName: {  
        type: String,  
        required: true  
    },  
    studentLastName: {  
        type: String,  
        required: true  
    },  
    documentType: {  
        type: String,  
        required: true  
    },  
    documentNumber: {  
        type: String,  
        required: true  
    },  
    studentDateBirth: {  
        type: Date, // Using Date type for date of birth  
        required: true  
    },  
    studentGender: {  
        type: String,  
        required: true  
    },  
    idUnit: {  
        type: String, // Assuming Guid will be stored as a string  
        required: true  
    },  
    idSchool: {  
        type: String, // Assuming Guid will be stored as a string  
        required: true  
    },  
    studentStatus: {  
        type: Boolean,  
        default: true  
    },  
    studentEditions: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to other models  
        ref: 'StudentEdition' // Reference to StudentEdition model  
    },  
    studentGrades: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to other models  
        ref: 'StudentGrade' // Reference to StudentGrade model  
    },  
    studentNonAttendances: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to other models  
        ref: 'StudentNonAttendance' // Reference to StudentNonAttendance model  
    },  
    studentAttendances: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to other models  
        ref: 'StudentAttendance' // Reference to StudentAttendance model  
    },  
    certificates: {  
        type: [mongoose.Schema.Types.ObjectId], // Assuming references to other models  
        ref: 'Certificate' // Reference to Certificate model  
    }  
});  

module.exports = mongoose.model('Student', studentSchema);