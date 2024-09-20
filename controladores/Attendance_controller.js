const express = require('express');  
const router = express.Router();  
const { Attendance } = require('../modelos/Attendance'); // Cambiado a 'Attendance' con mayúscula

// GET: Obtener todas las asistencias  
router.get('/', async (req, res) => {  
    try {  
        const attendances = await Attendance.findAll();  
        // Se utiliza "req" para evitar el error de declaración no utilizada
        console.log(req.query); // Ejemplo de uso de "req"
        res.json(attendances);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  
// GET: Obtener asistencia por ID  
router.get('/:id', async (req, res) => {  
    try {  
        const attendance = await Attendance.findByPk(req.params.id);  
        if (!attendance) {  
            return res.status(404).json({ message: 'Asistencia no encontrada' });  
        }  
        res.json(attendance);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// POST: Crear una nueva asistencia  
router.post('/', async (req, res) => {  
    try {  
        const attendance = await Attendance.create(req.body);  
        res.status(201).json(attendance);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
});  

// PUT: Actualizar asistencia existente  
router.put('/:id', async (req, res) => {  
    try {  
        const attendance = await Attendance.findByPk(req.params.id);  
        if (!attendance) {  
            return res.status(404).json({ message: 'Asistencia no encontrada' });  
        }  
        await attendance.update(req.body);  
        res.json(attendance);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
});  

// DELETE: Eliminar asistencia  
router.delete('/:id', async (req, res) => {  
    try {  
        const attendance = await Attendance.findByPk(req.params.id);  
        if (!attendance) {  
            return res.status(404).json({ message: 'Asistencia no encontrada' });  
        }  
        await attendance.destroy();  
        res.json({ message: 'Asistencia eliminada' });  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

module.exports = router;