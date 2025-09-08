import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './main-header.html',
  styleUrls: ['./main-header.scss'],
  standalone: true,
})
export class MainHeader {

  isMobile:boolean | null = null;
  
   constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result: BreakpointState) => {
        // Essa é a forma mais confiável
        this.isMobile = result.matches;
      });
  }
}
