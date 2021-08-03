import ToDo from "../models/ToDo.js";
import Completed from "../models/Completed.js";
import Activity from "../models/Activity.js";
import ActivityService from "../services/ActivityService.js";

// Default Functions
const getEle = function (id) {
    return document.getElementById(id);
};
function setLocalStorage(activityList) {
    localStorage.setItem('ActivityList', JSON.stringify(activityList));
};

function getLocalStorage() {
    if(localStorage.getItem('ActivityList')){
        return JSON.parse(localStorage.getItem('ActivityList'));
    };
};
// Default Functions end

const activityService = new ActivityService();
// let activityList = [];
// let completedList = [];

//Render HTML Function

//Render HTML Function ends

//display Activity Function
const displayActivity = () => {
    // get data from axios
    activityService
        .fetchActivity()
        .then(res => {
            let toDoContent = '';
            let completedContent = '';
            res.data.forEach(item => {
                const { id, content, type } = item;
                const activity = new Activity( content, type)
                
                // Displaying to do items from filtered activityList
                if(activity.type === 1) {
                    toDoContent += activity.renderActivity(id);
                };
                getEle('todo').innerHTML = toDoContent;
                
                
                // Displaying completed items from filtered activityList
                if(activity.type === 2) {
                    completedContent += activity.renderActivity(id);
                };
                getEle('completed').innerHTML = completedContent;
            });
            setLocalStorage(res.data);
        });
}
displayActivity();
//display Activity Function ends

// Add Activity Function
function addActivity() {
    // alert('push')
    if(getEle('newTask').value !== '') {
        let toDo = new Activity(
            getEle('newTask').value,
            1
        );
        activityService
            .addActivity(toDo)
            .then(res => { // add a to do Activity
                displayActivity();
            });
    } else {
        alert('Write something')
    }

    getEle('newTask').value = '';
}
// Add Activity Function ends
// Trigger button
getEle('addItem').onclick = addActivity;
// Trigger button ends

// Remove Activity button
function removeActivityFromList(id) {
    activityService
        .removeActivity(id)
        .then(res => {
            displayActivity();
        })
}
window.removeActivityFromList = removeActivityFromList;
// Remove Activity button ends

// Check Completed Button
function checkCompleted(id, content, type){
    removeActivityFromList(id);
    switch (type) {
        case '1': // to do
            let completed = new Activity(content, 2);
            activityService
                .addActivity(completed)
                .then(res => { // add a completed Activity
                    displayActivity();
                });
            break;
        case '2': // completed
            let toDo = new Activity(content, 1);
            activityService
                .addActivity(toDo)
                .then(res => { // add a toDo Activity
                    displayActivity();
                });
            break;
        default:
            alert('error')
    }
}
window.checkCompleted = checkCompleted;
// Check Completed Button ends
