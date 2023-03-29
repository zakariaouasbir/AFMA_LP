import { TestBed, inject } from '@angular/core/testing';

import { LandingPageComponent } from './landingpage.component';
import { LandingPageService } from '../simulator/simulator.service';

describe('LandingPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of LandingPageService', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = LandingPageService.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(LandingPageComponent);
    });
  });
});
