import { Component, OnInit } from '@angular/core';
// import { MailServiceProvider } from "../../providers/mail-service/mail-service";
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
            headers: new HttpHeaders().set('Authorization', 'Basic TmF0YWx5OmY5NGM4ZWE3ZTI3YWQ2ODc4MDAxMDIwMDE0NDMzNGVhLXVzMTc=').set('postman-token', '459b7184-9678-b900-4862-7d63a185446a')
        }).subscribe(data => {
            this.mails = data;
            console.log(this.mails);
        });
    }

}
