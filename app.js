window.addEventListener('DOMContentLoaded', () => {
  async function renderUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const userList = document.createElement('ul');
    userList.classList.add('user__list');

    users.forEach((user) => {
      const userItem = document.createElement('li');
      userItem.classList.add('user__item');

      // const userContent = `
      //   <p class="user__p">${user.name}</p>
      //   <p class="user__p">${user.username}</p>
      //   <p class="user__p">${user.email}</p>
      // `;

      userItem.insertAdjacentHTML(
        'beforeend',
        `
          <p class="user__p">${user.name}</p>
          <p class="user__p">${user.username}</p>
          <p class="user__p">${user.email}</p>
        `,
      );
      userList.appendChild(userItem);
    });

    document.body.appendChild(userList);
  }

  renderUsers();
});
