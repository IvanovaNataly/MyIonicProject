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

    // ngOnInit(): void {
    //     this.http.get('https://us17.api.mailchimp.com/3.0/lists', {
    //         headers: new HttpHeaders().set('Authorization', 'Basic f94c8ea7e27ad68780010200144334ea-us17')
    //     }
    //     ).subscribe(data => {
    //         this.mails = data;
    //         console.log(this.mails);
    //     });
    // }

    ngOnInit(): void {
        let headers = new HttpHeaders({ 'Authorization': 'Bearer f2e2b007-2d83-49ac-9ed4-c938ecf31a67', "Access-Control-Allow-Origin": "http://localhost:8100", "Access-Control-Max-Age": "3600", "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE", "Access-Control-Allow-Credentials": "true", 'Content-Type': 'application/x-www-form-urlencoded'  });

        this.http.get('https://api.constantcontact.com/v2/contacts?status=ALL&limit=50&api_key=xvqknx4yfqa9hfxmzjrmbu4s', {
                headers: headers
            }
        ).subscribe(data => {
            this.mails = data;
            console.log(this.mails);
        });
    }

}
