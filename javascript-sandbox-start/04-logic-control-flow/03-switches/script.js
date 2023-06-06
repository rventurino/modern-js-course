const d = new Date(2022, 1, 10, 8, 0, 0 )
const month = d.getMonth()

switch ( month ){
    case 1:
        console.log('January');
        break;
    case 2: 
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('It is not Jan feb or march');
}