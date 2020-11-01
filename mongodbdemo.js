var MongoClient = require('mongodb').MongoClient
url = "mongodb+srv://User1:inertsouls280994@cluster0.noppt.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, dbo){

  if (err) throw err;
  dbdoc = dbo.db('new_Database');

  var data = {name: 'Pankaj', Age:'26'};

  dbdoc.collection("new_Collection").find({}).toArray(function (err,result){

    if (err) throw err;
    console.log(result);
    dbo.close();
  });


});