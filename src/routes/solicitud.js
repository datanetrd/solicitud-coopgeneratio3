import {Router} from 'express';
const router = Router();

router.get('/solicitud', (req,res) => {
    res.render('solicitud.ejs');
});


module.exports  = router;