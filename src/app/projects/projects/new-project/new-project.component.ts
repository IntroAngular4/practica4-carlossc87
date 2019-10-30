import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  constructor(private router: Router, private projectsService: ProjectsService) {}

  ngOnInit() {}

  public save(project: Project) {
    this.projectsService.create(project);
    this.router.navigate(['projects']);
  }
}
