import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public header = 'Projects';
  public description = 'View project';
  public project: Project = null;
  public projectId: number;

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = parseInt(activateRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    const projectsFound = environment.projects.filter(p => p.id === this.projectId);
    if (projectsFound.length === 1) {
      this.project = projectsFound[0];
    }
  }
}
