import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasUnoComponent } from './tablas-uno.component';

describe('TablasUnoComponent', () => {
  let component: TablasUnoComponent;
  let fixture: ComponentFixture<TablasUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
