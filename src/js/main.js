var apod = {
    //Create a random date
    randomDate: function(start, end) {
      //Randomize the date https://gist.github.com/miguelmota/5b67e03845d840c949c4
      let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
      //Format the date
      let d = date.getDate();
      let m = date.getMonth() + 1; //In JS months start at 0
      let y = date.getFullYear();

      //Change the month and day strings so that they match the documented format.
      if(m < 10){
        m = '0'+m
      }

      if(d < 10){
        d = '0'+d
      }

      return `${y}-${m}-${d}`;
    },

    

//Injects the results of the API call into the DOM
buildDOM: function (result) {
    document.getElementById('apodTitle').innerHTML(result.title);
  
    if(result.media_type === 'video') {
      document.getElementById('apodImg').style.display = 'none';
      let vid = document.getElementById('apodVideo'> iframe);
      // .attr("src", result.url).show();
      vid.src=result.url;
      document.getElementById('#apodVideo').style.display="block";
    } else {
      document.getElementById('apodVideo').style.display = 'none';
      let ig = document.getElementById('apodImg');
      // .attr("src", result.url).attr('alt', result.title).show();
      ig.src=result.url;
      ig.style.display="block";
    }
  if(result.copyright!=undefined){
    document.getElementById('apodCopyright').innerHTML = "Copyright: " + result.copyright;
  }  
    document.getElementById('apodDate').innerHTML = "Date: " + result.date;
    document.getElementById('apodDesc').innerHTML = result.explanation;
    
  },
  
  //Executes an AJAX call to an API.

// Vanilla
  getRequest: function() {
    let _this = this;
    let date = this.randomDate(new Date(1995, 5, 16), new Date());
    let url = "https://api.nasa.gov/planetary/apod?api_key=IS8AMPyEu669E707Z4S2fuVY1WjcGSz9dqYwjX5l&date=";
    

// Vanilla
var httpRequest = new XMLHttpRequest();
// = function (data) {
//  let _this = this;
// httpRequest.onreadystatechange
//  let date = this.randomDate(new Date(1995, 5, 16), new Date());
//  }
httpRequest.open('GET', url);
httpRequest.send()
    

httpRequest.onload = function(){
  let result = JSON.parse(httpRequest.response);
  _this.buildDOM(result);
}
  },

  //   $.ajax({
  //       url: url
  //   }).done(function(result){
  //       _this.buildDOM(result);
  //   }).fail(function(result){
  //     console.log(result);
  //   });
  // },
  

  // Initialization method.
  init: function() {
    this.getRequest();
  },

        
};
apod.init();

/* https://learn.jquery.com/using-jquery-core/document-ready/ */
var apod = function() {
    document.getElementById('btnRandApod').addEventListener('click',function(){
      apod.getRequest();
 });

}

  
