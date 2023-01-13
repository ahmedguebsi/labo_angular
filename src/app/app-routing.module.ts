import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AffectComponent } from './affect/affect.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {MembersComponent} from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'login'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent
  },
  {path: 'dashboard',// lbaaed / fl path
  pathMatch: "full" ,
component: DashboardComponent},
{path: 'articles',// lbaaed / fl path
  pathMatch: "full" ,
component: ArticlesComponent},
{path: 'tools',// lbaaed / fl path
  pathMatch: "full" ,
component: ToolsComponent},
{path: 'events',// lbaaed / fl path
  pathMatch: "full" ,
component: EventsComponent},
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'members/:id/edit',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'articles/:id/Affect',
    pathMatch: 'full',
    component: AffectComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
