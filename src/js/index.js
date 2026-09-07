import { fetchGitHubUser } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const getUserProfile = async () => {
    const userName = inputSearch.value;

    if (!userName) {
        alert("Digite um nome de usuário válido do GitHub.");
        profileResults.innerHTML = "";
        return;
    }

    profileResults.innerHTML = "<p>Carregando...</p>";

    try {
        const userData = await fetchGitHubUser(userName);

        renderProfile(userData, profileResults);

    } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        alert("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
        profileResults.innerHTML = "";
    }
};

btnSearch.addEventListener("click", getUserProfile);

inputSearch.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getUserProfile();
    }
});