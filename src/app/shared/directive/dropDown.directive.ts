import { Directive } from "@angular/core";
import { HostListener } from "@angular/core";
import { HostBinding } from "@angular/core";

@Directive({
 selector:'[appDropDown]'
})
export class DropdownDirective
{
    @HostBinding('class.open') isOpen = false;
    constructor(){}
    @HostListener('click') mouseover(){
this.isOpen = !this.isOpen;
    }
    
}