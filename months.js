let month = 3; 
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "This month is Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "This month is Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "This month is Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "This month is Autumn";
        break;
    default:
        season = "Invalid month number. Please enter a number between 1 and 12.";
}

console.log(season);