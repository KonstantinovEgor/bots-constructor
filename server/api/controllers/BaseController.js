const ApiError = require('../errors/ApiError');
const models = require('../models/');

class BaseController {
    async getAll(modelName, req, res, next) {
        try {
            const result = await models[modelName].findAll();

            res.status(200).json(result);
        } catch (error) {
            next(ApiError.badRequest({
                message: 'Ошибка получения записей',
                ...error
            }));
        }
    }

    async getOne(modelName, req, res, next) {
        try {
            const pool = req.query;
            const result = await models[modelName].findOne({ where: { pool } });

            res.status(200).json(result.dataValues);
        } catch (error) {
            next(ApiError.badRequest({
                message: 'Ошибка получения записи',
                ...error
            }));
        }
    }

    async del(modelName, req, res, next) {
        try {

        } catch (error) {
            next(ApiError.badRequest({
                message: 'Ошибка удаления записи',
                ...error
            }));
        }
    }
    
    async add(modelName, req, res, next) {
        try {
            const pool = req.body;
            const result = await models[modelName].create(pool);

            res.status(200).json({
                ...result?.dataValues
            });
        } catch (error) {
            next(ApiError.badRequest({
                message: 'Ошибка добавления записи',
                ...error
            }));
        }
    }

    async upd(modelName, req, res, next) {
        try {

        } catch (error) {
            next(ApiError.badRequest({
                message: 'Ошибка обновления записи',
                ...error
            }));
        }
    }
}

module.exports = BaseController;