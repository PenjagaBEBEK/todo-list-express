const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_ihsun',
    password: 'W!rJv*76khzExux',
    database: 'freedb_CecepDB'
});

module.exports = sequelize
