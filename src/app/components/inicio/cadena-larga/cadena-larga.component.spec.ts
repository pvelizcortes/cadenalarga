import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaLargaComponent } from './cadena-larga.component';

describe('CadenaLargaComponent', () => {
  let component: CadenaLargaComponent;
  let fixture: ComponentFixture<CadenaLargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadenaLargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenaLargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
