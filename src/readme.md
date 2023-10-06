```bash
grep -rl "s.dependency 'React/Core'" node_modules/ | xargs sed -i '' 's=React/Core=React-Core=g'
```

```xcode
UIColor *cancelButtonTintColor =
[RCTConvert UIColor:options.tintColor() ? @(*options.tintColor()) : nil];
```