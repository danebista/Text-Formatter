updateText=()=>{
    document.getElementById("text-output").innerText=
    document.getElementById('text-input').value
}

makeBold=(elem)=>{

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

makeItalic=(elem)=> {

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

makeUnderlined=(elem)=> {

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

textAlign=(elem, alignType)=>{

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
    for(let buttons of buttonList){
        if (elem== buttons) continue;

        buttons.classList.remove('active')
        buttons.classList.remove('btn-dark')
        buttons.classList.add('btn-light')
    }
}
