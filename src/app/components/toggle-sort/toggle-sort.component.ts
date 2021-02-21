import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-toggle-sort',
  templateUrl: './toggle-sort.component.html',
  styleUrls: ['./toggle-sort.component.scss']
})
export class ToggleSortComponent implements OnInit {

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sortToggleEventHandler(event) {
    this.valueChange.emit(event);
  }
}
