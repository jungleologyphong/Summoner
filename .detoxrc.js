/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'dev.ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/DebugDev-iphonesimulator/altatemplateDev.app',
      build:
        'xcodebuild -workspace ios/altatemplate.xcworkspace -scheme EnvDev -configuration DebugDev -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'dev.ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/ReleaseDev-iphonesimulator/altatemplate.app',
      build:
        'xcodebuild -workspace ios/altatemplate.xcworkspace -scheme EnvDev -configuration ReleaseDev -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'pro.ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/DebugPro-iphonesimulator/altatemplatePro.app',
      build:
        'xcodebuild -workspace ios/altatemplate.xcworkspace -scheme EnvPro -configuration DebugPro -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'pro.ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/ReleasePro-iphonesimulator/altatemplate.app',
      build:
        'xcodebuild -workspace ios/altatemplate.xcworkspace -scheme EnvPro -configuration ReleasePro -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'dev.android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',
      build:
        'cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
      reversePorts: [8081],
    },
    'dev.android.release': {
      type: 'android.apk',
      binaryPath:
        'android/app/build/outputs/apk/dev/release/app-dev-release.apk',
      build:
        'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
    },
    'pro.android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/pro/debug/app-pro-debug.apk',
      build:
        'cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
      reversePorts: [8081],
    },
    'pro.android.release': {
      type: 'android.apk',
      binaryPath:
        'android/app/build/outputs/apk/pro/release/app-pro-release.apk',
      build:
        'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3_XL_API_30',
      },
    },
  },
  configurations: {
    'ios.dev.debug': {
      device: 'simulator',
      app: 'dev.ios.debug',
    },
    'ios.dev.release': {
      device: 'simulator',
      app: 'dev.ios.release',
    },
    'ios.pro.debug': {
      device: 'simulator',
      app: 'pro.ios.debug',
    },
    'ios.pro.release': {
      device: 'simulator',
      app: 'pro.ios.release',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
    },
    'android.dev.debug': {
      device: 'emulator',
      app: 'dev.android.debug',
    },
    'android.dev.release': {
      device: 'emulator',
      app: 'dev.android.release',
    },
    'android.pro.debug': {
      device: 'emulator',
      app: 'pro.android.debug',
    },
    'android.pro.release': {
      device: 'emulator',
      app: 'pro.android.release',
    },
  },
};
