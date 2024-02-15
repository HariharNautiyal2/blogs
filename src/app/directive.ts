import { Directive, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appInterceptRouterlink]'
})
export class InterceptRouterlinkDirective {
  typingInProgress :boolean= false; // Track if typing effect is in progress

  constructor(private router: Router, private route: ActivatedRoute) {}

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (this.typingInProgress) {
      event.preventDefault(); // Prevent navigation if typing effect is in progress
      return;
    }

    const srcElem = event.target as HTMLAnchorElement;
    if (srcElem instanceof HTMLAnchorElement) {
      const href = srcElem.href;
      if (href.startsWith(window.location.origin)) {
        const routerLink = href.substring(window.location.origin.length);
        this.route.paramMap.subscribe((params) => {
          event.preventDefault();
          event.stopPropagation();
          console.log(params.get('repo') + "/" + routerLink)
          let directory = params.get('directory');
          if (directory != null) {
            this.router.navigate([params.get('repo') + "/" + directory + "/" + routerLink]);
          } else {
            this.router.navigate([params.get('repo') + "/" + routerLink]);
          }
        });
      }
    }
  }

  // Method to set typing progress
  setTypingProgress(inProgress: boolean) {
    this.typingInProgress = inProgress;
  }
}
