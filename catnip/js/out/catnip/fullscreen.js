// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('catnip.fullscreen');
goog.require('cljs.core');
catnip.fullscreen.document_prop = (function catnip$fullscreen$document_prop(name){
return (document[name]);
});
catnip.fullscreen.is_fullscreen_QMARK_ = (function catnip$fullscreen$is_fullscreen_QMARK_(){
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fullscreenElement","mozFullScreenElement","webkitFullscreenElement","webkitCurrentFullScreenElement","msFullscreenElement"], null);
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,catnip.fullscreen.document_prop),options);
});
catnip.fullscreen.request = (function catnip$fullscreen$request(dom_node){
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["requestFullscreen","webkitRequestFullscreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"], null);
var f = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.aget,dom_node),options);
if(cljs.core.truth_(f)){
return f.call(dom_node);
} else {
return null;
}
});
catnip.fullscreen.exit = (function catnip$fullscreen$exit(){
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exitFullscreen","webkitExitFullscreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"], null);
var f = cljs.core.some(catnip.fullscreen.document_prop,options);
if(cljs.core.truth_(f)){
return f.call(document);
} else {
return null;
}
});
catnip.fullscreen.toggle = (function catnip$fullscreen$toggle(dom_node){
if(cljs.core.truth_(catnip.fullscreen.is_fullscreen_QMARK_())){
return catnip.fullscreen.exit();
} else {
return catnip.fullscreen.request(dom_node);
}
});
