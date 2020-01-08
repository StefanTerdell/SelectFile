const selectFile = require('./selectFile')

selectFile().then(res => console.log(res)).catch(err => console.log(err))