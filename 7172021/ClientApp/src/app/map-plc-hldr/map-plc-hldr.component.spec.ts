import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPlcHldrComponent } from './map-plc-hldr.component';

describe('MapPlcHldrComponent', () => {
  let component: MapPlcHldrComponent;
  let fixture: ComponentFixture<MapPlcHldrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPlcHldrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPlcHldrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
