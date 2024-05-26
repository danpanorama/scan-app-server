var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')
let app = express()
app.use(fileUpload())
/* GET home page. */
router.post('/extracttext', function(req, res, next) {

 if(!req.files && !req.files.pdfFile ){
    res.status(400);
    res.json({msg:'no file'})
    

 }
 pdfParse(req.files.pdfFile).then(result =>{
    res.json({text:result.text})
 })


});

module.exports = router;
