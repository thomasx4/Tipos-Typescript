type Calificacion = {
    estudianteId: number;
    materia: string;
    categoria: "tareas" | "quices" | "examen";
    nota: number;
};

function promedioPorCategoria(
    datos: Calificacion[],
    estudianteId: number
) {
    let suma = {
        tareas: 0,
        quices: 0,
        examen: 0
    };

    let conteo = {
        tareas: 0,
        quices: 0,
        examen: 0
    };

    for (let d of datos) {
        if (d.estudianteId === estudianteId) {
        suma[d.categoria] += d.nota;
        conteo[d.categoria]++;
        }
    }

    return {
        tareas: conteo.tareas ? suma.tareas / conteo.tareas : 0,
        quices: conteo.quices ? suma.quices / conteo.quices : 0,
        examen: conteo.examen ? suma.examen / conteo.examen : 0
    };
}