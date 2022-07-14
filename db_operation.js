let obj = require("mongoose");
obj.pluralize(null);
let url = "mongodb://localhost:27017/productDetails";

obj.connect(url).then(res => console.log("connected")).catch(e => console.log(e));
let db = obj.connection;

db.once("open",() => {
   let ProductSchema = obj.Schema({
        _id:Number,
        pname:String,
        price:Number,
        description:String,
    });
//insert
    let ProductModel = obj.model("Product",ProductSchema);

    // let p1 = { _id:101,pname:"suits",price:12000,description:"mens wear"}
    // let p2 = { _id:102,pname:"suits",price:120000,description:"mens wear"}
    // ProductModel.insertMany(p2,(err,result) => {
    //     if(!err){
    //         console.log("Record is  inserted successfully !!")
    //     }
    //     obj.disconnect();
    // })

    // update
    // ProductModel.updateOne({_id:100},{$set:{price:90000}},(err,result) =>{
    //     if(!err){

    //         if(result.modifiedCount > 0){
    //             console.log("Record update successfully");
    //         } else{
    //             console.log("Record didn't update");
    //         }
    //     }else {
    //         console.log(err);
    //     }
    //     obj.disconnect();
    // })

    // // delete
    // ProductModel.deleteOne({_id:101},(err,result) =>{
    //         if(!err){
    //             if(result.deletedCount > 0){
    //                 console.log("Record deleted successfully");
    //             } else{
    //                 console.log("Record not present");
    //             }
    //         }else {
    //             console.log(err);
    //         }
    //         obj.disconnect();
    //     })

    //retreive operation

    ProductModel.find({},(err,result) => {

        if(!err){
            result.forEach( p =>{ 
                console.log(" Pid is : " +p._id + "     PName is : " +p.pname + "     Price :  " +p.price +"   Description of  product :" + p.description);
            })
        }else{
            console.log(err);
        }

        obj.disconnect();
    })

})