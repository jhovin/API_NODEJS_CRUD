var mongoose = require("mongoose")
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/users");
var modelSchemas = new Schema({
    autor: {type:String,required:true},
    mensaje: {type:String,required:true},
    fecha: {type:Date,default:Date.now}
});
var modelSchema = new Schema({
    titulo: {type:String,required:true},
    descripcion: {type:String,required:true},
    categoria: {type:String,required:true},
    fecha: {type:String,default:Date.now},
    comentarios : [modelSchemas]
});

model = mongoose.model('contacts',modelSchema,'contacts');
module.exports = model;
