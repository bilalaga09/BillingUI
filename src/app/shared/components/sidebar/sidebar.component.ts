import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UiService } from '../../../core/services/ui.service';
import { MENU_ITEMS } from '../../constants/constants';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  items: MenuItem[] = MENU_ITEMS;

  activeRoute = '';
  isOpen = true;

  private subs = new Subscription();

  constructor(private router: Router, private ui: UiService) {}

  ngOnInit() {
    this.activeRoute = this.router.url;

    const navSub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.activeRoute = e.urlAfterRedirects || e.url;
    });
    this.subs.add(navSub);

    const uiSub = this.ui.sidebarOpen$.subscribe(v => (this.isOpen = v));
    this.subs.add(uiSub);
  }

  toggleExpand(item: MenuItem) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }

  navigate(item: MenuItem) {
    if (!item.route) return;
    this.router.navigateByUrl(item.route);
  }

  isItemActive(item: MenuItem): boolean {
    if (item.route) {
      return this.activeRoute.startsWith(item.route);
    }
    if (item.children) {
      return item.children.some(child => this.isItemActive(child));
    }
    return false;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
