const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageComp = parseInt(process.argv[2]);

mongoClient.connect(url, (err, db)=>{
    if(err){
        throw err;
    }
    var dbo = db.db('learnyoumongo');
    var collection = dbo.collection('parrots');
    var query = {age: {$gt: ageComp}};
    var filter = { _id: 0, name:1, age: 1};
    collection.find(query, filter).toArray((err, docs)=>{
        if(err){
            throw err;
        }
        
        console.log(docs);
        db.close();
    });
});