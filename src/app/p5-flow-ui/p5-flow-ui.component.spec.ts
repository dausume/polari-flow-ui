import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowUIComponent } from './p5-flow-ui.component';

describe('FlowUIComponent', () => {
  let component: FlowUIComponent;
  let fixture: ComponentFixture<FlowUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
