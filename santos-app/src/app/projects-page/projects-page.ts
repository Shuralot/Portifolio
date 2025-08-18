import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Shares } from '../shares';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss'
})
export class ProjectsPage {
  project!: Shares;

  private router = inject(Router);

  constructor() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { project: Shares };
    if (state?.project) {
      this.project = state.project;
    } else {
      this.project = {
        id: '',
        name: 'Projeto não encontrado',
        desc: '',
        descur: '',
        img: '',
        learned: '',
        linkgit: '',
        tags: []
      };
    }
  }
}
