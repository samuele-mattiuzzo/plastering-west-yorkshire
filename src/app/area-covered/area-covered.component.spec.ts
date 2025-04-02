import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCoveredComponent } from './area-covered.component';

describe('AreaCoveredComponent', () => {
  let component: AreaCoveredComponent;
  let fixture: ComponentFixture<AreaCoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaCoveredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
