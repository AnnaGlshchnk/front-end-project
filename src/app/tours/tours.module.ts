import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ToursPageRoutingModule} from './tours-routing.module';

import {ToursPage} from './tours.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ToursPageRoutingModule
    ],
    declarations: [ToursPage]
})
export class ToursPageModule {
}
