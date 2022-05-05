const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type : 'number',
                    demandOption : true,
                    describe : 'Base de la multiplicacion'
                })
                .option('l',{
                    alias : 'limite',
                    type: 'numer',
                    demandOption : true,
                    describe : 'Muestra el limite de la multiplicacion'
                })
                .option('m',{
                    alias:'mostrar',
                    type:'boolean',
                    describe : 'Mostrara la tabla de multiplicar'
                })
                .check((argv,options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numer'
                    }else if(isNaN(argv.l)){
                        throw 'El limite tiene que ser un numero'
                    }else{
                        return true
                    }
                })
                .argv


module.exports = argv