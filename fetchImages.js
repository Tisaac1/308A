async function getPhoto(e) {
    e.preventDefault()
    console.log(e.target.value)
 document.getElementById('Image').innerHTML = ''

const query = duckSelect.value
const photReq = await axios.get('https://random-d.uk/api/randomimg')
const photo = await photoReq.data

console.log(photo,photo[0].src.orginal)
const img = document.createElement('Image2')
img.classList.add('duck')
}