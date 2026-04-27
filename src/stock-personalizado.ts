type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: "alimentos" | "tecnologia" | "papeleria";
};

function bajoStock(producto: Producto): boolean {
    if (producto.categoria === "alimentos") {
        return producto.cantidad < 20;
    }

    if (producto.categoria === "tecnologia") {
        return producto.cantidad < 5;
    }

    if (producto.categoria === "papeleria") {
        return producto.cantidad < 50;
    }

    return false;
}