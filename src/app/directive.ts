// Define an Angular directive
import { Directive, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appInterceptRouterlink]'
})
export class InterceptRouterlinkDirective {
  constructor(private router: Router,private route: ActivatedRoute) {}

  @HostListener('click', ['$event'])
  public onClick(e: MouseEvent): void {
    const srcElem = e.target as HTMLAnchorElement;
    if (srcElem instanceof HTMLAnchorElement) {
      const href = srcElem.href;
      if (href.startsWith(window.location.origin)) {
        const routerLink = href.substring(window.location.origin.length);
        this.route.paramMap.subscribe((params) => {

    
          e.preventDefault();
          e.stopPropagation();
          console.log(params.get('repo') + "/" + routerLink)
         let directory=params.get('directory');
          if(directory != null){
            
            this.router.navigate([params.get('repo') +"/"+ directory + "/"+ routerLink]);
          }else{
            this.router.navigate([params.get('repo') + "/"+routerLink]);
          }
        });

      }
    }
  }
}
