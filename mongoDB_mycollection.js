var MongoDB = require('mongodb').MongoClient;
var url = "mongodb+srv://User1:inertsouls280994@cluster0.noppt.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoDB.connect(url, function(err,dbDatabase){
    if (err) throw err;
    var dbCollection = dbDatabase.db("sample_restaurants");
    var myquery = {cuisine:/^I/};
    dbCollection.collection("restaurants").find(myquery).limit(15).toArray(function(err,res){

        if (err) throw err;
        console.log(res);
        dbDatabase.close();
    })
})