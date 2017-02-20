console.log('ebanking');




//saving account variables
var displaySavBal = document.querySelector('.displaySav');
var savBalanceAmt = 1000;
displaySavBal.innerHTML = savBalanceAmt;

// Checking Account variables
var displayChkBal = document.querySelector('.displayChk');
var chkBalanceAmt = 1000;
displayChkBal.innerHTML = chkBalanceAmt;

var totalBalance = savBalanceAmt + chkBalanceAmt;
var getAmt = document.querySelector('.getAmt');


// changes to different background color when balance
//  in saving account is zero or more than zero
var changeBackgroundColor = function(color0 , color1){

	if(savBalanceAmt === 0){

		document.querySelector('.saving').style.
		backgroundColor = color0;

	}else if(chkBalanceAmt === 0){

		document.querySelector('.checking').style.
		backgroundColor = color0;

    }else if(savBalanceAmt !== 0){

    	document.querySelector('.saving').style.
		backgroundColor = color1;

	}else if(chkBalanceAmt !== 0){

		document.querySelector('.checking').style.
		backgroundColor = color1;
    }
}

// deposit in saving account
var depositeSaving = function(){

    savBalanceAmt += +getAmt.value;
    displaySavBal.innerHTML = savBalanceAmt;

    changeBackgroundColor("red" , "grey");
}

var depositeBtn = document.querySelector('.sDepo-btn');
depositeBtn.addEventListener('click',depositeSaving);


// Saving Withdraw
var withdrawSaving = function(){

	if(+getAmt.value <= savBalanceAmt){

		savBalanceAmt -= +getAmt.value; 
		displaySavBal.innerHTML = savBalanceAmt;

        changeBackgroundColor("red" , "grey");    

   }else if((+getAmt.value > savBalanceAmt) && 
   	        (+getAmt.value <= totalBalance)){

     	var shortAmt = +getAmt.value - savBalanceAmt;

     	savBalanceAmt -= (+getAmt.value - shortAmt);
     	displaySavBal.innerHTML = savBalanceAmt;

     	chkBalanceAmt -= shortAmt;
     	displayChkBal.innerHTML = chkBalanceAmt;

     	changeBackgroundColor("red" , "grey");  


     	

   }

}

var withdrawBtn = document.querySelector('.sWith-btn');
withdrawBtn.addEventListener('click',withdrawSaving);






// Checking Account 

// //get amount frm chaking account
// var getAmt = document.querySelector('.getAmt');


// deposit in saving account
var depositeChecking = function(){

    chkBalanceAmt += +getAmt.value;
    displayChkBal.innerHTML = chkBalanceAmt;

    changeBackgroundColor("red" , "grey");
}

var depositeBtnChk = document.querySelector('.cDepo-btn');
depositeBtnChk.addEventListener('click',depositeChecking);


// Checking Withdraw
var withdrawChecking = function(){

	if(+getAmt.value <= chkBalanceAmt){

		chkBalanceAmt -= +getAmt.value; 
		displayChkBal.innerHTML = chkBalanceAmt;

        changeBackgroundColor("red" , "grey");
    }
}

var withdrawBtnChk = document.querySelector('.cWith-btn');
withdrawBtnChk.addEventListener('click',withdrawChecking);
