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
  public featuredProject!: Shares;

  private sharevice = inject(Sharevice);
  private platformId = inject(PLATFORM_ID);

ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.shares$ = this.sharevice.getShares();

    this.shares$.subscribe(shares => {
      this.featuredProject = shares.find(share => share.featured === true) as Shares;
    });

  } else {
    this.shares$ = of([]);
    this.featuredProject = undefined as any;
  }
}

}
