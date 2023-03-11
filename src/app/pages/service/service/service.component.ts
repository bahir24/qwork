import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent {
  id!: number | null;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id:(string | null) = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = isNaN(parseInt(id)) ? null : parseInt(id);
    }
      // this.ticketsService.getTicketById(id)
      //   .subscribe((tour: ITour) => {
      //     this.ticket = tour;
      //   })
      // const ticketStorage: ITour[] = this.ticketStorage.getStorage();
      // this.ticket = ticketStorage.find((ticket: ITour) => ticket.id === id);
    // }
  }
}
