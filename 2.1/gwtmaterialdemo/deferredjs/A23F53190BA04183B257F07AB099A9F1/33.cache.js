$wnd.gwtmaterialdemo.runAsyncCallback33("function y2d(a){this.a=a}\nfunction A2d(a){this.a=a}\nfunction C2d(a){this.a=a}\nfunction E2d(a){this.a=a}\nfunction u2d(a,b){Bfd(a.a,Qjf+b.a,true)}\nfunction n2d(a,b,c){xIb();WIb.call(this,a,b,c,(rsd(),psd))}\nfunction v2d(){mJb.call(this);kJb(this,w2d(new x2d(this)))}\nfunction I2d(a){var b;if(!a.d){b=new v2d;a.d=b}return a.d}\nfunction x2d(a){this.a=new y2d(this);this.b=new A2d(this);this.c=new C2d(this);this.d=new E2d(this);this.e=a}\nfunction H2d(a){var b,c;if(!a.c){c=new n2d(KFb(EJb(a.a)),(b=I2d(a),b),G2d(a));pIb((HJb(a.a),c),FLb(HJb(a.a)));a.c=c}return a.c}\nfunction w2d(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=new K5b;aPb(b,(c=new K5b,aPb(c,(e=new gld,Fs(ho(e.a),(Nvb(),(new Bvb(Ovb(iff))).a)),xA(e,iff),e)),aPb(c,(f=new Vhd,Rhd(f,cLe(10)),Qhd(f,cLe(500)),Uhd(f,cLe(250),false),Go(f,a.a,(!uA&&(uA=new Cy),uA)),f)),aPb(c,(g=new Cfd,Eqc((!g.a&&(g.a=new Fqc(g)),g.a),'Min: 10'),xA(g,'Min: 10'),g)),aPb(c,(h=new Cfd,Eqc((!h.a&&(h.a=new Fqc(h)),h.a),'Min: 500'),xA(h,'Min: 500'),h)),aPb(c,(i=new Cfd,(twb(),i.tb).style[Yff]=(cx(),f0e),Eqc((!i.a&&(i.a=new Fqc(i)),i.a),Spf),xA(i,Spf),a.e.a=i,i)),aPb(c,(j=new hye,uod(j,(k=new gMe,k.a+='\\u2003&lt;m:MaterialRange ui:field=\"range\" min=\"10\" max=\"50\" value=\"25\"/&gt;<br>',new vvb(k.a)).a),zo(j.tb,C7e,true),j)),aPb(c,(l=new hye,uod(l,(m=new gMe,m.a+='\\u2003@UiHandler(\"range\")<br> void onRange(ChangeEvent e) {<br> \\u2003\\u2003lblRange.setText(\"Value: \" + String.valueOf(range.getValue()));<br> }',new vvb(m.a)).a),zo(l.tb,H7e,true),l)),zo(c.tb,Q3e,true),c));aPb(b,(d=new K5b,aPb(d,(n=new Pad,XPb(n,(Zxc(),wtc)),Cqc((!n.gb&&(n.gb=new Dqc(n)),n.gb),1),kQb(n,(Kw(),Iw)),Fs(n.tb,(new Bvb(Ovb(L7e))).a),dQb(n,(Vv(),Uv)),yQb(n,jtc),n)),aPb(d,(o=new gld,Fs(ho(o.a),(new Bvb(Ovb(Tpf))).a),xA(o,Tpf),o)),aPb(d,(p=new Vhd,Rhd(p,cLe(10)),Qhd(p,cLe(500)),Uhd(p,cLe(250),false),Go(p,a.b,(!uA&&(uA=new Cy),uA)),a.e.b=p,p)),aPb(d,(q=new cWb,q.tb.style[e0e]=f0e,jXb(q.k,N7e),q.k.ob||aPb(q,q.k),ePb(q,a.c),q)),aPb(d,(r=new cWb,jXb(r.k,O7e),r.k.ob||aPb(r,r.k),ePb(r,a.d),r)),aPb(d,(s=new hye,uod(s,(t=new gMe,t.a+='\\u2003// Set Value with firing the value change event <br> range.setValue(20, true); <br> // Set Value without firing the value change event <br> range.setValue(50);<br> range.setValue(50, false);',new vvb(t.a)).a),zo(s.tb,H7e,true),s)),zo(d.tb,Q3e,true),d));return b}\nvar Spf='Value: 250',Tpf='Range : setValue(value, fireEvents)';tub(1010,55,O_e,n2d);_.De=function o2d(){Ixe();EIb(this,new Kxe(iff,'Range or Sliders are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation.','components/forms/range/RangeView','https://material.io/guidelines/components/sliders.html'))};var ddb=mKe(Ldf,'RangePresenter',1010);tub(1465,65,P_e,v2d);var jdb=mKe(Ldf,'RangeView',1465);tub(2079,1,{},x2d);var idb=mKe(Ldf,'RangeView_BinderImpl/Widgets',2079);tub(2080,1,r_e,y2d);_.Ad=function z2d(a){u2d(this.a.e,a)};var edb=mKe(Ldf,'RangeView_BinderImpl/Widgets/1',2080);tub(2081,1,r_e,A2d);_.Ad=function B2d(a){pld(Qjf+Lhd(this.a.e.b,Ihd))};var fdb=mKe(Ldf,'RangeView_BinderImpl/Widgets/2',2081);tub(2082,1,u0e,C2d);_.nd=function D2d(a){Uhd(this.a.e.b,cLe(50),false)};var gdb=mKe(Ldf,'RangeView_BinderImpl/Widgets/3',2082);tub(2083,1,u0e,E2d);_.nd=function F2d(a){Thd(this.a.e.b,cLe(20),true)};var hdb=mKe(Ldf,'RangeView_BinderImpl/Widgets/4',2083);tub(874,1,$7e);_.Yc=function O2d(){WMb(this.b,H2d(this.a.a))};aXe(Iq)(33);\n//# sourceURL=gwtmaterialdemo-33.js\n")
