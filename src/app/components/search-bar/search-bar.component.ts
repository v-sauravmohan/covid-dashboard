import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchQuery = '';

  @Output()
  change = new EventEmitter<string>();

  constructor() { }

  setSearchQuery(event) {
    console.log(event.target.value);
    this.searchQuery = event.target.value;
  }

  Search() {
    this.change.emit(this.searchQuery);
  }
}
