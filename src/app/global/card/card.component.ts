import { Component, input, InputSignal } from '@angular/core';
import { LucideAngularModule, LucideIconData, PlusIcon } from 'lucide-angular';
import { noop } from 'rxjs';

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  protected readonly PlusIcon: LucideIconData = PlusIcon;
  readonly emptyState: InputSignal<boolean> = input(false);
  readonly clickFn: InputSignal<(() => void) | null> = input<(() => void) | null>(null);

  protected onClick(): void {
    const fn: (() => void) | null = this.clickFn();

    fn ? fn() : noop();
  }
}
