var mainh1 = document.getElementById("MainH1")
function show(content){
    mainh1.style.color = "white"
    mainh1.append(content)
}
var selectedOperation = false;
function SetAllButtonOnClick(){
    let buttons = document.getElementsByTagName("button")

    for (let i = 0; i < buttons.length; i++) {
        let inner = buttons[i].innerHTML
        if(inner == "="){
            buttons[i].addEventListener("click",function(){
                mainh1.innerHTML = eval(mainh1.innerHTML)
                selectedOperation = true

            });
        }
        else if(inner == "+" || inner == "-" || inner == "*" || inner == "/"){
            buttons[i].addEventListener("click",function(){
                if(selectedOperation){

                    selectedOperation = false
                    mainh1.innerHTML += inner
                }
            });
        }
        else if(buttons[i].innerHTML == "AC"){
            buttons[i].addEventListener("click",function(){
                mainh1.innerHTML = ""
                selectedOperation = true
            });
        }
        else if(buttons[i].innerHTML == "C"){
            buttons[i].addEventListener("click",function(){
                mainh1.innerHTML = ""
                selectedOperation = true

            });
        }
        else{
            buttons[i].addEventListener("click",function(){
                var content = buttons[i].textContent;
                show(content);
                selectedOperation = true

            });
        }
    }

    
}

SetAllButtonOnClick()
