type SMS = {
    numero: number;
    mensaje: string;
}

type Email = {
    receptor: string;
    mensaje: string
}

type Push = {
    esquina: string
}

type Notificacion = SMS | Email | Push