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

}
