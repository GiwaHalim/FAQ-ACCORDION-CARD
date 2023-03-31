const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.answer')
const arrow = document.querySelectorAll('.arr-up')


// console.log(question.length)


for (let i = 0; i < question.length; i++){
    let click = 'unClicked'

    question[i].addEventListener('click', function(){
        if(click === 'unClicked'){
            question[i].style.color = 'black'
            answer[i].style.display = 'block'
            arrow[i].style.transform = 'rotateZ(180deg)'
            click = 'clicked'
        }else{
            question[i].style.color = 'hsl(240, 6%, 50%)'
            answer[i].style.display = 'none'
            arrow[i].style.transform = 'rotateZ(0deg)'
            click = 'unClicked'
        }
    })
}
