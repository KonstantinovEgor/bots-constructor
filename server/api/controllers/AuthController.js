const BaseController = require('./BaseController');

class AuthController extends BaseController {
    constructor() {
        super();
    }

    static registration(req, res, next) {
        res.status(200).json('ok');
    }

    static login(req, res, next) {
        res.status(200).json('ok');
    }
}

module.exports = AuthController;