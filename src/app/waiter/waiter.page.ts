import { Component, OnInit } from '@angular/core';
import { Table } from '../Table.model';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {

  private tables: Table[];
  constructor() { }

  ngOnInit() {
  }

}
