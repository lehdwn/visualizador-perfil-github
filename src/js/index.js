import { fetchGitHubUser, fetchGithubUserRepos } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");


btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;

    if (!userName) {
        alert("Digite um nome de usuário válido do GitHub.");
        profileResults.innerHTML = "";
        return;
    }

    profileResults.innerHTML = "<p>Carregando...</p>"; // Se tiver o userName ele vai adicionar uma classe loading 

        try {
            const userData = await fetchGitHubUser(userName);
            const userRepos = await fetchGithubUserRepos(userName);

            renderProfile(userData, userRepos, profileResults);

        } catch (error) {
            console.error("Erro ao buscar o usuário:", error);
            alert("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
            profileResults.innerHTML = "";
        }

});
