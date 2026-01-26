import { Component, input, InputSignal } from '@angular/core';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

@Component({
  selector: 'app-card-header',
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {
  readonly title: InputSignal<string> = input.required();
  readonly subTitle: InputSignal<string> = input.required();
  protected readonly date: string;
  protected readonly dateTime: string;

  constructor() {
    this.date = format(new Date(), 'EEEE, d MMMM yyyy', { locale: pl });
    this.dateTime = format(new Date(), 'HH:mm', { locale: pl });
  }
}
