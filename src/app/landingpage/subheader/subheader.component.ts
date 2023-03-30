import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounce, fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  animations: [trigger('bouncebtn', [transition('* => *', useAnimation(bounce, { params: { timing: 2, delay: 1 } }))])],
})
export class SubHeaderComponent implements OnInit {
  menuHidden = true;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
