(self.webpackChunkng_pokedex=self.webpackChunkng_pokedex||[]).push([[19],{3019:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PokemonModule:()=>W});var i=n(1892),s=n(5959),o=n(4689),r=n(9996),c=n(6238),a=n(5614),h=n(9624),u=n(8277);class p extends u.o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}var l=n(1098);class d extends l.v{}const g=new d(p);var m=n(7570),f=n(6673),k=n(3103);class b extends f.L{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(b.dispatch,this.delay,new v(e,this.destination)))}_next(e){this.scheduleMessage(k.P.createNext(e))}_error(e){this.scheduleMessage(k.P.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(k.P.createComplete()),this.unsubscribe()}}class v{constructor(e,t){this.notification=e,this.destination=t}}var _=n(3895),w=n(9291);class x extends s.xQ{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){if(!this.isStopped){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift()}super.next(e)}nextTimeWindow(e){this.isStopped||(this._events.push(new T(this._getNow(),e)),this._trimBufferThenGetEvents()),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,s=n.length;let o;if(this.closed)throw new _.N;if(this.isStopped||this.hasError?o=m.w.EMPTY:(this.observers.push(e),o=new w.W(this,e)),i&&e.add(e=new b(e,i)),t)for(let r=0;r<s&&!e.closed;r++)e.next(n[r]);else for(let r=0;r<s&&!e.closed;r++)e.next(n[r].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),o}_getNow(){return(this.scheduler||g).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,i=this._events,s=i.length;let o=0;for(;o<s&&!(e-i[o].time<n);)o++;return s>t&&(o=Math.max(o,s-t)),o>0&&i.splice(0,o),i}}class T{constructor(e,t){this.time=e,this.value=t}}var y=n(2693);let C=(()=>{class e{constructor(e){this.http=e,this.pokemon=this.http.get("/api/pokemon.json").pipe((0,r.U)(e=>e.map(e=>this.setPokemon(e))),function(e,t,n){let i;return i={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},e=>e.lift(function({bufferSize:e=Number.POSITIVE_INFINITY,windowTime:t=Number.POSITIVE_INFINITY,refCount:n,scheduler:i}){let s,o,r=0,c=!1,a=!1;return function(h){let u;r++,!s||c?(c=!1,s=new x(e,t,i),u=s.subscribe(this),o=h.subscribe({next(e){s.next(e)},error(e){c=!0,s.error(e)},complete(){a=!0,o=void 0,s.complete()}}),a&&(o=void 0)):u=s.subscribe(this),this.add(()=>{r--,u.unsubscribe(),u=void 0,o&&!a&&n&&0===r&&(o.unsubscribe(),o=void 0,s=void 0)})}}(i))}())}setPokemon(e){var t;return e.name=(t=e.name).charAt(0).toUpperCase()+t.slice(1),e}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(y.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),P=(()=>{class e{constructor(e,t){this.title=e,this.pokemonDataService=t,this.searchTerm=new s.xQ,this.pokemon=this.pokemonDataService.pokemon.pipe((0,o.w)(e=>this.searchTerm.pipe((0,r.U)(t=>this.filter(e,t)),(0,c.O)(e))))}setTitle(){this.title.setTitle("Search for Pok\xe9mon")}search(e){this.searchTerm.next(e)}filter(e,t){return e.filter(n=>t?n.name.toLowerCase().includes(t.toLowerCase()):e)}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(h.Dx),a.LFG(C))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})();var O=n(718),Z=n(1116);const I=function(e){return["./",e]};function M(e,t){if(1&e&&(a.TgZ(0,"a",4),a._UZ(1,"i"),a.TgZ(2,"div",5),a._uU(3),a.TgZ(4,"span",6),a._uU(5),a.qZA(),a.qZA(),a.qZA()),2&e){const e=t.$implicit;a.Q6J("routerLink",a.VKq(5,I,e.id)),a.xp6(1),a.Tol(" sprite sprite-"+e.id),a.xp6(2),a.hij(" ",e.name," "),a.xp6(2),a.hij("#",e.id,"")}}let S=(()=>{class e{constructor(e){this.pokemonService=e,this.showGrid=!0,this.pokemonService.setTitle(),this.pokemon=this.pokemonService.pokemon}search(e){this.pokemonService.search(e)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(P))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-pokemon-list"]],features:[a._Bn([P])],decls:6,vars:3,consts:[["bp","grid 12"],[3,"formChange"],["bp","grid 6 4@md 2@lg"],["class","card--media",3,"routerLink",4,"ngFor","ngForOf"],[1,"card--media",3,"routerLink"],[1,"card--media__content"],["bp","float-right"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"app-form-search",1),a.NdJ("formChange",function(e){return t.search(e)}),a.qZA(),a.qZA(),a.TgZ(2,"div",2),a.YNc(3,M,6,7,"a",3),a.ALo(4,"async"),a.qZA(),a._UZ(5,"router-outlet")),2&e&&(a.xp6(3),a.Q6J("ngForOf",a.lcZ(4,1,t.pokemon)))},directives:[O.F,Z.sg,i.lC,i.yS],pipes:[Z.Ov],styles:[".sprite[_ngcontent-%COMP%]{transform:scale(1.6);margin:20px auto}.card--media[_ngcontent-%COMP%]{height:175px}"]}),e})();class A{constructor(e,t){this.compare=e,this.keySelector=t}call(e,t){return t.subscribe(new N(e,this.compare,this.keySelector))}}class N extends f.L{constructor(e,t,n){super(e),this.keySelector=n,this.hasKey=!1,"function"==typeof t&&(this.compare=t)}compare(e,t){return e===t}_next(e){let t;try{const{keySelector:n}=this;t=n?n(e):e}catch(i){return this.destination.error(i)}let n=!1;if(this.hasKey)try{const{compare:e}=this;n=e(this.key,t)}catch(i){return this.destination.error(i)}else this.hasKey=!0;n||(this.key=t,this.destination.next(e))}}var q=n(3982),U=n(4019),E=n(9951);function F(e,t){if(1&e&&(a.TgZ(0,"div",7),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("ngClass",e),a.xp6(1),a.hij(" ",e," ")}}function Y(e,t){if(1&e&&(a.TgZ(0,"div",2,3),a._UZ(2,"i",4),a.TgZ(3,"div",5),a.TgZ(4,"h1"),a._uU(5),a.qZA(),a.YNc(6,F,2,2,"div",6),a.TgZ(7,"p"),a.TgZ(8,"strong"),a._uU(9,"Height:"),a.qZA(),a._uU(10),a.TgZ(11,"strong"),a._uU(12,"Weight:"),a.qZA(),a._uU(13),a.qZA(),a.TgZ(14,"p"),a._uU(15),a.qZA(),a.qZA(),a.qZA()),2&e){const e=t.$implicit;a.xp6(2),a.Tol("sprite sprite-"+e.id),a.xp6(3),a.AsE("",e.name," #",e.id,""),a.xp6(1),a.Q6J("ngForOf",e.types),a.xp6(4),a.hij(" ",e.height/10," m "),a.xp6(3),a.hij(" ",e.weight/10," kg "),a.xp6(2),a.Oqu(e.description)}}var L=function(e){return e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e}({});const B=[{path:"",redirectTo:"pokemon",pathMatch:"full"},{path:"pokemon",component:S,children:[{path:":id",component:(()=>{class e{constructor(e,t,n,i){this.title=e,this.router=t,this.activatedRoute=n,this.pokemonDataService=i,this.show=!0,this.pokemon=this.activatedRoute.params.pipe(e=>e.lift(new A(void 0,void 0)),(0,q.zg)(e=>this.getPokemon(e.id)),(0,U.b)(e=>this.title.setTitle(`Pok\xe9mon #${e.id} ${e.name}`)))}ngOnDestroy(){this.title.setTitle("Search for Pok\xe9mon")}close(e){e||this.router.navigateByUrl("/pokemon")}keyEvent(e){if(e.key===L.ArrowRight){const e=+this.activatedRoute.snapshot.params.id;this.router.navigateByUrl("/pokemon/"+(1===e?151:e-1))}if(e.key===L.ArrowLeft){const e=+this.activatedRoute.snapshot.params.id;this.router.navigateByUrl(`/pokemon/${e<151?e+1:1}`)}}getPokemon(e){return this.pokemonDataService.pokemon.pipe((0,r.U)(t=>t.find(t=>t.id===+e)))}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(h.Dx),a.Y36(i.F0),a.Y36(i.gz),a.Y36(C))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-pokemon-detail"]],hostBindings:function(e,t){1&e&&a.NdJ("keyup",function(e){return t.keyEvent(e)},!1,a.Jf7)},decls:3,vars:4,consts:[[3,"visible","visibleChange"],["bp","grid",4,"ngIf"],["bp","grid"],["view",""],["bp","5@sm 4@md"],["bp","7@sm 8@md"],["class","type",3,"ngClass",4,"ngFor","ngForOf"],[1,"type",3,"ngClass"]],template:function(e,t){1&e&&(a.TgZ(0,"ngx-modal",0),a.NdJ("visibleChange",function(e){return t.close(e)}),a.YNc(1,Y,16,8,"div",1),a.ALo(2,"async"),a.qZA()),2&e&&(a.Q6J("visible",!0),a.xp6(1),a.Q6J("ngIf",a.lcZ(2,2,t.pokemon)))},directives:[E.r,Z.O5,Z.sg,Z.mk],pipes:[Z.Ov],styles:["h1[_ngcontent-%COMP%]{margin-bottom:4px;margin-top:10px}.sprite[_ngcontent-%COMP%]{transform:scale(1.6);margin:20px auto}@media (min-width:420px){.sprite[_ngcontent-%COMP%]{transform:scale(2);margin:30px auto}}.type[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;color:#fff;margin-right:4px}.fire[_ngcontent-%COMP%]{background-color:#f45545}.water[_ngcontent-%COMP%]{background-color:#558bcf}.grass[_ngcontent-%COMP%]{background-color:#589f43}.poison[_ngcontent-%COMP%]{background-color:#6c4294}.flying[_ngcontent-%COMP%]{background-color:#e3c066}.normal[_ngcontent-%COMP%]{background-color:#bd8d41}.bug[_ngcontent-%COMP%]{background-color:#acbe16}.electric[_ngcontent-%COMP%]{background-color:#f3be1f}.ground[_ngcontent-%COMP%]{background-color:#796444}.dragon[_ngcontent-%COMP%]{background-color:#a485c2}.psychic[_ngcontent-%COMP%]{background-color:#ee86a5}.fairy[_ngcontent-%COMP%]{background-color:#bf6481}.ice[_ngcontent-%COMP%]{background-color:#64aff5}.rock[_ngcontent-%COMP%]{background-color:#3b3426}.fighting[_ngcontent-%COMP%]{background-color:#915656}.steel[_ngcontent-%COMP%]{background-color:#949494}.ghost[_ngcontent-%COMP%]{background-color:#75577d}"]}),e})()}]}];let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(B)],i.Bz]}),e})();var z=n(1e3);let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[z.m,J]]}),e})()}}]);