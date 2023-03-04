var mainh1 = document.getElementById("MainH1")
function show(content){
    mainh1.style.color = "white"
    mainh1.append(content)
}

function SetAllButtonOnClick(){
    let buttons = document.getElementsByTagName("button")

    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].addEventListener("click",function(){
            var content = buttons[i].textContent;
            show(content);
        });
    }

    
}

SetAllButtonOnClick()
