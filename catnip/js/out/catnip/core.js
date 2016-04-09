// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('catnip.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('catnip.fullscreen');
if(typeof catnip.core.options !== 'undefined'){
} else {
catnip.core.options = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$max,(2),cljs.core.cst$kw$speed,(3),cljs.core.cst$kw$showui,true,cljs.core.cst$kw$bgimg,"bg/nature-forest-waterfall-jungle.jpg",cljs.core.cst$kw$bgloaded,false,cljs.core.cst$kw$running,false], null));
}
if(typeof catnip.core.last_ts !== 'undefined'){
} else {
catnip.core.last_ts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof catnip.core.birds !== 'undefined'){
} else {
catnip.core.birds = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof catnip.core.bird_sprite !== 'undefined'){
} else {
catnip.core.bird_sprite = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$img,"sprite/blue-jay-sprite-sheet.png",cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$frames,(8),cljs.core.cst$kw$loaded,false], null));
}
catnip.core.sleep = (function catnip$core$sleep(msec){
var deadline = (msec + (new Date()).getTime());
while(true){
if((deadline > (new Date()).getTime())){
continue;
} else {
return null;
}
break;
}
});
catnip.core.get_bounds = (function catnip$core$get_bounds(){
var width = window.innerWidth;
var height = window.innerHeight;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(- cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite)))),cljs.core.cst$kw$left,(- cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite)))),cljs.core.cst$kw$bottom,height,cljs.core.cst$kw$right,width], null);
});
catnip.core.out_of_bounds_QMARK_ = (function catnip$core$out_of_bounds_QMARK_(bird){
var bounds = catnip.core.get_bounds();
if((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bird) < cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(bounds))){
return true;
} else {
if((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bird) > cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bounds))){
return true;
} else {
if((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bird) < cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(bounds))){
return true;
} else {
if((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bird) > cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(bounds))){
return true;
} else {
return false;

}
}
}
}
});
catnip.core.update_bird = (function catnip$core$update_bird(delta,bird){
var speed = ((delta * cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)))) / (20));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bird) + (speed * cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird))),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bird) + (speed * cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird))),cljs.core.cst$kw$dx,cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$dy,cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$frame,cljs.core.rem(((delta / (60)) + cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(bird)),cljs.core.cst$kw$frames.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite)))),cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(bird)], null);
});
catnip.core.next_birds_BANG_ = (function catnip$core$next_birds_BANG_(delta){
var G__12605 = catnip.core.birds;
var G__12606 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12605){
return (function (p1__12602_SHARP_){
return catnip.core.update_bird(delta,p1__12602_SHARP_);
});})(G__12605))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12605,G__12606) : cljs.core.reset_BANG_.call(null,G__12605,G__12606));
});
catnip.core.new_bird = (function catnip$core$new_bird(){
var bounds = catnip.core.get_bounds();
var dx = (cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)) * (cljs.core.rand_int((3)) + (1)));
var dy = (cljs.core.rand_int((7)) - (3));
var x = (((dx < (0)))?cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bounds):cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(bounds));
var y = (cljs.core.rand_int(cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(bounds)) - cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))));
var f = cljs.core.rand_int(cljs.core.cst$kw$frames.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("Bird"),cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$dx,dx,cljs.core.cst$kw$dy,dy,cljs.core.cst$kw$frame,f], null);
});
catnip.core.add_birds_BANG_ = (function catnip$core$add_birds_BANG_(){
while(true){
if((cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))) > cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds))))){
var G__12609_12611 = catnip.core.birds;
var G__12610_12612 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)),catnip.core.new_bird());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12609_12611,G__12610_12612) : cljs.core.reset_BANG_.call(null,G__12609_12611,G__12610_12612));

continue;
} else {
return null;
}
break;
}
});
catnip.core.remove_out_of_bounds_BANG_ = (function catnip$core$remove_out_of_bounds_BANG_(){
var G__12615 = catnip.core.birds;
var G__12616 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(catnip.core.out_of_bounds_QMARK_,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12615,G__12616) : cljs.core.reset_BANG_.call(null,G__12615,G__12616));
});
catnip.core.update_BANG_ = (function catnip$core$update_BANG_(ts){
if(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))){
catnip.core.next_birds_BANG_((ts - (function (){var or__6207__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.last_ts) : cljs.core.deref.call(null,catnip.core.last_ts));
if(cljs.core.truth_(or__6207__auto__)){
return or__6207__auto__;
} else {
return ts;
}
})()));

catnip.core.remove_out_of_bounds_BANG_();

catnip.core.add_birds_BANG_();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(catnip.core.last_ts,ts) : cljs.core.reset_BANG_.call(null,catnip.core.last_ts,ts));

return window.requestAnimationFrame(catnip$core$update_BANG_);
} else {
return null;
}
});
catnip.core.splash_ui = (function catnip$core$splash_ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$splash$ui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Catnip"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$font_DASH_size,"x-large"], null)], null),"Loading ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_spinner$fa_DASH_spin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null),cljs.core.cst$kw$load,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.bird_sprite,cljs.core.assoc,cljs.core.cst$kw$loaded,true)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,cljs.core.cst$kw$bgimg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null),cljs.core.cst$kw$load,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$bgloaded,true)], null)], null)], null)], null)], null);
});
catnip.core.bird_component = (function catnip$core$bird_component(bird){
var frame = (cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(bird) | (0));
var offset_max = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))) * (frame + (1)));
var offset_min = (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))) * frame);
var scale = (((cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird) < (0)))?(-1):(1));
var move = (((cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird) < (0)))?(offset_max - (cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))) * cljs.core.cst$kw$frames.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))))):(- offset_min));
var rotate = (((cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird) < (0)))?((3) * cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird)):((-3) * cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$left,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str([cljs.core.str(rotate)].join('')),cljs.core.str("deg)")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$clip,[cljs.core.str("rect(0px, "),cljs.core.str([cljs.core.str(offset_max)].join('')),cljs.core.str("px, "),cljs.core.str([cljs.core.str(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite))))].join('')),cljs.core.str("px, "),cljs.core.str([cljs.core.str(offset_min)].join('')),cljs.core.str("px)")].join(''),cljs.core.cst$kw$transform,[cljs.core.str("matrix("),cljs.core.str([cljs.core.str(scale)].join('')),cljs.core.str(", 0, 0, 1, "),cljs.core.str([cljs.core.str(move)].join('')),cljs.core.str(", 0)")].join('')], null),cljs.core.cst$kw$src,cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite)))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(bird)], null));
});
catnip.core.slider = (function catnip$core$slider(atom,param,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,(function (){var G__12618 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__12618) : param.call(null,G__12618));
})(),cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"90%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(atom,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
catnip.core.options_button = (function catnip$core$options_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip$toolbarbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_cogs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$showui,cljs.core.not(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)))));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tooltiptext$left,(cljs.core.truth_(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))?"Hide options":"Show options")], null)], null);
});
catnip.core.fullscreen_button = (function catnip$core$fullscreen_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip$toolbarbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrows_DASH_alt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

return catnip.fullscreen.toggle(document.getElementById("app"));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tooltiptext$right,(cljs.core.truth_(catnip.fullscreen.is_fullscreen_QMARK_())?"Exit fullscreen":"Fullscreen")], null)], null);
});
catnip.core.play_pause_button = (function catnip$core$play_pause_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tooltip$toolbarbutton,(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_pause$fa_DASH_fw,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$running,false);
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_play$fa_DASH_fw,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$running,true);

return window.requestAnimationFrame(catnip.core.update_BANG_);
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tooltiptext$left,(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))?"Pause":"Play")], null)], null);
});
catnip.core.start_stop_button = (function catnip$core$start_stop_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"5px",cljs.core.cst$kw$width,"90px",cljs.core.cst$kw$font_DASH_size,"large"], null)], null),(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$running,false);

var G__12621 = catnip.core.birds;
var G__12622 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12621,G__12622) : cljs.core.reset_BANG_.call(null,G__12621,G__12622));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_stop], null)," Stop"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$showui,false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$running,true);

return window.requestAnimationFrame(catnip.core.update_BANG_);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_play], null)," Start"], null))], null);
});
catnip.core.close_button = (function catnip$core$close_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_times,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.options,cljs.core.assoc,cljs.core.cst$kw$showui,false);
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visibility,(cljs.core.truth_((function (){var and__6195__auto__ = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)));
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)));
} else {
return and__6195__auto__;
}
})())?"visible":"hidden"),cljs.core.cst$kw$font_DASH_size,"large"], null)], null)], null);
});
catnip.core.catnip_ui = (function catnip$core$catnip_ui(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundImage,[cljs.core.str("url(\""),cljs.core.str(cljs.core.cst$kw$bgimg.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)))),cljs.core.str("\")")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(catnip.core.bird_component,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$toolbar,catnip.core.play_pause_button(),catnip.core.options_button(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,(0)], null)], null),catnip.core.fullscreen_button()], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$options$ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))?"visible":"hidden"),cljs.core.cst$kw$opacity,(cljs.core.truth_(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options))))?(1):(0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,(3)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_cogs], null)," Options",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"3px",cljs.core.cst$kw$top,"1px"], null)], null),catnip.core.close_button()], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Birds: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.slider,catnip.core.options,cljs.core.cst$kw$max,(1),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Speed: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.slider,catnip.core.options,cljs.core.cst$kw$speed,(1),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$col_DASH_span,(3),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),catnip.core.start_stop_button()], null)], null)], null)], null);
});
catnip.core.load_images = (function catnip$core$load_images(){
if(cljs.core.truth_((function (){var and__6195__auto__ = cljs.core.cst$kw$bgloaded.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.options) : cljs.core.deref.call(null,catnip.core.options)));
if(cljs.core.truth_(and__6195__auto__)){
return cljs.core.cst$kw$loaded.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.bird_sprite) : cljs.core.deref.call(null,catnip.core.bird_sprite)));
} else {
return and__6195__auto__;
}
})())){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.catnip_ui], null),document.getElementById("app"));
} else {
return setTimeout(catnip$core$load_images,(16));
}
});
catnip.core.mount_root = (function catnip$core$mount_root(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.splash_ui], null),document.getElementById("app"));

return catnip.core.load_images();
});
catnip.core.init_BANG_ = (function catnip$core$init_BANG_(){
return catnip.core.mount_root();
});
