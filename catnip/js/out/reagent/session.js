// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12405 = arguments.length;
var i__7277__auto___12406 = (0);
while(true){
if((i__7277__auto___12406 < len__7276__auto___12405)){
args__7283__auto__.push((arguments[i__7277__auto___12406]));

var G__12407 = (i__7277__auto___12406 + (1));
i__7277__auto___12406 = G__12407;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__12403){
var vec__12404 = p__12403;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12404,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq12401){
var G__12402 = cljs.core.first(seq12401);
var seq12401__$1 = cljs.core.next(seq12401);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__12402,seq12401__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12412 = arguments.length;
var i__7277__auto___12413 = (0);
while(true){
if((i__7277__auto___12413 < len__7276__auto___12412)){
args__7283__auto__.push((arguments[i__7277__auto___12413]));

var G__12414 = (i__7277__auto___12413 + (1));
i__7277__auto___12413 = G__12414;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12410){
var vec__12411 = p__12410;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq12408){
var G__12409 = cljs.core.first(seq12408);
var seq12408__$1 = cljs.core.next(seq12408);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__12409,seq12408__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12417 = arguments.length;
var i__7277__auto___12418 = (0);
while(true){
if((i__7277__auto___12418 < len__7276__auto___12417)){
args__7283__auto__.push((arguments[i__7277__auto___12418]));

var G__12419 = (i__7277__auto___12418 + (1));
i__7277__auto___12418 = G__12419;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq12415){
var G__12416 = cljs.core.first(seq12415);
var seq12415__$1 = cljs.core.next(seq12415);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12416,seq12415__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__12422 = reagent.session.state;
var G__12423 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12422,G__12423) : cljs.core.reset_BANG_.call(null,G__12422,G__12423));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__12424_SHARP_){
return cljs.core.assoc_in(p1__12424_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12429 = arguments.length;
var i__7277__auto___12430 = (0);
while(true){
if((i__7277__auto___12430 < len__7276__auto___12429)){
args__7283__auto__.push((arguments[i__7277__auto___12430]));

var G__12431 = (i__7277__auto___12430 + (1));
i__7277__auto___12430 = G__12431;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__12427){
var vec__12428 = p__12427;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq12425){
var G__12426 = cljs.core.first(seq12425);
var seq12425__$1 = cljs.core.next(seq12425);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12426,seq12425__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12436 = arguments.length;
var i__7277__auto___12437 = (0);
while(true){
if((i__7277__auto___12437 < len__7276__auto___12436)){
args__7283__auto__.push((arguments[i__7277__auto___12437]));

var G__12438 = (i__7277__auto___12437 + (1));
i__7277__auto___12437 = G__12438;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((1) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7284__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12434){
var vec__12435 = p__12434;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq12432){
var G__12433 = cljs.core.first(seq12432);
var seq12432__$1 = cljs.core.next(seq12432);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12433,seq12432__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12443 = arguments.length;
var i__7277__auto___12444 = (0);
while(true){
if((i__7277__auto___12444 < len__7276__auto___12443)){
args__7283__auto__.push((arguments[i__7277__auto___12444]));

var G__12445 = (i__7277__auto___12444 + (1));
i__7277__auto___12444 = G__12445;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__12439_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__12439_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq12440){
var G__12441 = cljs.core.first(seq12440);
var seq12440__$1 = cljs.core.next(seq12440);
var G__12442 = cljs.core.first(seq12440__$1);
var seq12440__$2 = cljs.core.next(seq12440__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12441,G__12442,seq12440__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7283__auto__ = [];
var len__7276__auto___12450 = arguments.length;
var i__7277__auto___12451 = (0);
while(true){
if((i__7277__auto___12451 < len__7276__auto___12450)){
args__7283__auto__.push((arguments[i__7277__auto___12451]));

var G__12452 = (i__7277__auto___12451 + (1));
i__7277__auto___12451 = G__12452;
continue;
} else {
}
break;
}

var argseq__7284__auto__ = ((((2) < args__7283__auto__.length))?(new cljs.core.IndexedSeq(args__7283__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7284__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__12446_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__12446_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq12447){
var G__12448 = cljs.core.first(seq12447);
var seq12447__$1 = cljs.core.next(seq12447);
var G__12449 = cljs.core.first(seq12447__$1);
var seq12447__$2 = cljs.core.next(seq12447__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12448,G__12449,seq12447__$2);
});
