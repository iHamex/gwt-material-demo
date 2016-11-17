$wnd.gwtmaterialdemo.runAsyncCallback9("function $addCloseHandler(this$static){\n  return $addHandler_0(this$static, new MaterialOverlay$1(this$static), TYPE_16?TYPE_16:(TYPE_16 = new GwtEvent$Type));\n}\n\nfunction $addOpenHandler(this$static){\n  return $addHandler_0(this$static, new MaterialOverlay$2(this$static), (!TYPE_17 && (TYPE_17 = new GwtEvent$Type) , TYPE_17));\n}\n\nfunction $close_0(this$static){\n  (body_1 == null && (body_1 = $wnd.$('body')) , body_1).attr('style', 'overflow: auto !important');\n  reverseAnimate($getElement(this$static.source), ($clinit_DOM() , this$static.element_0));\n  fire_1(this$static, this$static);\n}\n\nfunction $open_0(this$static, source){\n  this$static.source = source;\n  $wnd.$('body').attr('style', 'overflow: hidden !important');\n  animate(($clinit_DOM() , source.element_0), this$static.element_0);\n  fire_2(this$static, this$static);\n}\n\nfunction MaterialOverlay$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1646, 1, $intern_50, MaterialOverlay$1);\n_.onClose = function onClose_0(closeEvent){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 21, 0, [])), 'Overlay Closed', $intern_69, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$1_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/1', 1646);\nfunction MaterialOverlay$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1647, 1, $intern_101, MaterialOverlay$2);\n_.onOpen = function onOpen(openEvent){\n  $isEnabled_0(this.this$01) && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 21, 0, [])), 'Overlay Opened', $intern_69, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$2_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/2', 1647);\nfunction OverlayPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(812, 60, $intern_57, OverlayPresenter);\n_.onReveal = function onReveal_15(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Overlay', 'Provides a meaningful transition of source widget to popup or overlay panel.', 'addins/scrollfire/OverlayView'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayPresenter', 812);\nfunction $lambda$0_29(this$static){\n  $open_0(this$static.overlay, this$static.btnOpenOverlay);\n}\n\nfunction $lambda$4_6(this$static){\n  $open_0(this$static.overlayEvents, this$static.btnOpenOverlayEvents);\n}\n\nfunction OverlayView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_13(new OverlayView_BinderImpl$Widgets(this)));\n  register_0(this.overlay, 2);\n  register_0(this.btnCloseOverlay, 1);\n  register_0(this.overlayEvents, 2);\n  register_0(this.btnCloseOverlayEvents, 1);\n  $addClickHandler(this.btnOpenOverlay, new OverlayView$lambda$0$Type(this));\n  $addClickHandler(this.btnCloseOverlay, new OverlayView$lambda$1$Type(this));\n  $addOpenHandler(this.overlayEvents);\n  $addCloseHandler(this.overlayEvents);\n  $addClickHandler(this.btnOpenOverlayEvents, new OverlayView$lambda$4$Type(this));\n  $addClickHandler(this.btnCloseOverlayEvents, new OverlayView$lambda$5$Type(this));\n}\n\ndefineClass(1068, 63, $intern_58, OverlayView);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView', 1068);\nfunction OverlayView$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1069, 1, $intern_67, OverlayView$lambda$0$Type);\n_.onClick = function onClick_48(arg0){\n  $lambda$0_29(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$0$Type', 1069);\nfunction OverlayView$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1070, 1, $intern_67, OverlayView$lambda$1$Type);\n_.onClick = function onClick_49(arg0){\n  $close_0(this.$$outer_0.overlay);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$1$Type', 1070);\nfunction OverlayView$lambda$4$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1071, 1, $intern_67, OverlayView$lambda$4$Type);\n_.onClick = function onClick_50(arg0){\n  $lambda$4_6(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$4$Type', 1071);\nfunction OverlayView$lambda$5$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1072, 1, $intern_67, OverlayView$lambda$5$Type);\n_.onClick = function onClick_51(arg0){\n  $close_0(this.$$outer_0.overlayEvents);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$5$Type', 1072);\nfunction $build_f_HTMLPanel1_13(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow8, f_MaterialTitle3, overlay, f_MaterialLabel4, f_MaterialLabel5, btnCloseOverlay, btnOpenOverlay, f_PrettyPre6, sb, f_PrettyPre7, sb_0, f_MaterialTitle9, overlayEvents, f_MaterialLabel10, f_MaterialLabel11, btnCloseOverlayEvents, btnOpenOverlayEvents, f_PrettyPre12, sb_1;\n  f_HTMLPanel1 = new HTMLPanel($html4_4(this$static.domId0, this$static.domId1).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Requires a source component when opening the overlay to transform it to overlay panel.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Basic'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (overlay = new MaterialOverlay , $add_14(overlay, (f_MaterialLabel4 = new MaterialLabel , $setTextAlign(f_MaterialLabel4, ($clinit_TextAlign() , CENTER_5)) , $setFontSize_1(f_MaterialLabel4.fontSizeMixin, '2em') , $setInnerHTML(f_MaterialLabel4.element_0, (new SafeHtmlString(htmlEscape('This is an overlay'))).html_0) , f_MaterialLabel4.element_0.style['marginTop'] = ($clinit_Style$Unit() , '120.0px') , $setFontWeight(f_MaterialLabel4, ($clinit_Style$FontWeight() , LIGHTER)) , f_MaterialLabel4)) , $add_14(overlay, (f_MaterialLabel5 = new MaterialLabel , $setTextAlign(f_MaterialLabel5, CENTER_5) , f_MaterialLabel5.element_0.style['marginBottom'] = '40.0px' , $setInnerHTML(f_MaterialLabel5.element_0, (new SafeHtmlString(htmlEscape('Some content goes here'))).html_0) , f_MaterialLabel5)) , $add_14(overlay, (btnCloseOverlay = new MaterialButton , $setText_6(btnCloseOverlay.span_1, 'Close Overlay') , btnCloseOverlay.span_1.attached || $add_14(btnCloseOverlay, btnCloseOverlay.span_1) , this$static.owner.btnCloseOverlay = btnCloseOverlay , btnCloseOverlay)) , $setBackgroundColor(overlay, ($clinit_Color() , BLUE)) , $setTextAlign(overlay, CENTER_5) , $setTextColor(overlay, WHITE) , this$static.owner.overlay = overlay , overlay)) , $add_14(f_MaterialRow2, (btnOpenOverlay = new MaterialButton , $setText_6(btnOpenOverlay.span_1, 'Open Overlay') , btnOpenOverlay.span_1.attached || $add_14(btnOpenOverlay, btnOpenOverlay.span_1) , this$static.owner.btnOpenOverlay = btnOpenOverlay , btnOpenOverlay)) , $add_14(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;ma:overlay.MaterialOverlay ui:field=\"overlay\" textAlign=\"CENTER\" textColor=\"WHITE\"&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"This is an overlay\" marginTop=\"120\" fontWeight=\"LIGHTER\" fontSize=\"2em\" /&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"Some content goes here\" marginBottom=\"40\" /&gt;<br> \\u2003&lt;m:MaterialButton ui:field=\"btnCloseOverlay\" text=\"Close Overlay\" /&gt;<br> &lt;/ma:overlay.MaterialOverlay&gt;<br><br> &lt;m:MaterialButton ui:field=\"btnOpenOverlay\" text=\"Open Overlay\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , $add_14(f_MaterialRow2, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '\\u2003btnOpenOverlay.addClickHandler(clickEvent -&gt; overlay.open(btnOpenOverlay));<br> btnCloseOverlay.addClickHandler(e -&gt; overlay.close());' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_14(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setText_12(f_MaterialTitle9.paragraph, 'We have provided open and close events') , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , f_MaterialTitle9)) , $add_14(f_MaterialRow8, (overlayEvents = new MaterialOverlay , $add_14(overlayEvents, (f_MaterialLabel10 = new MaterialLabel , $setTextAlign(f_MaterialLabel10, CENTER_5) , $setFontSize_1(f_MaterialLabel10.fontSizeMixin, '2em') , $setInnerHTML(f_MaterialLabel10.element_0, (new SafeHtmlString(htmlEscape('This is an overlay'))).html_0) , f_MaterialLabel10.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel10, LIGHTER) , f_MaterialLabel10)) , $add_14(overlayEvents, (f_MaterialLabel11 = new MaterialLabel , $setTextAlign(f_MaterialLabel11, CENTER_5) , f_MaterialLabel11.element_0.style['marginBottom'] = '40.0px' , $setInnerHTML(f_MaterialLabel11.element_0, (new SafeHtmlString(htmlEscape('Some content goes here'))).html_0) , f_MaterialLabel11)) , $add_14(overlayEvents, (btnCloseOverlayEvents = new MaterialButton , $setText_6(btnCloseOverlayEvents.span_1, 'Close Overlay') , btnCloseOverlayEvents.span_1.attached || $add_14(btnCloseOverlayEvents, btnCloseOverlayEvents.span_1) , this$static.owner.btnCloseOverlayEvents = btnCloseOverlayEvents , btnCloseOverlayEvents)) , $setBackgroundColor(overlayEvents, BLUE) , $setTextAlign(overlayEvents, CENTER_5) , $setTextColor(overlayEvents, WHITE) , this$static.owner.overlayEvents = overlayEvents , overlayEvents)) , $add_14(f_MaterialRow8, (btnOpenOverlayEvents = new MaterialButton , $setText_6(btnOpenOverlayEvents.span_1, 'Open Overlay') , btnOpenOverlayEvents.span_1.attached || $add_14(btnOpenOverlayEvents, btnOpenOverlayEvents.span_1) , this$static.owner.btnOpenOverlayEvents = btnOpenOverlayEvents , btnOpenOverlayEvents)) , $add_14(f_MaterialRow8, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003overlayEvents.addOpenHandler(openEvent -&gt; MaterialToast.fireToast(\"Overlay Opened\"));<br> overla yEvents.addCloseHandler(closeEvent -&gt; MaterialToast.fireToast(\"Overlay Closed\"));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-java', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8), $get_0(this$static.domId1Element));\n  return f_HTMLPanel1;\n}\n\nfunction OverlayView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n}\n\ndefineClass(1347, 1, {}, OverlayView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView_BinderImpl/Widgets', 1347);\nfunction $html4_4(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$) {\n    result0 = new OverlayPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$) {\n    result = new OverlayView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$;\n}\n\ndefineClass(708, 1, $intern_107);\n_.onSuccess_0 = function onSuccess_12(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(9);\n\n//# sourceURL=gwtmaterialdemo-9.js\n")