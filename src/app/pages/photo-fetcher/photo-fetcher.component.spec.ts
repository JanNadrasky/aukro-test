import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFetcherComponent } from './photo-fetcher.component';

describe('PhotoFetcherComponent', () => {
  let component: PhotoFetcherComponent;
  let fixture: ComponentFixture<PhotoFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFetcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
