class Contact {
    constructor(firstName, lastName, phone, email, online = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = online;
    }

    get online(){
        return this._online;
    }
    set online(value){
        this._online=value;
    }


    render(id){
        let article = $("<article>");
        let divTitle = $("<div>").addClass("title").text(`${this.firstName} ${this.lastName}`);
        let button = $("<button>").html("&#8505;").click(()=>$("div.info").toggle());
        divTitle.append(button);
        let divInfo = $("<div>").addClass("info");
        let span = $("<span>").html("&phone;").text(this.phone);
        let span2 = $("<span>").html("&#9993;").text(this.email);
        divInfo.append(span);
        divInfo.append(span2);
        let selectedElement = $(`#${id}`);
        article.append(divTitle);
        article.append(divInfo);
        selectedElement.append(article);
    }
}




