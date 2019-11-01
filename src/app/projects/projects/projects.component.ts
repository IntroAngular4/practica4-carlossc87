import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getAll();
  }
}
