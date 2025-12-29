
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import multer from 'multer';
import router from './routers/index.js';
import fs from 'fs'; // Se usa para crear directorios

// Inicialización de variables
const direccion = dirname(fileURLToPath(import.meta.url));
const app = express();

// Usamos un objeto en memoria para simular la base de datos de álbumes (si usas una base de datos, reemplázalo por tu lógica de base de datos).
let albums = {};

// Configuración de EJS
app.set('views', join(direccion, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(join(direccion, 'public')));
app.use(express.static(join(direccion, 'uploads')));
app.use(express.static(join(direccion, 'js')));
app.use(express.json()); // Permite manejar JSON en peticiones
app.get('/videos', (req, res) => { res.sendFile(join(direccion, 'public','videos'));});

app.get('/album26', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cumple mio'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cumple mio/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album26', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});

app.get('/album25', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'peru'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `peru/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album25', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album24', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cartegena'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cartegena/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album24', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});


app.get('/album23', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cumple amor'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cumple amor/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album23', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});


app.get('/album22', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'salidas varias'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `salidas varias/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album22', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album21', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'salida la ronda'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `salida la ronda/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album21', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album20', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'riobamba'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `riobamba/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album20', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album19', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'nuestra primera visita a la iglesia'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `nuestra primera visita a la iglesia/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album19', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album18', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'nuestra primera cita en quito'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `nuestra primera cita en quito/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album18', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album17', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'nuestro primer partido'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `nuestro primer partido/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album17', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album16', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'playa'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `playa/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album16', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album15', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'paseos'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `paseos/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album15', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album14', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'mitad del mundo'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `mitad del mundo/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album14', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album13', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'manualidades'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `manualidades/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album13', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album12', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'salidas con amigos'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `salidas con amigos/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album12', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album11', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'fotos que mando maggy'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `fotos que mando maggy/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album11', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album10', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'enfermitos'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `enfermitos/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album10', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album9', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'detalles'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `detalles/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album9', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album8', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'primera semana en el departamento'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `primera semana en el departamento/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album8', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album7', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cine'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cine/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album7', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album6', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cena romantica'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cena romantica/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album6', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album5', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cena de novios formales'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cena de novios formales/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album5', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album4', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'nuestra primera cena departamento'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `nuestra primera cena departamento/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album4', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});

app.get('/album3', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'cafeteria ommi'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `cafeteria ommi/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album3', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album2', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', 'fin de año juntos'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `fin de año juntos/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album2', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});
app.get('/album1', (req, res) => {
    try {
        const albumPath = join(direccion, 'uploads', '14_febrero'); // Ruta de las imágenes
        const images = fs.readdirSync(albumPath).filter(file => /\.(jpeg|png|gif)$/i.test(file)); // Filtramos imágenes

        // Generar las URLs de las imágenes
        const imageUrls = images.map(image => `14_febrero/${image}`);

        // Renderizamos la vista con las imágenes
        res.render('album1', { images: imageUrls });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar las imágenes');
    }
});




// Configuración de Multer para subir imágenes a una carpeta específica de cada álbum
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const albumName = req.params.albumName; // Nombre del álbum desde la URL
        const albumPath = join(direccion, 'uploads', albumName); // Ruta para el álbum específico
        
        // Si la carpeta del álbum no existe, se crea
        fs.mkdirSync(albumPath, { recursive: true });

        cb(null, albumPath); // Ruta de destino
    },
    filename: (req, file, cb) => {
        // Nombre único para cada archivo
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Ruta para manejar la subida de imágenes a un álbum
app.post('/upload/:albumName', upload.single('image'), (req, res) => {
    const albumName = req.params.albumName;

    if (!req.file) {
        return res.status(400).json({ error: 'No se subió ninguna imagen' });
    }

    // Guardamos la imagen en el álbum correspondiente
    const imageUrl = `/uploads/${albumName}/${req.file.filename}`;

    res.json({ message: `Imagen subida con éxito al álbum '${albumName}'`, url: imageUrl });
});

// Ruta para obtener los álbumes (simula la búsqueda en la base de datos)
router.get('/albums', (req, res) => {
    try {
        // Simulamos la obtención de los álbumes
        res.render('albums', { albums: albums });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al cargar los álbumes');
    }
});


// Rutas
app.use(router);

// Servidor en escucha
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
    console.log("💖 Amor");
});







/*
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import multer from 'multer';
import router from './routers/index.js';

const direccion = dirname(fileURLToPath(import.meta.url));
const app = express();

// Configuración de EJS
app.set('views', join(direccion, 'views'));
app.set('view engine', 'ejs');

// Middleware para archivos estáticos
app.use(express.static(join(direccion, 'public')));
app.use(express.static(join(direccion, 'js')));

// Configuración de Multer para subir imágenes a la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: join(direccion, 'uploads'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre único
    }
});

const upload = multer({ storage });

// Ruta para manejar la subida de imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No se subió ninguna imagen' });
    res.json({ url: `/uploads/${req.file.filename}` });
});

// Rutas
app.use(router);

// Servidor en escucha
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
    console.log("💖 Amor");
});


*/


/*import express from 'express'
import { dirname , join} from 'path' 
import {fileURLToPath  } from 'url'
import ejs from 'ejs'
import router from './routers/index.js'

const direccion= dirname(fileURLToPath(import.meta.url))
const app=express()
app.set('views', join (direccion,'views'))
app.set('view engine', 'ejs')
app.listen(3000)
app.use(router)
app.use(express.static(join(direccion,'public')))
app.use(express.static(join(direccion,'js')))


console.log ("puerto utilizadado",3000) //consola 
console.log("amor") //conla 


*/