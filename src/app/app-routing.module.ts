import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { from } from 'rxjs';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { SermoesComponent } from './sermoes/sermoes.component';

const routes:Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'sermoes',component:SermoesComponent},
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
