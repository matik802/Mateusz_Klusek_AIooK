import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { RegionsComponent } from './regions/regions.component';

import { FormsModule } from '@angular/forms';
import { ManageRegionListComponent } from './manage-region-list/manage-region-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    RegionsComponent,
    ManageRegionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
