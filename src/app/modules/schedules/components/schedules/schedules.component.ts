import { Component, signal, WritableSignal } from '@angular/core';
import { CardHeaderComponent } from '../../../../global/card-header/card-header.component';
import {
  CalendarDaysIcon,
  ClockIcon,
  FilterIcon,
  LucideAngularModule,
  PlusIcon,
  RouteIcon,
} from 'lucide-angular';

@Component({
  imports: [CardHeaderComponent, LucideAngularModule],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss',
})
export class SchedulesComponent {
  protected readonly showFilters: WritableSignal<boolean> = signal(false);
  protected readonly filteredData: WritableSignal<any> = signal({});

  protected readonly FilterIcon = FilterIcon;
  protected readonly PlusIcon = PlusIcon;

  protected readonly items: any = [
    {
      order: 1,
      dateRange: { from: '12.01.2026', to: '18.01.2026' },
      status: 'Opublikowany',
      changes: { count: 32, icon: 'CalendarDaysIcon' },
      distance: { value: 92.5, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 4, minutes: 20, icon: 'ClockIcon' },
    },
    {
      order: 2,
      dateRange: { from: '19.01.2026', to: '25.01.2026' },
      status: 'Wersja robocza',
      changes: { count: 28, icon: 'CalendarDaysIcon' },
      distance: { value: 85.2, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 3, minutes: 55, icon: 'ClockIcon' },
    },
    {
      order: 3,
      dateRange: { from: '26.01.2026', to: '01.02.2026' },
      status: 'Opublikowany',
      changes: { count: 41, icon: 'CalendarDaysIcon' },
      distance: { value: 101.8, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 4, minutes: 45, icon: 'ClockIcon' },
    },
    {
      order: 4,
      dateRange: { from: '02.02.2026', to: '08.02.2026' },
      status: 'Wersja robocza',
      changes: { count: 19, icon: 'CalendarDaysIcon' },
      distance: { value: 70.4, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 3, minutes: 15, icon: 'ClockIcon' },
    },
    {
      order: 5,
      dateRange: { from: '09.02.2026', to: '15.02.2026' },
      status: 'Opublikowany',
      changes: { count: 36, icon: 'CalendarDaysIcon' },
      distance: { value: 96.1, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 4, minutes: 30, icon: 'ClockIcon' },
    },
    {
      order: 6,
      dateRange: { from: '16.02.2026', to: '22.02.2026' },
      status: 'Opublikowany',
      changes: { count: 24, icon: 'CalendarDaysIcon' },
      distance: { value: 82.7, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 3, minutes: 50, icon: 'ClockIcon' },
    },
    {
      order: 7,
      dateRange: { from: '23.02.2026', to: '01.03.2026' },
      status: 'Wersja robocza',
      changes: { count: 47, icon: 'CalendarDaysIcon' },
      distance: { value: 110.3, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 5, minutes: 5, icon: 'ClockIcon' },
    },
    {
      order: 8,
      dateRange: { from: '02.03.2026', to: '08.03.2026' },
      status: 'Opublikowany',
      changes: { count: 21, icon: 'CalendarDaysIcon' },
      distance: { value: 74.9, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 3, minutes: 25, icon: 'ClockIcon' },
    },
    {
      order: 9,
      dateRange: { from: '09.03.2026', to: '15.03.2026' },
      status: 'Opublikowany',
      changes: { count: 39, icon: 'CalendarDaysIcon' },
      distance: { value: 98.6, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 4, minutes: 40, icon: 'ClockIcon' },
    },
    {
      order: 10,
      dateRange: { from: '16.03.2026', to: '22.03.2026' },
      status: 'Wersja robocza',
      changes: { count: 26, icon: 'CalendarDaysIcon' },
      distance: { value: 88.1, unit: 'km', icon: 'RouteIcon' },
      time: { hours: 4, minutes: 0, icon: 'ClockIcon' },
    },
  ];

  protected readonly CalendarDaysIcon = CalendarDaysIcon;
  protected readonly RouteIcon = RouteIcon;
  protected readonly ClockIcon = ClockIcon;

  constructor() {
    this.filteredData.set(this.items);
  }

  protected openFilters(): void {
    this.showFilters.update((value: boolean): boolean => !value);
  }

  protected filterData(select: Event): void {
    const value: string = (select.target as HTMLSelectElement).value;

    this.filteredData.set(
      this.items.filter((data: any): boolean => {
        if (!value) {
          return true;
        }

        return data.status === value;
      })
    );
  }
}
