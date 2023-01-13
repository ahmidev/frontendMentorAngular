import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAddonsComponent } from './pick-addons.component';

describe('PickAddonsComponent', () => {
  let component: PickAddonsComponent;
  let fixture: ComponentFixture<PickAddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAddonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
