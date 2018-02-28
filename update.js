const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, (err, db)=>{
    if(err){
        throw err;
    }
    
    var dbo = db.db('learnyoumongo');
    var collection = dbo.collection('users');
    
    collection.update({username: "tinatime"}, {$set: {age: 40}}, (err, res)=>{
        console.log("updated");
        db.close();
    })
});