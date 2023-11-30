import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionCodigoComponent } from './verificacion-codigo.component';

describe('VerificacionCodigoComponent', () => {
  let component: VerificacionCodigoComponent;
  let fixture: ComponentFixture<VerificacionCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificacionCodigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificacionCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
