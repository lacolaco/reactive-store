var e=require("rxjs/operators"),t=require("rxjs/BehaviorSubject");exports.Store=class extends t.BehaviorSubject{constructor(e,t=[]){const r=t.reduceRight((e,t)=>t(e),e=>e);super(r(e)),this.handler=r}next(e){super.next(this.handler(e))}dispatch(e){this.next(e(this.getValue()))}select(t){return this.pipe(e.map(t),e.distinctUntilChanged())}};
//# sourceMappingURL=lacolaco-store.js.map
