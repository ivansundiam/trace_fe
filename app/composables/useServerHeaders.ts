// for manual setting of headers for server fetching
export const getServerHeaders = () => {
    const headers = useRequestHeaders(['cookie', 'referer']);
    return {
        ...headers,
        referer: headers.referer || useRuntimeConfig().public.frontendBaseUrl
    }
}