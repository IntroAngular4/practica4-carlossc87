import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public project$: Observable<Project>;
  private projectId: number;

  constructor(activateRoute: ActivatedRoute, private router: Router, private projectsService: ProjectsService) {
    this.projectId = parseInt(activateRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    this.project$ = this.projectsService.getById(this.projectId);
  }

  public onDelete(project: Project) {
    this.projectsService.delete(project).subscribe(res => this.router.navigate(['projects']));
  }
}
