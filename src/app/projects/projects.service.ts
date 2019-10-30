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
    const ids = environment.projects.map(a => a.id);
    if (ids.length > 0) {
      project.id = Math.max.apply(null, ids) + 1;
    }
    //environment.projects.push(project);
    this.projects.push(project);
  }

  public delete(project: Project) {
    //let nprojects = environment.projects;
    let nprojects = this.projects;
    nprojects = nprojects.filter(p => p.id !== project.id);
    //environment.projects = projects;
    this.projects = nprojects;
  }
}
