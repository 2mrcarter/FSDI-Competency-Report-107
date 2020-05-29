var express = require('express');
var app = express(0); // create the app
/***************************************
 /** configuration*/
  /********************************/


// enable CORS
// FOR TEST ONLY (not in production)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Rquested-With, Content-Type, Accept");
    next();
});

// config body-parser to read request payload
var bparser = require('body-parser');
app.use(bparser.json());



// render html using ejs\
var ejs = require('ejs');
console.log(__dirname);
app.set('views',__dirname + '/public')
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);


//To server static files (css, js, images, pdf, doc,...)
app.use(express.static(__dirname + '/public/'));

//Db connection with mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var mongoDB = mongoose.connection;
var itemDB; // constructor for item objects
var orderDB // constructor for order objects

/***************************************
 * Web Server endpoints
 ********************************/


app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/admin', function (req, res) {
    res.render('admin.html');
});

app.get('/about', function(req, res){
    res.render('about.html');
});

app.get('/contact', (req, res) =>{
    res.render('contact.html');
});



/**
 * create the about.html
 * put some content inside the html
 * render the about.html below*/




/****************************************
 * Rest API endpoint
***************************************/


app.post('/api/items', (req, res) => {   
    // create a db object
    var itemFormongo = itemDB(req.body);
    
    // validat the user is loggd in
    // the user has permission to create new items
    // the item is not duplicated, not free
    
    
    
    
    // save the object

    itemForMongo.save(function(error, savedItem){
        if(error){
            console.log("Error saving items " + error);
            res.status(500); // 500 Internal Server Error
            res.send(error);
        }
            // no error
        res.status(201); // created
        res.json(savedItem);
    });
});

app.get('/api/items', (req, res) =>{
    itemDB.find({}, function(error,data){
        if(error){
            res.status(500);
            res.send(error);
        }
            // no error
            res.json(data);
    });
});


app.get('/api/items/:user', (req,res) => {
    let name = req.params.user;
    
    itemDB.find({ user: name }, function (error, data){
        if(error){
            res.status(500);
            res.send(error);
        }
            // no error
            res.json(data);
    });
});
// select * from catCohort8 where title LIKE '%text%' OR description like '%text%'

app.get('/api/items/search/:text', (req, res) =>{
    var text = req.params.text;
    itemDB.find(
        {
            $or: [
                {title: { "$regex": text, "$options": "i" }}, 
                { description: { "$regex": text, "$options": "i" }}
            ]      
        }

        , function(error, data){
            if(error){
                res.status(500);
                res.send(error);
            }
                
            // no error
            res.json(data);
        });

});

mongoDB.on('error', function(error){
    console.log("Db connection error: " + error);
});

mongoDB.on('open', function(){
    console.log('Yeah, db connection opened');

    /* The allowe SchemaTypes are:
        String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array*/


    //  define schema for Db collection
    var itemSchema = mongoose.Schema({
        code: String,
        title: String,
        prie: Number,
        description: String,
        category: String,
        image: String,
        user: String
    });

    // define order schema
    var orderSchema = mongoose.Schema({
        user: String,
        total: Number,
        stuatus: Number,
        items: Array,

    });

    itemDB = mongoose.model("catCohort8", itemSchema);
    orderDB = mongoose.model('ordersCohort8', orderSchema);
});





//run the server
// Localhost -> myself (computer)
// 127.0.0.1 [home] -> myself 
 app.listen(8080, function(){
     console.log("Server running at http://localhost:8080");
 });