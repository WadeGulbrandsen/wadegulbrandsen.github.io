// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('catnip.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
catnip.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,(2),cljs.core.cst$kw$speed,(3),cljs.core.cst$kw$showui,true,cljs.core.cst$kw$bgimg,""], null));
catnip.core.last_ts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
catnip.core.birds = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
catnip.core.bird_img = "sprite/blue-jay-sprite-sheet.png";
catnip.core.bird_width = (100);
catnip.core.bird_height = (100);
catnip.core.bird_frames = (8);
catnip.core.bird_sprite = (function catnip$core$bird_sprite(bird){
var frame = (cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(bird) | (0));
var offset_max = (catnip.core.bird_width * (frame + (1)));
var offset_min = (catnip.core.bird_width * frame);
var scale = (((cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird) < (0)))?(-1):(1));
var move = (((cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird) < (0)))?(offset_max - (catnip.core.bird_width * catnip.core.bird_frames)):(- offset_min));
var rotate = (((cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird) < (0)))?((3) * cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird)):((-3) * cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$left,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str([cljs.core.str(rotate)].join('')),cljs.core.str("deg)")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$clip,[cljs.core.str("rect(0px, "),cljs.core.str([cljs.core.str(offset_max)].join('')),cljs.core.str("px, "),cljs.core.str([cljs.core.str(catnip.core.bird_height)].join('')),cljs.core.str("px, "),cljs.core.str([cljs.core.str(offset_min)].join('')),cljs.core.str("px)")].join(''),cljs.core.cst$kw$transform,[cljs.core.str("matrix("),cljs.core.str([cljs.core.str(scale)].join('')),cljs.core.str(", 0, 0, 1, "),cljs.core.str([cljs.core.str(move)].join('')),cljs.core.str(", 0)")].join('')], null),cljs.core.cst$kw$src,catnip.core.bird_img], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$ts.cljs$core$IFn$_invoke$arity$1(bird)], null));
});
catnip.core.slider = (function catnip$core$slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"90%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.state,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
catnip.core.catnip_ui = (function catnip$core$catnip_ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(catnip.core.bird_sprite,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bottom"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$bottom,(10),cljs.core.cst$kw$right,(10),cljs.core.cst$kw$width,(100)], null),cljs.core.cst$kw$class,"ui",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.state,cljs.core.assoc,cljs.core.cst$kw$showui,cljs.core.not(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state)))));
})], null),(cljs.core.truth_(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state))))?"Hide options":"Show options")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"options ui",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.cst$kw$showui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state))))?"visible":"hidden")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Options"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$col_DASH_span,(2),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),"Press F11 for fullscreen"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Birds: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.slider,cljs.core.cst$kw$max,cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state))),(1),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Speed: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.slider,cljs.core.cst$kw$speed,cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state))),(1),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state)))], null)], null)], null)], null)], null)], null);
});
catnip.core.get_bounds = (function catnip$core$get_bounds(){
var width = window.innerWidth;
var height = window.innerHeight;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(- catnip.core.bird_height),cljs.core.cst$kw$left,(- catnip.core.bird_width),cljs.core.cst$kw$bottom,height,cljs.core.cst$kw$right,width], null);
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
catnip.core.get_body = (function catnip$core$get_body(){
return document.body;
});
catnip.core.get_app = (function catnip$core$get_app(){
return document.getElementById("app");
});
catnip.core.set_bg_BANG_ = (function catnip$core$set_bg_BANG_(imgsrc){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(catnip.core.state,cljs.core.assoc,cljs.core.cst$kw$bgimg,imgsrc);

return catnip.core.get_body().style.backgroundImage = [cljs.core.str("url(\""),cljs.core.str(imgsrc),cljs.core.str("\")")].join('');
});
catnip.core.update_bird = (function catnip$core$update_bird(delta,bird){
var speed = ((delta * cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state)))) / (20));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bird) + (speed * cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird))),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bird) + (speed * cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird))),cljs.core.cst$kw$dx,cljs.core.cst$kw$dx.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$dy,cljs.core.cst$kw$dy.cljs$core$IFn$_invoke$arity$1(bird),cljs.core.cst$kw$frame,cljs.core.rem(((delta / (60)) + cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(bird)),catnip.core.bird_frames),cljs.core.cst$kw$ts,cljs.core.cst$kw$ts.cljs$core$IFn$_invoke$arity$1(bird)], null);
});
catnip.core.next_birds_BANG_ = (function catnip$core$next_birds_BANG_(delta){
var G__12603 = catnip.core.birds;
var G__12604 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12603){
return (function (p1__12600_SHARP_){
return catnip.core.update_bird(delta,p1__12600_SHARP_);
});})(G__12603))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12603,G__12604) : cljs.core.reset_BANG_.call(null,G__12603,G__12604));
});
catnip.core.new_bird = (function catnip$core$new_bird(){
var bounds = catnip.core.get_bounds();
var dx = (cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)) * (cljs.core.rand_int((3)) + (1)));
var dy = (cljs.core.rand_int((7)) - (3));
var x = (((dx < (0)))?cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bounds):cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(bounds));
var y = (cljs.core.rand_int(cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(bounds)) - catnip.core.bird_height);
var f = cljs.core.rand_int(catnip.core.bird_frames);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$dx,dx,cljs.core.cst$kw$dy,dy,cljs.core.cst$kw$frame,f,cljs.core.cst$kw$ts,(new Date()).getTime()], null);
});
catnip.core.add_birds_BANG_ = (function catnip$core$add_birds_BANG_(){
while(true){
var x = (cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.state) : cljs.core.deref.call(null,catnip.core.state))) - cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))){
var G__12609 = catnip.core.birds;
var G__12610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)),catnip.core.new_bird());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12609,G__12610) : cljs.core.reset_BANG_.call(null,G__12609,G__12610));
} else {
if((x > (1))){
var G__12611_12613 = catnip.core.birds;
var G__12612_12614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)),catnip.core.new_bird());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12611_12613,G__12612_12614) : cljs.core.reset_BANG_.call(null,G__12611_12613,G__12612_12614));

catnip.core.sleep((1));

continue;
} else {
return null;
}
}
break;
}
});
catnip.core.remove_out_of_bounds_BANG_ = (function catnip$core$remove_out_of_bounds_BANG_(){
var G__12617 = catnip.core.birds;
var G__12618 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(catnip.core.out_of_bounds_QMARK_,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(catnip.core.birds) : cljs.core.deref.call(null,catnip.core.birds)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12617,G__12618) : cljs.core.reset_BANG_.call(null,G__12617,G__12618));
});
catnip.core.update_BANG_ = (function catnip$core$update_BANG_(ts){
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
});
catnip.core.mount_root = (function catnip$core$mount_root(){
catnip.core.set_bg_BANG_("bg/nature-forest-waterfall-jungle.jpg");

catnip.core.add_birds_BANG_();

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [catnip.core.catnip_ui], null),catnip.core.get_app());

return window.requestAnimationFrame(catnip.core.update_BANG_);
});
catnip.core.init_BANG_ = (function catnip$core$init_BANG_(){
return catnip.core.mount_root();
});
