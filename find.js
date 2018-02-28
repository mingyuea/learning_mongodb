const mongo = require('mongodb').MongoClient;
var ageComp = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

    mongo.connect(url, (err, db)=> {
    if(err){
        throw err;
    }
    var dbo = db.db('learnyoumongo');
    var collection = dbo.collection('parrots');
    
    var query = {age: {$gt: ageComp}};
    collection.find(query).toArray((err, docs)=>{
        if(err){
            throw err;
        }
        
        console.log(docs);
        db.close();
    });
});