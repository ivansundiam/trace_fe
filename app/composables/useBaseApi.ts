export const useBaseApi = (groupUrl?: string): string => {
    const { public: { apiBase } } = useRuntimeConfig();
    return [apiBase, 'api', groupUrl].filter(Boolean).join('/');
} 