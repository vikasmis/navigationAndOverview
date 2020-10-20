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
    msgClickval=''
    // values='';
    // valuess='';
    // valuesss='';
    UserName='';
    UserAge='';
    UserDescription=''
    clickFunction() {

        alert("clicked me!");

    }
    
    msgClick(){
     this.msgClickval='my value is changed'

    }
    keyEvent(value: string) {
     this.UserName = value +"  "
    }
    keyEvent1(value: string) {
        this.UserAge = value +"  "
       }
       keyEvent2(value: string) {
        this.UserDescription = value +"  "
       }
    // ngName( userName : string){
    //     this.UserName=userName +''
    // }
    // ngAge( age : string){
    //     this.UserAge=age +''
    // }
    // ngDetails( detail : string){
    //     this.UserDescription=detail +''
    // }
}