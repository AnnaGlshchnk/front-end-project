import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ToursPage} from './tours.page';

const routes: Routes = [
    {
        path: '',
        component: ToursPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ToursPageRoutingModule {
}
