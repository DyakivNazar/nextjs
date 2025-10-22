const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getAlls = async<T,> (date: string): Promise<T> => {
    return fetch(`${baseUrl}/${date}`).then(res => res.json())
}
export const getAll = async<T,> (date: string): Promise<T> => {
    return fetch(`${baseUrl}/${date}`).then(res => res.json())
}