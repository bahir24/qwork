import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main/main.component";
import {ServicesComponent} from "./pages/services/services/services.component";
import {ServiceComponent} from "./pages/service/service/service.component";
import {ContactsComponent} from "./pages/contacts/contacts/contacts.component";
import {AboutComponent} from "./pages/about/about/about.component";
import {OrderComponent} from "./pages/order/order/order.component";
import {SearchComponent} from "./pages/services/search/search.component";

const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule),
    component: MainComponent
  },
  {
    path: 'services',
    title: 'Услуги',
    loadChildren: () => import('./pages/services/services.module').then(mod => mod.ServicesModule),
    component: ServicesComponent
  },
  {
    path: 'services/search',
    title: 'Поиск',
    loadChildren: () => import('./pages/services/services.module').then(mod => mod.ServicesModule),
    component: SearchComponent
  },
  {
    path: 'order/:service_id',
    title: 'Заказ',
    loadChildren: () => import('./pages/order/order.module').then(mod => mod.OrderModule),
    component: OrderComponent
  },
  {
    path: 'about',
    title: 'О нас',
    loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutModule),
    component: AboutComponent
  },
  {
    path: 'contacts',
    title: 'Контакты',
    loadChildren: () => import('./pages/contacts/contacts.module').then(mod => mod.ContactsModule),
    component: ContactsComponent,
  },
  {
    path: 'service/:id',
    loadChildren: () => import('./pages/service/service.module').then(mod => mod.ServiceModule),
    component: ServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
