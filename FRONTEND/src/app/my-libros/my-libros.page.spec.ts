import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLibrosPage } from './my-libros.page';

describe('MyLibrosPage', () => {
  let component: MyLibrosPage;
  let fixture: ComponentFixture<MyLibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
