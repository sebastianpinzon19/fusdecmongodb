import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificatesController = () => {
    const [certificates, setCertificates] = useState([]);
    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);

    // Obtener todos los certificados
    const fetchCertificates = async () => {
        const response = await axios.get('/api/certificates');
        setCertificates(response.data);
        setLoading(false);
    };

    // Obtener un certificado por ID
    const fetchCertificate = async (id) => {
        const response = await axios.get(`/api/certificates/${id}`);
        setCertificate(response.data);
    };

    // Crear un nuevo certificado
    const createCertificate = async (newCertificate) => {
        await axios.post('/api/certificates', newCertificate);
        fetchCertificates();
    };

    // Editar un certificado existente
    const editCertificate = async (id, updatedCertificate) => {
        await axios.put(`/api/certificates/${id}`, updatedCertificate);
        fetchCertificates();
    };

    // Eliminar un certificado
    const deleteCertificate = async (id) => {
        await axios.delete(`/api/certificates/${id}`);
        fetchCertificates();
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    return {
        certificates,
        certificate,
        loading,
        fetchCertificate,
        createCertificate,
        editCertificate,
        deleteCertificate,
    };
};

export default CertificatesController;