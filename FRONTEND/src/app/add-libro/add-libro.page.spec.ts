import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLibroPage } from './add-libro.page';

describe('AddLibroPage', () => {
  let component: AddLibroPage;
  let fixture: ComponentFixture<AddLibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
