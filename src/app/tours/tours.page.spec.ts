import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ToursPage} from './tours.page';

describe('ToursPage', () => {
    let component: ToursPage;
    let fixture: ComponentFixture<ToursPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ToursPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ToursPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
