async function startLoading() {
  var progressBar = document.getElementById("progress-bar");
  var width = 0;

  await new Promise(resolve => {
    function incrementProgress() {
      if (width >= 100) {
        clearInterval(interval);
        progressBar.classList.add("loading-complete");
        resolve(); // Resolve the promise when loading is complete
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }

    var interval = setInterval(incrementProgress, 20); // Adjust the speed of the progress here
  });
  }



  async function postData(lan) {
  //  alert('test');
    var mensaje = document.getElementById("message");
    var url = document.getElementById("siteAuditForm").value;
    //alert(input);
    if(url!==""){
      var progressBar1 = document.getElementById("bar");
      var progressBar2 = document.getElementById("progress-bar");
      var result = document.getElementById("results");
      var mensaje2 = document.getElementById("m2");
      progressBar1.classList.remove("s2");
      progressBar2.classList.remove("s2");
      mensaje.classList.add("s0");
      var linkWithoutProtocol = url.replace("https://", "");

      await startLoading();
      mensaje2.classList.remove("s3");
      await getData(result, linkWithoutProtocol, lan);
    }else{
      mensaje.classList.remove("s0");
    //  alert('input vacio');
    }     
  }
  async function showLoader() {
    document.getElementById("loader").style.display = "block";
  }
  
  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }
  
  async function getData(result, url, lan){
    result.classList.remove("s1");
    await showLoader();

//    let api = `http://localhost:8000/api/check/${url}/`
//    let api = `https://django-wv7q.onrender.com/api/check/${url}/`
    let api = `https://api.bustedweb.me/check/${url}/`
    fetch(api)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      hideLoader();
      let issue = '';
      let resultado = data;
      let listGroup = document.getElementById("resultados");
    //  alert(lan);
    switch (lan) {
      case 'ja':
        issue = '問題を見る';
        break;
      case 'fr':
        issue = 'Afficher le problème';
        break;
      case 'es':
        issue = 'Ver problema';
        break;
      case 'cn':
        issue = '查看问题';
        break;
      default:
        issue = 'View issue'
    }
    /*
      if (lan==='ja'){
        issue = '問題を見る';
      }*/
      let listItems = resultado.map(res => {
        let { ruta, status } = res;
      //  if (res.status !== '0'){
      //    if(lan==='ja'){
      //      ruta = '壊れたリンクは見つかりませんでした';
      //    }
      //  }
        return `
          <li class="list-group-item listext">
            <span class="reddot"></span>
            <span class="textrs"><a href="${ruta}">${ruta}</a></span>
            <span class="mlink"> &nbsp;  &nbsp; ${status}</span>
            <span class="flex-spacer"></span>
            <button type="button" class="btn btn-outline-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
              <span class="textbutton">${issue}</span>
            </button>
          </li>
        `;
      });

      listGroup.innerHTML = listItems.join('');
    })
    .catch(error => {
      hideLoader();
      console.error(error);
    });
  }
