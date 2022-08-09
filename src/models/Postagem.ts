import Tema from "./Tema";

interface Postagens {
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema|null;
    date: string;
}

export default Postagens;