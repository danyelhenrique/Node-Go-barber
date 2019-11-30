require('./dotenv')
module.exports = {
  dialect: 'postgres',
  host: process.env.PS_HOST,
  username: process.env.PS_USER,
  password: process.env.PS_PASSWORD,
  database: process.env.PS_DATABASE,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true
  }
}
