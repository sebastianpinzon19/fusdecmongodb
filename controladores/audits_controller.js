const express = require('express');  
const router = express.Router();  
const { Audit } = require('../modelos/Audit'); // Asegúrate de que el modelo esté definido

// GET: Obtener todas las auditorías  
router.get('/', async (req, res) => {  
    try {  
        const audits = await Audit.findAll();  
        res.json(audits);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// GET: Obtener auditoría por ID  
router.get('/:id', async (req, res) => {  
    try {  
        const audit = await Audit.findByPk(req.params.id);  
        if (!audit) {  
            return res.status(404).json({ message: 'Auditoría no encontrada' });  
        }  
        res.json(audit);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// POST: Crear una nueva auditoría  
router.post('/', async (req, res) => {  
    try {  
        const audit = await Audit.create({  
            ...req.body,  
            IdAudit: uuidv4() // Generar un nuevo ID
        });  
        res.status(201).json(audit);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
});  

// PUT: Actualizar auditoría existente  
router.put('/:id', async (req, res) => {  
    try {  
        const audit = await Audit.findByPk(req.params.id);  
        if (!audit) {  
            return res.status(404).json({ message: 'Auditoría no encontrada' });  
        }  
        await audit.update(req.body);  
        res.json(audit);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
});  

// DELETE: Eliminar auditoría  
router.delete('/:id', async (req, res) => {  
    try {  
        const audit = await Audit.findByPk(req.params.id);  
        if (!audit) {  
            return res.status(404).json({ message: 'Auditoría no encontrada' });  
        }  
        await audit.destroy();  
        res.json({ message: 'Auditoría eliminada' });  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

module.exports = router;
