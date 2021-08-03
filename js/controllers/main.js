import ToDo from "../models/ToDo.js";
import Completed from "../models/Completed.js";
import ActivityService from "../services/ActivityService.js";

// Default Functions
const getEle = function (id) {
    return document.getElementById(id);
}
// Default Functions end

const activityService = new ActivityService();
let toDoList = [];

//Render HTML Function
const renderHTML = () => {
    let content = '';
    activityService
        .fetchActivity()
        .then(res => {
            console.log(res.data)
            res.data.map((activity, index) => {
                content += `
                <li>

                    <span>${activity.activity}</span>
                    <div>
                        
                        <i class="fa fa-times-circle" onclick ="removeActivityFromList('${activity.id}');"></i>

                       <i class="fa fa-check-circle" onclick="checkCompleted('${activity.id}')"></i>                      
                    </div>


                </li>
            `;
            });
            getEle('todo').innerHTML = content;
        });
};
renderHTML();
//Render HTML Function ends

//Render Activity Function
// const renderActivity = () => {
//     activityList = [...activityList, activity];
//     console.log(activityList);
//     renderHTML();
// }
//Render Activity Function ends

// Add Activity Function
function addActivity() {
    console.log('object');
    let activity = new ToDo(
        activityList.length,
        getEle('newTask').value
    );
    activityService
        .addActivity(activity)
        .then(res => {
            console.log(activity)
            toDoList = [...toDoList, activity];
            renderHTML();
        })
    getEle('newTask').value = '';
}
// Add Activity Function ends

// Remove Activity button
function removeActivityFromList(id) {
    console.log('object')
    activityService
    .removeActivity(id)
    .then(res => {
        toDoList.splice(id, 1);
    })
}
// Remove Activity button ends

// Check Completed Button
function checkCompleted(id){
    console.log('object')
}
// Check Completed Button ends

// Trigger button
getEle('addItem').onclick = function () {
    addActivity();
}
// Trigger button ends