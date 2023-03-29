import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}

  ngOnInit() {
    if (environment.production) {
      Logger.enableProductionMode();
    }
    log.debug('init');
    this.angulartics2GoogleAnalytics.startTracking();
    this.angulartics2GoogleAnalytics.eventTrack(environment.version || 'dev', { category: 'App initialized' });
    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }

  ngOnDestroy() {}
}
