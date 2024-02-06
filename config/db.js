const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_ihsan',
    password: '?s&QuZ7dnfP8kNM',
    database: 'freedb_todolist-ihsan'
});

module.exports = sequelize
