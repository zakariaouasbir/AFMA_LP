import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-thirdsection',
  templateUrl: './thirdSection.component.html',
  styleUrls: ['./thirdSection.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeInLeft, { params: { timing: 1, delay: 0 } }))]),
  ],
})
export class ThirdSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleMenu() {}
}
