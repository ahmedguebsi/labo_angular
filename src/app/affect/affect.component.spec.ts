import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectComponent } from './affect.component';

describe('AffectComponent', () => {
  let component: AffectComponent;
  let fixture: ComponentFixture<AffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
