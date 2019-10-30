import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects: Project[];
  public filterProjects: Project[];

  constructor() {}

  ngOnInit() {
    const p = [];
    this.projects.forEach(function(project) {
      p.push(project);
    });
    this.filterProjects = p;
  }

  public onFilterChange(valor: string) {
    const p = [];
    const filterByName = valor.toLowerCase();
    this.projects.forEach(function(project) {
      if (project.name.toLowerCase().indexOf(filterByName) !== -1) {
        p.push(project);
      }
    });
    this.filterProjects = p;
  }
}
