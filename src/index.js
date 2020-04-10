export class Analysis {
    static getPerformance(){
        if(typeof window !== "undefined"){
            return performance;
        }

        return eval(`require('perf_hooks').performance;`);
    }

    static getPerformanceObserver(){
        if(typeof window !== "undefined"){
            return PerformanceObserver;
        }

        return eval(`require('perf_hooks').PerformanceObserver;`);
    }
}