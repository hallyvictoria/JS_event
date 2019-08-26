// Function 1 - Click//

var clickerFooter = document.getElementsByTagName("footer");

var x = 0;

var onFooterClick = function(){ 

	console.log(`clic numéro ${x}`);
	x += 1
}

clickerFooter[0].addEventListener("click", onFooterClick);



// Function 2 - Burger Menu //

var clickerBurger = document.getElementsByClassName("navbar-toggler");
var burgerBtn = document.getElementById("navbarHeader")


var onBurgerClick = function(){
	
	burgerBtn.classList.toggle('collapse')
}

clickerBurger[0].addEventListener("click", onBurgerClick);



// Function 3 - Edit Card //

var editBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
var cardText = document.getElementsByClassName("card-text");

var onEditClick = function(){

	cardText[0].style.color = 'red'
}

editBtn[0].addEventListener("click", onEditClick);



// Function 4 - Edit Card Green //

var onEditClickGreen = function(){

	if (cardText[1].style.color === 'green') {
		cardText[1].style.color = '#212529';
	} else {
		cardText[1].style.color = 'green';
	}
};

editBtn[1].addEventListener("click", onEditClickGreen);



// Function 5 - Nuclear //

var navBar = document.getElementsByTagName("header")[0];

var onNavbarClick = function(){
  if (document.styleSheets[0].disabled == false) {
  document.styleSheets[0].disabled = true;
} else {
  document.styleSheets[0].disabled = false;
  }
}
navBar.addEventListener("dblclick", onNavbarClick)


// Function 6 - View //

var viewBtn = document.getElementsByClassName("btn btn-sm btn-success");
var cardImg = document.getElementsByClassName("card-img-top")
var cardReduce = false

var onEditHover = function(i){

	cardText[0].style.fontSize = "0px";
	cardImg[0].style.height = "20%";
    cardImg[0].style.width = "20%";

}

viewBtn[0].addEventListener("mouseover", onEditHover);


// Function 7 - View //

var cardScrollRightBtn = document.getElementsByClassName('btn-secondary')[0];
var cardAlbum = document.getElementsByClassName("album")

var onScrollRightBtnClick = function() {
  cardAlbum.insertBefore(cardAlbum[5], cardAlbum[0]);
}

cardScrollRightBtn.addEventListener("click", onScrollRightBtnClick);




