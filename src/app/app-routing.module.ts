import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ServiceComponent } from "./service/service.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  { path: "about", component: AboutComponent },
  { path: "manager", component: ProductManagerComponent },
  { path: "service", component: ServiceComponent },
  { path: "list", component: ProductListComponent },
  { path: "contact", component: ContactComponent },
  { path: "home", component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
