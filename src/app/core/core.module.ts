import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [ShellComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule
  ],
  exports: [ShellComponent]
})
export class CoreModule {}
