import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentpostComponent } from './recentpost.component';

describe('RecentpostComponent', () => {
  let component: RecentpostComponent;
  let fixture: ComponentFixture<RecentpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentpostComponent]
    });
    fixture = TestBed.createComponent(RecentpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
