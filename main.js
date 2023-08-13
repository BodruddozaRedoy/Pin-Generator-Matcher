//1. Use common function
displayNone('tryContent');

//Empty Value
function emptyValue(id){
    document.getElementById(id).value = '';

}

//Empty Text
function emptyText(id){
    document.getElementById(id).innerText = '';

}

//Display None
function displayNone(id){
    document.getElementById(id).style.display = 'none';
}
//Display Block
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}



//2. Generate Random Number
function randomNumFun(){
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;

    emptyValue('inputPin');
    displayNone('matched');
    displayNone('unmatched');
    displayNone('tryContent');

    
}



//3. Input Number Value
function btnKey(id){
    let prevValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + key
}

//4. Clean and Clear input Value
function clean(){
    document.getElementById('inputPin').value = '';
}
function cleanLast(){
    let inputResult = document.getElementById('inputPin').value;
    let removeValue = inputResult.slice(0, -1);
    document.getElementById('inputPin').value = removeValue
}

//5. Submit Button
function submitBtn(){
    let randomNum = document.getElementById('generateNum').value;
    let typeNum = document.getElementById('inputPin').value;

    if(randomNum == typeNum){
        displayBlock('matched')
        displayNone('unmatched')
        displayNone('tryContent')

    }
    else{
        displayBlock('unmatched')
        displayNone('matched')
        tryLeft('tryLeft')
        displayBlock('tryContent')

    }
}

//6. Error try
function tryLeft(id){
    let tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;

    if(tryAgain == '1'){
        disableBtn('submit')
    }
}

//7. Disable Button
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed'
    button.setAttribute('disabled', 'true')
    

}