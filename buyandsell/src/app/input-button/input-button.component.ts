import { Component } from '@angular/core';

@Component({
    styleUrls: ['./input-button.component.css'],
    templateUrl: './input-button.component.html',
    selector: 'app-ngButton'

})

export class inputButton {
    // clickMessage = ''
    name = 'FirstName';
    details = 'Who is he/she';
    age = 'age';
    firstName = '';
    familyDetails = '';
    membersAge = '';
    msgClickval = ''
    UserName = [];
    UserAge = [];
    UserDescription = [];
    arrayUserName = [];
    arrayUserAge = [];
    arrayUserDes = [];
    // x=''
    // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    clickFunction() {

        alert("clicked me!");

    }

    msgClick() {
        this.msgClickval = 'my value is changed'

    }
    keyEvent(value: string) {
        if (value) {
            var sideBar = JSON.parse(localStorage.getItem('username'));
            if (sideBar) {
                this.arrayUserName = sideBar;
                console.log(this.arrayUserName)
                this.arrayUserName.push(value);
                localStorage.setItem("username", JSON.stringify(this.arrayUserName))
            }
            else {
                this.UserName.push(value)
                localStorage.setItem("username", JSON.stringify(this.UserName))
            }
        }

    }

    keyEvent1(value: string) {
        if (value) {
            var sideBar = JSON.parse(localStorage.getItem('Age'));
            if (sideBar) {
                this.arrayUserAge = sideBar;
                console.log(this.arrayUserAge)
                this.arrayUserAge.push(value);
                localStorage.setItem("Age", JSON.stringify(this.arrayUserAge))
            }
            else {
                this.UserAge.push(value);
                localStorage.setItem("Age", JSON.stringify(this.UserName))
            }
        }
    }
    keyEvent2(value: string) {
        if (value) {
            var sideBar = JSON.parse(localStorage.getItem('UserDescription'));
            if (sideBar) {
                this.UserDescription.push(value);

                this.arrayUserDes = sideBar;
                console.log(this.arrayUserDes)
                this.arrayUserDes.push(value);
                localStorage.setItem("UserDescription", JSON.stringify(this.arrayUserDes))
            }
            else {
                this.UserAge.push(value);
                localStorage.setItem("UserDescription", JSON.stringify(this.UserDescription))
            }
        }
    }

    userNamesText: string = localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : [];
    usersAgeNum: string = localStorage.getItem('Age') ? JSON.parse(localStorage.getItem('Age')) : [];
    usersDesText: string = localStorage.getItem('UserDescription') ? JSON.parse(localStorage.getItem('UserDescription')) : [];
}