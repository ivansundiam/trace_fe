export const useApiFetch = (group?: string) => {
    const baseURL = useBaseApi(group);

    return $fetch.create({
        baseURL,
        credentials: 'include',
        onRequest({ options }) {
            const token = useCookie('XSRF-TOKEN').value
            
            if (!token) return
            
            const headers = new Headers(options.headers)
            headers.set('X-XSRF-TOKEN', decodeURIComponent(token))
            
            options.headers = headers
        }

    })
}