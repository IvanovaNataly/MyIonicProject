import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailServiceProvider {
    endpoint: string;
    secretQuote: any;
    logError: any;

    constructor(private http: HttpClient) {
        this.endpoint = "https://us17.api.mailchimp.com/3.0";
    }

    getMailChimp() {
        console.log('Hello MailServiceProvider Provider');

        var authHeader = new HttpHeaders();
        authHeader.append('Authorization', 'Bearer ' + 'f94c8ea7e27ad68780010200144334ea-us17');
        console.log(authHeader);


        return new Promise((resolve, reject) => {
            this.http.get("https://us17.api.mailchimp.com/3.0/lists", {
                headers: authHeader
            } ).subscribe(response => resolve(response),
                error => reject(error));
        });

        // this.http.get('http://localhost:3001/api/protected/random-quote', {
        //     headers: authHeader
        // })
        //     .map(res => res.toString())
        //     .subscribe(
        //         data => this.secretQuote = data,
        //         err => this.logError(err),
        //         () => console.log('Secret Quote Complete' )
        //     );


    }

}

