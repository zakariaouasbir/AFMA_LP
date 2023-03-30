import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-firstSection',
  templateUrl: './firstSection.component.html',
  styleUrls: ['./firstSection.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeInRight, { params: { timing: 1, delay: 0 } }))]),
  ],
})
export class FirstSectionComponent implements OnInit {
  menuHidden = true;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
