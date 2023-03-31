import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-firstsection',
  templateUrl: './firstSection.component.html',
  styleUrls: ['./firstSection.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeInLeft, { params: { timing: 1, delay: 0 } }))]),
  ],
})
export class FirstSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleMenu() {}
}
