import {Router} from 'express';
const router = Router();

router.get('/logout', function (req, res) {
    res.clearCookie('SystemAuth');
    req.flash('success_msg', 'Ha cerrado sesión correctamente.');
    res.redirect('/');
});


module.exports  = router;