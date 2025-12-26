import { Component } from '@angular/core';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private ui: UiService) {}

  toggleSidebar() {
    this.ui.toggle();
  }
}
