import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Output() public save = new EventEmitter<Project>();
  public newProjectGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newProjectGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', Validators.required],
      started: new Date().toISOString()
    });
  }

  public getError(controlName: string): ValidationErrors {
    let error: ValidationErrors = {};
    const control = this.newProjectGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = control.errors;
    }
    return error;
  }

  public saveProject() {
    const project: Project = this.newProjectGroup.value;
    this.save.emit(project);
  }
}
