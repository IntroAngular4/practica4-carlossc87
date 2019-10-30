import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: Project[];

  constructor() {
    this.projects = environment.projects;
  }

  public getAll() {
    return this.projects;
  }

  public getById(id: number) {
    const projectsFound = this.projects.filter(p => p.id === id);
    if (projectsFound.length === 1) {
      return projectsFound[0];
    }
    return null;
  }

  public countAll() {
    return this.projects.length;
  }

  public create(project: Project) {
    const ids = this.projects.map(a => a.id);
    if (ids.length > 0) {
      project.id = Math.max.apply(null, ids) + 1;
    }
    this.projects.push(project);
  }

  public delete(project: Project) {
    this.projects = this.projects.filter(p => p.id !== project.id);
  }
}
