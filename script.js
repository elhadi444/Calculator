let operateur = ''
let num1 = 0
let num2 = 0

screen = document.querySelector('.screen')
document.querySelectorAll('.num').forEach(btn => btn.addEventListener('click', () => {
    if(screen.innerText == '0')
        screen.innerText = ''

    if(btn.value != '.')
        screen.innerText += btn.value    
    else if(btn.value == '.' && !screen.innerText.includes('.')){
        if(screen.innerText == '')
            screen.innerText = '0.'
        else
            screen.innerText += btn.value
    }
}))

document.querySelectorAll('.ope').forEach(ope => ope.addEventListener('click', () => {
    operateur = ope.innerText
    num1 = screen.innerText
    screen.innerText = '0'
}))



function del(){
    screen.innerText = screen.innerText.slice(0,-1)
    if(screen.innerText == '')
        clr()
}

function clr(){
    screen.innerText = '0'
    num1 = 0
    num2 = 0
}


function equ(){

    num2 = screen.innerText
    
    if(operateur =='+')
        screen.innerText = Math.round((Number(num1) + Number(num2))*100)/100
    else if(operateur=='-')
        screen.innerText = Math.round((Number(num1) - Number(num2))*100)/100
    else if(operateur=='x')
        screen.innerText = Math.round((Number(num1) * Number(num2))*100)/100
    else if(operateur=='÷'){
        if(num2 == 0)
            screen.innerText = "FDP \nDIV BY 0"
        else 
            screen.innerText = Math.round((Number(num1) / Number(num2))*100)/100
    }
    num1 = 0
    num2 = 0

}




