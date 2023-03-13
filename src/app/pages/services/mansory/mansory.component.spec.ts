import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansoryComponent } from './mansory.component';

describe('MansoryComponent', () => {
  let component: MansoryComponent;
  let fixture: ComponentFixture<MansoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MansoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
