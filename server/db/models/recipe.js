const Sequelize = require('sequelize')
const db = require('../db')

const Recipe = db.define('recipe', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false, 
    }, 
    imgURL: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: {
            isUrl: true
        }
    }, 
    description: {
        type: Sequelize.TEXT, 
        allowNull: false
    }
})

module.exports = Recipe