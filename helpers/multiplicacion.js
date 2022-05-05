const fs = require('fs')
const path = require('path')

const tablaMultiplicar = async(base, limite, mostrar) => {
    console.log('=================================')
    console.log(`Tabla de Multiplicar de ${base}`)
    console.log('=================================')

    let total = '';

    for(let i = 0 ; i <=limite ; i++){
       total += `${base} x ${i} = ${i*limite}\n`
        
    }
    if(mostrar){
        console.log(total)
    }
    
    fs.writeFileSync(path.join(__dirname , `../salida/table-${base}.txt`), total)
    
    return `Table-${base}.txt - creado`
}

module.exports = {
    tablaMultiplicar
}