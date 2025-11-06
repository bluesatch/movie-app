const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const actorDao = {
    table: 'actor',

    search: (req, res, table)=> {

        const query = req.query ? req.query
    }
}

module.exports = actorDao