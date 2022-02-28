// input feild uel with async 
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
        console.log(data.data[0])
    }
}