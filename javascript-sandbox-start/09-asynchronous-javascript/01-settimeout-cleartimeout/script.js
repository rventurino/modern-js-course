// setTimeout(changeText, 2000);

function changeText(){
    document.querySelector('h1').textContent = 'Hello From Callback'
}

const TimerId = setTimeout(changeText, 3000)

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(TimerId);
    clearTimeout(TimerId)
    console.log('Timer Cancelled');
})