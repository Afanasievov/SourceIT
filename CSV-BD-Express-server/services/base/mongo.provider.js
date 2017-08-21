const mongoose = require('mongoose');
const configDb = require('../../config/mongo_db.config');

class DataProvider {
  constructor(config) {
    this.config = config;
    this.mongoose = mongoose.connect(`mongodb://${this.config.host}:${this.config.port}/${this.config.dbName}`);
  }

  closeConnection() {
    if (this.mongoose.connection) {
      this.mongoose.connection.close();
    }
  }
}

module.exports = new DataProvider(configDb);
