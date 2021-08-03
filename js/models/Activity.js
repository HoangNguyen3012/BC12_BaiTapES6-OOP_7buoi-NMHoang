export default class Activity {
    constructor(id, content, type) {
        this.id = id;
        this.content = content;
        this.type = type;
    };
    renderActivity(id) {
        return `
        <li>
            <span>${this.content}</span>
            <div>
                <i class="fa fa-times-circle" onclick ="removeActivityFromList('${this.id}');"></i>

                <i class="fa fa-check-circle" onclick="checkCompleted('${this.id}', '${this.content}')"></i>                      
            </div>
        </li>
        `
    }
};