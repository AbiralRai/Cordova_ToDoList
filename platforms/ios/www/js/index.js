//
$(document).ready(function() {
    // Swipe to remove list item
    $(document).on("swipeleft swiperight", "#list li", function(event) {
        var listitem = $(this),
            // These are the classnames used for the CSS transition
            dir = event.type === "swipeleft" ? "left" : "right",
            // Check if the browser supports the transform (3D) CSS transition
            transition = $.support.cssTransform3d ? dir : false;
        confirmAndDelete(listitem, transition);
    });
    // If it's not a touch device...
    if (!$.mobile.support.touch) {
        // Remove the class that is used to hide the delete button on touch devices
        $("#list").removeClass("touch");
        // Click delete split-button to remove list item
        $(".delete").on("click", function() {
            var listitem = $(this).parent("li");
            confirmAndDelete(listitem);
        });
    }

    function confirmAndDelete(listitem, transition) {
        // Highlight the list item that will be removed
        listitem.children(".ui-btn").addClass("ui-btn-active");
        // Inject topic in confirmation popup after removing any previous injected topics
        $("#confirm .topic").remove();
        listitem.find(".topic").clone().insertAfter("#question");
        // Show the confirmation popup
        $("#confirm").popup("open");
        // Proceed when the user confirms
        $("#confirm #yes").on("click", function() {
            // Remove with a transition
            if (transition) {
                listitem
                // Add the class for the transition direction
                    .addClass(transition)
                    // When the transition is done...
                    .on("webkitTransitionEnd transitionend otransitionend", function() {
                        // ...the list item will be removed
                        listitem.remove();
                        // ...the list will be refreshed and the temporary class for border styling removed
                        $("#list").listview("refresh").find(".border-bottom").removeClass("border-bottom");
                    })
                    // During the transition the previous button gets bottom border
                    .prev("li").children("a").addClass("border-bottom")
                    // Remove the highlight
                    .end().end().children(".ui-btn").removeClass("ui-btn-active");
            }
            // If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
            else {
                listitem.remove();
                $("#list").listview("refresh");
            }
        });
        // Remove active state and unbind when the cancel button is clicked
        $("#confirm #cancel").on("click", function() {
            listitem.children(".ui-btn").removeClass("ui-btn-active");
            $("#confirm #yes").off();
        });
    }
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
            addTask.addEventListener('click', app.addListAfterClick);
            // currentTime();
            app.currentTime();
        },
        UserInput: function() {
            return document.querySelector('.todolist');
        },
        userInputLength: function() {
            return app.UserInput().value.length;
        },
        checkList: function() {
            return document.querySelectorAll('li').length;
        },
        addListAfterClick: function() {
            if (app.userInputLength() > 0)
                return app.createListElement();
        },
        createListElement: function() {
            const h2 = document.querySelector('.emptyList');
            const li = document.createElement('li');
            const ul = $('.main__list--ul');
            li.classList.add("ui-li-static", "ui-body-inherit");
            li.append(document.createTextNode(app.UserInput().value));
            ul.append(li).listview('refresh');
            li.addEventListener("click", toggleList);
            app.UserInput().value = "";

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
    app.initialize();

});













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