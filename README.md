# Angular 2 Slide Menu 
### An angular 2 slide navigation menu component for mobile and web.
Hamburger kind of menu for mobile and web is very common feature and a must have as well, these days.

## Demo
### View the [Demo here](https://cuppalabs.github.io/angular2-slide-menu/).

## Getting Started

### Installation
- The Slide menu package is published on the [npm](https://www.npmjs.com/package/cuppa-ng2-slidemenu) Registry. 
- Install the package :
    `npm install cuppa-ng2-slidemenu`

- Once installed import `SlideMenuModule` from the installed package into your module as follows:

```js
import { SlideMenuModule } from 'cuppa-ng2-grid/cuppa-ng2-slidemenu';
```
- Declare the data grid module in your `ngModule` as follows:

```js
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [AppComponent],
  imports: [SlideMenuModule] // Import SlideMenu module variable here
})
```

## Usage

### HTML
- Place the component html tag in the template where the table needs to be rendered.
```html
<cuppa-slidemenu [menulist]="menuItemsArray"></cuppa-slidemenu>
```

### JS 
- Component requires a `menulist` to pass data to the component, as follows:

```js 
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
  }
```

Thats all Folks !! You are good to go.

### View the [Demo here](https://cuppalabs.github.io/angular2-slide-menu/).

Please raise any issues [here](https://github.com/CuppaLabs/angular2-dataGrid/issues)

To run the code and build in your local, follw the below steps

- git clone `https://github.com/CuppaLabs/angular2-dataGrid.git`
- npm install
- npm start
- Go to `http://localhost:3000` where your app will run.

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

--

The MIT License (MIT)
Copyright (c) 2016 Cuppa Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Author
Pradeep Kumar Terli  @ [Cuppa Labs](http://www.cuppalabs.com)

