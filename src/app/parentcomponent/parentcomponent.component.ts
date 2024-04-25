import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildcomponentComponent } from '../childcomponent/childcomponent.component';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements AfterViewInit {
childMethodHandler() {
    console.log("hi");
}
  @ViewChild(ChildcomponentComponent) childComponent!: ChildcomponentComponent;

  ngAfterViewInit() {
    console.log('Child component is :', this.childComponent);
    
  }

  showChildMessage() {
    alert(this.childComponent.childMessage);
  }

  parentMessage = 'Message from Parent Component';
  
}
