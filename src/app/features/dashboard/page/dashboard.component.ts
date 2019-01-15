import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public title = 'CONTACTS';
  public addContactButtonLabel = 'ADD CONTACT';
  public addContactButtonUrl = '/add-contact';
  constructor(private router: Router) {}

  ngOnInit() {}

  public directToAddContact(): void {
    this.router.navigateByUrl('/add-contact');
  }
}
