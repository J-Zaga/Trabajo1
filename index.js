const fs = require("fs")

const datos = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r","c",false]
const filtrar = (datos, condicion) => {
    if(condicion != "" && condicion != null && condicion != undefined){
     const filtrados = datos.filter((x) => typeof(x) == typeof(condicion))
     filtrados.sort()
     const unicos = [...new Set(filtrados)]
     const datosParaEscribir = JSON.stringify(unicos, null, 2);
     const writeFile = fs.writeFileSync("doc.txt", datosParaEscribir)
     const updateFile = fs.readFileSync("doc.txt", "utf-8")
     console.log(updateFile)
}else {
    return "La condicion no es valida"

}
}
filtrar(datos,true)
