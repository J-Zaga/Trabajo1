const fs = require("fs")

const datos = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]

const filtrar = (datos, condicion) => {

    if (typeof (condicion) === typeof ("string") || typeof (condicion) === typeof (1) || typeof (condicion) === typeof (true)) {
        const filtrados = datos.filter((x) => typeof (x) == typeof (condicion))
        filtrados.sort()
        filtrados.sort((a, b) => a - b)
        const unicos = [...new Set(filtrados)]
        const datosParaEscribir = JSON.stringify(unicos);
        fs.writeFileSync("doc.txt", datosParaEscribir)
        const updateFile = fs.readFileSync("doc.txt", "utf-8")
        return updateFile
    } else {
        return "La condicion no es valida"
    }
}

console.log(filtrar(datos, 2))
