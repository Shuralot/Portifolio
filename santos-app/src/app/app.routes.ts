import { Routes } from '@angular/router';
import { ProjectsPage } from './projects-page/projects-page';
import { IntroMain } from './intro-main/intro-main';


export const routes: Routes = [
    {path: '', component: IntroMain},
    {path: 'projects', component: ProjectsPage},
    {path: '**', redirectTo: ''}

];
