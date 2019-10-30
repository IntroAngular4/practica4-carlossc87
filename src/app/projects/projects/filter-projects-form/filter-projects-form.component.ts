import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Output() public filter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onChangeByName(event: any) {
    const byName = event.target.value;
    this.filter.emit(byName.trim());
  }
}
