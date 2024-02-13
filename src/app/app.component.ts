import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './_services/account.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
           RouterOutlet,
           FormsModule,
           HttpClientModule        
  ],
  templateUrl: './nav/nav.component.html',
  styleUrl: './nav/nav.component.css'

/* templateUrl: './app.component.html',
  styleUrl: './app.component.css' */
})
export class AppComponent implements OnInit {
       model: any={}
       loggedIn = false;

       constructor( private accountService: AccountService){}

       ngOnInit(): void
       {

       }

       login()
       {

          debugger;
          this.accountService.login(this.model).subscribe({
           next: response =>{
            console.log(response);
            this.loggedIn = true;
           }

          })

           console.log(this.model)
       }


  title = 'my_proyect';
}
