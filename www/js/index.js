//
const date = new Date();
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady);
        const li = document.createElement('li');
        let data = localStorage.getItem('taks');
        if (data) {}
    },
    onDeviceReady: function() {
        document.addEventListener('pause', app.onPause);
        document.addEventListener('resume', app.onResume);
        app.receivedEvent('deviceready');
    },
    onPause: function() {
        console.log("Device on pause");
    },
    onResume: function() {
        console.log("Device on resume");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        const addTask = document.querySelector('.footer__icon-add');
        addTask.addEventListener('click', app.createListElement);
        // currentTime();
        app.currentTime();
    },
    lengthOfUserInput: function() {
        return document.querySelector('.todolist');
    },
    userInputLength: function() {
        return app.lengthOfUserInput().value.length;
    },
    checkList: function() {
        return document.querySelectorAll('li').length;
    },
    createListElement: function() {
        const h2 = document.querySelector('.emptyList');
        const li = document.createElement('li');
        const ul = document.querySelector('.main__list--ul');
        li.append(document.createTextNode(app.lengthOfUserInput().value));
        ul.append(li);
        li.addEventListener("click", toggleList);
        app.lengthOfUserInput().value = "";

        function toggleList() {
            li.classList.toggle("done");
        }

        if (app.checkList() > 0) {
            h2.classList.add("notEmptyList");
        }
    },
    currentTime: function() {
        app.getDay();
        app.getMonth();
        const getDate = date.getDate();

        const headerContainer = document.querySelector('.current-date');
        const headerDate = `
        <h3>${app.getDay() + ' ' + app.getMonth() + ' ' + getDate}</h3>
    `;
        headerContainer.innerHTML = headerDate;
    },
    getDay: function() {
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
    },
    getMonth: function() {
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

};
app.initialize();
// document.addEventListener('deviceready', init);

// const addTask = document.querySelector('.footer__icon-add');
// const userListInput = document.querySelector('.todolist');

// function init() {

//     addTask.addEventListener('click', createListElement);
//     currentTime();

// }

// function onPause() {
//     console.log("Paused");
// }

// function onResume() {
//     console.log("resume");
// }


// function userInputLength() {
//     return userListInput.value.length;
// }

// function checkList() {
//     return document.querySelectorAll('li').length;
// }

// function createListElement() {
//     const h2 = document.querySelector('.emptyList');
//     const li = document.createElement('li');

//     li.append(document.createTextNode(userListInput.value));
//     ul.append(li);
//     li.addEventListener("click", toggleList);
//     userListInput.value = "";

//     function toggleList() {
//         li.classList.toggle("done");
//     }

//     if (checkList() > 0) {
//         h2.classList.add("notEmptyList");
//     }

// }


// const currentTime = () => {

//     getDay();
//     getMonth();
//     const getDate = date.getDate();

//     const headerContainer = document.querySelector('.current-date');
//     const headerDate = `
//         <h3>${getDay() + ' ' + getMonth() + ' ' + getDate}</h3>
//     `;
//     headerContainer.innerHTML = headerDate;

// }

// const getDay = () => {
//     switch (date.getDay()) {

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
// const getMonth = () => {
//     switch (date.getMonth()) {

//         case 0:
//             return "January"
//             break;
//         case 1:
//             return "February"
//             break;
//         case 2:
//             return "March"
//             break;
//         case 3:
//             return "April"
//             break;
//         case 4:
//             return "May"
//             break;
//         case 5:
//             return "June"
//             break;
//         case 6:
//             return "July"
//             break;
//         case 7:
//             return "August"
//             break;
//         case 8:
//             return "September"
//             break;
//         case 9:
//             return "October"
//             break;
//         case 10:
//             return "November"
//             break;
//         case 11:
//             return "December"
//             break;

//         default:
//             break;
//     }
// }