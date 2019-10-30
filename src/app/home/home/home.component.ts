import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects = 0;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.numProjects = this.projectsService.countAll();
  }
}
