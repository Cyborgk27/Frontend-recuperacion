import { Component } from '@angular/core';
import { Toast } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  message(){
    //this.toastr.success('Hello world!', 'Toastr fun!');
  }
  //this.toastr.success('Hello world!', 'Toastr fun!');
}
