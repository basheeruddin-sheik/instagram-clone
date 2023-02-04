import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const dashboardRoutes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
