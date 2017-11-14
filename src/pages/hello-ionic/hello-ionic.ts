import { Component, OnInit } from '@angular/core';
import { MailServiceProvider } from "../../providers/mail-service/mail-service";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit{
    mails: any;

    // constructor(private mailService: MailServiceProvider) {
    // }
    //
    // ngOnInit(promise = Promise) {
    //     this.mailService.getMailChimp()
    //         .then(response => {
    //                 this.mails = response;
    //                 console.log(this.mails);
    //             },
    //             error => {console.log("Error in Promise at BandService:", error);})
    //         .catch(error => {
    //             console.log("Error in Promise at BandService:", error);
    //         });
    // }

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('https://us17.api.mailchimp.com/3.0/lists', {
            headers: new HttpHeaders().set('Authorization', 'Basic f94c8ea7e27ad68780010200144334ea-us17')
        }
        ).subscribe(data => {
            this.mails = data;
            console.log(this.mails);
        });
    }

}
