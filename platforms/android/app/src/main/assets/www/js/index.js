document.addEventListener('deviceready', init);
const date = new Date();


function init() {

    const btn = document.getElementById('addItemBtn');
    btn.addEventListener("click", () => alert('Clicked!'));

    currentTime();
}

const currentTime = () => {


    // const day = date.getDay();
    getDay();

    const month = date.getMonth();
    const dateDD = date.getDate();

    const headerContainer = document.querySelector('#headerContainer');
    const headerDate = `
        <h1>${getDay()}</h1>
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
    // const getMonth = () => {
    //     switch (date.getMonth()) {

//         case 0:
//             return "SUNDAY"
//             break;
//         case 1:
//             return "MONDAY"
//             break;
//         case 2:
//             return "TUESDAY"
//             break;
//         case 3:
//             return "WEDNESDAY"
//             break;
//         case 4:
//             return "THURSDAY"
//             break;
//         case 5:
//             return "FRIDAY"
//             break;
//         case 6:
//             return "SATURDAY"
//             break;

//         default:
//             break;
//     }
// }