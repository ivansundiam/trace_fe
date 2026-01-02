import type { NitroFetchOptions } from 'nitropack'

let csrfReady = false;

export const useHttp = (group?: string) => {
    const baseURL = useBaseUrl(group);

    return <T = unknown>(url: string, options?: NitroFetchOptions<any>): Promise<T> =>
        $fetch<T>(url, {
            ...options,
            baseURL,
            credentials: 'include',
            async onRequest({ options }) {
                const method = options.method ?? 'GET';
                if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) return;
            
                if (!csrfReady) { // only fetch CSRF once per sesison
                    await $fetch('/sanctum/csrf-cookie', {
                        baseURL: useRuntimeConfig().public.apiBase,
                        credentials: 'include'
                    });
                    csrfReady = true;
                }

                const token = useCookie('XSRF-TOKEN').value;
                if (!token) return

                const headers = new Headers(options.headers);
                headers.set('X-XSRF-TOKEN', decodeURIComponent(token));
                options.headers = headers;
            }
        })
}