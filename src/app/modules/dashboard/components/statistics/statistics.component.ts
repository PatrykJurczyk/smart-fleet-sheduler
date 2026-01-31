import { Component } from '@angular/core';
import { CardComponent } from '../../../../global/card/card.component';
import { ChartColumnIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-statistics',
  imports: [CardComponent, LucideAngularModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  protected readonly ChartColumnIcon = ChartColumnIcon;
}
