const url = "https://randomuser.me/api?results="
const cardBottom = document.querySelector(".card-bottom")
const searchInput = document.querySelector(".search-input")
const userCount = 40

getData()

async function getData() {
    const res = await fetch(url + userCount)
    const data = await res.json()

    for (let i = 0; i < userCount; i++) {
        createUser(data, i)
    }

}
function createUser(data, index) {

    const li = document.createElement("li")
    li.innerHTML =
        `
    <img src="${data.results[index].picture.large}" alt="">
    <div class="user-info">
    <h4 class="user-name">${data.results[index].name.first} ${data.results[index].name.last}</h4>
    <p class="user-location">${data.results[index].location.state}, ${data.results[index].location.country}</p>
    </div>
    `
    cardBottom.appendChild(li)
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    document.querySelectorAll(".user-name").forEach((user) => {
        const userName = user.textContent.toLowerCase();
        const userLocation = user.nextElementSibling.textContent.toLowerCase();

        if (userName.includes(searchTerm) || userLocation.includes(searchTerm)) {
            user.parentElement.parentElement.style.display = "flex";
        } else {
            user.parentElement.parentElement.style.display = "none";
        }
    });
})






