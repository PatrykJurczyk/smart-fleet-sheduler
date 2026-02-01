import { Component } from '@angular/core';
import { CardComponent } from '../../../../global/card/card.component';
import {
  CalendarIcon,
  ChartColumnIcon,
  LucideAngularModule,
  RefreshCwIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-statistics',
  imports: [CardComponent, LucideAngularModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  protected readonly ChartColumnIcon = ChartColumnIcon;
  protected readonly RefreshCwIcon = RefreshCwIcon;
  protected readonly UsersIcon = UsersIcon;
  protected readonly CalendarIcon = CalendarIcon;
  protected readonly TrendingDownIcon = TrendingDownIcon;
  protected readonly TrendingUpIcon = TrendingUpIcon;

  protected readonly tradingUp: boolean = false;
}
