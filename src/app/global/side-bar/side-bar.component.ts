import { Component, inject } from '@angular/core';
import {
  CalendarDays,
  CalendarPlus,
  Car,
  ChevronUp,
  ClipboardList,
  ClipboardPlus,
  FolderOpen,
  LogOut,
  LucideAngularModule,
  LucideIconData,
  Settings,
  Users,
} from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIconData;
  route: string;
  isCta?: boolean;
}

@Component({
  selector: 'app-side-bar',
  imports: [
    LucideAngularModule,
    NgOptimizedImage,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  protected isOpen: boolean = false;
  protected readonly ChevronUp: LucideIconData = ChevronUp;
  protected readonly Settings: LucideIconData = Settings;
  protected readonly LogOut: LucideIconData = LogOut;
  protected readonly navigationItems: NavigationItem[] = [
    {
      id: 'create-schedule',
      icon: CalendarPlus,
      label: 'Stwórz grafik',
      route: '/grafiki/nowy',
      isCta: true,
    },
    {
      id: 'schedules',
      icon: CalendarDays,
      label: 'Poprzednie grafiki',
      route: '/grafiki',
    },
    {
      id: 'create-form',
      icon: ClipboardPlus,
      label: 'Stwórz ankietę',
      route: '/ankiety/nowa',
    },
    {
      id: 'forms',
      icon: ClipboardList,
      label: 'Poprzednie ankiety',
      route: '/ankiety',
    },
    {
      id: 'drivers',
      icon: Users,
      label: 'Kierowcy',
      route: '/kierowcy',
    },
    {
      id: 'cars',
      icon: Car,
      label: 'Samochody',
      route: '/samochody',
    },
    {
      id: 'files',
      icon: FolderOpen,
      label: 'Pliki',
      route: '/pliki',
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Ustawienia',
      route: '/ustawienia',
    },
  ];

  private readonly router: Router = inject(Router);

  protected goHome(): void {
    this.router.navigate(['/']);
  }
}
