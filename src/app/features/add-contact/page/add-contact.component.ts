import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  public title = 'ADD CONTACT';
  public cancelButtonLabel = 'Cancel';
  public submitButtonLabel = 'Add Contact';

  constructor(private router: Router) {}

  ngOnInit() {}

  public directToDashboard(): void {
    this.router.navigateByUrl('/');
  }

  public submitContactInformation(): void {
    // TODO: Add contact submit behavior
    return;
  }
}
