var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady);

    },
    onDeviceReady: function() {
        document.addEventListener('pause', app.onPause);
        document.addEventListener('resume', app.onResume);
        app.receivedEvent('deviceready');
        data.forEach(item => {
            app.createListElement(item);
        })
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
        // const clearBtn = document.querySelector('#button');

        addTask.addEventListener('click', app.addListAfterClick);
        // clearBtn.addEventListener('click', () => {
        //     localStorage.clear();
        //     while (ul.firstChild) {
        //         ul.removeChild(ul.firstChild);
        //     }
        // });

        // currentTime();
        app.currentTime();
    },
    UserInput: function() {
        // return document.querySelector('.todolist');
        return input;
    },
    userInputLength: function() {
        // return app.UserInput().value.length;
        return input.value.length;
    },
    checkList: function() {
        return document.querySelectorAll('li').length;
    },
    addListAfterClick: function() {
        if (app.userInputLength() > 0)
        // return app.createListElement();
            return app.createListElement(input.value);
    },
    createListElement: function(text) {
        const h2 = document.querySelector('.emptyList');
        const li = document.createElement('li');
        li.textContent = text;
        li.classList.add("ui-li-static", "ui-body-inherit");
        ul.append(li);
        // const ul = $('.main__list--ul');
        // li.append(document.createTextNode(app.UserInput().value));
        // ul.append(li).listview('refresh');
        li.addEventListener("click", toggleList);
        // app.UserInput().value = "";

        // Storing input value from user
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        input.value = '';

        function toggleList() {
            li.classList.toggle("done");
        }

        // if (app.checkList() > 0) {
        //     h2.classList.add("notEmptyList");
        // }
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
// app.initialize();


/*var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady);

    },
    onDeviceReady: function() {
        document.addEventListener('pause', app.onPause);
        document.addEventListener('resume', app.onResume);
        app.receivedEvent('deviceready');
        data.forEach(item => {
            app.createListElement(item);
        })
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
        // const clearBtn = document.querySelector('#button');

        addTask.addEventListener('click', app.addListAfterClick);
        // clearBtn.addEventListener('click', () => {
        //     localStorage.clear();
        //     while (ul.firstChild) {
        //         ul.removeChild(ul.firstChild);
        //     }
        // });

        // currentTime();
        app.currentTime();
    },
    UserInput: function() {
        // return document.querySelector('.todolist');
        return input;
    },
    userInputLength: function() {
        // return app.UserInput().value.length;
        return input.value.length;
    },
    checkList: function() {
        return document.querySelectorAll('li').length;
    },
    addListAfterClick: function() {
        if (app.userInputLength() > 0)
        // return app.createListElement();
            return app.createListElement(input.value);
    },
    createListElement: function(text) {
        const h2 = document.querySelector('.emptyList');
        const li = document.createElement('li');
        li.textContent = text;
        li.classList.add("ui-li-static", "ui-body-inherit");
        ul.append(li);
        // const ul = $('.main__list--ul');
        // li.append(document.createTextNode(app.UserInput().value));
        // ul.append(li).listview('refresh');
        li.addEventListener("click", toggleList);
        // app.UserInput().value = "";

        // Storing input value from user
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        input.value = '';

        function toggleList() {
            li.classList.toggle("done");
        }

        // if (app.checkList() > 0) {
        //     h2.classList.add("notEmptyList");
        // }
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

};*/