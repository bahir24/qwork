import {Component, ViewEncapsulation} from '@angular/core';
import { MenuItem } from "primeng/api";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  public menu: MenuItem[] = [];

  constructor(
    private router:Router
  ) {
    this.menu = router.config
      .filter(item => item.title)
      .map(route => <MenuItem>{label: route.title,url: route.path ? route.path : '/'});

    // console.log(this.menu);
  }

}
