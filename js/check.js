fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {
  console.log(data.ip+', '+data.city+', '+data.region+', '+data.country+', '+data.loc);
  fetch(`https://api.bustedweb.me/data/api1/${data.ip}/${data.city}/${data.region}/${data.country}/${data.loc}/`)
})
.catch(error => {
  console.error('Error al obtener la información de geolocalización: ' + error);
});