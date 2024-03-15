import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCylceComponent } from './life-cylce.component';

describe('LifeCylceComponent', () => {
  let component: LifeCylceComponent;
  let fixture: ComponentFixture<LifeCylceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCylceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCylceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
