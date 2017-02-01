/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {

    private menuItemsArray: any[] = [
                            {"title":"Electricity","link":"#"},
                            {"title":"Mobile Bill","link":"#"},
                            {"title":"Home and Kitchen","link":"#",
                                "subItems":[
                                            {"title":"Furniture","link":"#"},
                                            {"title":"Cookware","link":"#"},
                                           ]
                            },
                            {"title":"Car and Bike Accessories","link":"#",
                                "subItems":[
                                            {"title":"Tyres and Alloys","link":"#"},
                                            {"title":"Comfort and Safety","link":"#"},
                                           ]
                            },
                        ];

  constructor(
    
  ) {}

  public ngOnInit() {
    
  } 
  npminstallScript: string = 'npm install cuppa-ng2-slidemenu';
  installScript: string = "import { SlideMenuModule } from 'cuppa-ng2-grid/cuppa-ng2-slidemenu';";
  moduleScript: string =  "import { NgModule } from '@angular/core';\n"+
        "import { BrowserModule } from '@angular/platform-browser';\n"+
        "import { GridModule } from '@progress/kendo-angular-grid';\n"+
        "import { AppComponent } from './app.component';\n"+
        "\n"+
        "@NgModule({\n"+
        "   bootstrap: [ AppComponent ],\n"+
        "   declarations: [AppComponent],\n"+
        "   imports: [SlideMenuModule] // Import SlideMenu module variable here \n"+
        "})\n"+
        "export class AppModule {\n"+
        "}";
  htmlTag: string = '<cuppa-slidemenu [menulist]="menuItemsArray"></cuppa-slidemenu>';
  jsScript:string =                 'private menuItemsArray: any[] = [ \n'+
                                    '       {"title":"Electricity","link":"#"},\n'+
                                    '       {"title":"Mobile Bill","link":"#"},\n'+
                                    '       {"title":"Home and Kitchen","link":"#",\n'+
                                    '       "subItems":[\n'+
                                    '                   {"title":"Furniture","link":"#"},\n'+
                                    '                   {"title":"Cookware","link":"#"},\n'+
                                    '                  ]\n'+
                                    '       },\n'+
                                    '       {"title":"Car and Bike Accessories","link":"#",\n'+
                                    '        "subItems":[\n'+
                                    '                     {"title":"Tyres and Alloys","link":"#"},\n'+
                                    '                     {"title":"Comfort and Safety","link":"#"},\n'+
                                    '                    ]\n'+
                                    '       },\n'+
                                    ' ];';
}
