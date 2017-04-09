var mysql = require('mysql');
var mongojs = require('mongojs');


interface DbEngine {
    insert(table,data);
}

class MysqlMan implements DbEngine {
    connection;

    constructor(config) {
        this.connection = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });
    }

    insert(table,data) {
        let query = this.connection.query('INSERT INTO '+table+' SET ?', data, function (error, results, fields) {
            if (error) throw error;
        });
        console.log(query.sql);
    }
}

class MongodbMan implements DbEngine {
    db;

    constructor(config) {
        this.db = mongojs('mongodb://'+config.host+':'+config.port+'/' + config.database);
    }

    insert(table,data) {
        this.db[table].insert(data)
    }
}

class DbMan {
    engine: DbEngine;

    constructor(_engine) {
        this.engine = _engine;
    }

    insert(table,data) {
        this.engine.insert(table,data);
    }

}

//let db = new DbMan(new MysqlMan({host: "localhost", user: "root", password: "123456", database: "test"}));
let db = new DbMan(new MongodbMan({host: "localhost", port: 27017, database: "test"}));

db.insert("test",{name : "insert test"});
