const { v4: uuidv4 } = require('uuid');

const ApiError = require('../errors/ApiError');

class HelperService {
    getUUID() {
        return uuidv4;
    }

    itContains(pool, contains, next) {
        for (const el of contains)
            if (!pool[el]) return next(ApiError.badRequest(`Отсутствует поле ${el}`));
        return true;
    }
}

module.exports = new HelperService();