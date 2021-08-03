const os = require('os')

console.log('Operation systems: ', os.platform())

console.log('CPU architecture: ', os.arch())

console.log('Info about CPUs: ', os.cpus())

console.log('Free memory: ', os.freemem())

console.log('Total memory: ', os.totalmem())

console.log('Home directory: ', os.homedir())

console.log('Switched on: ', os.uptime())