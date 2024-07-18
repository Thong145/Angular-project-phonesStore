import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsAreaComponent } from './brands-area.component';

describe('BrandsAreaComponent', () => {
  let component: BrandsAreaComponent;
  let fixture: ComponentFixture<BrandsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
