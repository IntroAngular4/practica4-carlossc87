import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ViewerProjectFormComponent } from './projects/viewer-project-form/viewer-project-form.component';
import { NewProjectFormComponent } from './projects/new-project-form/new-project-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
