import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base-component';
import { loadCurrentUser } from '../../core/store/user/user.actions';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {
  
  ngOnInit(): void {

    this.store.dispatch(loadCurrentUser());
  }

}
