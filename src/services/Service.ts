import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bpspringus.herokuapp.com'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const reposta = await api.post(url, dados)
    setDado(reposta.data)
}

export const login = async (url: any, dados: any, setDado: any) => {
    const reposta = await api.post(url, dados)
    setDado(reposta.data.token)
}

export const busca = async (url: any, setDado: any, header: any) => {
    const reposta = await api.get(url, header)
    setDado(reposta.data)
}

export const buscaId = async (url: any, setDado: any, header: any) => {
    const reposta = await api.get(url, header)
    setDado(reposta.data)
}

export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const reposta = await api.post(url, dados, header)
    setDado(reposta.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const reposta = await api.put(url, dados, header)
    setDado(reposta.data)
}

export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}