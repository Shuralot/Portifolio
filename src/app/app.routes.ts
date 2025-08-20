import { Routes } from '@angular/router';
import { ProjectsPage } from './projects-page/projects-page';
import { IntroMain } from './intro-main/intro-main';
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';


export const routes: Routes = [
    {path: '', component: IntroMain},
    {path: 'projects', component: ProjectsPage},
    {path: 'aboutme', component: AboutMe},
    {path: 'contact', component: Contact},
    {path: '**', redirectTo: ''}

];
