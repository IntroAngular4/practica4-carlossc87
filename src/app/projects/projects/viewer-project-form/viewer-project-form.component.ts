import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.css']
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() public project: Project;
  @Output() public delete = new EventEmitter<Project>();

  constructor() {}

  ngOnInit() {}

  public onDelete(project: Project) {
    this.delete.emit(project);
  }
}
