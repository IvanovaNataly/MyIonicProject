import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoListPage } from './todo-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TodoListPage
  ],
  imports: [PipesModule,
    IonicPageModule.forChild(TodoListPage)
  ],
})
export class TodoListPageModule {}
