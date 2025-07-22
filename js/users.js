const mainEl = document.querySelector(".users.main");
const wrapperEL = document.createElement("div");
wrapperEL.className = "wrapper container";

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.users.forEach((user) => {
      const userEl = document.createElement("div");
      userEl.className = "user-card";
      userEl.innerHTML = `
  <img class="user-card__image" src="${user.image}" alt="${user.firstName}" />
  <div class="user-card__info">
    <h2 class="user-card__name">${user.firstName} ${user.lastName}</h2>
    <p class="user-card__email">${user.email}</p>
    <p class="user-card__location">${user.address.city}, ${user.address.state}, ${user.address.country}</p>

    <div class="user-card__meta">
      <span>Age: ${user.age}</span>
      <span>Gender: ${user.gender}</span>
      <span>Blood: ${user.bloodGroup}</span>
    </div>

    <div class="user-card__contact">
      <span>Phone: ${user.phone}</span>
      <span>University: ${user.university}</span>
    </div>
  </div>
`;
      console.log(userEl);
      wrapperEL.appendChild(userEl);
    });
    mainEl.appendChild(wrapperEL);
  });
