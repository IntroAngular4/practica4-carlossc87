import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects$ = new Observable<number>();

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.numProjects$ = this.projectsService.getCount();
  }
}
