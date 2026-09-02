const baseUrl = "https://api.github.com";

export async function fetchGitHubUser(username) {
    
    const response = await fetch(`${baseUrl}/users/${username}`);
    if (!response.ok) {
        throw new Error("Usuário não encontrado!");
    }
    return await response.json();
}

export async function fetchGithubUserRepos(username) {
    const response = await fetch(`${baseUrl}/users/${username}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error("Usuário não encontrado!");
    }
    return await response.json();
}