import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public header = 'Projects';
  public description = 'Projects list';
  public projects: Project[] = environment.projects;
  public byname = '';

  constructor() {}

  ngOnInit() {}

  public deleteProject(project: Project) {
    this.projects = this.projects.filter(p => p.id !== project.id);
    environment.projects = this.projects;
  }
}
