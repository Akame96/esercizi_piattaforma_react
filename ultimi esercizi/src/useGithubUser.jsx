import useSWR, { SWRConfig } from "swr";


const fetcher = url => fetch(url).then(response => response.json());


export function useGithubUser() {
    const { data, error, mutate } = useSWR('https://api.github.com/users', fetcher); // Explicitly passing the fetcher


    function handleRefreshUsers() {
        mutate();
    }

    
    return {
        users: data,
        error,
        isLoading: !data && !error,
        onRefresh: handleRefreshUsers,
    };
}

