import { Dimensions, PixelRatio } from 'react-native';

// Get device dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Design screen size (standard size you designed for)
const DESIGN_WIDTH = 375;  // Example: iPhone 11/12 screen width
const DESIGN_HEIGHT = 812; // Example: iPhone 11/12 screen height

/**
 * Convert width percentage to DP (device-independent pixels)
 * @param {number} widthPercent - Width as percentage of the screen width
 * @returns {number} - The calculated width in DP
 */
export const widthPercentageToDP = (widthPercent) => {
  const width = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * width) / 100);
};

/**
 * Convert height percentage to DP (device-independent pixels)
 * @param {number} heightPercent - Height as percentage of the screen height
 * @returns {number} - The calculated height in DP
 */
export const heightPercentageToDP = (heightPercent) => {
  const height = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * height) / 100);
};

/**
 * Scale size based on the device width relative to the design width
 * @param {number} size - The original size based on the design dimensions
 * @returns {number} - The scaled size in DP
 */
export const scaleSize = (size) => {
  return (SCREEN_WIDTH / DESIGN_WIDTH) * size;
};

/**
 * Scale font size based on the device width relative to the design width
 * @param {number} size - The original font size based on the design dimensions
 * @returns {number} - The scaled font size in DP
 */
export const scaleFont = (size) => {
  return size * PixelRatio.getFontScale();
};

/**
 * Get device dimensions
 * @returns {{width: number, height: number}} - Current device width and height
 */
export const getDeviceDimensions = () => {
  return {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  };
};

/**
 * Listen to dimension changes
 * @param {function} callback - Callback to handle dimension changes
 */
export const onDimensionChange = (callback) => {
  Dimensions.addEventListener('change', ({ window: { width, height } }) => {
    callback({ width, height });
  });
};

export default {
  widthPercentageToDP,
  heightPercentageToDP,
  scaleSize,
  scaleFont,
  getDeviceDimensions,
  onDimensionChange,
};
