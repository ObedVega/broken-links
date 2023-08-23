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

    var interval = setInterval(incrementProgress, 100); // Adjust the speed of the progress here
  });
  }



  async function postData() {
  //  alert('test');
    var mensaje = document.getElementById("message");
    var url = document.getElementById("siteAuditForm").value;
    //alert(input);
    if(url!==""){
      var progressBar1 = document.getElementById("bar");
      var progressBar2 = document.getElementById("progress-bar");
      var result = document.getElementById("results");
      progressBar1.classList.remove("s2");
      progressBar2.classList.remove("s2");
      mensaje.classList.add("s0");
    

      await startLoading();
      
      await getData(result, url);
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
  
  async function getData(result, url){
    result.classList.remove("s1");
    await showLoader();
  //  alert(url);
  //  url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then((response) => {
    //  console.log(response);
      return response.json();
    })
    .then((data) => {
      hideLoader();
      let authors = data;
      let listGroup = document.getElementById("resultados");

      let listItems = authors.map(author => {
        let { name, email } = author;
        return `
          <li class="list-group-item listext">
            <span class="reddot"></span>
            <span class="textrs">${name}</span>
            <span class="flex-spacer"></span>
            <button type="button" class="btn btn-outline-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
              <span class="textbutton">View issue</span>
            </button>
          </li>
        `;
      });

      listGroup.innerHTML = listItems.join('');
    })
    .catch(error => {
      hideLoader();
      console.error('Error:', error);
    });
  }