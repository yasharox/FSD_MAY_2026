
const os = require('os'); // in built package


console.log('Free Memory', os.freemem());
console.log('total memory', os.totalmem());
console.log('version', os.version());
console.log('processor', os.cpus());


