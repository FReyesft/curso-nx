import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@curso-nx/ui-shared';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, ButtonComponent],
  template: `
  <h1>Welcome to app!</h1>
  <lib-button></lib-button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome { }
