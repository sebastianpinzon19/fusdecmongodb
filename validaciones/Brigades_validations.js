const express = require('express');  
const router = express.Router();  
const { Brigade } = require('../modelos/brigade'); // Asegúrate de que el modelo esté definido

// GET: Obtener todas las brigadas  
router.get('/', async (req, res) => {  
    try {  
        const brigades = await Brigade.find().populate('command');  
        // Se utiliza "req" para evitar el error de declaración no utilizada
        console.log(req.query); // Ejemplo de uso de "req"
        res.json(brigades);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// GET: Obtener brigada por ID  
router.get('/:id', async (req, res) => {  
    try {  
        const brigade = await Brigade.findById(req.params.id).populate('command');  
        if (!brigade) {  
            return res.status(404).json({ message: 'Brigada no encontrada' });  
        }  
        res.json(brigade);  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

// POST: Crear una nueva brigada  
router.post('/', async (req, res) => {  
    try {  
        const brigade = new Brigade({  
            ...req.body,  
            idBrigade: new mongoose.Types.ObjectId() // Generar un nuevo ID
        });  
        await brigade.save();  
        res.status(201).json(brigade);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
});  

// PUT: Actualizar brigada existente  
router.put('/:id', async (req, res) => {  
    try {  
        const brigade = await Brigade.findByIdAndUpdate(req.params.id, req.body, { new: true });  
        if (!brigade) {  
            return res.status(404).json({ message: 'Brigada no encontrada' });  
        }  
        res.json(brigade);  
    } catch (error) {  
        res.status(400).json({ message: error.message });  
    }  
});  

// DELETE: Eliminar brigada  
router.delete('/:id', async (req, res) => {  
    try {  
        const brigade = await Brigade.findByIdAndDelete(req.params.id);  
        if (!brigade) {  
            return res.status(404).json({ message: 'Brigada no encontrada' });  
        }  
        res.json({ message: 'Brigada eliminada' });  
    } catch (error) {  
        res.status(500).json({ message: error.message });  
    }  
});  

module.exports = router;
