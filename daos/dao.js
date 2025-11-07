const daoCommon = require('./common/daoCommon')

const movieDao = {
    ...daoCommon,
    ...require('./api/movieDao')
}

const actorDao = {
    ...daoCommon,
    ...require('./api/actorDao')
}

const directorDao = {
    ...daoCommon,
    ...require('./api/directorDao')
}

module.exports = {
    movieDao,
    actorDao,
    directorDao
}