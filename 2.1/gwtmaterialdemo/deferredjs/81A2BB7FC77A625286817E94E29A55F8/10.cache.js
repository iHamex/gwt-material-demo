$wnd.gwtmaterialdemo.runAsyncCallback10("function EFd(){}\nfunction GFd(a){this.a=a}\nfunction IFd(a){this.a=a}\nfunction KFd(a){this.a=a}\nfunction MFd(a){this.a=a}\nfunction OFd(a){this.a=a}\nfunction QFd(a){this.a=a}\nfunction SFd(a){this.a=a}\nfunction UFd(a){this.a=a}\nfunction WFd(a){this.a=a}\nfunction D6b(a){this.a=a}\nfunction T5b(a){return B6b(a.a,a.b)}\nfunction Y5b(){G5b();N5b.call(this)}\nfunction a6b(){G5b();N5b.call(this)}\nfunction r6b(){G5b();N5b.call(this)}\nfunction v6b(){G5b();N5b.call(this)}\nfunction uFd(a,b,c){cKb();BKb.call(this,a,b,c,(Xtd(),Vtd))}\nfunction BFd(){TKb.call(this);RKb(this,CFd(new DFd(this)))}\nfunction $Fd(a){var b;if(!a.d){b=new BFd;a.d=b}return a.d}\nfunction X5b(a){n5b(a,hMe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction q6b(a){n5b(a,IMe(iMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction u6b(a){n5b(a,TMe(jMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction _5b(a){n5b(a,new oMe(sMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction V5b(){G5b();N5b.call(this);this.b=Qmf;this.a=new D6b(this);U5b(this,this.b)}\nfunction U5b(a,b){var c;a.b=b;c=rNe(rNe(rNe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction B6b(a,b){if(A6b(a,b)){Z4b(a.a);return fD((xD(),zD(b,ID((HD(),HD(),GD)))),Is(ho(a.a.G),c1e))}return null}\nfunction ZFd(a){var b,c;if(!a.c){c=new uFd(pHb(jLb(a.a)),(b=$Fd(a),b),YFd(a));WJb((mLb(a.a),c),kNb(mLb(a.a)));a.c=c}return a.c}\nfunction sMe(a){var b;b=hMe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction DFd(a){this.a=new EFd;this.c=new IFd(this);this.d=new KFd(this);this.e=new MFd(this);this.f=new OFd(this);this.g=new QFd(this);this.i=new SFd(this);this.j=new UFd(this);this.k=new WFd(this);this.b=new GFd(this);this.n=a}\nfunction C6b(a,b,c){return !(mNe(a,'31')&&(mNe(b,'4')||mNe(b,'6')||mNe(b,'9')||mNe(b,'11')||mNe(b,'04')||mNe(b,'06')||mNe(b,'09')))&&(!(mNe(b,'2')||mNe(b,'02'))||(c%4==0?!(mNe(a,'30')||mNe(a,'31')):!(mNe(a,'29')||mNe(a,'30')||mNe(a,'31'))))}\nfunction dNe(){dNe=Rvb;var a;_Me=vE(pE(AF,1),QZe,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);aNe=rE(AF,QZe,116,37,15,1);bNe=vE(pE(AF,1),QZe,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);cNe=rE(BF,TZe,116,37,14,1);for(a=2;a<=36;a++){aNe[a]=xF($wnd.Math.pow(a,_Me[a]));cNe[a]=vvb({l:$_e,m:$_e,h:524287},aNe[a])}}\nfunction A6b(a,b){var c,d,e,f,g;if(Is(ho(a.a.G),c1e)!=null&&Is(ho(a.a.G),c1e).length!=0&&a.a.c!=null&&b!=null){c=Is(ho(a.a.G),c1e);e=xNe(c,b.indexOf('M'),b.indexOf('M/')+1);d=xNe(c,b.indexOf('d'),b.indexOf('d/')+1);g=xNe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=C6b(d,e,iMe(g));f||e5b(a.a,'Not a valid date');return e5b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(e5b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(e5b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}e5b(a.a,'Text input must not be empty or null');return false}\nfunction jMe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw rvb(new eNe(mZe))}j=a;f=a.length;i=false;if(f>0){b=(tYe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw rvb(new eNe(Fkf+j+'\"'))}while(a.length>0&&(tYe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(dNe(),bNe)[10]){throw rvb(new eNe(Fkf+j+'\"'))}for(e=0;e<f;e++){if(LLe((tYe(e,a.length),a.charCodeAt(e)))==-1){throw rvb(new eNe(Fkf+j+'\"'))}}l=0;g=_Me[10];k=aNe[10];h=Cvb(cNe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(tvb(l,h)<0){throw rvb(new eNe(Fkf+j+'\"'))}l=Bvb(l,k)}l=Dvb(l,d)}if(tvb(l,0)>0){throw rvb(new eNe(Fkf+j+'\"'))}if(!i){l=Cvb(l);if(tvb(l,0)<0){throw rvb(new eNe(Fkf+j+'\"'))}}return l}\nfunction CFd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new rkc;HQb(b,(c=new p7b,HQb(c,(k=new Mmd,Vs(ho(k.a),(ixb(),(new Ywb(jxb(Smf))).a)),QB(k,Smf),k)),HQb(c,(l=new Cze,nXb(l.a,dmf),pXb(l.a),(Qxb(),l.tb).style[K9e]=(vy(),T9e),qXb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),HQb(c,(m=new p7b,HQb(m,(n=new y6b,yrc((!n.X&&(n.X=new Arc(n)),n.X),Y7e),ho(n.G).setAttribute(q3e,'eg: 000-00-0000000'),Opd(n.B).length==0||ro(n.B,I1e),Ppd(n.B,'Phone Number'),Ds(ho(n.G),q3e).length==0||ro(n.B,I1e),n.c=Tmf,n)),HQb(m,(o=new y6b,yrc((!o.X&&(o.X=new Arc(o)),o.X),Y7e),ho(o.G).setAttribute(q3e,'eg: (00) 0000-0000'),Opd(o.B).length==0||ro(o.B,I1e),Ppd(o.B,'Phone with Odd'),Ds(ho(o.G),q3e).length==0||ro(o.B,I1e),o.c='(00) 0000-0000',o)),HQb(m,(p=new y6b,yrc((!p.X&&(p.X=new Arc(p)),p.X),Y7e),ho(p.G).setAttribute(q3e,'eg: (000) 000-000'),Opd(p.B).length==0||ro(p.B,I1e),Ppd(p.B,'US Phone Number'),Ds(ho(p.G),q3e).length==0||ro(p.B,I1e),p.c='(000) 000-000',p)),m)),HQb(c,(q=new p7b,HQb(q,(r=new y6b,yrc((!r.X&&(r.X=new Arc(r)),r.X),Y7e),ho(r.G).setAttribute(q3e,'eg: 00000-000'),Opd(r.B).length==0||ro(r.B,I1e),Ppd(r.B,'CEP'),Ds(ho(r.G),q3e).length==0||ro(r.B,I1e),r.c='00000-000',r)),HQb(q,(s=new y6b,yrc((!s.X&&(s.X=new Arc(s)),s.X),Y7e),ho(s.G).setAttribute(q3e,'eg: 000.000.000-00'),Opd(s.B).length==0||ro(s.B,I1e),Ppd(s.B,'CPF'),Ds(ho(s.G),q3e).length==0||ro(s.B,I1e),s.c='000.000.000-00',s)),HQb(q,(t=new y6b,yrc((!t.X&&(t.X=new Arc(t)),t.X),Y7e),ho(t.G).setAttribute(q3e,'eg: 000,000,000,000,000.00'),Opd(t.B).length==0||ro(t.B,I1e),Ppd(t.B,'Money'),Ds(ho(t.G),q3e).length==0||ro(t.B,I1e),t.c='000,000,000,000,000.00',t)),q)),HQb(c,(u=new p7b,HQb(u,(v=new y6b,yrc((!v.X&&(v.X=new Arc(v)),v.X),Y7e),ho(v.G).setAttribute(q3e,Umf),Opd(v.B).length==0||ro(v.B,I1e),Ppd(v.B,Vmf),Ds(ho(v.G),q3e).length==0||ro(v.B,I1e),v.c=Wmf,v)),HQb(u,(w=new y6b,yrc((!w.X&&(w.X=new Arc(w)),w.X),Y7e),ho(w.G).setAttribute(q3e,Xmf),Opd(w.B).length==0||ro(w.B,I1e),Ppd(w.B,Ymf),Ds(ho(w.G),q3e).length==0||ro(w.B,I1e),w.c=Zmf,w)),HQb(u,(A=new y6b,yrc((!A.X&&(A.X=new Arc(A)),A.X),Y7e),ho(A.G).setAttribute(q3e,$mf),Opd(A.B).length==0||ro(A.B,I1e),Ppd(A.B,_mf),Ds(ho(A.G),q3e).length==0||ro(A.B,I1e),A.c=anf,A)),u)),HQb(c,(B=new Nze,$pd(B,(C=new MNe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Swb(C.a)).a),zo(B.tb,e9e,true),B)),zo(c.tb,s5e,true),c));HQb(b,(d=new p7b,HQb(d,(D=new Mmd,Ypd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Vs(ho(D.a),(new Ywb(jxb('Reverse'))).a),QB(D,'Reverse'),D)),HQb(d,(F=new p7b,HQb(F,(G=new y6b,yrc((!G.X&&(G.X=new Arc(G)),G.X),Y7e),ho(G.G).setAttribute(q3e,Umf),Opd(G.B).length==0||ro(G.B,I1e),Ppd(G.B,Vmf),Ds(ho(G.G),q3e).length==0||ro(G.B,I1e),G.d.reverse=true,G.c=Wmf,G)),HQb(F,(H=new y6b,yrc((!H.X&&(H.X=new Arc(H)),H.X),Y7e),ho(H.G).setAttribute(q3e,Xmf),Opd(H.B).length==0||ro(H.B,I1e),Ppd(H.B,Ymf),Ds(ho(H.G),q3e).length==0||ro(H.B,I1e),H.d.reverse=true,H.c=Zmf,H)),HQb(F,(I=new y6b,yrc((!I.X&&(I.X=new Arc(I)),I.X),Y7e),ho(I.G).setAttribute(q3e,$mf),Opd(I.B).length==0||ro(I.B,I1e),Ppd(I.B,_mf),Ds(ho(I.G),q3e).length==0||ro(I.B,I1e),I.d.reverse=true,I.c=anf,I)),F)),HQb(d,(J=new Nze,$pd(J,(K=new MNe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Swb(K.a)).a),zo(J.tb,e9e,true),J)),zo(d.tb,s5e,true),d));HQb(b,(e=new p7b,HQb(e,(L=new Mmd,Ypd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Vs(ho(L.a),(new Ywb(jxb(bnf))).a),QB(L,bnf),L)),HQb(e,(M=new p7b,HQb(M,(N=new y6b,yrc((!N.X&&(N.X=new Arc(N)),N.X),Y7e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(q3e,Umf),Opd(N.B).length==0||ro(N.B,I1e),Ppd(N.B,Vmf),Ds(ho(N.G),q3e).length==0||ro(N.B,I1e),N.c=Wmf,N)),HQb(M,(O=new y6b,yrc((!O.X&&(O.X=new Arc(O)),O.X),Y7e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(q3e,Xmf),Opd(O.B).length==0||ro(O.B,I1e),Ppd(O.B,Ymf),Ds(ho(O.G),q3e).length==0||ro(O.B,I1e),O.c=Zmf,O)),HQb(M,(P=new y6b,yrc((!P.X&&(P.X=new Arc(P)),P.X),Y7e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(q3e,$mf),Opd(P.B).length==0||ro(P.B,I1e),Ppd(P.B,_mf),Ds(ho(P.G),q3e).length==0||ro(P.B,I1e),P.c=anf,P)),M)),HQb(e,(Q=new Nze,$pd(Q,(R=new MNe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Swb(R.a)).a),zo(Q.tb,e9e,true),Q)),zo(e.tb,s5e,true),e));HQb(b,(f=new p7b,HQb(f,(S=new Mmd,Ypd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Vs(ho(S.a),(new Ywb(jxb(cnf))).a),QB(S,cnf),S)),HQb(f,(T=new p7b,HQb(T,(U=new y6b,yrc((!U.X&&(U.X=new Arc(U)),U.X),Y7e),U.d.selectOnFocus=true,ho(U.G).setAttribute(q3e,Umf),Opd(U.B).length==0||ro(U.B,I1e),Ppd(U.B,Vmf),Ds(ho(U.G),q3e).length==0||ro(U.B,I1e),U.c=Wmf,U)),HQb(T,(V=new y6b,yrc((!V.X&&(V.X=new Arc(V)),V.X),Y7e),V.d.selectOnFocus=true,ho(V.G).setAttribute(q3e,Xmf),Opd(V.B).length==0||ro(V.B,I1e),Ppd(V.B,Ymf),Ds(ho(V.G),q3e).length==0||ro(V.B,I1e),V.c=Zmf,V)),HQb(T,(W=new y6b,yrc((!W.X&&(W.X=new Arc(W)),W.X),Y7e),W.d.selectOnFocus=true,ho(W.G).setAttribute(q3e,$mf),Opd(W.B).length==0||ro(W.B,I1e),Ppd(W.B,_mf),Ds(ho(W.G),q3e).length==0||ro(W.B,I1e),W.c=anf,W)),T)),HQb(f,(X=new Nze,$pd(X,(Y=new MNe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Swb(Y.a)).a),zo(X.tb,e9e,true),X)),zo(f.tb,s5e,true),f));HQb(b,(g=new p7b,HQb(g,(Z=new Mmd,Ypd(Z.b,'We supported type safe Input Masks'),Vs(ho(Z.a),(new Ywb(jxb('Types'))).a),QB(Z,'Types'),Z)),HQb(g,($=new y6b,yrc((!$.X&&($.X=new Arc($)),$.X),f9e),ho($.G).setAttribute(q3e,'eg. A0A-1A1'),Opd($.B).length==0||ro($.B,I1e),Ppd($.B,PZe),Ds(ho($.G),q3e).length==0||ro($.B,I1e),$.c='S0S-0S0',X4b($,a.a),$)),HQb(g,(ab=new r6b,yrc((!ab.X&&(ab.X=new Arc(ab)),ab.X),f9e),Ppd(ab.B,'Integer'),Ds(ho(ab.G),q3e).length==0||ro(ab.B,I1e),ab.c='000-00-000',X4b(ab,a.c),a.n.e=ab,ab)),HQb(g,(bb=new Y5b,yrc((!bb.X&&(bb.X=new Arc(bb)),bb.X),f9e),Ppd(bb.B,'Double'),Ds(ho(bb.G),q3e).length==0||ro(bb.B,I1e),bb.c='000-00-00000',X4b(bb,a.d),a.n.c=bb,bb)),HQb(g,(cb=new a6b,yrc((!cb.X&&(cb.X=new Arc(cb)),cb.X),f9e),Ppd(cb.B,dnf),Ds(ho(cb.G),q3e).length==0||ro(cb.B,I1e),cb.c='000-00-0000',X4b(cb,a.e),a.n.d=cb,cb)),HQb(g,(db=new v6b,yrc((!db.X&&(db.X=new Arc(db)),db.X),f9e),Ppd(db.B,'Long'),Ds(ho(db.G),q3e).length==0||ro(db.B,I1e),db.c=Tmf,X4b(db,a.f),a.n.f=db,db)),HQb(g,(eb=new V5b,yrc((!eb.X&&(eb.X=new Arc(eb)),eb.X),f9e),eb.b=Qmf,fb=rNe(rNe(rNe(Qmf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?ARb(eb,X4b(eb,new zmc(eb))):ARb(eb,Go(eb,new xmc(eb),(!oB&&(oB=new Vz),oB))),Ppd(eb.B,Z_e),Ds(ho(eb.G),q3e).length==0||ro(eb.B,I1e),X4b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,s5e,true),g));HQb(b,(h=new p7b,HQb(h,(gb=new Mmd,Ypd(gb.b,'Gets the value of the field with the mask.'),Vs(ho(gb.a),(new Ywb(jxb(t9e))).a),QB(gb,t9e),gb)),HQb(h,(hb=new p7b,HQb(hb,(ib=new y6b,yrc((!ib.X&&(ib.X=new Arc(ib)),ib.X),Y7e),ho(ib.G).setAttribute(q3e,Umf),Opd(ib.B).length==0||ro(ib.B,I1e),Ppd(ib.B,Vmf),Ds(ho(ib.G),q3e).length==0||ro(ib.B,I1e),ib.d.reverse=true,ib.c=Wmf,a.n.g=ib,ib)),HQb(hb,(jb=new Zdd,HQb(jb,(kb=new JXb,QYb(kb.k,t9e),kb.k.ob||HQb(kb,kb.k),LQb(kb,a.j),kb)),yrc((!jb.X&&(jb.X=new Arc(jb)),jb.X),f9e),jb)),hb)),HQb(h,(lb=new Nze,$pd(lb,(mb=new MNe,mb.a+='inputMask.getValue();',new Swb(mb.a)).a),zo(lb.tb,j9e,true),lb)),zo(h.tb,s5e,true),h));HQb(b,(i=new p7b,HQb(i,(nb=new Mmd,Ypd(nb.b,'Gets the value of the field without the mask.'),Vs(ho(nb.a),(new Ywb(jxb(enf))).a),QB(nb,enf),nb)),HQb(i,(ob=new p7b,HQb(ob,(pb=new y6b,yrc((!pb.X&&(pb.X=new Arc(pb)),pb.X),Y7e),ho(pb.G).setAttribute(q3e,Umf),Opd(pb.B).length==0||ro(pb.B,I1e),Ppd(pb.B,Vmf),Ds(ho(pb.G),q3e).length==0||ro(pb.B,I1e),pb.d.reverse=true,pb.c=Wmf,a.n.a=pb,pb)),HQb(ob,(qb=new Zdd,HQb(qb,(rb=new JXb,QYb(rb.k,enf),rb.k.ob||HQb(rb,rb.k),LQb(rb,a.i),rb)),yrc((!qb.X&&(qb.X=new Arc(qb)),qb.X),f9e),qb)),ob)),HQb(i,(sb=new Nze,$pd(sb,(tb=new MNe,tb.a+='inputMask.getCleanValue();',new Swb(tb.a)).a),zo(sb.tb,j9e,true),sb)),zo(i.tb,s5e,true),i));HQb(b,(j=new p7b,HQb(j,(ub=new Mmd,Ypd(ub.b,'Programmatically controls the Input Mask main methods.'),Vs(ho(ub.a),(new Ywb(jxb(fnf))).a),QB(ub,fnf),ub)),HQb(j,(vb=new p7b,HQb(vb,(wb=new y6b,yrc((!wb.X&&(wb.X=new Arc(wb)),wb.X),Y7e),ho(wb.G).setAttribute(q3e,Umf),Opd(wb.B).length==0||ro(wb.B,I1e),Ppd(wb.B,Vmf),Ds(ho(wb.G),q3e).length==0||ro(wb.B,I1e),wb.d.reverse=true,wb.c=Wmf,a.n.i=wb,wb)),HQb(vb,(xb=new Zdd,HQb(xb,(yb=new JXb,yb.tb.style[M1e]=s9e,CRb(yb,(Ezc(),pzc)),QYb(yb.k,'Unmask'),yb.k.ob||HQb(yb,yb.k),dSb(yb,cvc),LQb(yb,a.k),yb)),HQb(xb,(zb=new JXb,QYb(zb.k,'mask'),zb.k.ob||HQb(zb,zb.k),LQb(zb,a.b),zb)),yrc((!xb.X&&(xb.X=new Arc(xb)),xb.X),f9e),xb)),vb)),HQb(j,(Ab=new Nze,$pd(Ab,(Bb=new MNe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Swb(Bb.a)).a),zo(Ab.tb,j9e,true),Ab)),zo(j.tb,s5e,true),j));return b}\nvar Qmf='MM/dd/yyyy',Smf='Basic Examples',Tmf='000-00-0000000',Umf='eg: 000.000.000.000',Vmf='Ip Address',Wmf='000.000.000.000',Xmf='eg: 000000.00%',Ymf='Percentage',Zmf='000000.00%',$mf='eg: 0000 0000 0000 0000',_mf='Credit Card',anf='0000 0000 0000 0000',bnf='Clear If not Match',cnf='Select on Focus',enf='Get Clean Value',fnf='Unmask and Mask control';Qvb(2649,323,s3e,V5b);_.Xd=function W5b(){return B6b(this.a,this.b)};var QP=SLe(Rmf,'MaterialDateInputMask',2649);Qvb(2646,323,s3e,Y5b);_.Xd=function Z5b(){return hMe($wnd.$(ho(this.G)).cleanVal())};_.Yd=function $5b(a){var b;X5b((b=this,yF(a),b))};var RP=SLe(Rmf,'MaterialDoubleInputMask',2646);Qvb(2647,323,s3e,a6b);_.Xd=function b6b(){return new oMe(sMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function c6b(a){var b;_5b((b=this,yF(a),b))};var SP=SLe(Rmf,'MaterialFloatInputMask',2647);Qvb(2645,323,s3e,r6b);_.Xd=function s6b(){return IMe(iMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function t6b(a){var b;q6b((b=this,yF(a),b))};var VP=SLe(Rmf,'MaterialIntegerInputMask',2645);Qvb(2648,323,s3e,v6b);_.Xd=function w6b(){return TMe(jMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function x6b(a){var b;u6b((b=this,yF(a),b))};var WP=SLe(Rmf,'MaterialLongInputMask',2648);Qvb(2700,1,{},D6b);var YP=SLe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2700);Qvb(972,55,u1e,uFd);_.Fe=function vFd(){mze();jKb(this,new oze(chf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var R3=SLe(Yaf,'InputMaskPresenter',972);Qvb(1365,65,v1e,BFd);var b4=SLe(Yaf,'InputMaskView',1365);Qvb(1868,1,{},DFd);var a4=SLe(Yaf,'InputMaskView_BinderImpl/Widgets',1868);Qvb(1869,1,X0e,EFd);_.Bd=function FFd(a){Vmd(lF(a.a))};var T3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/1',1869);Qvb(1878,1,a2e,GFd);_.od=function HFd(a){L5b(this.a.n.i,Wmf)};var S3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/10',1878);Qvb(1870,1,X0e,IFd);_.Bd=function JFd(a){Vmd(IMe(iMe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var U3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/2',1870);Qvb(1871,1,X0e,KFd);_.Bd=function LFd(a){Vmd(''+lMe(hMe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var V3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/3',1871);Qvb(1872,1,X0e,MFd);_.Bd=function NFd(a){Vmd(''+(new oMe(sMe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var W3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/4',1872);Qvb(1873,1,X0e,OFd);_.Bd=function PFd(a){Vmd(''+Hvb(TMe(jMe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var X3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/5',1873);Qvb(1874,1,X0e,QFd);_.Bd=function RFd(a){Vmd(bE(T5b(this.a.n.b)))};var Y3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/6',1874);Qvb(1875,1,a2e,SFd);_.od=function TFd(a){Vmd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var Z3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/7',1875);Qvb(1876,1,a2e,UFd);_.od=function VFd(a){Vmd(lF($4b(this.a.n.g)))};var $3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/8',1876);Qvb(1877,1,a2e,WFd);_.od=function XFd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var _3=SLe(Yaf,'InputMaskView_BinderImpl/Widgets/9',1877);Qvb(813,1,C9e);_.Yc=function eGd(){BOb(this.b,ZFd(this.a.a))};var _Me,aNe,bNe,cNe;var BF=VLe('long','J');GYe(Kq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")
