import Activity from "./Activity.js";

class ToDo extends Activity {
    constructor( content, type) {
        super( content, type);
    };
    renderActivity() {
        return super.renderActivity();
        
    }
}

export default ToDo;