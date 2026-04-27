type Pago =
    | { metodo: "tarjeta"; numeroTarjeta: string; cvv: string }
    | { metodo: "transferencia"; banco: string; numeroCuenta: string }
    | { metodo: "efectivo" };

    function validarPago(pago: Pago): boolean {
    if (pago.metodo === "tarjeta") {
        return (
            pago.numeroTarjeta !== "" &&
            pago.cvv !== ""
        );
    }

    if (pago.metodo === "transferencia") {
        return (
            pago.banco !== "" &&
            pago.numeroCuenta !== ""
        );
    }

    if (pago.metodo === "efectivo") {
        return true; // no necesita datos
    }

    return false;
}