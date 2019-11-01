import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Output() public save = new EventEmitter<Project>();
  public projectName;
  public projectNameErrorRequire = false;

  constructor() {}

  ngOnInit() {}

  public saveProject() {
    if (!this.projectName || this.projectName.trim().length <= 0) {
      this.projectName = null;
      this.projectNameErrorRequire = true;
      return;
    }
    const project: Project = {
      _id: null,
      owner: null,
      name: this.projectName
    };
    this.save.emit(project);
  }
}
