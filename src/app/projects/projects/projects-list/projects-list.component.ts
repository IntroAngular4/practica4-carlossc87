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
    this.filterProjects = this.projects;
  }

  public onFilterChange(valor: string) {
    this.filterProjects = this.projects.filter(p => p.name.toLowerCase().indexOf(valor.toLowerCase()) !== -1);
  }
}
