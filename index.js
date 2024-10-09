const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors'); // Asegúrate de importar cors

const attendanceRoute = require('./routes/AttendanceRoute'); // Ruta de asistencia
const auditRoute = require('./routes/AuditRoute'); // Ruta de auditoría
const brigadeRoute = require('./routes/BrigadeRoute'); // Ruta de brigada
const certificateRoute = require('./routes/CertificateRoute'); // Ruta de certificado
const commandRoute = require('./routes/CommandRoute'); // Ruta de comando
const courseRoute = require('./routes/CourseRoute'); // Ruta de curso
const editionRoute = require('./routes/EditionRoute'); // Ruta de edición
const editionScheduleRoute = require('./routes/EditionScheduleRoute'); // Ruta de horario de edición
const foundationRoute = require('./routes/FoundationRoute'); // Ruta de fundación
const gradeRoute = require('./routes/GradeRoute'); // Ruta de grado
const nonAttendanceRoute = require('./routes/NonAttendanceRoute'); // Ruta de no asistencia
const reportRoute = require('./routes/ReportRoute'); // Ruta de reporte
const scheduleRoute = require('./routes/ScheduleRoute'); // Ruta de horario
const studentAttendanceRoute = require('./routes/StudentAttendanceRoute'); // Ruta de asistencia de estudiantes
const studentEditionRoute = require('./routes/StudentEditionRoute'); // Ruta de edición de estudiantes
const studentNonAttendanceRoute = require('./routes/StudentNonAttendanceRoute'); // Ruta de no asistencia de estudiantes
const studentRoute = require('./routes/StudentRoute'); // Ruta de estudiantes
const unitRoute = require('./routes/UnitRoute'); // Ruta de unidad

// Conexión a la base de datos mongodb
mongoose.connect('mongodb://localhost:27017/userscoursesdb')
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('No se pudo conectar con MongoDB..', err));

// middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar swagger-ui
const swaggerUi = require('swagger-ui-express'); // Importar swagger-ui
const swaggerSpec = require('./swagger/swagger.js'); // Asegúrate de tener un archivo swagger.json

// Cargar certificados SSL/TLS
const privateKey = fs.readFileSync('./ssl/privatekey.pem', 'utf8');
const certificate = fs.readFileSync('./ssl/certificate.pem', 'utf8');

// Credenciales para HTTPS
const credentials = { key: privateKey, cert: certificate };

// Crear servidor HTTPS
const httpsServer = https.createServer(credentials, app);

const corsOptions = {
    origin: '*', // Permite cualquier dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Descomentar si necesitas enviar credenciales
};

//configuracion de swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec.swaggerDocs));

// Aplicar las opciones de CORS
app.use(cors(corsOptions)); // Asegúrate de que esta línea esté antes de definir tus rutas

// Ejemplo de uso de path
const publicPath = path.join(__dirname, 'public'); // Define la ruta pública

app.use(express.static(publicPath)); // Servir archivos estáticos desde la ruta pública

// Aplicar las rutas de las APIs
app.use('/api/attendanceRoute', attendanceRoute);
app.use('/api/auditRoute', auditRoute);
app.use('/api/brigadeRoute', brigadeRoute);
app.use('/api/certificateRoute', certificateRoute);
app.use('/api/commandRoute', commandRoute);
app.use('/api/courseRoute', courseRoute);
app.use('/api/editionRoute', editionRoute);
app.use('/api/editionscheduleRoute', editionScheduleRoute);
app.use('/api/foundationRoute', foundationRoute);
app.use('/api/gradeRoute', gradeRoute);
app.use('/api/nonattendanceRoute', nonAttendanceRoute);
app.use('/api/scheduleRoute', scheduleRoute);
app.use('/api/studentattendanceRoute', studentAttendanceRoute);
app.use('/api/studenteditionRoute', studentEditionRoute);
app.use('/api/studentnonattendanceRoute', studentNonAttendanceRoute);
app.use('/api/studentRoute', studentRoute);
app.use('/api/unitRoute', unitRoute);

const port = process.env.PORT || 3000;
httpsServer.listen(port, () => {
    console.log(`Documentación disponible en https://localhost:${port}/api-docs`);
    console.log(`API REST HTTPS ejecutándose en el puerto ${port}...`);
});