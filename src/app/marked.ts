import { Component, Input } from "@angular/core";

@Component({
    selector:'marked',
    template:`
    helloworld
    `
})
export class Markedcom{
    @Input() urlInput!: string;
}