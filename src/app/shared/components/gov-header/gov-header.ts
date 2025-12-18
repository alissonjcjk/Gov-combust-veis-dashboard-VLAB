import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Adicione esta linha

@Component({
  selector: 'app-gov-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Adicione aqui também
  templateUrl: './gov-header.html',
  styleUrl: './gov-header.css'
})
export class GovHeader {}