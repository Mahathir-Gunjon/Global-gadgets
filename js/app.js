const spinner = displayStyle => {
    document.getElementById('spiner').style.display = displayStyle
}
const searchContentHide = displayStyle => {
    document.getElementById('card-show').style.display = displayStyle
}
// input feild uel with async function
const allPhones = async () => {
    const searchText = document.getElementById("search-feild").value ;
    // show spinner om display
    spinner('block')
    searchContentHide('none')
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
    // console.log(phones);
    const searchReasult = document.getElementById('search-result')
    searchReasult.textContent = '';
    if(phones.length == 0){
        alert('search input empty')
    }
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col-lg-4', 'col-md-6', 'col-12')
        div.innerHTML = `
        <div class="card border-0 shadow-lg rounded-3 pt-3 m-4 bg-white">
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
    spinner('none')
    searchContentHide('block')
}

// phone data load 
const loadPhoneDetails = async phoneId =>{
    // console.log(phoneId);
    const idUrl = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    const res = await fetch(idUrl)
    const data = await res.json()
    detailsResult(data.data)
}
// full details of phone fubction 
const detailsResult = PhoneDetails => {
    
    const fullDetails = document.getElementById('full-detail')
    fullDetails.textContent = '';
        const div = document.createElement('div')
        div.classList.add('col-12')
        div.innerHTML = `
        <div class="card mb-3 border-0 shadow-lg text-dark">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${PhoneDetails.image}" class="w-100 p-4 rounded-start" alt="...">
            </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h1 class="card-title">${PhoneDetails.name}</h1>
                        <p class="card-text fs-8">${PhoneDetails.releaseDate}</p>
                        <b class="fs-5">Main Features</b>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Feature name</th>
                                <th scope="col">Features</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row"><b>Storage: </b></th>
                                <td>${PhoneDetails.mainFeatures.storage}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>Display-size: </b></th>
                                <td>${PhoneDetails.mainFeatures.displaySize}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>Chipset: </b></th>
                                <td>${PhoneDetails.mainFeatures.chipSet}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>Memory: </b></th>
                                <td>${PhoneDetails.mainFeatures.memory}</td>
                            </tr>
                            </tbody>
                        </table>
                        <p class="card-text fs-6">
                            <b class="fs-5">Sensors</b>
                            <table class="table">
                                <tbody>
                                <tr>
                                    <td>${PhoneDetails.mainFeatures.sensors[0]}</td>
                                    <td>${PhoneDetails.mainFeatures.sensors[1]}</td>
                                </tr>   
                                    <td>${PhoneDetails.mainFeatures.sensors[2]}</td>
                                    <td>${PhoneDetails.mainFeatures.sensors[3]}</td>
                                <tr>
                                </tr>
                                <tr>
                                    <td>${PhoneDetails.mainFeatures.sensors[4]}</td>
                                    <td>${PhoneDetails.mainFeatures.sensors[5]}</td>
                                </tr>
                                </tbody>
                            </table>
                        </p> 

                        <p class="card-text fs-6">
                            <b class="fs-5">Other details</b>
                            <table class="table">
                            <tbody>
                            <tr>
                                <th scope="row"><b>WLAN: </b></th>
                                <td>${PhoneDetails.others.WLAN}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>Bluetooth: </b></th>
                                <td>${PhoneDetails.others.Bluetooth}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>GPS: </b></th>
                                <td>${PhoneDetails.others.GPS}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>NFC: </b></th>
                                <td>${PhoneDetails.others.NFC}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>Radio: </b></th>
                                <td>${PhoneDetails.others.Radio}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>USB: </b></th>
                                <td>${PhoneDetails.others.USB}</td>
                            </tr>
                            </tbody>
                        </table>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
        fullDetails.appendChild(div)
}
                 
                        