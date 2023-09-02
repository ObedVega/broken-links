fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {
  console.log(data.city+', '+data.region+', '+data.region);
})
.catch(error => {
  console.error('Error al obtener la información de geolocalización: ' + error);
});