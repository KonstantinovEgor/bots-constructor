const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const basename = path.basename(__filename);

const db = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db)
  .forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.getObjIns = function (body, Model) {
  let createObj = {};

  Model.myAttributes().forEach((item) => {
    if (body[item]) {
      createObj = { ...createObj, ...{ [item]: body[item] } };
    }
  });
  return createObj;
};

db.getObjUpd = function (body, Model) {
  let createObj = { updatedAt: new Date().getTime() };

  Model.myAttributes().forEach((item) => {
    if (body[item] !== undefined) {
      createObj = { ...createObj, ...{ [item]: body[item] } };
    }
  });
  //console.log(createObj);
  return createObj;
};

db.getObjWhere = function (body, Model) {
  let createObj = {};
  if (!body) {
    return createObj;
  }
  Model.myAttributes().forEach((item) => {
    if (body[item]) {
      createObj = { ...createObj, ...{ [item]: body[item] } };
    }
  });
  return {
    where: {
      ...createObj,
    },
  };
};

db.getObjWherePrimaryKey = function (body, Model) {
  let createObj = {};
  if (body) {
    Model.primaryKeyAttributes.forEach((item) => {
      if (body[item]) {
        createObj = { ...createObj, ...{ [item]: body[item] } };
      }
    });
  }
  //console.log(createObj);
  return {
    where: {
      ...createObj,
    },
  };
};

db.getObjInclude = function (association, params, isNeedIncludes = true) {
  let include;
  if (association.associationType) {
    const model = db[association.associationAccessor];
    //console.log(association.as);
    include = {
      model,
      attributes: model.myAttributes(),
      as: association.as,
      required: association.associationType !== 'BelongsTo',
      ...db.getObjWhere(params[model.name], model),
    };
    if (isNeedIncludes) {
      include = {
        ...include,
        ...{ include: this.getObjIncludes(model, params, association.associationType === 'BelongsTo') },
      };
    }
  }
  return include === undefined ? undefined : include;
};

db.getObjIncludes = function (Model, params, isNeedIncludes = true) {
  const includes = [];
  if (Model.associations) {
    for (const prop in Model.associations) {
      const association = Model.associations[prop];
      const include = this.getObjInclude(association, params, isNeedIncludes);
      if (include) {
        includes.push(include);
      }
    }
  }
  return includes;
};

module.exports = db;