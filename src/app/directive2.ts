import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Directive({
  selector: '[appConditionalLink]'
})
export class ConditionalLinkDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private routerLinkWithHref: RouterLinkWithHref
  ) {}

  @Input() appConditionalLink: string; // Input to determine when to use href or routerLink

  ngOnInit() {
    if (this.appConditionalLink === 'router') {
      this.renderer.removeAttribute(this.el.nativeElement, 'href');
    } else if (this.appConditionalLink === 'href') {
      const routerLink = this.routerLinkWithHref.routerLink;
      const urlTree = this.routerLinkWithHref.urlTree;
      const url = this.routerLinkWithHref.url;
      this.renderer.setProperty(this.el.nativeElement, 'href', url);
    }
  }
}
