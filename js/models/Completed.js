import Activity from "./Activity.js";

class Completed extends Activity {
    constructor(id, content, type) {
        super(id, content, type);
    };
    renderActivity() {
        return super.renderActivity();
    }
}

export default Completed;