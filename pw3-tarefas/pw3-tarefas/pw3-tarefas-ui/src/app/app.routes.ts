import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';

exportconstroutes:Routes=[
 {path:'', redirectTo:'tarefas',pathMatch:'full'},
 {path:'tarefas',component:TarefaListComponent },
 {path:'tarefas/novo', component:TarefaFormComponent },
 {path:'tarefas/:id', component:TarefaFormComponent},
 {path:'login', component:LoginComponent },
 {path:'**',redirectTo:'tarefas'}
 ];
