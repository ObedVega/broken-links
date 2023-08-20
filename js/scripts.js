function startLoading() {
    var progressBar = document.getElementById("progress-bar");
    var width = 0;
    var interval = setInterval(function() {
      if (width >= 100) {
        clearInterval(interval);
        progressBar.classList.add("loading-complete");
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 100); // Adjust the speed of the progress here
  }
s
//  window.onload = 

  function postData() {
  //  alert('test');
    var mensaje = document.getElementById("message");
    var input = document.getElementById("siteAuditForm").value;
    //alert(input);
    if(input!==""){
      var progressBar1 = document.getElementById("bar");
      var progressBar2 = document.getElementById("progress-bar");
      var result = document.getElementById("results");
      progressBar1.classList.remove("show");
      progressBar2.classList.remove("show");
      mensaje.classList.add("show0");
      result.classList.remove("show1");

      startLoading();
    }else{
      mensaje.classList.remove("show0");
    //  alert('input vacio');
    }     
  }