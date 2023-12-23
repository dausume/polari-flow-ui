import { TestBed } from '@angular/core/testing';
import { CanvasConfigService } from './canvas-config.service';

describe('CanvasConfigService', () => {
  let service: CanvasConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default values', () => {
    expect(service.getCanvasColor()).toEqual({'R':173,'G':216,'B':230});
    expect(service.getCanvasIdentifier()).toEqual('default-canvas-element-id');
    expect(service.getCanvasHeight()).toEqual(680);
    expect(service.getCanvasWidth()).toEqual(1200);
  });

  it('should set canvas color properly', () => {
    const newColor = {'R':255,'G':0,'B':0};
    service.setCanvasColor(newColor);
    expect(service.getCanvasColor()).toEqual(newColor);
  });

  it('should load initial config properly', () => {
    const canvasWidth = 800;
    const canvasHeight = 600;
    const canvasColor = {'R':128,'G':128,'B':128};
    const canvasIdentifier = 'custom-canvas-element-id';

    service.loadInitialConfig(canvasWidth, canvasHeight, canvasColor, canvasIdentifier);

    expect(service.getCanvasWidth()).toEqual(canvasWidth);
    expect(service.getCanvasHeight()).toEqual(canvasHeight);
    expect(service.getCanvasColor()).toEqual(canvasColor);
    expect(service.getCanvasIdentifier()).toEqual(canvasIdentifier);
  });
});
