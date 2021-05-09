function updateText(){
    document.getElementById("text-output").innerText=
    document.getElementById('text-input').value
}

function makeBold(elem){

    elem.classList.toggle("active");
    elem.classList.remove("btn-light");
    elem.classList.add("btn-dark");

    document.getElementById("text-output").classList.add("bold");
    
    if (!elem.classList.contains("active")){
        document.getElementById("text-output").classList.remove("bold");
        elem.classList.add("btn-light");
        elem.classList.remove("btn-dark");
    
    }
    
}

function makeItalic(elem) {

    elem.classList.toggle("active");
    elem.classList.remove("btn-light");
    elem.classList.add("btn-dark");

    document.getElementById("text-output").classList.add("italic");
    
    if (!elem.classList.contains("active")){
        document.getElementById("text-output").classList.remove("italic");
        elem.classList.add("btn-light");
        elem.classList.remove("btn-dark");
    
    }
}

function makeUnderlined(elem) {

    elem.classList.toggle("active");
    elem.classList.remove("btn-light");
    elem.classList.add("btn-dark");

    document.getElementById("text-output").classList.add("underline");
    
    if (!elem.classList.contains("active")){
        document.getElementById("text-output").classList.remove("underline");
        elem.classList.add("btn-light");
        elem.classList.remove("btn-dark");
    
    }
}

function textAlign(elem, alignType){

    if (elem.classList.contains('active')){
        document.getElementById('text-output').style.textAlign=null;
        elem.classList.remove('active')
        elem.classList.remove('btn-dark')
        elem.classList.add('btn-light')
    }
    else{
    document.getElementById('text-output').style.textAlign=alignType;
    elem.classList.remove('active','btn-light')
    elem.classList.add('active','btn-dark')
    }
    
    let buttonList=document.getElementsByClassName('align')
    for(let i=0; i<buttonList.length;i++){
        if (elem== buttonList[i]) continue;

        buttonList[i].classList.remove('active')
        buttonList[i].classList.remove('btn-dark')
        buttonList[i].classList.add('btn-light')
    }
   
}
