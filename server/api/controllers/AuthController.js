const BaseController = require('./BaseController');

class AuthController extends BaseController {
    constructor() {
        super();
    }

    async registration(req, res, next) {
        await super.add('BCUsers', req, res, next);
    }

    login(req, res, next) {
        res.status(200).json('ok');
    }
}

module.exports = new AuthController();