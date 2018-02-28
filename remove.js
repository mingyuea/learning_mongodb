const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, (err, db)=>{
    if(err){throw err}
    
    var dbo = db.db('learnyoumongo');
    var collection = dbo.collection(process.argv[3]);
    var remObj = {_id: process.argv[4]};
    collection.remove(remObj, (err, result)=>{
        if(err){throw err}
        
        console.log("object removed");
        db.close();
    })
})