import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { LoginComponent } from './login/login.component'
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pagenofound', component: PagenofoundComponent },
  { path: 'login', component: LoginComponent },

 
  { path: '',
    redirectTo: '/login', // เปลี่ยนเส้นทาง
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenofoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
