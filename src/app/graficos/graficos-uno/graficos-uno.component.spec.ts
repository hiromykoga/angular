import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosUnoComponent } from './graficos-uno.component';

describe('GraficosUnoComponent', () => {
  let component: GraficosUnoComponent;
  let fixture: ComponentFixture<GraficosUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
