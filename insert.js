const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, (err, db)=>{
    if(err){throw err}
    
    var dbo = db.db('learnyoumongo')
    var collection = dbo.collection('docs');
    var insertObj = {firstName: process.argv[2], lastName: process.argv[3]};
    
    collection.insert(insertObj, (err, res)=>{
        if(err){throw err}
        
        console.log(JSON.stringify(insertObj));
        db.close();
    })
})