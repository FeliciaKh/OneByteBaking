const Sequelize = require('sequelize')
const db = require('../db')

const Recipe = de.define('recipe', {
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
    }
})

module.exports = Recipe