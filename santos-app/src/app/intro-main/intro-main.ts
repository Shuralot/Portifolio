import { Component, OnInit } from '@angular/core';
import { Sharevice } from '../sharevice';
import { Shares } from '../shares';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-main',
  imports: [ CommonModule],
  standalone: true,
  templateUrl: './intro-main.html',
  styleUrl: './intro-main.scss'
})
export class IntroMain implements OnInit {
  public shares$!: Observable<Shares[]>;

  constructor(private sharevice: Sharevice) {}
  ngOnInit(): void {
    this.shares$ = this.sharevice.getShares();
  }

}
