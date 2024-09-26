const Certificate = require('../modelos/certificate'); // Importa el modelo de certificado

// Función asíncrona para crear un certificado
async function crearCertificado(body) {
    // Verificar si ya existe un certificado con el mismo ID
    const certificadoExistente = await Certificate.findOne({ idCertificate: body.idCertificate });
    if (certificadoExistente) {
        throw new Error('El certificado con este ID ya existe');
    }
    // Crear una nueva instancia de certificado
    let certificado = new Certificate({
        idCertificate: body.idCertificate,
        verificationCode: body.verificationCode,
        nameOfIssuerCert: body.nameOfIssuerCert,
        certificateStatus: body.certificateStatus,
        idStudent: body.idStudent,
        idCourse: body.idCourse,
        audit: body.audit,
        student: body.student,
        course: body.course
    });
    // Guardar el certificado en la base de datos
    return await certificado.save();
}

// Función asíncrona para actualizar un certificado
async function actualizarCertificado(id, body) {
    // Actualizar el certificado por ID
    let certificado = await Certificate.findByIdAndUpdate(id, {
        $set: {
            verificationCode: body.verificationCode,
            nameOfIssuerCert: body.nameOfIssuerCert,
            certificateStatus: body.certificateStatus,
            idStudent: body.idStudent,
            idCourse: body.idCourse,
            audit: body.audit,
            student: body.student,
            course: body.course
        }
    }, { new: true }); // Devuelve la nueva versión del documento
    return certificado;
}

// Función asíncrona para listar todos los certificados
async function listarCertificados() {
    // Obtener todos los certificados de la base de datos
    let certificados = await Certificate.find();
    return certificados;
}

// Función asíncrona para buscar un certificado por ID
async function buscarCertificadoPorId(id) {
    try {
        // Buscar el certificado por ID
        const certificado = await Certificate.findById(id);
        if (!certificado) {
            throw new Error(`Certificado con ID ${id} no encontrado`);
        }
        return certificado;
    } catch (err) {
        console.error(`Error al buscar el certificado por ID: ${err.message}`);
        throw err;
    }
}

// Función asíncrona para eliminar un certificado
async function eliminarCertificado(id) {
    // Eliminar el certificado por ID
    const certificado = await Certificate.findByIdAndDelete(id);
    if (!certificado) {
        throw new Error(`Certificado con ID ${id} no encontrado`);
    }
    return certificado;
}

module.exports = {
    crearCertificado,
    actualizarCertificado,
    listarCertificados,
    buscarCertificadoPorId,
    eliminarCertificado
};