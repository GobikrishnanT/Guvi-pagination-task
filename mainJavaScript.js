//Creating div for input for user to enter their brthday date
//1. div
let div1 = elementCreater('div' , '' , 'input_container_cls' , 'input_container_id');
div1.style.textAlign = "Center";
div1.style.backgroundColor = "aqua";
//2. Label for input
let label_for_inputDate = elementCreater('Label' , 'Hello user' , 'label_for_input_cls' , '' , 'input_date_id');
label_for_inputDate.style.fontSize = "25px";
label_for_inputDate.style.fontWeight = "bolder";
//3 . input
let input_for_date = document.createElement('input');
input_for_date.setAttribute('type' , 'date');
//input_for_date.setAttribute('value' , '0');
input_for_date.id="input_date_id";
input_for_date.style.margin="10px";
input_for_date.style.width = "30%";

//4.Creating the button for it:
let myBtn = document.createElement('button');
myBtn.setAttribute('type' , 'click');
myBtn.textContent = "See it !!!";
myBtn.style.margin = "10px";

// // 5 . Create a table for show the output :
// let myTable = document.createElement('table');
// let mytr = document.createElement('tr');
// myTable.append(mytr);


//appending the child for label
label_for_inputDate.appendChild(input_for_date);
//Appending the label box to main box;
div1.append(label_for_inputDate , myBtn);
//Appending it to the body
document.body.append(div1);


let tempdiv = document.createElement('div');
tempdiv.style.background = "black";
tempdiv.style.color = "white";
tempdiv.style.fontStyle = "Times New Roman";
div1.append(tempdiv);
//Now create a addEvent listener for the button:
myBtn.addEventListener('click' , (event) => {
    tempdiv.innerHTML = "";
    let entered_date_timeStamp = input_for_date.valueAsNumber;
    let myDate = input_for_date.valueAsDate;
    let div_0 = document.createElement('div');
    div_0.innerText = myDate;
    let age_in_MiliSeconds = Date.now() - entered_date_timeStamp;
    


   let seconds = 1000 ; //1 sec = 1000ms
   let minutes = 60 * seconds ; // for 1 minute - > 60 sec for converting to miliseconds - > * by 1000
   let hours = 60 * minutes ; // for 1 hour = 60 minutes for convert to ms -> * seconds
   let day = 24 * hours;
   let month = 30 * day;
   let year = 365 * day;


   let age_in_year = Math.round(age_in_MiliSeconds / year);
   let div_1 = document.createElement('div');
    div_1.innerText = age_in_year;
   
   let age_in_months = Math.round(age_in_MiliSeconds / month);
   let div_2 = document.createElement('div');
    div_2.innerText = age_in_months;
 
   let age_in_days = Math.round(age_in_MiliSeconds / day);
   let div_3 = document.createElement('div');
    div_3.innerText = age_in_days;
   
   let age_in_hour = Math.round(age_in_MiliSeconds / hours);
   let div_4 = document.createElement('div');
    div_4.innerText = age_in_hour;
   
   let age_in_min = Math.round(age_in_MiliSeconds / minutes);
   let div_5 = document.createElement('div');
    div_5.innerText = age_in_min;
   
   let age_in_sec = Math.round(age_in_MiliSeconds / seconds);
   let div_6 = document.createElement('div');
    div_6.innerText = age_in_sec;

    let div_miliSec_7 = document.createElement('div');
    div_miliSec_7.innerText = age_in_MiliSeconds;


    // let myStyle = document.createElement('style');
    // myStyle.innerHTML = `
    //     .div_1 , .div_2 , .div_3 , .div_4 , .div_5 , .div_6 , .div_miliSec_7 {
    //         background: linear-gradient(180deg , rgb(145, 248, 145) , rgb(2, 253, 2));
    //     }
    // `;

    // document.head.appendChild(myStyle);
    
    tempdiv.append(div_0 , div_1 , div_2 , div_3 , div_4 , div_5 , div_6 , div_miliSec_7)
});
