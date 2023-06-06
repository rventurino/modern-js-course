const d = new Date();
const hour = d.getHours();

console.log(hour);

if (hour < 12){
    console.log('good morning');
}else if(hour < 18){
    console.log('good afternoon');
} else{
    console.log('goodnight');
}

//nested if

if (hour < 12){
    console.log('good morning');
    if(hour < 6){
        console.log('wake up');
    }
}else if(hour < 18){
    console.log('good afternoon');
} else{
    console.log('goodnight');
}

//multiple conditions

if (hour >= 7 && hour < 15){
    console.log('it is work time');
}

if (hour === 6 || hour ===20){
    console.log('brush your teef');
}