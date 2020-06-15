import { Directive, Output, Input, ElementRef} from '@angular/core';
import { DataHousesService } from './services/data-houses.service';

@Directive({
  selector: '[appUrlInfo]',
  exportAs:"localVariables"
})
export class UrlInfoDirective {
  @Input() urlinfo: string;

  @Output() info:any
  @Output() name:any

  constructor(private Element: ElementRef, public dataService: DataHousesService) { }

  ngOnInit() {
    this.dataService.getElement(this.urlinfo).subscribe(output => {
      this.name = output['name']
      this.info = output
    }, 
    err => console.log(err)
    )
  }
}
