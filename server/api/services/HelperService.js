const { v4: uuidv4 } = require('uuid');

class HelperService {
    getUUID() {
        return uuidv4;
    }
}

module.exports = new HelperService();