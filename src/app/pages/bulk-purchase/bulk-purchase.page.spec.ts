import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulkPurchasePage } from './bulk-purchase.page';

describe('BulkPurchasePage', () => {
  let component: BulkPurchasePage;
  let fixture: ComponentFixture<BulkPurchasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkPurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
