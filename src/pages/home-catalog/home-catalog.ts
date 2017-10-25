import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from "../category/category";

@Component({
    selector: 'page-home-catalog',
    templateUrl: 'home-catalog.html',
})
export class HomeCatalogPage {
    title: string = "Home Decoration";
    categories: Array<{title: string, icon: string}>;
    pictures: Array<string>;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.categories = [
            {title: 'Carpets & Rugs', icon: 'square'},
            {title: 'Decorative Accessories', icon: 'bowtie'},
            {title: 'Lighting', icon: 'bulb'},
            {title: 'Pillows', icon: 'disc'},
        ]

        this.pictures = [
            "http://lorempixel.com/343/271/city",
            "http://lorempixel.com/343/271/fashion",
            "http://lorempixel.com/343/271/food",
            "http://lorempixel.com/343/271/city",
            "http://lorempixel.com/343/271/food"
        ]
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCatalogPage');
    }

    categoryTapped(item) {
        this.navCtrl.push('CategoryPage', {
            item: item
        });
    }

}
