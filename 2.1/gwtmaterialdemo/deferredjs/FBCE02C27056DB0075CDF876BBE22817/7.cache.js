$wnd.gwtmaterialdemo.runAsyncCallback7("function gvd(){}\nfunction ivd(){}\nfunction Cvb(){Bvb()}\nfunction ZXb(a,b){a.o=b}\nfunction cYb(a){this.a=a}\nfunction eYb(a){this.a=a}\nfunction gYb(a){this.a=a}\nfunction mvd(a){this.a=a}\nfunction ovd(a){this.a=a}\nfunction gvb(a){!!Yub&&sA(Yub,a)}\nfunction Bvb(){Bvb=msb;Avb=new zy}\nfunction jvb(){if(!avb){gwb();avb=true}}\nfunction evd(a){ZXb(a.b,ho(a.a));YXb(a.b)}\nfunction WXb(a){$Xb(a.k,a.o,a.i,a.f)}\nfunction XXb(a){$Xb(a.k,a.o,a.i,a.f)}\nfunction VXb(a){a.k.style[j8e]=k8e+a.e+' '+a.g}\nfunction svd(a){var b;if(!a.d){b=new fvd;a.d=b}return a.d}\nfunction evb(a){hvb();jvb();return cvb((Bvb(),Bvb(),Avb),a)}\nfunction Zud(a,b,c){nGb();MGb.call(this,a,b,c,(Gmd(),Emd))}\nfunction lvd(a){this.a=new mvd(this);this.b=new ovd(this);this.c=a}\nfunction rvd(a){var b,c;if(!a.c){c=new Zud(ADb(uHb(a.a)),(b=svd(a),b),qvd(a));fGb((xHb(a.a),c),tJb(xHb(a.a)));a.c=c}return a.c}\nfunction gwb(){var b=$wnd.onscroll;$wnd.onscroll=LLe(function(a){try{avb&&gvb((gt($doc),ht($doc),new Cvb))}finally{b&&b(a)}})}\nfunction _Xb(a){if(a.a){a.k.style[qQe]=n8e+a.j+'ms '+a.b;a.k.style[rQe]=n8e+a.j+'ms '+a.b}else{a.k.style[qQe]='';a.k.style[rQe]=''}}\nfunction fvd(){cHb.call(this);aHb(this,kvd(new lvd(this)));zmd(this.b);Fo(this.b,new gvd,Pz?Pz:(Pz=new zy));Fo(this.b,new ivd,(!Uz&&(Uz=new zy),Uz))}\nfunction UXb(a){$doc.documentElement.style[EOe]=a.p;(lub(),a.sb).style[IOe]=(Zu(),HMe);!a.X&&(a.X=new SYc(a));PYc(a.X);if(a.c){Lo(a);a.c=false}Sz(a,a)}\nfunction aYb(){vOb.call(this,$doc.createElement(COe),RC(LC(Kpb,1),XOe,2,6,['material-cutout']));this.d=(ntc(),Noc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(COe);is((lub(),this.sb),this.k);this.sb.style[EOe]=(sw(),MNe);this.sb.style[IOe]=(Zu(),HMe)}\nfunction $Xb(a,b,c,d){var e,f,g,h,i;h=Ws(jt(b.ownerDocument),b)-(NMb==null&&(NMb=$wnd.$(cRe)),NMb).scrollTop();g=Vs(jt(b.ownerDocument),b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(GOe,h+TNe);$wnd.$(a).css(GNe,g+TNe);$wnd.$(a).css(EMe,i+TNe);$wnd.$(a).css(DMe,f+TNe)}\nfunction Os(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction YXb(a){var b,c,d,e,f;c=(lub(),a.sb).style;c[EMe]=(_w(),'100.0%');c[DMe]='100.0%';c[DOe]=(Hw(),RNe);c[GOe]=FOe;c[GNe]=FOe;c[JOe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[CSe]=\"''\";c[DOe]=QNe;c[JOe]='-1';if(!a.o){throw Orb(new $ze('The target element should be set before calling open().'))}Os(a.o);a.g==null&&(d=new uOb($doc.createElement(COe)),LNb(d,a.d),e=d.sb.style,e[DOe]=RNe,undefined,e[EMe]='1.0px',undefined,e[DMe]='1.0px',undefined,e[GNe]='-10.0px',undefined,e[GOe]='-10.0px',undefined,e[JOe]='-10000',undefined,f=Ejc(a.d),a.n<1&&QAe(f.substr(0,4),'rgb(')&&(f=VAe(VAe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[EOe];b[EOe]=MNe;a.e==null&&(a.e=(NMb==null&&(NMb=$wnd.$(cRe)),NMb).width()+300+TNe);_Xb(a);if(a.a){a.k.style[j8e]='0px 0px 0px 0rem '+a.g;yr((rr(),qr),new cYb(a))}else{a.k.style[j8e]=k8e+a.e+' '+a.g}if(a.f){a.k.style[l8e]=q_e;a.k.style[m8e]=q_e}else{a.k.style[l8e]='';a.k.style[m8e]=''}$Xb(a.k,a.o,a.i,a.f);JNb(a,dvb(new eYb(a)));JNb(a,evb(new gYb(a)));a.sb.style[IOe]='';if(!a.rb){a.c=true;Ewb((jBb(),nBb(null)),a)}Xz(a,a)}\nfunction kvd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new Zec;QMb(b,(c=new Z2b,QMb(c,(e=new vfd,As(ho(e.a),(Ftb(),(new ttb(Gtb(BXe))).a)),kA(e,BXe),e)),QMb(c,(f=new Aqe,Jid(f,(g=new oBe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new ntb(g.a)).a),yo((lub(),f.sb),CXe,true),f)),yo(c.sb,RTe,true),c));QMb(b,(d=new Z2b,QMb(d,(h=new vfd,Hid(h.b,'Click the icon below to show a material cutout.'),As(ho(h.a),(new ttb(Gtb(p8e))).a),kA(h,p8e),h)),QMb(d,(i=new r9c,p9c(i,(mNc(),_Hc)),UMb(i,a.a),a.c.a=i,i)),QMb(d,(j=new aYb,QMb(j,(k=new vfd,Hid(k.b,'Description of your new Feature'),As(ho(k.a),(new ttb(Gtb(q8e))).a),kA(k,q8e),lOb(k,(ntc(),$sc)),k)),QMb(j,(l=new FTb,LNb(l,$sc),LUb(l.j,XXe),l.j.nb||QMb(l,l.j),lOb(l,Noc),UMb(l,a.b),l)),kOb(j,(uPc(),qPc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),QMb(d,(m=new Aqe,Jid(m,(n=new oBe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new ntb(n.a)).a),yo(m.sb,CXe,true),m)),QMb(d,(o=new Aqe,Jid(o,(p=new oBe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new ntb(p.a)).a),yo(o.sb,HXe,true),o)),yo(d.sb,RTe,true),d));return b}\nvar j8e='boxShadow',k8e='0px 0px 0px ',l8e='WebkitBorderRadius',m8e='borderRadius',n8e='box-shadow ',o8e='gwt.material.design.addins.client.cutout',p8e='Material Cut Out',q8e='New Feature';var avb=false;lsb(737,XNe,{},Cvb);_.ed=function Dvb(a){XXb(BD(a,2916).a)};_.fd=function Evb(){return Avb};var Avb;var NI=sze(VLe,'Window/ScrollEvent',737);lsb(2213,26,tQe,aYb);_.Oe=function bYb(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var hN=sze(o8e,'MaterialCutOut',2213);lsb(2214,1,{},cYb);_.Yc=function dYb(){VXb(this.a)};var eN=sze(o8e,'MaterialCutOut/lambda$0$Type',2214);lsb(2215,1,wPe,eYb);_.wd=function fYb(a){WXb(this.a)};var fN=sze(o8e,'MaterialCutOut/lambda$1$Type',2215);lsb(2216,1,{8:1,2916:1},gYb);var gN=sze(o8e,'MaterialCutOut/lambda$2$Type',2216);lsb(932,57,XPe,Zud);_.Ae=function $ud(){_pe();uGb(this,new bqe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var m0=sze(YYe,'CutOutsPresenter',932);lsb(1290,65,YPe,fvd);var s0=sze(YYe,'CutOutsView',1290);lsb(1291,1,CPe,gvd);_.ud=function hvd(a){Afd(new Dfd(RC(LC(gK,1),kMe,21,0,[])),'Close Event Fired',MQe,null)};var n0=sze(YYe,'CutOutsView/lambda$0$Type',1291);lsb(1292,1,yUe,ivd);_.vd=function jvd(a){Afd(new Dfd(RC(LC(gK,1),kMe,21,0,[])),'Open Event Fired',MQe,null)};var o0=sze(YYe,'CutOutsView/lambda$1$Type',1292);lsb(1806,1,{},lvd);var r0=sze(YYe,'CutOutsView_BinderImpl/Widgets',1806);lsb(1807,1,CQe,mvd);_.ld=function nvd(a){evd(this.a.c)};var p0=sze(YYe,'CutOutsView_BinderImpl/Widgets/1',1807);lsb(1808,1,CQe,ovd);_.ld=function pvd(a){UXb(this.a.c.b)};var q0=sze(YYe,'CutOutsView_BinderImpl/Widgets/2',1808);lsb(773,1,$Xe);_.Wc=function yvd(){KKb(this.b,rvd(this.a.a))};LLe(Eq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")
