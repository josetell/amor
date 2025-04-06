/*import {Router} from 'express'
 const router =Router()

 router.get('/', (req, res) => res.render('index.ejs'))
 router.get('/galeria', (req, res) => res.render('galeria.ejs'))

export default router*/
import { Router } from 'express';
const router = Router();

// Ruta para mostrar la página principal
router.get('/', (req, res) => res.render('index.ejs'));
router.get('/galeria', (req, res) => res.render('galeria.ejs'));

router.get('/album1', (req, res) => res.render('album1.ejs'));
router.get('/album2', (req, res) => res.render('album2.ejs'));
router.get('/album3', (req, res) => res.render('album3.ejs'));
router.get('/album4', (req, res) => res.render('album4.ejs'));
router.get('/album5', (req, res) => res.render('album5.ejs'));
router.get('/album6', (req, res) => res.render('album6.ejs'));
router.get('/album7', (req, res) => res.render('album7.ejs'));
router.get('/album8', (req, res) => res.render('album8.ejs'));
router.get('/album9', (req, res) => res.render('album9.ejs'));
router.get('/album10', (req, res) => res.render('album10.ejs'));
router.get('/album11', (req, res) => res.render('album11.ejs'));
router.get('/album12', (req, res) => res.render('album12.ejs'));
router.get('/album13', (req, res) => res.render('album13.ejs'));
router.get('/album14', (req, res) => res.render('album14.ejs'));
router.get('/album15', (req, res) => res.render('album15.ejs'));
router.get('/album16', (req, res) => res.render('album16.ejs'));
router.get('/album17', (req, res) => res.render('album17.ejs'));
router.get('/album18', (req, res) => res.render('album18.ejs'));
router.get('/album19', (req, res) => res.render('album19.ejs'));
router.get('/album20', (req, res) => res.render('album20.ejs'));
router.get('/album21', (req, res) => res.render('album21.ejs'));
router.get('/album22', (req, res) => res.render('album22.ejs'));


router.get('/elec_album_1', (req, res) => res.render('elec_album_1.ejs'));
router.get('/elec_album_2', (req, res) => res.render('elec_album_2.ejs'));
router.get('/elec_album_3', (req, res) => res.render('elec_album_3.ejs'));
router.get('/elec_album_4', (req, res) => res.render('elec_album_4.ejs'));
router.get('/elec_album_5', (req, res) => res.render('elec_album_5.ejs'));
router.get('/elec_album_6', (req, res) => res.render('elec_album_6.ejs'));
router.get('/elec_album_7', (req, res) => res.render('elec_album_7.ejs'));
router.get('/elec_album_8', (req, res) => res.render('elec_album_8.ejs'));
router.get('/elec_album_9', (req, res) => res.render('elec_album_9.ejs'));
router.get('/elec_album_10', (req, res) => res.render('elec_album_10.ejs'));
router.get('/elec_album_11', (req, res) => res.render('elec_album_11.ejs'));
router.get('/elec_album_12', (req, res) => res.render('elec_album_12.ejs'));
router.get('/elec_album_13', (req, res) => res.render('elec_album_13.ejs'));
router.get('/elec_album_14', (req, res) => res.render('elec_album_14.ejs'));
router.get('/elec_album_15', (req, res) => res.render('elec_album_15.ejs'));
router.get('/elec_album_16', (req, res) => res.render('elec_album_16.ejs'));
router.get('/elec_album_17', (req, res) => res.render('elec_album_17.ejs'));
router.get('/elec_album_18', (req, res) => res.render('elec_album_18.ejs'));
router.get('/elec_album_19', (req, res) => res.render('elec_album_19.ejs'));
router.get('/elec_album_20', (req, res) => res.render('elec_album_20.ejs'));
router.get('/elec_album_21', (req, res) => res.render('elec_album_21.ejs'));
router.get('/elec_album_22', (req, res) => res.render('elec_album_22.ejs'));




router.get('/videos', (req, res) => res.render('videos.ejs'));
router.get('/videos1', (req, res) => res.render('videos1.ejs'));
router.get('/videos2', (req, res) => res.render('videos2.ejs'));
router.get('/videos3', (req, res) => res.render('videos3.ejs'));
router.get('/videos4', (req, res) => res.render('videos4.ejs'));
router.get('/videos5', (req, res) => res.render('videos5.ejs'));
router.get('/videos6', (req, res) => res.render('videos6.ejs'));




// Ruta para mostrar los álbumes
router.get('/carga_imagenes', (req, res) => {
    res.render('carga_imagenes.ejs', { albums });
});

export default router;

