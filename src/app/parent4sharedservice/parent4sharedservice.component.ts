import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-parent4sharedservice',
  templateUrl: './parent4sharedservice.component.html',
  styleUrls: ['./parent4sharedservice.component.css']
})
export class Parent4sharedserviceComponent {
  constructor(private sharedService: SharedServiceService) {}

  sendMessage(message: string) {
    this.sharedService.changeMessage(message);
  }
}
