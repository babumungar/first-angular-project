import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-child4sharedservice',
  templateUrl: './child4sharedservice.component.html',
  styleUrls: ['./child4sharedservice.component.css']
})
export class Child4sharedserviceComponent {
  message: any;

  constructor(private sharedService: SharedServiceService) {}

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.message = message);
    
  }
}
