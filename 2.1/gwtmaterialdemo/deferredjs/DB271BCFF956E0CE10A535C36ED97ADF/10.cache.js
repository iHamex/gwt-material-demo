$wnd.gwtmaterialdemo.runAsyncCallback10("function tEd(){}\nfunction vEd(a){this.a=a}\nfunction xEd(a){this.a=a}\nfunction zEd(a){this.a=a}\nfunction BEd(a){this.a=a}\nfunction DEd(a){this.a=a}\nfunction FEd(a){this.a=a}\nfunction HEd(a){this.a=a}\nfunction JEd(a){this.a=a}\nfunction LEd(a){this.a=a}\nfunction s5b(a){this.a=a}\nfunction I4b(a){return q5b(a.a,a.b)}\nfunction N4b(){v4b();C4b.call(this)}\nfunction R4b(){v4b();C4b.call(this)}\nfunction g5b(){v4b();C4b.call(this)}\nfunction k5b(){v4b();C4b.call(this)}\nfunction jEd(a,b,c){TIb();qJb.call(this,a,b,c,(Msd(),Ksd))}\nfunction qEd(){IJb.call(this);GJb(this,rEd(new sEd(this)))}\nfunction PEd(a){var b;if(!a.d){b=new qEd;a.d=b}return a.d}\nfunction M4b(a){c4b(a,YKe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction f5b(a){c4b(a,xLe(ZKe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction j5b(a){c4b(a,ILe($Ke($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction Q4b(a){c4b(a,new dLe(hLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction K4b(){v4b();C4b.call(this);this.b=Klf;this.a=new s5b(this);J4b(this,this.b)}\nfunction J4b(a,b){var c;a.b=b;c=gMe(gMe(gMe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction q5b(a,b){if(p5b(a,b)){O3b(a.a);return XB((nC(),pC(b,yC((xC(),xC(),wC)))),Bs(ho(a.a.G),U_e))}return null}\nfunction OEd(a){var b,c;if(!a.c){c=new jEd(eGb($Jb(a.a)),(b=PEd(a),b),NEd(a));LIb((bKb(a.a),c),_Lb(bKb(a.a)));a.c=c}return a.c}\nfunction hLe(a){var b;b=YKe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction sEd(a){this.a=new tEd;this.c=new xEd(this);this.d=new zEd(this);this.e=new BEd(this);this.f=new DEd(this);this.g=new FEd(this);this.i=new HEd(this);this.j=new JEd(this);this.k=new LEd(this);this.b=new vEd(this);this.n=a}\nfunction r5b(a,b,c){return !(bMe(a,'31')&&(bMe(b,'4')||bMe(b,'6')||bMe(b,'9')||bMe(b,'11')||bMe(b,'04')||bMe(b,'06')||bMe(b,'09')))&&(!(bMe(b,'2')||bMe(b,'02'))||(c%4==0?!(bMe(a,'30')||bMe(a,'31')):!(bMe(a,'29')||bMe(a,'30')||bMe(a,'31'))))}\nfunction ULe(){ULe=Dub;var a;QLe=lD(fD(qE,1),GYe,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);RLe=hD(qE,GYe,116,37,15,1);SLe=lD(fD(qE,1),GYe,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);TLe=hD(rE,JYe,116,37,14,1);for(a=2;a<=36;a++){RLe[a]=nE($wnd.Math.pow(a,QLe[a]));TLe[a]=gub({l:K$e,m:K$e,h:524287},RLe[a])}}\nfunction p5b(a,b){var c,d,e,f,g;if(Bs(ho(a.a.G),U_e)!=null&&Bs(ho(a.a.G),U_e).length!=0&&a.a.c!=null&&b!=null){c=Bs(ho(a.a.G),U_e);e=mMe(c,b.indexOf('M'),b.indexOf('M/')+1);d=mMe(c,b.indexOf('d'),b.indexOf('d/')+1);g=mMe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=r5b(d,e,ZKe(g));f||V3b(a.a,'Not a valid date');return V3b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(V3b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(V3b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}V3b(a.a,'Text input must not be empty or null');return false}\nfunction $Ke(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw cub(new VLe(bYe))}j=a;f=a.length;i=false;if(f>0){b=(iXe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw cub(new VLe(zjf+j+'\"'))}while(a.length>0&&(iXe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(ULe(),SLe)[10]){throw cub(new VLe(zjf+j+'\"'))}for(e=0;e<f;e++){if(AKe((iXe(e,a.length),a.charCodeAt(e)))==-1){throw cub(new VLe(zjf+j+'\"'))}}l=0;g=QLe[10];k=RLe[10];h=nub(TLe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(eub(l,h)<0){throw cub(new VLe(zjf+j+'\"'))}l=mub(l,k)}l=oub(l,d)}if(eub(l,0)>0){throw cub(new VLe(zjf+j+'\"'))}if(!i){l=nub(l);if(eub(l,0)<0){throw cub(new VLe(zjf+j+'\"'))}}return l}\nfunction rEd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new gjc;wPb(b,(c=new e6b,wPb(c,(k=new Bld,Is(ho(k.a),(Wvb(),(new Kvb(Xvb(Mlf))).a)),GA(k,Mlf),k)),wPb(c,(l=new rye,cWb(l.a,Zkf),eWb(l.a),(Cwb(),l.tb).style[E8e]=(lx(),N8e),fWb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),wPb(c,(m=new e6b,wPb(m,(n=new n5b,mqc((!n.X&&(n.X=new oqc(n)),n.X),S6e),ho(n.G).setAttribute(i2e,'eg: 000-00-0000000'),Dod(n.B).length==0||ro(n.B,y0e),Eod(n.B,'Phone Number'),(ho(n.G).getAttribute(i2e)||'').length==0||ro(n.B,y0e),n.c=Nlf,n)),wPb(m,(o=new n5b,mqc((!o.X&&(o.X=new oqc(o)),o.X),S6e),ho(o.G).setAttribute(i2e,'eg: (00) 0000-0000'),Dod(o.B).length==0||ro(o.B,y0e),Eod(o.B,'Phone with Odd'),(ho(o.G).getAttribute(i2e)||'').length==0||ro(o.B,y0e),o.c='(00) 0000-0000',o)),wPb(m,(p=new n5b,mqc((!p.X&&(p.X=new oqc(p)),p.X),S6e),ho(p.G).setAttribute(i2e,'eg: (000) 000-000'),Dod(p.B).length==0||ro(p.B,y0e),Eod(p.B,'US Phone Number'),(ho(p.G).getAttribute(i2e)||'').length==0||ro(p.B,y0e),p.c='(000) 000-000',p)),m)),wPb(c,(q=new e6b,wPb(q,(r=new n5b,mqc((!r.X&&(r.X=new oqc(r)),r.X),S6e),ho(r.G).setAttribute(i2e,'eg: 00000-000'),Dod(r.B).length==0||ro(r.B,y0e),Eod(r.B,'CEP'),(ho(r.G).getAttribute(i2e)||'').length==0||ro(r.B,y0e),r.c='00000-000',r)),wPb(q,(s=new n5b,mqc((!s.X&&(s.X=new oqc(s)),s.X),S6e),ho(s.G).setAttribute(i2e,'eg: 000.000.000-00'),Dod(s.B).length==0||ro(s.B,y0e),Eod(s.B,'CPF'),(ho(s.G).getAttribute(i2e)||'').length==0||ro(s.B,y0e),s.c='000.000.000-00',s)),wPb(q,(t=new n5b,mqc((!t.X&&(t.X=new oqc(t)),t.X),S6e),ho(t.G).setAttribute(i2e,'eg: 000,000,000,000,000.00'),Dod(t.B).length==0||ro(t.B,y0e),Eod(t.B,'Money'),(ho(t.G).getAttribute(i2e)||'').length==0||ro(t.B,y0e),t.c='000,000,000,000,000.00',t)),q)),wPb(c,(u=new e6b,wPb(u,(v=new n5b,mqc((!v.X&&(v.X=new oqc(v)),v.X),S6e),ho(v.G).setAttribute(i2e,Olf),Dod(v.B).length==0||ro(v.B,y0e),Eod(v.B,Plf),(ho(v.G).getAttribute(i2e)||'').length==0||ro(v.B,y0e),v.c=Qlf,v)),wPb(u,(w=new n5b,mqc((!w.X&&(w.X=new oqc(w)),w.X),S6e),ho(w.G).setAttribute(i2e,Rlf),Dod(w.B).length==0||ro(w.B,y0e),Eod(w.B,Slf),(ho(w.G).getAttribute(i2e)||'').length==0||ro(w.B,y0e),w.c=Tlf,w)),wPb(u,(A=new n5b,mqc((!A.X&&(A.X=new oqc(A)),A.X),S6e),ho(A.G).setAttribute(i2e,Ulf),Dod(A.B).length==0||ro(A.B,y0e),Eod(A.B,Vlf),(ho(A.G).getAttribute(i2e)||'').length==0||ro(A.B,y0e),A.c=Wlf,A)),u)),wPb(c,(B=new Cye,Pod(B,(C=new BMe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Evb(C.a)).a),zo(B.tb,$7e,true),B)),zo(c.tb,m4e,true),c));wPb(b,(d=new e6b,wPb(d,(D=new Bld,Nod(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Is(ho(D.a),(new Kvb(Xvb('Reverse'))).a),GA(D,'Reverse'),D)),wPb(d,(F=new e6b,wPb(F,(G=new n5b,mqc((!G.X&&(G.X=new oqc(G)),G.X),S6e),ho(G.G).setAttribute(i2e,Olf),Dod(G.B).length==0||ro(G.B,y0e),Eod(G.B,Plf),(ho(G.G).getAttribute(i2e)||'').length==0||ro(G.B,y0e),G.d.reverse=true,G.c=Qlf,G)),wPb(F,(H=new n5b,mqc((!H.X&&(H.X=new oqc(H)),H.X),S6e),ho(H.G).setAttribute(i2e,Rlf),Dod(H.B).length==0||ro(H.B,y0e),Eod(H.B,Slf),(ho(H.G).getAttribute(i2e)||'').length==0||ro(H.B,y0e),H.d.reverse=true,H.c=Tlf,H)),wPb(F,(I=new n5b,mqc((!I.X&&(I.X=new oqc(I)),I.X),S6e),ho(I.G).setAttribute(i2e,Ulf),Dod(I.B).length==0||ro(I.B,y0e),Eod(I.B,Vlf),(ho(I.G).getAttribute(i2e)||'').length==0||ro(I.B,y0e),I.d.reverse=true,I.c=Wlf,I)),F)),wPb(d,(J=new Cye,Pod(J,(K=new BMe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Evb(K.a)).a),zo(J.tb,$7e,true),J)),zo(d.tb,m4e,true),d));wPb(b,(e=new e6b,wPb(e,(L=new Bld,Nod(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Is(ho(L.a),(new Kvb(Xvb(Xlf))).a),GA(L,Xlf),L)),wPb(e,(M=new e6b,wPb(M,(N=new n5b,mqc((!N.X&&(N.X=new oqc(N)),N.X),S6e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(i2e,Olf),Dod(N.B).length==0||ro(N.B,y0e),Eod(N.B,Plf),(ho(N.G).getAttribute(i2e)||'').length==0||ro(N.B,y0e),N.c=Qlf,N)),wPb(M,(O=new n5b,mqc((!O.X&&(O.X=new oqc(O)),O.X),S6e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(i2e,Rlf),Dod(O.B).length==0||ro(O.B,y0e),Eod(O.B,Slf),(ho(O.G).getAttribute(i2e)||'').length==0||ro(O.B,y0e),O.c=Tlf,O)),wPb(M,(P=new n5b,mqc((!P.X&&(P.X=new oqc(P)),P.X),S6e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(i2e,Ulf),Dod(P.B).length==0||ro(P.B,y0e),Eod(P.B,Vlf),(ho(P.G).getAttribute(i2e)||'').length==0||ro(P.B,y0e),P.c=Wlf,P)),M)),wPb(e,(Q=new Cye,Pod(Q,(R=new BMe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Evb(R.a)).a),zo(Q.tb,$7e,true),Q)),zo(e.tb,m4e,true),e));wPb(b,(f=new e6b,wPb(f,(S=new Bld,Nod(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Is(ho(S.a),(new Kvb(Xvb(Ylf))).a),GA(S,Ylf),S)),wPb(f,(T=new e6b,wPb(T,(U=new n5b,mqc((!U.X&&(U.X=new oqc(U)),U.X),S6e),U.d.selectOnFocus=true,ho(U.G).setAttribute(i2e,Olf),Dod(U.B).length==0||ro(U.B,y0e),Eod(U.B,Plf),(ho(U.G).getAttribute(i2e)||'').length==0||ro(U.B,y0e),U.c=Qlf,U)),wPb(T,(V=new n5b,mqc((!V.X&&(V.X=new oqc(V)),V.X),S6e),V.d.selectOnFocus=true,ho(V.G).setAttribute(i2e,Rlf),Dod(V.B).length==0||ro(V.B,y0e),Eod(V.B,Slf),(ho(V.G).getAttribute(i2e)||'').length==0||ro(V.B,y0e),V.c=Tlf,V)),wPb(T,(W=new n5b,mqc((!W.X&&(W.X=new oqc(W)),W.X),S6e),W.d.selectOnFocus=true,ho(W.G).setAttribute(i2e,Ulf),Dod(W.B).length==0||ro(W.B,y0e),Eod(W.B,Vlf),(ho(W.G).getAttribute(i2e)||'').length==0||ro(W.B,y0e),W.c=Wlf,W)),T)),wPb(f,(X=new Cye,Pod(X,(Y=new BMe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Evb(Y.a)).a),zo(X.tb,$7e,true),X)),zo(f.tb,m4e,true),f));wPb(b,(g=new e6b,wPb(g,(Z=new Bld,Nod(Z.b,'We supported type safe Input Masks'),Is(ho(Z.a),(new Kvb(Xvb('Types'))).a),GA(Z,'Types'),Z)),wPb(g,($=new n5b,mqc((!$.X&&($.X=new oqc($)),$.X),_7e),ho($.G).setAttribute(i2e,'eg. A0A-1A1'),Dod($.B).length==0||ro($.B,y0e),Eod($.B,FYe),(ho($.G).getAttribute(i2e)||'').length==0||ro($.B,y0e),$.c='S0S-0S0',M3b($,a.a),$)),wPb(g,(ab=new g5b,mqc((!ab.X&&(ab.X=new oqc(ab)),ab.X),_7e),Eod(ab.B,'Integer'),(ho(ab.G).getAttribute(i2e)||'').length==0||ro(ab.B,y0e),ab.c='000-00-000',M3b(ab,a.c),a.n.e=ab,ab)),wPb(g,(bb=new N4b,mqc((!bb.X&&(bb.X=new oqc(bb)),bb.X),_7e),Eod(bb.B,'Double'),(ho(bb.G).getAttribute(i2e)||'').length==0||ro(bb.B,y0e),bb.c='000-00-00000',M3b(bb,a.d),a.n.c=bb,bb)),wPb(g,(cb=new R4b,mqc((!cb.X&&(cb.X=new oqc(cb)),cb.X),_7e),Eod(cb.B,Zlf),(ho(cb.G).getAttribute(i2e)||'').length==0||ro(cb.B,y0e),cb.c='000-00-0000',M3b(cb,a.e),a.n.d=cb,cb)),wPb(g,(db=new k5b,mqc((!db.X&&(db.X=new oqc(db)),db.X),_7e),Eod(db.B,'Long'),(ho(db.G).getAttribute(i2e)||'').length==0||ro(db.B,y0e),db.c=Nlf,M3b(db,a.f),a.n.f=db,db)),wPb(g,(eb=new K4b,mqc((!eb.X&&(eb.X=new oqc(eb)),eb.X),_7e),eb.b=Klf,fb=gMe(gMe(gMe(Klf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?pQb(eb,M3b(eb,new olc(eb))):pQb(eb,Go(eb,new mlc(eb),(!eA&&(eA=new Ly),eA))),Eod(eb.B,J$e),(ho(eb.G).getAttribute(i2e)||'').length==0||ro(eb.B,y0e),M3b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,m4e,true),g));wPb(b,(h=new e6b,wPb(h,(gb=new Bld,Nod(gb.b,'Gets the value of the field with the mask.'),Is(ho(gb.a),(new Kvb(Xvb(n8e))).a),GA(gb,n8e),gb)),wPb(h,(hb=new e6b,wPb(hb,(ib=new n5b,mqc((!ib.X&&(ib.X=new oqc(ib)),ib.X),S6e),ho(ib.G).setAttribute(i2e,Olf),Dod(ib.B).length==0||ro(ib.B,y0e),Eod(ib.B,Plf),(ho(ib.G).getAttribute(i2e)||'').length==0||ro(ib.B,y0e),ib.d.reverse=true,ib.c=Qlf,a.n.g=ib,ib)),wPb(hb,(jb=new Ncd,wPb(jb,(kb=new yWb,FXb(kb.k,n8e),kb.k.ob||wPb(kb,kb.k),APb(kb,a.j),kb)),mqc((!jb.X&&(jb.X=new oqc(jb)),jb.X),_7e),jb)),hb)),wPb(h,(lb=new Cye,Pod(lb,(mb=new BMe,mb.a+='inputMask.getValue();',new Evb(mb.a)).a),zo(lb.tb,d8e,true),lb)),zo(h.tb,m4e,true),h));wPb(b,(i=new e6b,wPb(i,(nb=new Bld,Nod(nb.b,'Gets the value of the field without the mask.'),Is(ho(nb.a),(new Kvb(Xvb($lf))).a),GA(nb,$lf),nb)),wPb(i,(ob=new e6b,wPb(ob,(pb=new n5b,mqc((!pb.X&&(pb.X=new oqc(pb)),pb.X),S6e),ho(pb.G).setAttribute(i2e,Olf),Dod(pb.B).length==0||ro(pb.B,y0e),Eod(pb.B,Plf),(ho(pb.G).getAttribute(i2e)||'').length==0||ro(pb.B,y0e),pb.d.reverse=true,pb.c=Qlf,a.n.a=pb,pb)),wPb(ob,(qb=new Ncd,wPb(qb,(rb=new yWb,FXb(rb.k,$lf),rb.k.ob||wPb(rb,rb.k),APb(rb,a.i),rb)),mqc((!qb.X&&(qb.X=new oqc(qb)),qb.X),_7e),qb)),ob)),wPb(i,(sb=new Cye,Pod(sb,(tb=new BMe,tb.a+='inputMask.getCleanValue();',new Evb(tb.a)).a),zo(sb.tb,d8e,true),sb)),zo(i.tb,m4e,true),i));wPb(b,(j=new e6b,wPb(j,(ub=new Bld,Nod(ub.b,'Programmatically controls the Input Mask main methods.'),Is(ho(ub.a),(new Kvb(Xvb(_lf))).a),GA(ub,_lf),ub)),wPb(j,(vb=new e6b,wPb(vb,(wb=new n5b,mqc((!wb.X&&(wb.X=new oqc(wb)),wb.X),S6e),ho(wb.G).setAttribute(i2e,Olf),Dod(wb.B).length==0||ro(wb.B,y0e),Eod(wb.B,Plf),(ho(wb.G).getAttribute(i2e)||'').length==0||ro(wb.B,y0e),wb.d.reverse=true,wb.c=Qlf,a.n.i=wb,wb)),wPb(vb,(xb=new Ncd,wPb(xb,(yb=new yWb,yb.tb.style[C0e]=m8e,rQb(yb,(tyc(),eyc)),FXb(yb.k,'Unmask'),yb.k.ob||wPb(yb,yb.k),UQb(yb,Ttc),APb(yb,a.k),yb)),wPb(xb,(zb=new yWb,FXb(zb.k,'mask'),zb.k.ob||wPb(zb,zb.k),APb(zb,a.b),zb)),mqc((!xb.X&&(xb.X=new oqc(xb)),xb.X),_7e),xb)),vb)),wPb(j,(Ab=new Cye,Pod(Ab,(Bb=new BMe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Evb(Bb.a)).a),zo(Ab.tb,d8e,true),Ab)),zo(j.tb,m4e,true),j));return b}\nvar Klf='MM/dd/yyyy',Mlf='Basic Examples',Nlf='000-00-0000000',Olf='eg: 000.000.000.000',Plf='Ip Address',Qlf='000.000.000.000',Rlf='eg: 000000.00%',Slf='Percentage',Tlf='000000.00%',Ulf='eg: 0000 0000 0000 0000',Vlf='Credit Card',Wlf='0000 0000 0000 0000',Xlf='Clear If not Match',Ylf='Select on Focus',$lf='Get Clean Value',_lf='Unmask and Mask control';Cub(2648,323,l2e,K4b);_.Wd=function L4b(){return q5b(this.a,this.b)};var CO=HKe(Llf,'MaterialDateInputMask',2648);Cub(2645,323,l2e,N4b);_.Wd=function O4b(){return YKe($wnd.$(ho(this.G)).cleanVal())};_.Xd=function P4b(a){var b;M4b((b=this,oE(a),b))};var DO=HKe(Llf,'MaterialDoubleInputMask',2645);Cub(2646,323,l2e,R4b);_.Wd=function S4b(){return new dLe(hLe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function T4b(a){var b;Q4b((b=this,oE(a),b))};var EO=HKe(Llf,'MaterialFloatInputMask',2646);Cub(2644,323,l2e,g5b);_.Wd=function h5b(){return xLe(ZKe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function i5b(a){var b;f5b((b=this,oE(a),b))};var HO=HKe(Llf,'MaterialIntegerInputMask',2644);Cub(2647,323,l2e,k5b);_.Wd=function l5b(){return ILe($Ke($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function m5b(a){var b;j5b((b=this,oE(a),b))};var IO=HKe(Llf,'MaterialLongInputMask',2647);Cub(2700,1,{},s5b);var KO=HKe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2700);Cub(972,55,k0e,jEd);_.De=function kEd(){bye();$Ib(this,new dye(Yff,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var D2=HKe(S9e,'InputMaskPresenter',972);Cub(1365,65,l0e,qEd);var P2=HKe(S9e,'InputMaskView',1365);Cub(1867,1,{},sEd);var O2=HKe(S9e,'InputMaskView_BinderImpl/Widgets',1867);Cub(1868,1,N_e,tEd);_.Ad=function uEd(a){Kld(bE(a.a))};var F2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/1',1868);Cub(1877,1,S0e,vEd);_.nd=function wEd(a){A4b(this.a.n.i,Qlf)};var E2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/10',1877);Cub(1869,1,N_e,xEd);_.Ad=function yEd(a){Kld(xLe(ZKe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var G2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/2',1869);Cub(1870,1,N_e,zEd);_.Ad=function AEd(a){Kld(''+aLe(YKe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var H2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/3',1870);Cub(1871,1,N_e,BEd);_.Ad=function CEd(a){Kld(''+(new dLe(hLe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var I2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/4',1871);Cub(1872,1,N_e,DEd);_.Ad=function EEd(a){Kld(''+tub(ILe($Ke($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var J2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/5',1872);Cub(1873,1,N_e,FEd);_.Ad=function GEd(a){Kld(TC(I4b(this.a.n.b)))};var K2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/6',1873);Cub(1874,1,S0e,HEd);_.nd=function IEd(a){Kld($wnd.$(ho(this.a.n.a.G)).cleanVal())};var L2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/7',1874);Cub(1875,1,S0e,JEd);_.nd=function KEd(a){Kld(bE(P3b(this.a.n.g)))};var M2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/8',1875);Cub(1876,1,S0e,LEd);_.nd=function MEd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var N2=HKe(S9e,'InputMaskView_BinderImpl/Widgets/9',1876);Cub(813,1,w8e);_.Yc=function VEd(){qNb(this.b,OEd(this.a.a))};var QLe,RLe,SLe,TLe;var rE=KKe('long','J');vXe(Jq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")
