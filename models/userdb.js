let mongoose = require('mongoose');

let userdbModel = mongoose.Schema(
{
     uname: String, unumber: Number, uemail: String 
},
{
    collection : "userdb"

}
);

module.exports =mongoose.model('userdb',userdbModel);