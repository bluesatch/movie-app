const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const movieDao = {
    table: 'movie',

    search: (req, res, table)=> {

        let sql = `SELECT * FROM ${table};`
        const query = req.query ? req.query : {}
        
        let genre = query.genre || null

        if (genre != null) {
            sql = `SELECT m.movie_id, m.title, m.rating, m.runtime, m.nationality, m.yr_released, m.budget, m.gross, m.production_id, m.showing, m.poster, g.genre_id, g.genre 
                FROM movie m 
                JOIN movie_to_genre USING (movie_id) 
                JOIN genre g USING (genre_id) 
                WHERE genre = '${genre}';`
        }

        con.execute(
            sql,
            (error, rows)=> {
                rows.length == 0 ? res.send('<h1>No data to show</h1>') :queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = movieDao