$wnd.gwtmaterialdemo.runAsyncCallback34("function $3d(){}\nfunction e4d(){}\nfunction a4d(a){this.a=a}\nfunction c4d(a){this.a=a}\nfunction i4d(a){var b;if(!a.d){b=new X3d;a.d=b}return a.d}\nfunction X3d(){iKb.call(this);gKb(this,Y3d(new Z3d(this)))}\nfunction O3d(a,b,c){tJb();SJb.call(this,a,b,c,(qtd(),otd))}\nfunction W3d(a){BMe(Mkd(a.a))?Skd(a.a,(AMe(),false),true):Skd(a.a,(AMe(),true),true)}\nfunction V3d(a){BMe(Mkd(a.a))?Skd(a.a,(AMe(),false),false):Skd(a.a,(AMe(),true),false)}\nfunction Z3d(a){this.a=new $3d;this.b=new a4d(this);this.c=new c4d(this);this.d=new e4d;this.e=a}\nfunction h4d(a){var b,c;if(!a.c){c=new O3d(GGb(AKb(a.a)),(b=i4d(a),b),g4d(a));lJb((DKb(a.a),c),BMb(DKb(a.a)));a.c=c}return a.c}\nfunction Y3d(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new K6b;YPb(b,(c=new K6b,YPb(c,(e=new dmd,Is(ho(e.a),(uwb(),(new iwb(vwb(lif))).a)),HA(e,lif),e)),YPb(c,(f=new Tkd,Fqc((!f.X&&(f.X=new Hqc(f)),f.X),'l0'),Skd(f,(AMe(),true),false),f)),YPb(c,(g=new Tkd,Fqc((!g.X&&(g.X=new Hqc(g)),g.X),'l0'),Skd(g,false,false),g)),YPb(c,(h=new Tkd,Fqc((!h.X&&(h.X=new Hqc(h)),h.X),'l0'),Skd(h,true,false),Okd(h,false),h)),YPb(c,(i=new Tkd,Fqc((!i.X&&(i.X=new Hqc(i)),i.X),'l0'),Okd(i,false),i)),YPb(c,(j=new wAe,spd(j,(k=new HOe,k.a+='\\u2003&lt;m:MaterialSwitch ui:field=\"switch1\" value=\"true\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch ui:field=\"switch2\" value=\"false\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch enabled=\"false\" value=\"true\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch enabled=\"false\" grid=\"l0\"/&gt;<br>',new cwb(k.a)).a),zo((axb(),j.tb),maf,true),j)),zo(c.tb,D6e,true),c));YPb(b,(d=new K6b,YPb(d,(l=new Xbd,TQb(l,(azc(),zuc)),prc((!l.gb&&(l.gb=new qrc(l)),l.gb),1),hRb(l,(Uw(),Sw)),Is(l.tb,(new iwb(vwb(vaf))).a),_Qb(l,(dw(),cw)),yRb(l,muc),l)),YPb(d,(m=new dmd,Is(ho(m.a),(new iwb(vwb($sf))).a),HA(m,$sf),m)),YPb(d,(n=new Tkd,jYb(n.e,'On'),jYb(n.d,'Off'),Go(n,a.a,(!EA&&(EA=new My),EA)),n)),YPb(d,(o=new wAe,spd(o,(p=new HOe,p.a+='\\u2003@UiHandler(\"mSwitch\") <br> void onValueChange(ValueChangeEvent&lt;Boolean&gt; e) { <br> \\u2003MaterialToast.fireToast(\"Value \" + e.getValue()); <br> }',new cwb(p.a)).a),zo(o.tb,raf,true),o)),YPb(d,(q=new dmd,Is(ho(q.a),(new iwb(vwb(_sf))).a),HA(q,_sf),q)),YPb(d,(r=new Tkd,jYb(r.e,'On'),jYb(r.d,'Off'),Go(r,a.d,(!EA&&(EA=new My),EA)),a.e.a=r,r)),YPb(d,(s=new cXb,s.tb.style[Q2e]=(mx(),R2e),jYb(s.k,xaf),s.k.ob||YPb(s,s.k),aQb(s,a.b),s)),YPb(d,(t=new cXb,jYb(t.k,yaf),t.k.ob||YPb(t,t.k),aQb(t,a.c),t)),YPb(d,(u=new wAe,spd(u,(v=new HOe,v.a+='\\u2003// Set Value with firing the value change event <br> mSwitch.setValue(true, true); <br> // Set Value without firing the value change event <br> mSwitch.setValue(true);<br> mSwitch.setValue(true, false);',new cwb(v.a)).a),zo(u.tb,raf,true),u)),zo(d.tb,D6e,true),d));return b}\nvar $sf='Switch : Value Change Event',_sf='Switch : setValue(value, fireEvents)';avb(1086,120,v2e,O3d);_.Ee=function P3d(){Xze();AJb(this,new Zze(Ckf,'On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.','components/forms/switches/SwitchView','https://material.io/guidelines/components/selection-controls.html#selection-controls-switch'))};var wdb=NMe(tgf,'SwitchPresenter',1086);avb(1538,129,w2e,X3d);var Cdb=NMe(tgf,'SwitchView',1538);avb(2177,1,{},Z3d);var Bdb=NMe(tgf,'SwitchView_BinderImpl/Widgets',2177);avb(2178,1,Y1e,$3d);_.Ad=function _3d(a){mmd(atf+a.a)};var xdb=NMe(tgf,'SwitchView_BinderImpl/Widgets/1',2178);avb(2179,1,g3e,a4d);_.nd=function b4d(a){V3d(this.a.e)};var ydb=NMe(tgf,'SwitchView_BinderImpl/Widgets/2',2179);avb(2180,1,g3e,c4d);_.nd=function d4d(a){W3d(this.a.e)};var zdb=NMe(tgf,'SwitchView_BinderImpl/Widgets/3',2180);avb(2181,1,Y1e,e4d);_.Ad=function f4d(a){mmd(atf+a.a)};var Adb=NMe(tgf,'SwitchView_BinderImpl/Widgets/4',2181);avb(951,1,Jaf);_.Yc=function o4d(){SNb(this.b,h4d(this.a.a))};GZe(Jq)(34);\n//# sourceURL=gwtmaterialdemo-34.js\n")
