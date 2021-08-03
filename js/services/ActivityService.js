export default class ActivityService {
    fetchActivity() {
        return axios({
            url: 'https://60ea735d5dd7ff0017b39775.mockapi.io/ToDoList',
            method: 'GET',
        })
    }
    removeActivity(id) {
        return axios({
            url: `https://60ea735d5dd7ff0017b39775.mockapi.io/ToDoList/${id}`,
            method: 'DELETE',
        })
    }
    addActivity(activity) {
        return axios({
            url: 'https://60ea735d5dd7ff0017b39775.mockapi.io/ToDoList',
            method: 'POST',
            data: activity,
        })
    }
    updateActivity(id, activity) {
        return axios({
            url: `https://60ea735d5dd7ff0017b39775.mockapi.io/ToDoList/${id}`,
            method: 'PUT',
            data: activity,
        })
    }
}