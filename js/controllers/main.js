import ToDo from "../models/ToDo.js";
import Completed from "../models/Completed.js";
import ActivityService from "../services/ActivityService.js";

// Default Functions
const getEle = function (id) {
    return document.getElementById(id);
}
// Default Functions end

const activityService = new ActivityService();
let activityList = [];
// let completedList = [];

//Render HTML Function
const renderHTML = () => {
    // Displaying to do items from filtered activityList
    activityList.filter(activity => activity.type === 1).map((toDo,index) => {
        getEle('todo').innerHTML += toDo.renderActivity();
    });

    // Displaying completed items from filtered activityList
    activityList.filter(activity => activity.type === 2).map((completed,index) => {
        getEle('completed').innerHTML += completed.renderActivity();
    });

};
//Render HTML Function ends

//display Activity Function
const displayActivity = () => {
    // get data from axios
    activityService
        .fetchActivity()
        .then(res => {
            res.data.forEach(activity => {
                const { id, content, type } = activity;
                switch (type) {
                    case 1: // To do
                        const toDo = new ToDo(
                            id,
                            content,
                            type
                        );
                        // append item to activityList
                        activityList = [...activityList, toDo];
                        // console.log(activityList)
                        break;
                    case 2: // Completed
                        const completed = new Completed(
                            id,
                            content,
                            type
                        );
                        // append item to activityList
                        activityList = [...activityList, completed];
                        break;
                    default:
                        console.log( id, 'Not an activity');
                }
            });
            // console.log(activityList)
            // Displaying on html
            renderHTML();
        });
}
displayActivity();
//display Activity Function ends

// Add Activity Function
function addActivity() {
    // alert('push')
    let toDo = new ToDo(
        activityList.length,
        getEle('newTask').value,
        1
    );
    activityService
        .addActivity(toDo)
        .then(res => { // add a to do Activity
            getEle('todo').innerHTML += toDo.renderActivity();
        });
    getEle('newTask').value = '';
}
// Add Activity Function ends

// Remove Activity button
// function removeActivityFromList(id) {
//     activityService
//         .removeActivity(id)
//         .then(res => {
//             toDoList.splice(id, 1);
//             renderHTML();
//         })
// }
// window.removeActivityFromList = removeActivityFromList;
// Remove Activity button ends

// Check Completed Button
// function checkCompleted(id, activity){
//     console.log('object')
//     removeActivityFromList(id); // Remove from to do list
//     let activity = new Completed(
//         completedList.length,
//         activity
//     )
//     completedList = [...completedList, activity]
// }
// window.checkCompleted = checkCompleted;
// Check Completed Button ends

// Trigger button
getEle('addItem').onclick = addActivity;
// Trigger button ends