var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, fil, cb) => {
        cb(null, './public/images');
    },
    filename: (req, fil, cb) => {
        var filetype = '';
        if(filetype.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if(filetype.mimetype === 'image/png') {
            filetype = 'png';
        }
        if(filetype.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});

module.exports = upload;