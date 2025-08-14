import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Array<{ label: string; url: string }>>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  )
  {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.createBreadcrumbs(this.activatedRoute.root))
      )
      .subscribe((breadcrumbs) => this.breadcrumbsSubject.next(breadcrumbs));
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string; url: string }> = []
  ): Array<{ label: string; url: string }> {
    if (route.snapshot.url.length > 0 || route.snapshot.data['breadcrumb']) {
      const routeURL = route.snapshot.url.map((segment) => segment.path).join('/');
      url += `/${routeURL}`;
      const label = route.snapshot.data['breadcrumb'] || this.capitalize(routeURL);
      breadcrumbs.push({ label, url });
    }

    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  reloadBreadcrumb(): void {
    const breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    this.breadcrumbsSubject.next(breadcrumbs);
  }
}