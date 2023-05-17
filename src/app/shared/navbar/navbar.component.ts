import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  showContent: boolean = false;
  toggleButtonText: string = 'Mostrar';
  isWhite: boolean = false;

  toggleContent(): void {
    this.isWhite = !this.isWhite;
    this.isMenuOpen = !this.isMenuOpen;
    this.showContent = !this.showContent;
    this.toggleButtonText = this.showContent ? 'Ocultar' : 'Mostrar';
  }

}
