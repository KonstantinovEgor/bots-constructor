const models = require('../models/');

class BaseController {
    async getAll() {

    }

    async getOne() {

    }

    async del() {

    }
    
    async add(modelName, pool) {
        const result = await models[modelName].create(pool);
        return {
            ...result
        }
    }

    async upd() {

    }
}

module.exports = BaseController;