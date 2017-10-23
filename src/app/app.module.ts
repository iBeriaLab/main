import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/includes/nav/nav.component';
import { ParallaxComponent } from './components/includes/parallax/parallax.component';
import { ServicesComponent } from './components/includes/services/services.component';
import { UserComponent } from './components/users/user/user.component';
import { RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './components/home/index/index.component';
import { DetailsComponent } from './components/users/details/details.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { LoginComponent } from './components/includes/login/login.component';

import { AuthGuard } from './services/auth.guard';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCLWlp7tAhy0b5_nIVwCMpI9azjsga1UPQ',
  authDomain: 'iberialab-b4032.firebaseapp.com',
  databaseURL: 'https://iberialab-b4032.firebaseio.com',
  projectId: 'iberialab-b4032',
  storageBucket: 'iberialab-b4032.appspot.com',
  messagingSenderId: '726145455716'
};

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: DetailsComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ParallaxComponent,
    ServicesComponent,
    UserComponent,
    IndexComponent,
    DetailsComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      AngularFireModule.initializeApp(firebaseConfig),
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    AngularFireAuth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
