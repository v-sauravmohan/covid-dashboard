import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchQuery = '';

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  setSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  Search() {
    this.valueChange.emit(this.searchQuery);
  }
}
