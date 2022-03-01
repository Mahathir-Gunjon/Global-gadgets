// input feild uel with async function
const allPhones = async () => {
    const searchText = document.getElementById("search-feild").value ;
    searchText.value = ''
    if(searchText.length == 0){
        alert('search input empty')
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        const res = await fetch(url)
        const data = await res.json()
        displayReasult(data.data)
    }
}

const displayReasult = phones => {
    console.log(phones);
    const searchReasult = document.getElementById('search-result')
    searchReasult.textContent = '';
    if(phones.length == 0){
        alert('search input empty')
    }
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col-lg-4', 'col-md-6', 'col-12')
        div.innerHTML = `
        <div class="card border-0 shadow-lg rounded-3 pt-3 m-4 bg-light">
        <img src="${phone.image}" class="card-img-top w-75 mx-auto pb-2" alt="...">
            <div class="card-body">
                <h4 class="card-title">${phone.phone_name}</h4>
                <p class="card-text">
                <b>Brand: </b>${phone.brand}
                </p>
                <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-style shadow fs-4 fw-normal">Explore</button>
            </div>
        </div>
        `
        searchReasult.appendChild(div)
    });
}

const loadPhoneDetails = async phoneId =>{
    console.log(phoneId);
    const idUrl = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    const res = await fetch(idUrl)
    const data = await res.json()
    console.log(data.data.mainFeatures)
}