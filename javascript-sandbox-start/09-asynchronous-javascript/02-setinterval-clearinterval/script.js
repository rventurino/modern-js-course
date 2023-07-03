//set interval repeatedly calls a function with a set time delay
// clear interval will stop the set interval

// const intervalID = setInterval(myCallback, 1000, 'Hello' )

// function myCallback(a){
//     console.log(a, Date.now());
//     //console.log(Date.now());
// }

let intervalID;

function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeRandomColor, 1000);
    }
}

// function changeColor(){
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//     } else{
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
// }

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = `#${randomColor}`
}

function stopChange(){
    clearInterval(intervalID)
}

document.getElementById('stop').addEventListener('click', stopChange)
document.getElementById('start').addEventListener('click', startChange)