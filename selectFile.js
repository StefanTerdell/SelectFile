const inq = require('inquirer')
const fs = require('fs')
const path = require('path')

const selectFile = (directory = process.cwd()) => inq.prompt({
        message: `${directory} >`,
        type: 'list',
        choices: [{
            name: '..',
            value: {
                name: '..',
                isDirectory: true
            }
        }].concat(fs.readdirSync(directory).map(t => ({
            name: t,
            value: {
                name: t,
                isDirectory: fs.statSync(path.join(directory, t)).isDirectory()
            }
        }))),
        name: 'choice'
    }).then(result => result.choice.isDirectory 
        ? selectFile(path.join(directory, result.choice.name))
        : path.join(directory, result.choice.name)
    )

module.exports = selectFile;