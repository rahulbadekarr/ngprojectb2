import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDrawerContainer, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule
  ]
})
export class SharedModule {}
