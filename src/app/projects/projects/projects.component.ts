import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.getAll();
  }
}
