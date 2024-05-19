import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ResumeComponent } from './resume/resume.component';
import { MockComponent } from './mock/mock.component';
import { TechroundComponent } from './techround/techround.component';
import { InterviewComponent } from './interview/interview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SignComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'mock', component: MockComponent },
  { path: 'techround', component: TechroundComponent },
  { path: 'interview', component: InterviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignComponent,
    ResumeComponent,
    MockComponent,
    TechroundComponent,
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
