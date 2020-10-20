import { Component } from '@angular/core';

@Component({
    styleUrls: ['./ngButton.component.css'],
    templateUrl: './ngButton.component.html',
    selector: 'app-ngButton'

})

export class ngButton {
    // clickMessage = ''
    name = 'FirstName';
    details = 'Who is he/she';
    age = 'age';
    firstName = '';
    familyDeatils = '';
    membersAge = '';
    clickFunction() {

        alert("clicked me!");

    }
}