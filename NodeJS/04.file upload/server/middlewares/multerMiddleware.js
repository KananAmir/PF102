const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null, uniqueSuffix + "-" + file.originalname)
    }
  })

  const imageUpload = multer({ 
    storage: storage, 
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
    fileFilter: function (req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif') {
          cb(null, true)
        } else {
          cb(new Error('Only .jpeg | .png | .jpg | .gif  files are allowed'), false)
        }
      } 
})

module.exports = imageUpload