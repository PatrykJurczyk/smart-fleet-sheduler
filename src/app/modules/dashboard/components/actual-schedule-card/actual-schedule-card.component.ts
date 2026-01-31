import { Component } from '@angular/core';
import { CardComponent } from '../../../../global/card/card.component';
import {
  CalendarDaysIcon,
  CarIcon,
  ClockIcon,
  LucideAngularModule,
  PencilIcon,
  RouteIcon,
  UsersIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-actual-schedule-card',
  imports: [CardComponent, LucideAngularModule],
  templateUrl: './actual-schedule-card.component.html',
  styleUrl: './actual-schedule-card.component.scss',
})
export class ActualScheduleCardComponent {
  protected readonly CarIcon = CarIcon;
  protected readonly PencilIcon = PencilIcon;
  protected readonly UsersIcon = UsersIcon;
  protected readonly RouteIcon = RouteIcon;
  protected readonly ClockIcon = ClockIcon;
  protected readonly CalendarDaysIcon = CalendarDaysIcon;

  protected test(): void {
    console.log('test');
  }
}
