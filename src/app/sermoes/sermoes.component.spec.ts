import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermoesComponent } from './sermoes.component';

describe('SermoesComponent', () => {
  let component: SermoesComponent;
  let fixture: ComponentFixture<SermoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
