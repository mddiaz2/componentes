import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmbnacionalidadComponent } from './cmbnacionalidad.component';

describe('CmbnacionalidadComponent', () => {
  let component: CmbnacionalidadComponent;
  let fixture: ComponentFixture<CmbnacionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmbnacionalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmbnacionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
