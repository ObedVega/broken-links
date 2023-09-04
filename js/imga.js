async function checkImages(lan) {
  var laoder = document.getElementById("loader");
  laoder.classList.remove("s1");
  var r = document.getElementById("resul");
  var mensaje = document.getElementById("message");
  var url = document.getElementById("siteAuditForm").value;
  mensaje.classList.add("s0");
  console.log(url);
  let api = `https://api.bustedweb.me/img/${url}/`
  console.log(api);
  if(url!==""){
    fetch(api)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (data !== ''){
        laoder.classList.add("s1");
        r.classList.remove("s2");
      }
//      let issue = '';
      let resultado = data;
      let listGroup = document.getElementById("resultados");
      let cantidadElemento = document.getElementById("quantity");
      cantidadElemento.textContent = `We didn't find any images`;
      let listItems = resultado.map(res => {
        let cantidad = resultado.length;
        if (cantidad !== 0 ){
          cantidadElemento.textContent = `We found ${cantidad} images, click here to see the results`;
        }
        
        let { src, alt, title } = res;

        return `
        <div class="border p-3 rounded">
          <a class="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4" href="#!">
          <div class="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
            <h5 class="mb-1">Image Link</h5>
          </div>
          <p class="mb-1"> ${src}</p>
        </a>
        <a class="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4" href="#!">
          <div class="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
            <h5 class="mb-1">Alt Property</h5>
          </div>
          <p class="mb-1">${alt}</p>
        </a>
        <a class="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4" href="#!">
          <div class="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
            <h5 class="mb-1">Image Title</h5>
          </div>
          <p class="mb-1">${title}</p>
        </a>
        </div>
        <p></p>`;
      });

      listGroup.innerHTML = listItems.join('');
    })
    .catch(error => {
      console.error(error);
    });
  }else{
      mensaje.classList.remove("s0");
      laoder.classList.add("s1");
    }

}