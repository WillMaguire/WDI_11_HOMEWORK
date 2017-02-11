//set torch color choicelist
var masterColorList =["Red","Blue","Green"];

var letThereBeLight = function(){
	//retrieve the color stored in button text
	var selectedColor = this.innerText;
	if(masterColorList.includes(selectedColor)){
		document.body.style.backgroundColor=selectedColor;
	}else{
		alert("Sorry, we do not have your desired color");
	}
}


var createColorListButtons = function(){
	var buttonList = document.getElementById('buttonPlaceHolder');
	for(var count=0;count<masterColorList.length;count++){
		var newButton = document.createElement('button');
		newButton.setAttribute("class", "button_class");
		//set color name to button text for user to choose from and function to use as parameter
		newButton.innerText=masterColorList[count];
		newButton.addEventListener('click',letThereBeLight);
		//adds button into container in html
		buttonList.appendChild(newButton);
	}
}

createColorListButtons();
