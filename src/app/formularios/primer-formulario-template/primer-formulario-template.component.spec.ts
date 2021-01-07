import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerFormularioTemplateComponent } from './primer-formulario-template.component';

describe('PrimerFormularioTemplateComponent', () => {
  let component: PrimerFormularioTemplateComponent;
  let fixture: ComponentFixture<PrimerFormularioTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerFormularioTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerFormularioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
