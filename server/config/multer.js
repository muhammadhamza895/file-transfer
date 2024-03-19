const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + '--';
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage }).array("files");

module.exports = upload;
