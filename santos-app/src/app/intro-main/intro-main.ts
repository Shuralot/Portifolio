import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Sharevice } from '../sharevice';
import { Shares } from '../shares';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro-main',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './intro-main.html',
  styleUrl: './intro-main.scss'
})
export class IntroMain implements OnInit {
  public shares$!: Observable<Shares[]>;

  private sharevice = inject(Sharevice);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // só chama Firestore no client
    if (isPlatformBrowser(this.platformId)) {
      this.shares$ = this.sharevice.getShares();
    } else {
      this.shares$ = of([]); // server-side não busca dados
    }
  }
}
