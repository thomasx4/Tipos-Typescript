type CampoFormulario = {
    nombre: string;
    tipo: "texto" | "numero" | "email";
    valor: string | number;
};

function validar(campos: CampoFormulario[]): string[] {
    const invalidos: string[] = [];

    for (let campo of campos) {
        if (campo.tipo === "texto") {
            if (campo.valor === "") invalidos.push(campo.nombre);
    }

    if (campo.tipo === "numero") {
        if (typeof campo.valor !== "number") invalidos.push(campo.nombre);
    }

    if (campo.tipo === "email") {
        if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
        invalidos.push(campo.nombre);
        }
    }
    }
    return invalidos;
}