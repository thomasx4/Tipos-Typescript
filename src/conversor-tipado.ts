type Unidad = "cm" | "m" | "km";

function convertir(valor: number, de: Unidad, a: Unidad): number {
    
    if (typeof valor !== "number" || isNaN(valor)) {
        throw new Error("Valor inválido");
    }

    let enMetros = 0;

    if (de === "cm") enMetros = valor / 100;
    if (de === "m") enMetros = valor;
    if (de === "km") enMetros = valor * 1000;

    if (a === "cm") return enMetros * 100;
    if (a === "m") return enMetros;
    if (a === "km") return enMetros / 1000;

    return enMetros;
}