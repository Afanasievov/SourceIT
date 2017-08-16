const mongoose = require('mongoose');
const configDb = require('../../config/mongo_db.config');
const messages = require('../../constants/messages');

class DataProvider {
  constructor(config) {
    this.config = config;
    if (this.config) {
      this.mongoose = mongoose.connect(`mongodb://${this.config.host}:${this.config.port}/${this.config.dbName}`);
    } else {
      throw new Error(messages.dbConfigAbsent);
    }
  }

  closeConnection() {
    if (this.mongoose.connection) {
      this.mongoose.connection.close();
    }
  }
}

module.exports = new DataProvider(configDb);
