const bcrypt = require('bcrypt');

require('dotenv')
    .config();

class HashService {
    async getHashString(stringToHash) {
        return await bcrypt.hash(stringToHash, Number(process.env.PASSWORD_SALT));
    }
}

module.exports = new HashService();