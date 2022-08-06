import Tema from "./Tema";

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema|null;
    date: string;
}

export default Postagem;