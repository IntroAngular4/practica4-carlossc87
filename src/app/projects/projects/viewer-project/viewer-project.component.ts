import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public project: Project = null;

  constructor(activateRoute: ActivatedRoute, private router: Router, private projectsService: ProjectsService) {
    const projectId = parseInt(activateRoute.snapshot.params['id'], 10);
    this.project = this.projectsService.getById(projectId);
  }

  ngOnInit() {}

  public onDelete(project: Project) {
    this.projectsService.delete(project);
    this.router.navigate(['projects']);
  }
}
