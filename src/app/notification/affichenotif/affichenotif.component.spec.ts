import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichenotifComponent } from './affichenotif.component';

describe('AffichenotifComponent', () => {
  let component: AffichenotifComponent;
  let fixture: ComponentFixture<AffichenotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichenotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichenotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
