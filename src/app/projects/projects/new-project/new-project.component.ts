import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public header = 'Projects';
  public description = 'New project';
  public projectName;
  public projectNameErrorRequire = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  public saveProject() {
    if (!this.projectName || this.projectName.trim().length <= 0) {
      this.projectName = null;
      this.projectNameErrorRequire = true;
      return;
    }
    const ids = environment.projects.map(a => a.id);
    const project: Project = {
      id: ids.length > 0 ? Math.max.apply(null, ids) + 1 : 0,
      name: this.projectName
    };
    environment.projects.push(project);
    this.router.navigate(['projects']);
  }
}
