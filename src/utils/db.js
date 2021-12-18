const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
let db
const createConnection = () => {
    const adapter = new FileSync('db.json')
    db = lowdb(adapter)
    db.defaults({dnas:[]}).write()
}
const getConnection = () => db
module.exports = {getConnection,createConnection}