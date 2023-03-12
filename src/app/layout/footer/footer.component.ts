import {Component, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  public menu: MenuItem[] = [];

  constructor(
      private router:Router
  ) {
    this.menu = router.config
        .filter(item => item.title)
        .map(route => <MenuItem>{label: route.title,url: route.path});
  }
}
