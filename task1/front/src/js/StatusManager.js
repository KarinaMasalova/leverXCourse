class StatusManager {
    constructor() {
        this.status = sessionStorage.getItem('status');
        this.userProfile = new UserProfile();
    }
    logIn() {
        if(this.status !== null) {
            this.userProfile.element.innerHTML =
            "<div class=\"user-profile__notification\">" + 
                "<span class=\"ico notification__ico\"></span>" +
            "</div>" +
            "<div class=\"user-profile__user user\">" +
                "<span class=\"user__photo\"></span>" +
                "<span class=\"user__name\">karina masalova</span>" +
            "</div>" +
            "<div class=\"user-profile__power-off\">" +
                "<span class=\"ico power-off__ico\"></span>" +
            "</div>";
        }
    }
}
