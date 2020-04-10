# Analysis.js
A simply javascript library for using performance api in both Node.js and web easier
## Install
`$ npm i analysis.js --save`
## Usage
```javascript
import { Analysis } from 'analysis.js';
...
const performance = Analysis.getPerformance();
performance.now();
```

**`Analysis.getPerformance()`** in web context will return `window.performance`, and in node content will return `perf_hooks.performance`.