/*
    Rutas de usuario
    host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();
const {validarCampos} = require('../middlewares/validarCampos')
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');

router.post('/new', 
            [
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es oligatorio').isEmail(),
                check('password', 'El passwword debe de ser de 6 caracteres').isLength({min: 6}),
                validarCampos
            ], 
            crearUsuario
);

router.post('/', 
            [
                check('email', 'El email es oligatorio').isEmail(),
                check('password', 'El passwword debe de ser de 6 caracteres').isLength({min: 6}),
                validarCampos
            ],
            loginUsuario

);

router.get('/renew', revalidarToken);

module.exports = router;