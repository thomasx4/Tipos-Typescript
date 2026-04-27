type CambioUsuario = {
    tipo: "nombre" | "correo" | "password";
};

function contarCambios(cambios: CambioUsuario[]) {
    let resumen = {
        nombre: 0,
        correo: 0,
        password: 0
    };

    for (let cambio of cambios) {
        if (cambio.tipo === "nombre") resumen.nombre++;
        if (cambio.tipo === "correo") resumen.correo++;
        if (cambio.tipo === "password") resumen.password++;
    }

    return resumen;
}