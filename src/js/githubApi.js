const baseUrl = "https://api.github.com";

export async function fetchGithubUser(userName) {
    
    const response = await fetch(`${baseUrl}/users/${userName}`);
    if (!response.ok) {
        throw new Error("Usuário não encontrado!");
    }
    return await response.json();
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch(`${baseUrl}/users/${userName}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error("Repositórios não encontrados!");
    }
    return await response.json();
}