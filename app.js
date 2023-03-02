const correctAnswers  = ['A', 'C', 'B', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
// const outputScore = document.querySelector('span');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //answer checking
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score+=25;
        }
        
    });
    // console.log(score);
    // outputScore.textContent = `${score}%`;
    scrollTo(0,0);
    
    result.classList.remove("d-none");

    //animation of score
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }   
    }, 10);
});

// setInterval(()=>{
//     console.log("Set interval's callback fn triggeeredd");
// },2000);