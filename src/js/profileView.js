export function renderProfile(userData, container) {
    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar do ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || "Não possui bio cadastrada.😢"}</p>
            </div>
        </div>
    `;
}