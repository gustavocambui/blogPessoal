import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bpspringus.herokuapp.com/'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const reposta = await api.post(url, dados)
    setDado(reposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const reposta = await api.post(url, dados)
    setDado(reposta.data)
}
