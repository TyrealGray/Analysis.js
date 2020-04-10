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

const performanceObserver = Analysis.getPerformanceObserver();
const perf_observer = (list, observer) => { 
   // Process the "measure" event 
};
const observer2 = new performanceObserver(perf_observer); 
observer2.observe({entryTypes: ["measure"]});
```

**`Analysis.getPerformance()`** in web context will return `window.performance`, and in Node.js context will return `perf_hooks.performance`.
So `performance.getEntries()` will not work in Node.js context, you will need to use `PerformanceObserver` to get the list.