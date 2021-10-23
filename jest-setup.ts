import '@testing-library/jest-dom';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  comparisonMethod: 'ssim',
  customDiffConfig: {
    ssim: 'fast',
  },
  failureThreshold: 0.02,
  failureThresholdType: 'percent',
  blur: 1
});

expect.extend({ toMatchImageSnapshot });
