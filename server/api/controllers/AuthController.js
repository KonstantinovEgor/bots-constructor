const localStorage = require('localStorage');

const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const hashService = require('../services/HashService');
const tokenService = require('../services/TokenService');
const ApiError = require('../errors/ApiError');

class AuthController extends BaseController {
    constructor() {
        super();
    }

    async registration(req, res, next) {
        const pool = req.body;

        helperService.itContains(pool, ['login', 'password'], next);
        const candidate = await super.getOne('BCUsers', { login: pool.login }, req, res, next, false);
        if (candidate) 
            return next(ApiError.badRequest(`Пользователь с логином ${pool.login} уже существует`));
        pool.password = await hashService.getHashString(pool.password);
        const user = await super.add('BCUsers', pool, req, res, next, false);
        await super.add('BCRoles', { user_id: user.dataValues.id }, req, res, next, false);

        const token = tokenService.generate({
            id: user.dataValues.id,
            login: user.dataValues.login
        });
        res.status(200).json({
            token_type: 'Bearer',
            token
        });
    }

    async login(req, res, next) {
        const pool = req.body;

        helperService.itContains(pool, ['login', 'password'], next);
        const user = await super.getOne('BCUsers', { login: pool.login }, req, res, next, false);
        if (!user) 
            return next(ApiError.badRequest(`Пользователь с логином ${pool.login} не существует`));
        if (!await hashService.compare(pool.password, user.dataValues.password))
            return next(ApiError.badRequest('Неверный пароль'));
        const token = tokenService.generate({
            id: user.dataValues.id,
            login: user.dataValues.login
        });

        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({
            token_type: 'Bearer',
            token
        });
    }

    async auth(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token)
            return next(ApiError.badRequest('Не авторизован'));
        const newToken = tokenService.refreshAccessToken(token);
        if (!newToken)
            return next(ApiError.badRequest('Токен не валидный'));

        res.setHeader('Authorization', `Bearer ${newToken}`);
        res.status(200).json({
            token_type: 'Bearer',
            token: newToken
        });
    }
}

module.exports = new AuthController();