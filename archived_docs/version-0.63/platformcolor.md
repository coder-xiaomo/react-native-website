---
id: platformcolor
title: PlatformColor
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

```js
PlatformColor(color1, [color2, ...colorN]);
```

You can use the `PlatformColor` function to access native colors on the target platform by supplying the native color’s corresponding string value. You pass a string to the `PlatformColor` function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.

If you pass more than one string value to the `PlatformColor` function, it will treat the first value as the default and the rest as fallback.

```js
PlatformColor('bogusName', 'linkColor');
```

Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components.

### Supported colors

For a full list of the types of system colors supported, see:

- Android:
  - [R.attr](https://developer.android.com/reference/android/R.attr) - `?attr` prefix
  - [R.color](https://developer.android.com/reference/android/R.color) - `@android:color` prefix
- iOS (Objective-C and Swift notations):
  - [UIColor Standard Colors](https://developer.apple.com/documentation/uikit/uicolor/standard_colors)
  - [UIColor UI Element Colors](https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors)

## Example

```SnackPlayer name=PlatformColor%20Example&supportedPlatforms=android,ios
import React from 'react';
import {
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.label}>
      I am a special label color!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  label: {
    padding: 16,
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
        backgroundColor:
          PlatformColor('systemTealColor'),
      },
      android: {
        color: PlatformColor('?attr/textColor'),
        backgroundColor:
          PlatformColor('@android:color/holo_blue_bright'),
      },
      default: { color: 'black' }
    })
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
```

The string value provided to the `PlatformColor` function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a `Platform.OS === 'platform'` or a `Platform.Select()`, as shown on the example above.

> **Note:** You can find a complete example that demonstrates proper, intended use of `PlatformColor` in [PlatformColorExample.js](https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js).

---

##### 本文档贡献者：[sunnylqm](https://github.com/search?q=sunnylqm&type=Users)(52.44%), [sunnylqm](https://github.com/search?q=sunnylqm&type=Users)(47.56%)
