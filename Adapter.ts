interface OldDb {
    connect();
    select();
}

interface NewDb {
    drop();
}

class DbManager implements NewDb {
    drop(){
        console.log("DbManager drop");
    }
}

class DbAdapter implements OldDb{
    _db : NewDb;
    constructor(){
        this._db = new DbManager();
    }
    connect(){
        console.log("DbAdapter connect()");
    }
    select(){
        console.log("DbAdapter select()");
    }
    drop(){
        this._db.drop();
    }
}

class UsersManager {
    constructor(private _db){
        console.log("UsersManager::constructor");
        _db.connect();
        _db.select();
        _db.drop();
    };
}

new UsersManager(new DbAdapter());