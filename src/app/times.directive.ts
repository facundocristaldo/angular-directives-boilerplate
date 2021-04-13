import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef, //self, container
    private templateRef: TemplateRef<any> //content of the container
  ) { }

  @Input("appTimes") set render(times: number) {
    this.viewContainer.clear(); //clearing container content
    for (let i = 0; i < times; i++) { //repeting operation
      this.viewContainer.createEmbeddedView(this.templateRef, { index: i })//attaching the template n times
    }
  }
}
