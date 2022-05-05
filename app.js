const {tablaMultiplicar} = require('./helpers/multiplicacion')
const argv =  require('./config/yargs')



tablaMultiplicar(argv.b, argv.l, argv.m)
            .then(result => console.log(result))
            .catch(err => console.log(err))