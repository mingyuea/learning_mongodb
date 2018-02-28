const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageComp = parseInt(process.argv[2]);

mongoClient.connect(url, (err, db)=>{
    if(err){throw err}
    
    var dbo = db.db('learnyoumongo');
    var collection = dbo.collection('parrots');
    var queryObj = {age: {$gt: ageComp}};
    collection.count(queryObj, (err, count)=>{
        if(err){throw err}
        
        console.log(count);
        db.close();
    })
})