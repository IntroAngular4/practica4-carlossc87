import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { NewProjectFormComponent } from './projects/new-project-form/new-project-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './projects/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    FilterProjectsFormComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule
  ]
})
export class ProjectsModule {}
