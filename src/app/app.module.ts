import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faJava, faAngular,faGithub, faMedium, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/layout/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    YouTubePlayerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library
      .addIcons(
        faSquare, 
        faCheckSquare, 
        faEnvelope, 
        farSquare, 
        farCheckSquare, 
        faStackOverflow, 
        faGithub, 
        faMedium, 
        faLinkedin, 
        faReact,
        faAngular,
        faJava
      );
  }
}
