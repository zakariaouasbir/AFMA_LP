import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-secondQuestion',
  templateUrl: './secondQuestion.component.html',
  styleUrls: ['./secondQuestion.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeInRight, { params: { timing: 1, delay: 0 } }))]),
  ],
})
export class SecondQuestionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleMenu() {}
}
