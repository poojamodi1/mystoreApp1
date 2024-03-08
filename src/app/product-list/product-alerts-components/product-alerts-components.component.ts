import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-alerts-components',
  templateUrl: './product-alerts-components.component.html',
  styleUrl: './product-alerts-components.component.css'
})
export class ProductAlertsComponentsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
