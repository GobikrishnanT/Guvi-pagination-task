//div for display the status;
let displayDiv = document.createElement('div');
displayDiv.setAttribute('class' , 'display');
displayDiv.style.marginRight = "50%";
displayDiv.textContent = "__!__";
displayDiv.style.width = "100%";
displayDiv.style.backgroundColor = "aqua";
displayDiv.style.height = "10vh";
displayDiv.style.textAlign = "center";
displayDiv.style.fontSize = "40px";
displayDiv.style.fontFamily = "Dancing Script";
document.body.appendChild(displayDiv);
//let create a table and contents
//1.create a table
let mainTable = elementCreater('table' , '' , 'table');
document.body.append(mainTable);

//2 . let create a thead and tbody for heading purpose 
let theadTr = document.createElement('tr');
let thead = elementCreater('thead' , '' , 'thead-dark');
let th1 = elementCreater('th' , 'ID');
let th2 = elementCreater('th' , 'Name');
let th3 = elementCreater('th' , 'Email-ID');
theadTr.append(th1 , th2 , th3);
thead.append(theadTr);
mainTable.appendChild(thead);



//Tag for body it is the main Tag
let tbody = document.createElement('tbody');
// mainTable.appendChild(tbody);




//Function to Create any element dynamically
function elementCreater(elementName , value='' , className='' , idName = '') {
    let tag = document.createElement(elementName);
    tag.setAttribute('class' , className);
    tag.setAttribute('id' , idName);
    tag.textContent = value;
    return tag;
}




//let create a button for accesss this data

for(let i = 0 ; i <= 12 ; i++) {

    if(i === 10) {
        let btn = document.createElement('button');
        btn.setAttribute('class' , 'btn-danger');
        btn.textContent = "First Page";
        btn.style.margin = "5px";
        btn.style.padding = "15px";
        document.body.append(btn);
    }

    else if(i === 11) {
        let btn = document.createElement('button');
        btn.setAttribute('class' , 'btn-success  stopper');
        btn.textContent = "Prev Page";
        btn.style.margin = "5px";
        btn.style.padding = "15px";
        document.body.append(btn);
    }

    else if(i === 12) {
        let btn = document.createElement('button');
        btn.setAttribute('class' , 'btn-info');
        btn.textContent = "Last Page";
        btn.style.margin = "5px";
        btn.style.padding = "15px";
        document.body.append(btn);
    }
    else {
        let btn = document.createElement('button');
        btn.setAttribute('class' , 'btn-primary');
        btn.textContent = i;
        btn.style.margin = "5px";
        btn.style.padding = "15px";
        document.body.append(btn);
    }
    
}

let xhr = new XMLHttpRequest();
xhr.open('GET' , 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json' , true);
xhr.send();



let myBtn = document.querySelectorAll('button');


//Function to add the content to table
function tableAdder(val , mainData) {
    if(val !== 'Prev Page') {
        tbody.innerHTML = "";
        if(val === 'First Page') {
            for(let i = 0 ; i < 10 ; i++) {
                let myBodyTr = document.createElement('tr');
                for(let index in mainData[i]) {
                    let myTd = document.createElement('td');
                    myTd.innerText = mainData[i][index];
                    myBodyTr.appendChild(myTd);
                    tbody.appendChild(myBodyTr);
                    mainTable.appendChild(tbody);
                }
            }
        }
        else if(val === 'Last Page') {
            for(let i = 90 ; i < 101 ; i++) {
                let myBodyTr = document.createElement('tr');
                for(let index in mainData[i]) {
                    let myTd = document.createElement('td');
                    myTd.innerText = mainData[i][index];
                    myBodyTr.appendChild(myTd);
                    tbody.appendChild(myBodyTr);
                    mainTable.appendChild(tbody);
                }
            }
        }
        else{
            for(let i = val*10 ; i < (val*10) + 10 ; i++) {
                let myBodyTr = document.createElement('tr');
                for(let index in mainData[i]) {
                    let myTd = document.createElement('td');
                    myTd.innerText = mainData[i][index];
                    myBodyTr.appendChild(myTd);
                    tbody.appendChild(myBodyTr);
                    mainTable.appendChild(tbody);
                }
            }
        }  
    }
    else{
        let prevVal = tbody.children;
        if(prevVal.length !== 0) {
            displayDiv.textContent = "__!__";
            let fromVal = prevVal[0].children[0].textContent;
            
            if(+fromVal !== 1) {
                tbody.innerHTML = "";
                for(let i = fromVal-11 ; i < fromVal-1 ; i++) {
                    let myBodyTr = document.createElement('tr');
                    for(let index in mainData[i]) {
                        let myTd = document.createElement('td');
                        myTd.innerText = mainData[i][index];
                        myBodyTr.appendChild(myTd);
                        tbody.appendChild(myBodyTr);
                        mainTable.appendChild(tbody);
                    }
                }
            }
            else{
               let btn = document.querySelector('.stopper');
               let timerId =  setInterval(() => {
                    btn.style.backgroundColor = "Silver";
                } , 100);

                setTimeout(() => {
                    clearInterval(timerId);
                    btn.style.backgroundColor = "green";
                } , 1000);
                displayDiv.textContent = "No page Available Before that";
            }
            
        }
        else{
            let btn = document.querySelector('.stopper');
            let timerId =  setInterval(() => {
                btn.style.backgroundColor = "Silver";
            } , 100);

            setTimeout(() => {
                clearInterval(timerId);
                btn.style.backgroundColor = "green";
            } , 1000);
            displayDiv.textContent = "No page Available Befor that";
        }
        
    }
}

for(let i = 0 ; i < myBtn.length ; i++) {
    myBtn[i].addEventListener('click' , (event) => {
        let mainData = JSON.parse(xhr.response);
        let catchedVal = event.target.textContent;
        displayDiv.textContent = "Hi, Visitor Welcome";
        tableAdder(catchedVal , mainData);
    });
}

