import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: Project[] = [];

  private url = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {}

  public getAll() {
    return this.httpClient.get<Project[]>(this.url);
  }

  public getCount() {
    console.log('Peticion COUNT!!!');
    return this.httpClient.get<any>(this.url + '/count').pipe(map(data => data.count));
  }

  public getById(id: number) {
    return this.httpClient.get<Project>(this.url + '/' + id);
  }

  public create(project: Project) {
    return this.httpClient.post(this.url, project);
  }

  public delete(project: Project) {
    return this.httpClient.delete(this.url + '/' + project._id);
  }
}
