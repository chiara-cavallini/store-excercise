import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../models/button-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() buttons: ButtonConfig[] = []

  constructor(private readonly router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path])
  }
}
