type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: "admin" | "editor" | "visitante";
};

function filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
    const resultado: Usuario[] = [];

    for (let u of usuarios) {
        if (u.edad >= 18 && u.activo && u.rol !== "visitante") {
            resultado.push(u);
        }
    }
    return resultado;
}