export async function fetchGitHubUser(username) {
    const baseUrl = "https://api.github.com";
    const response = await fetch(`${baseUrl}/users/${username}`);
    if (!response.ok) {
        throw new Error("Usuário não encontrado!");
    }
    return await response.json();
}