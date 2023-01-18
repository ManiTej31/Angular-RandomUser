import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'random-cards';

  user: any;

  constructor( 
    private userService: UserService, 
    private toastr: ToastrService,
    ) {}


// on init of the app getting user and setting it to the user property and showing it
  ngOnInit(): void {
    console.log(this.user);

    // using service to get user and set it
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user.results[0]);
        this.user = user.results[0];
      },
      (err) => {
        // handling error here
        console.error(err);
        this.toastr.error(err.status, 'Something went wrong');
      }
    );
  }
}