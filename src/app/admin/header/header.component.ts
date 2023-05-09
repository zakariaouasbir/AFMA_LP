import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbdOffcanvasContent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
    offcanvasRef.componentInstance.name = 'World';
  }
}
