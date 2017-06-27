import { Component } from '@angular/core';

import { RecordPage } from '../record/record';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = RecordPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
