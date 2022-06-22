var express=require('express')
var bodyparser=require('body-parser')
var mongoose=require('mongoose')
const app=express();
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())
mongoose.connect('mongodb://localhost:27017/mydb')
var db=mongoose.connection;
db.on("error",()=>console.log("error in db connection"));
db.once("open",()=>console.log("connected to database successfully"));
app.get('/',(req,res)=>{
    res.redirect("index.html");
})
app.post('/signup',(req,res)=>{
    var name=req.body.name;
    var psd=req.body.psd;
    var data={
        "name":name,
        "psd":psd
    }
    db.collection("ss").insertOne(data);
    res.redirect("suc.html");
})
app.listen(3040);
