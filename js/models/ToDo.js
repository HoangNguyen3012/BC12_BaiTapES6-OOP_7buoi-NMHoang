import Activity from "./Activity.js";

class ToDo extends Activity {
    constructor(id, content, type) {
        super(id, content, type);
    };
    renderActivity() {
        return super.renderActivity();
        
    }
}

export default ToDo;