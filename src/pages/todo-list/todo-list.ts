import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
    items: {};
    isValid: any[];
    liked: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items = {
            goal_id_1: {
                title: 'Business Coalboration',
                goal_id_2: {
                    title: 'Find Partnets',
                    goal_id_3: {
                        status: 'ACTIVE',
                        title: 'Market reserach'
                    },
                    goal_id_4: {
                        snoozed_until: '2018-01-18',
                        status: 'ACTIVE',
                        title: 'Meet 3 potential partners'
                    },
                    goal_id_5: {
                        status: 'COMPLETED',
                        title: 'Create a Facebook group'
                    }
                },
                goal_id_6: {
                    goal_id_7: {
                        status: 'ACTIVE',
                        title: 'Some weekly results'
                    },
                    goal_id_8: {
                        status: 'ACTIVE',
                        title: 'Some weekly results'
                    },
                    status: 'COMPLETED',
                    title: 'Sum monthly results'
                }
            },

            goal_id_10: {
                title: 'Business Coalboration',
                goal_id_20: {
                    title: 'Find Partnets',
                    goal_id_30: {
                        status: 'ACTIVE',
                        title: 'Market reserach'
                    },
                    goal_id_40: {
                        snoozed_until: '2018-01-18',
                        status: 'ACTIVE',
                        title: 'Meet 3 potential partners'
                    },
                    goal_id_50: {
                        status: 'COMPLETED',
                        title: 'Create a Facebook group'
                    }
                },
                goal_id_60: {
                    goal_id_70: {
                        status: 'ACTIVE',
                        title: 'Some weekly results'
                    },
                    goal_id_80: {
                        status: 'ACTIVE',
                        title: 'Some weekly results'
                    },
                    status: 'COMPLETED',
                    title: 'Sum monthly results'
                }
            }
        }
        this.isValid = [];
    }

    isString(value) {
        return typeof(value) === "string";
    }

    collapseSubItems(id) {
        this.liked = !this.liked;
        let index =  this.isValid.indexOf(id);
        if ( index > -1 ) {
            this.isValid.splice(index, 1);
        }
        else this.isValid.push(id);
    }

    collapseValidation(data) {
        if ( this.isValid.indexOf(data) > -1 )
            return true;
    }
}
