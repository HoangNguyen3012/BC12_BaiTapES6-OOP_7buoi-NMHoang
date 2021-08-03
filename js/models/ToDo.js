import Activity from "./Activity.js";

class ToDo extends Activity {
    constructor(id, activity) {
        super(id, activity);
    };
    renderActivity() {
        return `
        <div>
            ABCD
        </div>
        `
    }
}

export default ToDo;