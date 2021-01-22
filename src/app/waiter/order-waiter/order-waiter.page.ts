import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-order-waiter',
  templateUrl: './order-waiter.page.html',
  styleUrls: ['./order-waiter.page.scss'],
})
export class OrderWaiterPage implements OnInit {

  private menu: String[];

  constructor(private route: ActivatedRoute, private orderserv: OrderService) { }

  ngOnInit() {
  }  

  showMenu(menu: string){
    console.log(menu);
  }
}
