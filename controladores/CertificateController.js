const CertificateLogic = require('../logic/CertificateLogic'); // Importa la lógica de certificado

// Controlador para crear un certificado
async function crearCertificado(req, res) {
    try {
        // Llama a la lógica para crear un certificado
        const certificado = await CertificateLogic.crearCertificado(req.body);
        res.status(201).json(certificado); // Devuelve el certificado creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para actualizar un certificado
async function actualizarCertificado(req, res) {
    try {
        // Llama a la lógica para actualizar el certificado
        const certificado = await CertificateLogic.actualizarCertificado(req.params.id, req.body);
        res.json(certificado); // Devuelve el certificado actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para listar todos los certificados
async function listarCertificados(req, res) {
    try {
        // Llama a la lógica para listar certificados
        const certificados = await CertificateLogic.listarCertificados();
        res.json(certificados); // Devuelve la lista de certificados
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para buscar un certificado por ID
async function buscarCertificadoPorId(req, res) {
    try {
        // Llama a la lógica para buscar el certificado por ID
        const certificado = await CertificateLogic.buscarCertificadoPorId(req.params.id);
        res.json(certificado); // Devuelve el certificado encontrado
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

// Controlador para eliminar un certificado
async function eliminarCertificado(req, res) {
    try {
        // Llama a la lógica para eliminar el certificado
        const certificado = await CertificateLogic.eliminarCertificado(req.params.id);
        res.json({ message: 'Certificado eliminado', certificado }); // Confirma la eliminación
    } catch (error) {
        res.status(404).json({ message: error.message }); // Manejo de errores
    }
}

module.exports = {
    crearCertificado,
    actualizarCertificado,
    listarCertificados,
    buscarCertificadoPorId,
    eliminarCertificado
};