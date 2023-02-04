import { RouterModule, Routes } from "@angular/router";
import { MedeAuthComponent } from "./mede-auth.component";
import { AuthCallbackComponent } from "./auth-callback/auth-callback.component";
import { NgModule } from "@angular/core";

const authRoutes: Routes = [
    {
        path: "",
        component: MedeAuthComponent
    },
    {
        path: "callback",
        component: AuthCallbackComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
