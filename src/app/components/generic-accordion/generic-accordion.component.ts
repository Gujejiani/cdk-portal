import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
@Component({
  selector: 'app-generic-accordion',
  templateUrl: './generic-accordion.component.html',
  styleUrls: ['./generic-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericAccordionComponent {
  @ViewChild('accordionContent') accordionContent: ElementRef | undefined;
  @Input() showContent: boolean = false;
  // to consider margin difference when opening accordion
  @Input() marginSize = 0;
  @Input() headerStyles = {};
  @Input() toggleStyles = {};
  @Input() greyArrow = false;
  @Input() withArrow = true;
  // increase if inside accordion there is nested content which will be visible, if we click show more for example, in that case this component will calculate height one more time
  @Input() showMoreCount = 0;
  @Output() toggleAccordion = new EventEmitter<void>();
  calcAccordionMaxHeight(contentVisible: boolean, _showMoreCount: number) {
    let maxHeight = 0;
    if (!this.accordionContent?.nativeElement) {
      return '0px';
    }
    if (contentVisible) {
      Array.from(this.accordionContent.nativeElement.children).forEach(
        (child: any) => {
          maxHeight += child.offsetHeight;
        }
      );
      if (this.marginSize) {
        maxHeight += this.marginSize;
      }
    }
    return maxHeight + 'px';
  }
  toggleAccordionContent() {
    this.toggleAccordion.emit();
  }
}