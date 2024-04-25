import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {
  // childMessage = 'Hello from Child Component';

  // childMethod() {
  //   console.log('Child method invoked');
  // }

   // Define @Input to receive data from parent component
   @Input() childMessage = '';

   // Define @Output to send data to parent component
   @Output() childMethodEvent = new EventEmitter<void>();
 
   childMethod() {
     console.log('Child method invoked');
     // Emit event to parent component
     this.childMethodEvent.emit();
   }
}
