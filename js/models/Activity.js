export default class Activity {
    constructor( content, type) {
        // this.id = id;
        this.content = content;
        this.type = type;
    };
    renderActivity(id) {
        return `
        <li>
            <span>${this.content}</span>
            <div>
                <i class="fa fa-times-circle" onclick ="removeActivityFromList('${id}');"></i>

                <i class="fa fa-check-circle" onclick="checkCompleted('${id}', '${this.content}', '${this.type}')"></i>                      
            </div>
        </li>
        `
    }
};