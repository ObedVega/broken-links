fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {
  console.log('Tu dirección IP pública es: ' + data.ip);
  console.log('Tu ciudad es: ' + data.city);
})
.catch(error => {
  console.error('Error al obtener la información de geolocalización: ' + error);
});