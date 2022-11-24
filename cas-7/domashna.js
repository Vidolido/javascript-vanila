// Za doma: Da se napravi user profile page (moze da izberete eden od dizajnite na slikite podolu). User profile page-ot treba da sodrzi informacii za imeto , email, rabotnoto mesto, website i adresata na userot vo sledniot format: ulica-grad-postenski broj. Podatocite za userot mozete da gi zemete od sledniot endpoint: 

async function getUserId() {
    const loader = document.getElementById('loading');

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
  
    if (!response.ok) {
      console.log('Error ' + response.statusText)
      return
    }
    document.body.removeChild(loader);

    const data = await response.json()
    generateUserCard(data)
  }

const generateUserCard = user => {
    const cardContainer = document.getElementById('card');
    cardContainer.innerHTML = `
    <div class="header">
        <div>
            <div class="arrowContainer"></div>
            <div class="button"><span>Profile</span></div>
        </div>
        <div><span class="changePassword">Change Password</span></div>
    </div>
    <div class="cardHeader">
        <div class="imageContainer"></div>
        <h1>${user.name}</h1>
    </div>
    <hr>
    <div class="userInfo">
        <div class="spanContainer">
            <p>Username</p><p>${user.username}</p>
        </div>
        <div class="spanContainer">
            <p>Office</p><p>${user.company.name}</p>
        </div>
        <div class="spanContainer">
            <p>Status</p><p>${user.company.bs}</p>
        </div>
        <div class="spanContainer">
            <p>Website</p><p>${user.website}</p>
        </div>
        <div class="spanContainer">
            <p>Email</p><p>${user.email}</p>
        </div>
    </div>
    <hr>
    <div class="userRole">
        <div class="spanContainer">
            <p>Street Adress</p><p>${user.address.street}, ${user.address.city}, ${user.address.suite}.</p>
        </div>
        <div class="spanContainer">
            <p>Phone</p><p>${user.phone}</p>
        </div>
    </div>
    `
    console.log(user)
    document.body.appendChild(cardContainer)
}

getUserId();