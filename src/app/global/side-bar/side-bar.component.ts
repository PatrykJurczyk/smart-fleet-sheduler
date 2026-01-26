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
      route: '/create-schedule',
      isCta: true,
    },
    {
      id: 'schedules',
      icon: CalendarDays,
      label: 'Poprzednie grafiki',
      route: '/schedules',
    },
    {
      id: 'create-form',
      icon: ClipboardPlus,
      label: 'Stwórz ankietę',
      route: '/create-form',
    },
    {
      id: 'forms',
      icon: ClipboardList,
      label: 'Poprzednie ankiety',
      route: '/forms',
    },
    {
      id: 'drivers',
      icon: Users,
      label: 'Kierowcy',
      route: '/drivers',
    },
    {
      id: 'cars',
      icon: Car,
      label: 'Samochody',
      route: '/cars',
    },
    {
      id: 'files',
      icon: FolderOpen,
      label: 'Pliki',
      route: '/files',
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Ustawienia',
      route: '/settings',
    },
  ];

  private readonly router: Router = inject(Router);

  protected goHome(): void {
    this.router.navigate(['/']);
  }
}
