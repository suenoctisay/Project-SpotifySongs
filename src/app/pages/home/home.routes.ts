import { Routes } from "@angular/router";
import { HomeComponent } from "./home";

export const home_routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
  },
];