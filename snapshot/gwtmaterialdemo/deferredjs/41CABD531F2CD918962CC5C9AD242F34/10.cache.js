$wnd.gwtmaterialdemo.runAsyncCallback10("function CEd(){}\nfunction EEd(a){this.a=a}\nfunction GEd(a){this.a=a}\nfunction IEd(a){this.a=a}\nfunction KEd(a){this.a=a}\nfunction MEd(a){this.a=a}\nfunction OEd(a){this.a=a}\nfunction QEd(a){this.a=a}\nfunction SEd(a){this.a=a}\nfunction UEd(a){this.a=a}\nfunction C5b(a){this.a=a}\nfunction S4b(a){return A5b(a.a,a.b)}\nfunction X4b(){F4b();M4b.call(this)}\nfunction _4b(){F4b();M4b.call(this)}\nfunction q5b(){F4b();M4b.call(this)}\nfunction u5b(){F4b();M4b.call(this)}\nfunction sEd(a,b,c){ZIb();wJb.call(this,a,b,c,(Wsd(),Usd))}\nfunction zEd(){OJb.call(this);MJb(this,AEd(new BEd(this)))}\nfunction YEd(a){var b;if(!a.d){b=new zEd;a.d=b}return a.d}\nfunction W4b(a){m4b(a,IMe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction p5b(a){m4b(a,hNe(JMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction t5b(a){m4b(a,sNe(KMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction $4b(a){m4b(a,new PMe(TMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction U4b(){F4b();M4b.call(this);this.b=Vnf;this.a=new C5b(this);T4b(this,this.b)}\nfunction T4b(a,b){var c;a.b=b;c=SNe(SNe(SNe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction A5b(a,b){if(z5b(a,b)){Y3b(a.a);return PB((fC(),hC(b,qC((pC(),pC(),oC)))),ys(ho(a.a.G),J1e))}return null}\nfunction XEd(a){var b,c;if(!a.c){c=new sEd(kGb(eKb(a.a)),(b=YEd(a),b),WEd(a));RIb((hKb(a.a),c),fMb(hKb(a.a)));a.c=c}return a.c}\nfunction TMe(a){var b;b=IMe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction BEd(a){this.a=new CEd;this.c=new GEd(this);this.d=new IEd(this);this.e=new KEd(this);this.f=new MEd(this);this.g=new OEd(this);this.i=new QEd(this);this.j=new SEd(this);this.k=new UEd(this);this.b=new EEd(this);this.n=a}\nfunction B5b(a,b,c){return !(NNe(a,'31')&&(NNe(b,'4')||NNe(b,'6')||NNe(b,'9')||NNe(b,'11')||NNe(b,'04')||NNe(b,'06')||NNe(b,'09')))&&(!(NNe(b,'2')||NNe(b,'02'))||(c%4==0?!NNe(a,'30')&&!NNe(a,'31'):!NNe(a,'29')&&!NNe(a,'30')&&!NNe(a,'31')))}\nfunction ENe(){ENe=Uub;var a;ANe=dD(ZC(iE,1),w$e,183,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);BNe=_C(iE,w$e,183,37,15,1);CNe=dD(ZC(iE,1),w$e,183,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);DNe=_C(jE,z$e,183,37,14,1);for(a=2;a<=36;a++){BNe[a]=fE($wnd.Math.pow(a,ANe[a]));DNe[a]=yub({l:z0e,m:z0e,h:524287},BNe[a])}}\nfunction z5b(a,b){var c,d,e,f,g;if(ys(ho(a.a.G),J1e)!=null&&ys(ho(a.a.G),J1e).length!=0&&a.a.c!=null&&b!=null){c=ys(ho(a.a.G),J1e);e=YNe(c,b.indexOf('M'),b.indexOf('M/')+1);d=YNe(c,b.indexOf('d'),b.indexOf('d/')+1);g=YNe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=B5b(d,e,JMe(g));f||d4b(a.a,'Not a valid date');return d4b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(d4b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(d4b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}d4b(a.a,'Text input must not be empty or null');return false}\nfunction KMe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw uub(new FNe(SZe))}j=a;f=a.length;i=false;if(f>0){b=(ZYe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw uub(new FNe(Glf+j+'\"'))}while(a.length>0&&(ZYe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(ENe(),CNe)[10]){throw uub(new FNe(Glf+j+'\"'))}for(e=0;e<f;e++){if(kMe((ZYe(e,a.length),a.charCodeAt(e)))==-1){throw uub(new FNe(Glf+j+'\"'))}}l=0;g=ANe[10];k=BNe[10];h=Fub(DNe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(wub(l,h)<0){throw uub(new FNe(Glf+j+'\"'))}l=Eub(l,k)}l=Gub(l,d)}if(wub(l,0)>0){throw uub(new FNe(Glf+j+'\"'))}if(!i){l=Fub(l);if(wub(l,0)<0){throw uub(new FNe(Glf+j+'\"'))}}return l}\nfunction AEd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new qjc;CPb(b,(c=new o6b,CPb(c,(k=new Jld,Fs(ho(k.a),(lwb(),(new _vb(mwb(Xnf))).a)),yA(k,Xnf),k)),CPb(c,(l=new Rze,mWb(l.a,gnf),oWb(l.a),(Twb(),l.tb).style[saf]=(dx(),Baf),pWb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),CPb(c,(m=new o6b,CPb(m,(n=new x5b,jqc((!n.X&&(n.X=new lqc(n)),n.X),I8e),ho(n.G).setAttribute(c4e,'eg: 000-00-0000000'),Mod(n.A).length==0||ro(n.A,l2e),Nod(n.A,'Phone Number'),(ho(n.G).getAttribute(c4e)||'').length==0||ro(n.A,l2e),n.c=Ynf,n)),CPb(m,(o=new x5b,jqc((!o.X&&(o.X=new lqc(o)),o.X),I8e),ho(o.G).setAttribute(c4e,'eg: (00) 0000-0000'),Mod(o.A).length==0||ro(o.A,l2e),Nod(o.A,'Phone with Odd'),(ho(o.G).getAttribute(c4e)||'').length==0||ro(o.A,l2e),o.c='(00) 0000-0000',o)),CPb(m,(p=new x5b,jqc((!p.X&&(p.X=new lqc(p)),p.X),I8e),ho(p.G).setAttribute(c4e,'eg: (000) 000-000'),Mod(p.A).length==0||ro(p.A,l2e),Nod(p.A,'US Phone Number'),(ho(p.G).getAttribute(c4e)||'').length==0||ro(p.A,l2e),p.c='(000) 000-000',p)),m)),CPb(c,(q=new o6b,CPb(q,(r=new x5b,jqc((!r.X&&(r.X=new lqc(r)),r.X),I8e),ho(r.G).setAttribute(c4e,'eg: 00000-000'),Mod(r.A).length==0||ro(r.A,l2e),Nod(r.A,'CEP'),(ho(r.G).getAttribute(c4e)||'').length==0||ro(r.A,l2e),r.c='00000-000',r)),CPb(q,(s=new x5b,jqc((!s.X&&(s.X=new lqc(s)),s.X),I8e),ho(s.G).setAttribute(c4e,'eg: 000.000.000-00'),Mod(s.A).length==0||ro(s.A,l2e),Nod(s.A,'CPF'),(ho(s.G).getAttribute(c4e)||'').length==0||ro(s.A,l2e),s.c='000.000.000-00',s)),CPb(q,(t=new x5b,jqc((!t.X&&(t.X=new lqc(t)),t.X),I8e),ho(t.G).setAttribute(c4e,'eg: 000,000,000,000,000.00'),Mod(t.A).length==0||ro(t.A,l2e),Nod(t.A,'Money'),(ho(t.G).getAttribute(c4e)||'').length==0||ro(t.A,l2e),t.c='000,000,000,000,000.00',t)),q)),CPb(c,(u=new o6b,CPb(u,(v=new x5b,jqc((!v.X&&(v.X=new lqc(v)),v.X),I8e),ho(v.G).setAttribute(c4e,Znf),Mod(v.A).length==0||ro(v.A,l2e),Nod(v.A,$nf),(ho(v.G).getAttribute(c4e)||'').length==0||ro(v.A,l2e),v.c=_nf,v)),CPb(u,(w=new x5b,jqc((!w.X&&(w.X=new lqc(w)),w.X),I8e),ho(w.G).setAttribute(c4e,aof),Mod(w.A).length==0||ro(w.A,l2e),Nod(w.A,bof),(ho(w.G).getAttribute(c4e)||'').length==0||ro(w.A,l2e),w.c=cof,w)),CPb(u,(A=new x5b,jqc((!A.X&&(A.X=new lqc(A)),A.X),I8e),ho(A.G).setAttribute(c4e,dof),Mod(A.A).length==0||ro(A.A,l2e),Nod(A.A,eof),(ho(A.G).getAttribute(c4e)||'').length==0||ro(A.A,l2e),A.c=fof,A)),u)),CPb(c,(B=new aAe,Yod(B,(C=new lOe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Vvb(C.a)).a),zo(B.tb,P9e,true),B)),zo(c.tb,e6e,true),c));CPb(b,(d=new o6b,CPb(d,(D=new Jld,Wod(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Fs(ho(D.a),(new _vb(mwb('Reverse'))).a),yA(D,'Reverse'),D)),CPb(d,(F=new o6b,CPb(F,(G=new x5b,jqc((!G.X&&(G.X=new lqc(G)),G.X),I8e),ho(G.G).setAttribute(c4e,Znf),Mod(G.A).length==0||ro(G.A,l2e),Nod(G.A,$nf),(ho(G.G).getAttribute(c4e)||'').length==0||ro(G.A,l2e),G.d.reverse=true,G.c=_nf,G)),CPb(F,(H=new x5b,jqc((!H.X&&(H.X=new lqc(H)),H.X),I8e),ho(H.G).setAttribute(c4e,aof),Mod(H.A).length==0||ro(H.A,l2e),Nod(H.A,bof),(ho(H.G).getAttribute(c4e)||'').length==0||ro(H.A,l2e),H.d.reverse=true,H.c=cof,H)),CPb(F,(I=new x5b,jqc((!I.X&&(I.X=new lqc(I)),I.X),I8e),ho(I.G).setAttribute(c4e,dof),Mod(I.A).length==0||ro(I.A,l2e),Nod(I.A,eof),(ho(I.G).getAttribute(c4e)||'').length==0||ro(I.A,l2e),I.d.reverse=true,I.c=fof,I)),F)),CPb(d,(J=new aAe,Yod(J,(K=new lOe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Vvb(K.a)).a),zo(J.tb,P9e,true),J)),zo(d.tb,e6e,true),d));CPb(b,(e=new o6b,CPb(e,(L=new Jld,Wod(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Fs(ho(L.a),(new _vb(mwb(gof))).a),yA(L,gof),L)),CPb(e,(M=new o6b,CPb(M,(N=new x5b,jqc((!N.X&&(N.X=new lqc(N)),N.X),I8e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(c4e,Znf),Mod(N.A).length==0||ro(N.A,l2e),Nod(N.A,$nf),(ho(N.G).getAttribute(c4e)||'').length==0||ro(N.A,l2e),N.c=_nf,N)),CPb(M,(O=new x5b,jqc((!O.X&&(O.X=new lqc(O)),O.X),I8e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(c4e,aof),Mod(O.A).length==0||ro(O.A,l2e),Nod(O.A,bof),(ho(O.G).getAttribute(c4e)||'').length==0||ro(O.A,l2e),O.c=cof,O)),CPb(M,(P=new x5b,jqc((!P.X&&(P.X=new lqc(P)),P.X),I8e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(c4e,dof),Mod(P.A).length==0||ro(P.A,l2e),Nod(P.A,eof),(ho(P.G).getAttribute(c4e)||'').length==0||ro(P.A,l2e),P.c=fof,P)),M)),CPb(e,(Q=new aAe,Yod(Q,(R=new lOe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Vvb(R.a)).a),zo(Q.tb,P9e,true),Q)),zo(e.tb,e6e,true),e));CPb(b,(f=new o6b,CPb(f,(S=new Jld,Wod(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Fs(ho(S.a),(new _vb(mwb(hof))).a),yA(S,hof),S)),CPb(f,(T=new o6b,CPb(T,(U=new x5b,jqc((!U.X&&(U.X=new lqc(U)),U.X),I8e),U.d.selectOnFocus=true,ho(U.G).setAttribute(c4e,Znf),Mod(U.A).length==0||ro(U.A,l2e),Nod(U.A,$nf),(ho(U.G).getAttribute(c4e)||'').length==0||ro(U.A,l2e),U.c=_nf,U)),CPb(T,(V=new x5b,jqc((!V.X&&(V.X=new lqc(V)),V.X),I8e),V.d.selectOnFocus=true,ho(V.G).setAttribute(c4e,aof),Mod(V.A).length==0||ro(V.A,l2e),Nod(V.A,bof),(ho(V.G).getAttribute(c4e)||'').length==0||ro(V.A,l2e),V.c=cof,V)),CPb(T,(W=new x5b,jqc((!W.X&&(W.X=new lqc(W)),W.X),I8e),W.d.selectOnFocus=true,ho(W.G).setAttribute(c4e,dof),Mod(W.A).length==0||ro(W.A,l2e),Nod(W.A,eof),(ho(W.G).getAttribute(c4e)||'').length==0||ro(W.A,l2e),W.c=fof,W)),T)),CPb(f,(X=new aAe,Yod(X,(Y=new lOe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Vvb(Y.a)).a),zo(X.tb,P9e,true),X)),zo(f.tb,e6e,true),f));CPb(b,(g=new o6b,CPb(g,(Z=new Jld,Wod(Z.b,'We supported type safe Input Masks'),Fs(ho(Z.a),(new _vb(mwb('Types'))).a),yA(Z,'Types'),Z)),CPb(g,($=new x5b,jqc((!$.X&&($.X=new lqc($)),$.X),Q9e),ho($.G).setAttribute(c4e,'eg. A0A-1A1'),Mod($.A).length==0||ro($.A,l2e),Nod($.A,u$e),(ho($.G).getAttribute(c4e)||'').length==0||ro($.A,l2e),$.c='S0S-0S0',W3b($,a.a),$)),CPb(g,(ab=new q5b,jqc((!ab.X&&(ab.X=new lqc(ab)),ab.X),Q9e),Nod(ab.A,'Integer'),(ho(ab.G).getAttribute(c4e)||'').length==0||ro(ab.A,l2e),ab.c='000-00-000',W3b(ab,a.c),a.n.e=ab,ab)),CPb(g,(bb=new X4b,jqc((!bb.X&&(bb.X=new lqc(bb)),bb.X),Q9e),Nod(bb.A,'Double'),(ho(bb.G).getAttribute(c4e)||'').length==0||ro(bb.A,l2e),bb.c='000-00-00000',W3b(bb,a.d),a.n.c=bb,bb)),CPb(g,(cb=new _4b,jqc((!cb.X&&(cb.X=new lqc(cb)),cb.X),Q9e),Nod(cb.A,iof),(ho(cb.G).getAttribute(c4e)||'').length==0||ro(cb.A,l2e),cb.c='000-00-0000',W3b(cb,a.e),a.n.d=cb,cb)),CPb(g,(db=new u5b,jqc((!db.X&&(db.X=new lqc(db)),db.X),Q9e),Nod(db.A,'Long'),(ho(db.G).getAttribute(c4e)||'').length==0||ro(db.A,l2e),db.c=Ynf,W3b(db,a.f),a.n.f=db,db)),CPb(g,(eb=new U4b,jqc((!eb.X&&(eb.X=new lqc(eb)),eb.X),Q9e),eb.b=Vnf,fb=SNe(SNe(SNe(Vnf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?vQb(eb,W3b(eb,new xlc(eb))):vQb(eb,Go(eb,new vlc(eb),(!Yz&&(Yz=new Dy),Yz))),Nod(eb.A,y0e),(ho(eb.G).getAttribute(c4e)||'').length==0||ro(eb.A,l2e),W3b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,e6e,true),g));CPb(b,(h=new o6b,CPb(h,(gb=new Jld,Wod(gb.b,'Gets the value of the field with the mask.'),Fs(ho(gb.a),(new _vb(mwb(baf))).a),yA(gb,baf),gb)),CPb(h,(hb=new o6b,CPb(hb,(ib=new x5b,jqc((!ib.X&&(ib.X=new lqc(ib)),ib.X),I8e),ho(ib.G).setAttribute(c4e,Znf),Mod(ib.A).length==0||ro(ib.A,l2e),Nod(ib.A,$nf),(ho(ib.G).getAttribute(c4e)||'').length==0||ro(ib.A,l2e),ib.d.reverse=true,ib.c=_nf,a.n.g=ib,ib)),CPb(hb,(jb=new fdd,CPb(jb,(kb=new IWb,PXb(kb.k,baf),kb.k.ob||CPb(kb,kb.k),GPb(kb,a.j),kb)),jqc((!jb.X&&(jb.X=new lqc(jb)),jb.X),Q9e),jb)),hb)),CPb(h,(lb=new aAe,Yod(lb,(mb=new lOe,mb.a+='inputMask.getValue();',new Vvb(mb.a)).a),zo(lb.tb,U9e,true),lb)),zo(h.tb,e6e,true),h));CPb(b,(i=new o6b,CPb(i,(nb=new Jld,Wod(nb.b,'Gets the value of the field without the mask.'),Fs(ho(nb.a),(new _vb(mwb(jof))).a),yA(nb,jof),nb)),CPb(i,(ob=new o6b,CPb(ob,(pb=new x5b,jqc((!pb.X&&(pb.X=new lqc(pb)),pb.X),I8e),ho(pb.G).setAttribute(c4e,Znf),Mod(pb.A).length==0||ro(pb.A,l2e),Nod(pb.A,$nf),(ho(pb.G).getAttribute(c4e)||'').length==0||ro(pb.A,l2e),pb.d.reverse=true,pb.c=_nf,a.n.a=pb,pb)),CPb(ob,(qb=new fdd,CPb(qb,(rb=new IWb,PXb(rb.k,jof),rb.k.ob||CPb(rb,rb.k),GPb(rb,a.i),rb)),jqc((!qb.X&&(qb.X=new lqc(qb)),qb.X),Q9e),qb)),ob)),CPb(i,(sb=new aAe,Yod(sb,(tb=new lOe,tb.a+='inputMask.getCleanValue();',new Vvb(tb.a)).a),zo(sb.tb,U9e,true),sb)),zo(i.tb,e6e,true),i));CPb(b,(j=new o6b,CPb(j,(ub=new Jld,Wod(ub.b,'Programmatically controls the Input Mask main methods.'),Fs(ho(ub.a),(new _vb(mwb(kof))).a),yA(ub,kof),ub)),CPb(j,(vb=new o6b,CPb(vb,(wb=new x5b,jqc((!wb.X&&(wb.X=new lqc(wb)),wb.X),I8e),ho(wb.G).setAttribute(c4e,Znf),Mod(wb.A).length==0||ro(wb.A,l2e),Nod(wb.A,$nf),(ho(wb.G).getAttribute(c4e)||'').length==0||ro(wb.A,l2e),wb.d.reverse=true,wb.c=_nf,a.n.i=wb,wb)),CPb(vb,(xb=new fdd,CPb(xb,(yb=new IWb,yb.tb.style[s2e]=r2e,xQb(yb,(Gyc(),ryc)),PXb(yb.k,'Unmask'),yb.k.ob||CPb(yb,yb.k),cRb(yb,euc),GPb(yb,a.k),yb)),CPb(xb,(zb=new IWb,PXb(zb.k,'mask'),zb.k.ob||CPb(zb,zb.k),GPb(zb,a.b),zb)),jqc((!xb.X&&(xb.X=new lqc(xb)),xb.X),Q9e),xb)),vb)),CPb(j,(Ab=new aAe,Yod(Ab,(Bb=new lOe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Vvb(Bb.a)).a),zo(Ab.tb,U9e,true),Ab)),zo(j.tb,e6e,true),j));return b}\nvar Vnf='MM/dd/yyyy',Xnf='Basic Examples',Ynf='000-00-0000000',Znf='eg: 000.000.000.000',$nf='Ip Address',_nf='000.000.000.000',aof='eg: 000000.00%',bof='Percentage',cof='000000.00%',dof='eg: 0000 0000 0000 0000',eof='Credit Card',fof='0000 0000 0000 0000',gof='Clear If not Match',hof='Select on Focus',jof='Get Clean Value',kof='Unmask and Mask control';Tub(2754,395,e4e,U4b);_.Xd=function V4b(){return A5b(this.a,this.b)};var uO=rMe(Wnf,'MaterialDateInputMask',2754);Tub(2751,395,e4e,X4b);_.Xd=function Y4b(){return IMe($wnd.$(ho(this.G)).cleanVal())};_.Yd=function Z4b(a){var b;W4b((b=this,gE(a),b))};var vO=rMe(Wnf,'MaterialDoubleInputMask',2751);Tub(2752,395,e4e,_4b);_.Xd=function a5b(){return new PMe(TMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function b5b(a){var b;$4b((b=this,gE(a),b))};var wO=rMe(Wnf,'MaterialFloatInputMask',2752);Tub(2750,395,e4e,q5b);_.Xd=function r5b(){return hNe(JMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function s5b(a){var b;p5b((b=this,gE(a),b))};var zO=rMe(Wnf,'MaterialIntegerInputMask',2750);Tub(2753,395,e4e,u5b);_.Xd=function v5b(){return sNe(KMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function w5b(a){var b;t5b((b=this,gE(a),b))};var AO=rMe(Wnf,'MaterialLongInputMask',2753);Tub(2801,1,{},C5b);var CO=rMe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2801);Tub(1047,120,Z1e,sEd);_.Ee=function tEd(){Bze();eJb(this,new Dze(bif,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var s2=rMe(Fbf,'InputMaskPresenter',1047);Tub(1443,129,$1e,zEd);var E2=rMe(Fbf,'InputMaskView',1443);Tub(1966,1,{},BEd);var D2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets',1966);Tub(1967,1,C1e,CEd);_.Ad=function DEd(a){Sld(VD(a.a))};var u2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/1',1967);Tub(1976,1,K2e,EEd);_.nd=function FEd(a){K4b(this.a.n.i,_nf)};var t2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/10',1976);Tub(1968,1,C1e,GEd);_.Ad=function HEd(a){Sld(hNe(JMe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var v2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/2',1968);Tub(1969,1,C1e,IEd);_.Ad=function JEd(a){Sld(''+MMe(IMe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var w2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/3',1969);Tub(1970,1,C1e,KEd);_.Ad=function LEd(a){Sld(''+(new PMe(TMe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var x2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/4',1970);Tub(1971,1,C1e,MEd);_.Ad=function NEd(a){Sld(''+Kub(sNe(KMe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var y2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/5',1971);Tub(1972,1,C1e,OEd);_.Ad=function PEd(a){Sld(LC(S4b(this.a.n.b)))};var z2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/6',1972);Tub(1973,1,K2e,QEd);_.nd=function REd(a){Sld($wnd.$(ho(this.a.n.a.G)).cleanVal())};var A2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/7',1973);Tub(1974,1,K2e,SEd);_.nd=function TEd(a){Sld(VD(Z3b(this.a.n.g)))};var B2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/8',1974);Tub(1975,1,K2e,UEd);_.nd=function VEd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var C2=rMe(Fbf,'InputMaskView_BinderImpl/Widgets/9',1975);Tub(888,1,kaf);_.Yc=function cFd(){wNb(this.b,XEd(this.a.a))};var ANe,BNe,CNe,DNe;var jE=uMe('long','J');kZe(Iq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")
