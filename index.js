const addStudent = require('./addStudent.js')
const [, , name, role] = process.argv

addStudent({ name, role, php: false })
