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
    clickFunction() {

        alert("clicked me!");

    }
}