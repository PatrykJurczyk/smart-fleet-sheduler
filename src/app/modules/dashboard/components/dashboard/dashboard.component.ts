import { Component } from '@angular/core';
import { CardHeaderComponent } from '../../../../global/card-header/card-header.component';
import { CardComponent } from '../../../../global/card/card.component';
import { CarIcon, ChartColumnIcon, LucideAngularModule, UsersIcon } from 'lucide-angular';
import { ActualFormCardComponent } from '../actual-form-card/actual-form-card.component';
import { ActualScheduleCardComponent } from '../actual-schedule-card/actual-schedule-card.component';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  imports: [
    CardHeaderComponent,
    CardComponent,
    LucideAngularModule,
    ActualFormCardComponent,
    ActualScheduleCardComponent,
    StatisticsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly CarIcon = CarIcon;
  protected readonly UsersIcon = UsersIcon;
  protected readonly ChartColumnIcon = ChartColumnIcon;

  protected readonly bestDrivers: any = [
    {
      name: 'Driver',
      count: 7,
    },
    {
      name: 'Driver',
      count: 7,
    },
    {
      name: 'Driver',
      count: 7,
    },
    {
      name: 'Driver',
      count: 7,
    },
    {
      name: 'Driver',
      count: 7,
    },
    {
      name: 'Driver',
      count: 7,
    },
    {
      name: 'Driver',
      count: 7,
    },
  ];

  protected readonly mostUsedCars: any = [
    {
      plateNo: 'WA 12345',
      model: 'Toyota',
      count: 14,
    },
    {
      plateNo: 'WA 12345',
      model: 'Toyota',
      count: 14,
    },
    {
      plateNo: 'WA 12345',
      model: 'Toyota',
      count: 14,
    },
    {
      plateNo: 'WA 12345',
      model: 'Toyota',
      count: 14,
    },
  ];
}
