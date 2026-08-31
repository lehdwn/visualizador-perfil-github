const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const baseUrl = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = "<p>Carregando...</p>"; // Se tiver o userName ele vai adicionar uma classe loading 

        try {
            const response = await fetch(`${baseUrl}/users/${userName}`);

            if (!response.ok) { //Verifica se a resposta não for ok
                alert("Usuário não encontrado!");
                profileResults.innerHTML = ""; // Se a resposta não for ok ele limpa a div e tira o carregando
                return; // Sai da função para não continuar a execução
            }

            const userData = await response.json();
            console.log(userData); // Apenas pra verificar se os dados foram obtidos corretamente

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src= "${userData.avatar_url}" alt="Avatar do ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || "Não possui bio cadastrada.😢"}</p>
                </div>
            </div>

            <div class="profile-counters">
                <div class= "followers">
                    <h4>💕Seguidores</h4>
                    <span>${userData.followers}</span>
                </div>
                <div class= "following">
                    <h4>✨Seguindo</h4>
                    <span>${userData.following}</span>
                </div>
            </div>`;


        } catch (error) {
            console.error("Erro ao buscar o usuário:", error);
            alert("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
            profileResults.innerHTML = "";
        }

    } else {
        alert("Digite um nome de usuário válido do GitHub.");
        profileResults.innerHTML = "";
    }
});