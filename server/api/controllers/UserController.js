const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class TelegramController extends BaseController {
    constructor() {
        super();
    }

    async getTelegramBots(req, res, next) {
        const user_id = req.query.id || req.query.user_id;
        if (!user_id)
            next(ApiError('Не передан id пользователя'));

        await super.getAll('BCTelegramBots', { user_id }, req, res, next);
    }
}

module.exports = new TelegramController();