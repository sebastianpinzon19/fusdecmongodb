import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrigadesController = () => {
    const [brigades, setBrigades] = useState([]);
    const [brigade, setBrigade] = useState(null);
    const [loading, setLoading] = useState(true);

    // Obtener todas las brigadas
    const fetchBrigades = async () => {
        const response = await axios.get('/api/brigades');
        setBrigades(response.data);
        setLoading(false);
    };

    // Obtener brigada por ID
    const fetchBrigade = async (id) => {
        const response = await axios.get(`/api/brigades/${id}`);
        setBrigade(response.data);
    };

    // Crear una nueva brigada
    const createBrigade = async (newBrigade) => {
        await axios.post('/api/brigades', newBrigade);
        fetchBrigades();
    };

    // Editar una brigada existente
    const editBrigade = async (id, updatedBrigade) => {
        await axios.put(`/api/brigades/${id}`, updatedBrigade);
        fetchBrigades();
    };

    // Eliminar una brigada
    const deleteBrigade = async (id) => {
        await axios.delete(`/api/brigades/${id}`);
        fetchBrigades();
    };

    useEffect(() => {
        fetchBrigades();
    }, []);

    return {
        brigades,
        brigade,
        loading,
        fetchBrigade,
        createBrigade,
        editBrigade,
        deleteBrigade,
    };
};

export default BrigadesController;