import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegionListComponent } from './manage-region-list.component';

describe('ManageRegionListComponent', () => {
  let component: ManageRegionListComponent;
  let fixture: ComponentFixture<ManageRegionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRegionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRegionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
