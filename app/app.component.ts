import { Component } from "@angular/core";

@Component({
    selector: "cb-app",
    // template: "<StackLayout><Label text='test'></Label></StackLayout>",
    template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent { }
