const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const hashService = require('../services/HashService');
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
        await super.add('BCRoles', { user_id: user.id }, req, res, next, false);

        res.status(200).json({ message: 'Пользователь успешно создан' });
    }

    login(req, res, next) {
        res.status(200).json('ok');
    }
}

module.exports = new AuthController();