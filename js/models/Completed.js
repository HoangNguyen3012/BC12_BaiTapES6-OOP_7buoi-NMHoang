import Activity from "./Activity.js";

class Completed extends Activity {
    constructor( content, type) {
        super( content, type);
    };
    renderActivity() {
        return super.renderActivity();
    }
}

export default Completed;