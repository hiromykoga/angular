import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugraficosComponent } from './menugraficos.component';

describe('MenugraficosComponent', () => {
  let component: MenugraficosComponent;
  let fixture: ComponentFixture<MenugraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
