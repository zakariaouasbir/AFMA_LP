import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-offcanvas-content',
  standalone: true,
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <!--Main Navigation-->
    <header>
      <!-- Sidebar -->
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a class="nav-item nav-link">
              <img src="assets/admin/afma.png" alt="angular logo" />
            </a>
            <a (click)="navigate('question')" class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-chart-line fa-fw me-3"></i><span>Questions</span></a
            >
            <a (click)="navigate('subscription')" class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
            >
            <a routerLink="/lp" routerLinkActive="active" class="list-group-item list-group-item-action py-2 ripple">
              <i class="fas fa-chart-pie fa-fw me-3"></i><span>Subscriptions</span>
            </a>
            <a class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Packages</span></a
            >
            <a class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-globe fa-fw me-3"></i><span>Companies</span></a
            >

            <a class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a
            >
          </div>
        </div>
      </nav>
      <!-- Sidebar -->
    </header>
    <!--Main Navigation-->

    <!--Main layout-->
    <main style="margin-top: 58px">
      <div class="container pt-4"></div>
    </main>
    <!--Main layout-->
  `,
})
export class NgbdOffcanvasContent {
  @Input() name: string;

  constructor(public activeOffcanvas: NgbActiveOffcanvas, private router: Router) {}
  navigate(path: string) {
    this.router.navigate([{ outlets: { admin: [path] } }]);
  }
}

@Component({
  selector: 'sidebar-admin',
  standalone: true,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor() {}
}
