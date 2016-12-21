import { NativeScriptModule } from "nativescript-angular/platform"
import { NgModule } from "@angular/core"

import { loadingRouting } from "./loading.routing"
import { LoadingComponent } from "./loading.component"

@NgModule({
    imports: [
        NativeScriptModule,
        loadingRouting,
    ],
    declarations: [
        LoadingComponent,
    ],
})
export class LoadingModule { }
