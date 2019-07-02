import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NetworkComponent } from './network/network.component';
import { OtherComponent } from './other/other.component';

const routes =[
  {path: '', component: MainPageComponent},
  {path: 'network', component: NetworkComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'project-page', component: ProjectPageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'setup', component: SetupPageComponent},
  {path: 'other', component: OtherComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    SetupPageComponent,
    AboutPageComponent,
    ProjectPageComponent,
    ServicesComponent,
    ContactsComponent,
    MainPageComponent,
    NetworkComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
