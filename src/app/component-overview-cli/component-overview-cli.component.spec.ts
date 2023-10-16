import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOverviewCliComponent } from './component-overview-cli.component';

describe('ComponentOverviewCliComponent', () => {
    let component: ComponentOverviewCliComponent;
    let fixture: ComponentFixture<ComponentOverviewCliComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [ComponentOverviewCliComponent]
        });
        fixture = TestBed.createComponent(ComponentOverviewCliComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
