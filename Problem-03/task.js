let statusEnum = {
    'Open': "\u2731",
    'In Progress': "\u219D",
    'Complete': "\u2714",
    'Overdue task': "\u26A0"
}

class Task {
    constructor(title, deadline, status='Open') {
        if (deadline < Date.now()) {
            throw new Error("Can not create a task with passed date.");
        }
        this.title = title;
        this.deadline = deadline;
        this.status=status;
    }

    get isOverdue() {
        if (this.status != "Complete" && this.deadline <= Date.now()) {
            return true;
        } else {
            return false;
        }
    }

    get deadline() {
        if (this._deadline < Date.now()) {
            throw new Error("Deadline is invalid.");
        } else {
            return this._deadline;
        }
    }
    set deadline(value) {
        this._deadline = value;
    }

    get status() {
        return this._status;
    }
    set status(value){
        this._status=value;
    }

    static comparator(a, b){

    }

    toString() {
        if (this.status === "Complete") {
            return `[${statusEnum[this.status]}] ${this.title}`
        }
        if (this.isOverdue) {
            return `[${statusEnum['Overdue task']}] ${this.title} (overdue)`
        }
        if (!this.isOverdue) {
            return `[${statusEnum[this.status]}] ${this.title} (deadline: ${this.deadline})`
        }
    }
}



let dateInTheFuture = new Date();
dateInTheFuture.setDate(60);
let task = new Task('New Task', dateInTheFuture)
console.log(task.title)