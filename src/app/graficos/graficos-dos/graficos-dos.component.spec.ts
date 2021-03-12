import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosDosComponent } from './graficos-dos.component';

describe('GraficosDosComponent', () => {
  let component: GraficosDosComponent;
  let fixture: ComponentFixture<GraficosDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
