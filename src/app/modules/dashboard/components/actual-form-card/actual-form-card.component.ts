import { Component } from '@angular/core';
import { CardComponent } from '../../../../global/card/card.component';
import { CalendarDaysIcon, ClockIcon, EyeIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-actual-form-card',
  imports: [CardComponent, LucideAngularModule],
  templateUrl: './actual-form-card.component.html',
  styleUrl: './actual-form-card.component.scss',
})
export class ActualFormCardComponent {
  protected readonly EyeIcon = EyeIcon;
  protected readonly ClockIcon = ClockIcon;
  protected readonly CalendarDaysIcon = CalendarDaysIcon;

  items: any = [1];

  protected test(): void {
    console.log('test');
  }
}
