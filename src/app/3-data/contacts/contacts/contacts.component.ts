import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';
import { Option } from './models/option.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {
  public header = 'Contacts';
  public description = 'Manage your contact list';
  public numContacts = 0;
  public counterClass = 'tag secondary';
  public formHidden = false;

  public workStatuses: Option[];
  public contact: Contact;
  public contacts: Contact[];

  constructor() {}

  public ngOnInit() {
    this.workStatuses = [
      { id: 0, description: 'unknow' },
      { id: 1, description: 'student' },
      { id: 2, description: 'unemployed' },
      { id: 3, description: 'employed' }
    ];
    this.contact = {
      name: '',
      isVIP: false,
      gender: '',
      workStatus: 0,
      companyName: '',
      education: ''
    };
    this.contacts = [];
  }

  public saveContact() {
    this.contacts.push({ ...this.contact });
    this.updateCounter();
  }
  public deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c.name !== contact.name);
    this.updateCounter();
  }

  private updateCounter() {
    this.numContacts = this.contacts.length;
    this.counterClass = this.numContacts === 0 ? 'tag secondary' : 'tag primary';
  }

  public onWorkStatusChanged() {
    if (this.contact.workStatus.toString() === '3') {
      this.contact.education = null;
    } else {
      this.contact.companyName = '';
    }
  }
}
