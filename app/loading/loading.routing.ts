import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { LoadingComponent } from "./loading.component"

const loadingRoutes: Routes = [
    {path: "loading", component: LoadingComponent},
]
export const loadingRouting: ModuleWithProviders = RouterModule.forChild(loadingRoutes)
