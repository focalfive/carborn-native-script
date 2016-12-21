import { NgModule } from "@angular/core"
import { NativeScriptModule } from "nativescript-angular/platform"
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { NativeScriptHttpModule } from "nativescript-angular/http"

import { appRoutes } from "./app.routing"
import { AppComponent } from "./app.component"

import { LoadingModule } from  "./loading/loading.module"

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NativeScriptHttpModule,
        LoadingModule,
    ],
})
export class AppModule { }
