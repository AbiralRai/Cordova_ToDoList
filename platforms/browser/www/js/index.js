document.addEventListener('deviceready', init);
const date = new Date();


function init() {

    const btn = document.getElementById('addItemBtn');

    currentDate();
}


const currentDate = () => {

    getDay();
    getMonth();
    const getDate = date.getDate();

    const headerContainer = document.querySelector('.current-date');
    const headerDate = `
        <h3>${getDay() + ' ' + getMonth() + ' ' + getDate}</h3>
    `;
    headerContainer.innerHTML = headerDate;

}

const getDay = () => {
    switch (date.getDay()) {

        case 0:
            return "SUNDAY"
            break;
        case 1:
            return "MONDAY"
            break;
        case 2:
            return "TUESDAY"
            break;
        case 3:
            return "WEDNESDAY"
            break;
        case 4:
            return "THURSDAY"
            break;
        case 5:
            return "FRIDAY"
            break;
        case 6:
            return "SATURDAY"
            break;

        default:
            break;
    }
}
const getMonth = () => {
    switch (date.getMonth()) {

        case 0:
            return "January"
            break;
        case 1:
            return "February"
            break;
        case 2:
            return "March"
            break;
        case 3:
            return "April"
            break;
        case 4:
            return "May"
            break;
        case 5:
            return "June"
            break;
        case 6:
            return "July"
            break;
        case 7:
            return "August"
            break;
        case 8:
            return "September"
            break;
        case 9:
            return "October"
            break;
        case 10:
            return "November"
            break;
        case 11:
            return "December"
            break;

        default:
            break;
    }
}