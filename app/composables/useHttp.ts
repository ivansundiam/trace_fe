import type { NitroFetchOptions } from 'nitropack'

export const useHttp = (group?: string) => {
    const baseURL = useBaseUrl(group);
    const csrfReady = useState<boolean>('csrf-ready', () => false)
    
    return <T = unknown>(url: string, options?: NitroFetchOptions<any>): Promise<T> => {
        const clientHeaders = useRequestHeaders(['cookie', 'referer']);
        const methodsWithCsrf = ['POST', 'PUT', 'PATCH', 'DELETE'];
        const fetchOptions: NitroFetchOptions<any> = {
            ...options,
            baseURL,
            credentials: 'include',
            headers: { 
                ...clientHeaders,
                ...options?.headers
            },
            async onRequest({ options }) {
                if (methodsWithCsrf.includes(options.method!) && !csrfReady.value && import.meta.client) { // only fetch CSRF only on client and once per sesison
                    await $fetch('/sanctum/csrf-cookie', {
                        baseURL: useRuntimeConfig().public.apiBase,
                        credentials: 'include'
                    });
                    csrfReady.value = true;
                }

                const token = useCookie('XSRF-TOKEN').value;
                if (!token) return

                const headers = new Headers(options.headers);
                headers.set('X-XSRF-TOKEN', decodeURIComponent(token));
                options.headers = headers;
            }
        }

        return $fetch<T>(url, fetchOptions);
    }
}