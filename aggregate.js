const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, (err, db)=>{
    if(err){
        throw err;
    }
    var dbo = db.db('learnyoumongo');
    var collection = dbo.collection('prices');
    var matchObj = {$match: {size: process.argv[2]}};
    var groupObj = {$group: {_id: "avg", avg:{$avg: '$price'}}};
    
    collection.aggregate([matchObj, groupObj]).toArray((err, results)=>{
        if(err){
            throw err;
        }
       var resRnd = Number(results[0].avg).toFixed(2);
       console.log(resRnd);
       db.close();
    });
})