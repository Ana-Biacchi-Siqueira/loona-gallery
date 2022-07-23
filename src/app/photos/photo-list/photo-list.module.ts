import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { FilterByDescription } from './photos/photos-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [CommonModule, PhotoModule, CardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotoListModule {}
