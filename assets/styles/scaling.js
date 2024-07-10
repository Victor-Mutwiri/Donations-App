import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    // if device is small, return 330 (fit older iPhones such as the iPhone 5/5S/SE)
    return 330;
  }
  return 350; // if device is not small, return 350
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    // if device is small, return 550 (enough vertical space without taking up too much screen real estate)
    return 550;
  } else if (width > 410) {
    // if device width is greater than 410 (close to iPhone 6/7/8 Plus width), return 620 (enough vertical space without making the UI feel cramped)
    return 620;
  }
  return 680; // if device width is less than or equal to 410, return 680 (appropriate for devices with even wider screens, such as some Android phones)
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    // if device width is greater than 410 (close to iPhone 6/7/8 Plus width), return 430
    return 430;
  }
  return 400; // if device width is less than or equal to 410, return 400
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;

// Function to scale a size vertically based on the device's height
const verticalScale = size => (height / guidelineBaseHeight()) * size;

// Function to scale a font size based on the device's width
const scaleFontSize = size => Math.round((size * width) / guidelineBaseFonts());

// Export the scaling functions for use in other modules
export {horizontalScale, verticalScale, scaleFontSize};
