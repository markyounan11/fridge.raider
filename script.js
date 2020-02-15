// get variables for input
const $runSearch = $('#run-search');
let ingredientsArr = [];


/*  keep these comments for reference */
// const edamamID = "1c01fad2";
// const edamamAPI = "ffbeaab2531fe96153c73abbf7d533f8";
// let edamamURL = "https://api.edamam.com/search?"
$runSearch.on('click', function(event) {
    event.preventDefault();
    let $firstInput = $('#firstInput').val();
    let $secondInput = $('#secondInput').val();
    let $thirdInput = $('#thirdInput').val();
  let edamamURL = "https://api.edamam.com/search?"
    + "q=" + $firstInput + "&" + $secondInput + "&" + $thirdInput
    + "?app_id=1c01fad2&app_key=ffbeaab2531fe96153c73abbf7d533f8";
    
    console.log(edamamURL);

    $.ajax({
        url: edamamURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
    
          let suggestedRecipes = response.hits[0].recipe.url;
          let label = response.hits[0].recipe.label;
          console.log(suggestedRecipes);

          //create variables for div
        let $topChoice = $('#well-section');
        //create variable for href
        let $link = $('<a>');
        $link.attr("href", suggestedRecipes).text(label);


          //append suggestedRecipes to new
          $topChoice.append($link);
        
          
          //find images in api
          //set variable for div with class attr of row
          //set variable for div with column
          //set variable for image tag
          //append image using the image from api into this column
          
          //find ingredientlist in api
          //set variable for div
          
    });
});

/* >>>>>>>>>>>>>>>>>>>code for the new API >>>>>>>>>>>>>>>*/
$('#firstInput').focusout(function(){
    
  let pixabayURL = "https://pixabay.com/api/?" 
  +"key=15274524-8509ca86589479da97506d85c" + "&q=" + $('#firstInput').val() + "&image_type=photo";

  $.ajax({
      url: pixabayURL,
      method: "GET"
  }).then(function(response){
      let foodImg = response.hits[0].previewURL;
      $('#image1').attr('src', foodImg);
      // console.log(pixabayURL,foodImg);
  });
});

$('#secondInput').focusout(function(){

let pixabayURL = "https://pixabay.com/api/?" 
+"key=15274524-8509ca86589479da97506d85c" + "&q=" + $('#secondInput').val() + "&image_type=photo";

$.ajax({
  url: pixabayURL,
  method: "GET"
}).then(function(response){
    let foodImg = response.hits[0].previewURL;
    $('#image2').attr('src', foodImg);
    // console.log(pixabayURL,foodImg);
});

});
$('#thirdInput').focusout(function(){

let pixabayURL = "https://pixabay.com/api/?" 
+"key=15274524-8509ca86589479da97506d85c" + "&q=" + $('#thirdInput').val() + "&image_type=photo";

$.ajax({
  url: pixabayURL,
  method: "GET"
}).then(function(response){
    let foodImg = response.hits[0].previewURL;
    $('#image3').attr('src', foodImg);
    console.log(pixabayURL,foodImg);
});

});

/* <<<<<<<<<<<<<<code for the new API <<<<<<<<<<*/




// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=6722b04f831c48d2b8b90e494cc56fd6

// This is the area for the carousel
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }