$wnd.gwtmaterialdemo.runAsyncCallback7("function GCd(){}\nfunction ICd(){}\nfunction hzb(){gzb()}\nfunction f0b(a,b){a.o=b}\nfunction k0b(a){this.a=a}\nfunction m0b(a){this.a=a}\nfunction o0b(a){this.a=a}\nfunction MCd(a){this.a=a}\nfunction OCd(a){this.a=a}\nfunction Rs(a){nt((ct(),a))}\nfunction Nyb(a){!!Dyb&&YB(Dyb,a)}\nfunction c0b(a){g0b(a.k,a.o,a.i,a.f)}\nfunction d0b(a){g0b(a.k,a.o,a.i,a.f)}\nfunction ECd(a){f0b(a.b,ho(a.a));e0b(a.b)}\nfunction gzb(){gzb=Rvb;fzb=new Vz}\nfunction Qyb(){if(!Hyb){Jzb();Hyb=true}}\nfunction b0b(a){a.k.style[gmf]=hmf+a.e+' '+a.g}\nfunction SCd(a){var b;if(!a.d){b=new FCd;a.d=b}return a.d}\nfunction LCd(a){this.a=new MCd(this);this.b=new OCd(this);this.c=a}\nfunction xCd(a,b,c){cKb();BKb.call(this,a,b,c,(Ytd(),Wtd))}\nfunction Lyb(a){Oyb();Qyb();return Jyb((gzb(),gzb(),fzb),a)}\nfunction Jzb(){var b=$wnd.onscroll;$wnd.onscroll=HYe(function(a){try{Hyb&&Nyb((ru($doc),su($doc),new hzb))}finally{b&&b(a)}})}\nfunction RCd(a){var b,c;if(!a.c){c=new xCd(pHb(jLb(a.a)),(b=SCd(a),b),QCd(a));WJb((mLb(a.a),c),kNb(mLb(a.a)));a.c=c}return a.c}\nfunction h0b(a){if(a.a){a.k.style[Q1e]=kmf+a.j+'ms '+a.b;a.k.style[R1e]=kmf+a.j+'ms '+a.b}else{a.k.style[Q1e]='';a.k.style[R1e]=''}}\nfunction FCd(){TKb.call(this);RKb(this,KCd(new LCd(this)));Rtd(this.b);Go(this.b,new GCd,tB?tB:(tB=new Vz));Go(this.b,new ICd,(!yB&&(yB=new Vz),yB))}\nfunction a0b(a){$doc.documentElement.style[g0e]=a.p;(Qxb(),a.tb).style[k0e]=(tw(),DZe);!a.Y&&(a.Y=new G3c(a));D3c(a.Y);if(a.c){Mo(a);a.c=false}wB(a,a)}\nfunction i0b(){oSb.call(this,Lt($doc),vE(pE(ltb,1),w_e,2,6,['material-cutout']));this.d=(Ezc(),dvc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=Lt($doc);rs((Qxb(),this.tb),this.k);this.tb.style[g0e]=(Ox(),T$e);this.tb.style[k0e]=(tw(),DZe)}\nfunction g0b(a,b,c,d){var e,f,g,h,i;h=((b.offsetTop||0)|0)-$wnd.Math.max($wnd.$('html').scrollTop(),$wnd.$(a$e).scrollTop());g=xt((ct(),bt),b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(i0e,h+Y$e);$wnd.$(a).css(N$e,g+Y$e);$wnd.$(a).css(AZe,i+Y$e);$wnd.$(a).css(zZe,f+Y$e)}\nfunction nt(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction e0b(a){var b,c,d,e,f;c=(Qxb(),a.tb).style;c[AZe]=(vy(),'100.0%');c[zZe]='100.0%';c[c$e]=(by(),d$e);c[i0e]=h0e;c[N$e]=h0e;c[l0e]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[$3e]=\"''\";c[c$e]=e$e;c[l0e]='-1';if(!a.o){throw rvb(new zMe('The target element should be set before calling open().'))}Rs(a.o);a.g==null&&(d=new nSb(Lt($doc)),CRb(d,a.d),e=d.tb.style,e[c$e]=d$e,undefined,e[AZe]='1.0px',undefined,e[zZe]='1.0px',undefined,e[N$e]='-10.0px',undefined,e[i0e]='-10.0px',undefined,e[l0e]='-10000',undefined,f=qpc(a.d),a.n<1&&nNe(f.substr(0,4),'rgb(')&&(f=sNe(sNe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=(ct(),b)[g0e];b[g0e]=T$e;a.e==null&&(a.e=(EQb==null&&(EQb=$wnd.$(a$e)),EQb).width()+300+Y$e);h0b(a);if(a.a){a.k.style[gmf]='0px 0px 0px 0rem '+a.g;Hr((Ar(),zr),new k0b(a))}else{a.k.style[gmf]=hmf+a.e+' '+a.g}if(a.f){a.k.style[imf]=Zcf;a.k.style[jmf]=Zcf}else{a.k.style[imf]='';a.k.style[jmf]=''}g0b(a.k,a.o,a.i,a.f);ARb(a,Kyb(new m0b(a)));ARb(a,Lyb(new o0b(a)));a.tb.style[k0e]='';if(!a.sb){a.c=true;eAb((YEb(),aFb(null)),a)}BB(a,a)}\nfunction KCd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new rkc;HQb(b,(c=new p7b,HQb(c,(e=new Nmd,Vs(ho(e.a),(ixb(),(new Ywb(jxb(e9e))).a)),QB(e,e9e),e)),HQb(c,(f=new Oze,_pd(f,(g=new NNe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new Swb(g.a)).a),zo((Qxb(),f.tb),f9e,true),f)),zo(c.tb,t5e,true),c));HQb(b,(d=new p7b,HQb(d,(h=new Nmd,Zpd(h.b,'Click the icon below to show a material cutout.'),Vs(ho(h.a),(new Ywb(jxb(mmf))).a),QB(h,mmf),h)),HQb(d,(i=new Wgd,Ugd(i,(TTc(),GOc)),LQb(i,a.a),a.c.a=i,i)),HQb(d,(j=new i0b,HQb(j,(k=new Nmd,Zpd(k.b,'Description of your new Feature'),Vs(ho(k.a),(new Ywb(jxb(nmf))).a),QB(k,nmf),dSb(k,(Ezc(),pzc)),k)),HQb(j,(l=new JXb,CRb(l,pzc),QYb(l.k,A9e),l.k.ob||HQb(l,l.k),dSb(l,dvc),LQb(l,a.b),l)),cSb(j,(TVc(),PVc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),HQb(d,(m=new Oze,_pd(m,(n=new NNe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new Swb(n.a)).a),zo(m.tb,f9e,true),m)),HQb(d,(o=new Oze,_pd(o,(p=new NNe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new Swb(p.a)).a),zo(o.tb,k9e,true),o)),zo(d.tb,t5e,true),d));return b}\nvar gmf='boxShadow',hmf='0px 0px 0px ',imf='WebkitBorderRadius',jmf='borderRadius',kmf='box-shadow ',lmf='gwt.material.design.addins.client.cutout',mmf='Material Cut Out',nmf='New Feature';var Hyb=false;Qvb(768,_$e,{},hzb);_.hd=function izb(a){d0b(fF(a,3027).a)};_.jd=function jzb(){return fzb};var fzb;var BK=TLe(RYe,'Window/ScrollEvent',768);Qvb(2291,26,T1e,i0b);_.Te=function j0b(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var _O=TLe(lmf,'MaterialCutOut',2291);Qvb(2292,1,{},k0b);_.$c=function l0b(){b0b(this.a)};var YO=TLe(lmf,'MaterialCutOut/lambda$0$Type',2292);Qvb(2293,1,X0e,m0b);_.zd=function n0b(a){c0b(this.a)};var ZO=TLe(lmf,'MaterialCutOut/lambda$1$Type',2293);Qvb(2294,1,{8:1,3027:1},o0b);var $O=TLe(lmf,'MaterialCutOut/lambda$2$Type',2294);Qvb(966,55,v1e,xCd);_.Fe=function yCd(){nze();jKb(this,new pze('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var I2=TLe(Daf,'CutOutsPresenter',966);Qvb(1330,65,w1e,FCd);var O2=TLe(Daf,'CutOutsView',1330);Qvb(1331,1,b1e,GCd);_.xd=function HCd(a){Smd(new Vmd(vE(pE(ZL,1),gZe,22,0,[])),'Close Event Fired',o2e,null)};var J2=TLe(Daf,'CutOutsView/lambda$0$Type',1331);Qvb(1332,1,c6e,ICd);_.yd=function JCd(a){Smd(new Vmd(vE(pE(ZL,1),gZe,22,0,[])),'Open Event Fired',o2e,null)};var K2=TLe(Daf,'CutOutsView/lambda$1$Type',1332);Qvb(1863,1,{},LCd);var N2=TLe(Daf,'CutOutsView_BinderImpl/Widgets',1863);Qvb(1864,1,b2e,MCd);_.od=function NCd(a){ECd(this.a.c)};var L2=TLe(Daf,'CutOutsView_BinderImpl/Widgets/1',1864);Qvb(1865,1,b2e,OCd);_.od=function PCd(a){a0b(this.a.c.b)};var M2=TLe(Daf,'CutOutsView_BinderImpl/Widgets/2',1865);Qvb(804,1,D9e);_.Yc=function YCd(){BOb(this.b,RCd(this.a.a))};HYe(Kq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")