$wnd.gwtmaterialdemo.runAsyncCallback4("function $scrollIntoView(elem){\n  var left = elem.offsetLeft, top_0 = elem.offsetTop;\n  var width_0 = elem.offsetWidth, height = elem.offsetHeight;\n  if (elem.parentNode != elem.offsetParent) {\n    left -= elem.parentNode.offsetLeft;\n    top_0 -= elem.parentNode.offsetTop;\n  }\n  var cur = elem.parentNode;\n  while (cur && cur.nodeType == 1) {\n    left < cur.scrollLeft && (cur.scrollLeft = left);\n    left + width_0 > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width_0 - cur.clientWidth);\n    top_0 < cur.scrollTop && (cur.scrollTop = top_0);\n    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);\n    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;\n    if (cur.parentNode != cur.offsetParent) {\n      offsetLeft -= cur.parentNode.offsetLeft;\n      offsetTop -= cur.parentNode.offsetTop;\n    }\n    left += offsetLeft - cur.scrollLeft;\n    top_0 += offsetTop - cur.scrollTop;\n    cur = cur.parentNode;\n  }\n}\n\nfunction addWindowScrollHandler(handler){\n  maybeInitializeCloseHandlers();\n  maybeInitializeScrollHandlers();\n  return addHandler_2(($clinit_Window$ScrollEvent() , $clinit_Window$ScrollEvent() , TYPE_26), handler);\n}\n\nfunction fireEvent_8(event_0){\n  !!handlers_1 && $fireEvent(handlers_1, event_0);\n}\n\nfunction maybeInitializeScrollHandlers(){\n  if (!scrollHandlersInitialized) {\n    $initWindowScrollHandler();\n    scrollHandlersInitialized = true;\n  }\n}\n\nvar scrollHandlersInitialized = false;\nfunction $clinit_Window$ScrollEvent(){\n  $clinit_Window$ScrollEvent = emptyMethod;\n  TYPE_26 = new GwtEvent$Type;\n}\n\nfunction Window$ScrollEvent(){\n  $clinit_Window$ScrollEvent();\n}\n\ndefineClass(658, $intern_17, {}, Window$ScrollEvent);\n_.dispatch = function dispatch_26(handler){\n  $lambda$2_1(castTo(handler, 2323).$$outer_0);\n}\n;\n_.getAssociatedType = function getAssociatedType_27(){\n  return TYPE_26;\n}\n;\nvar TYPE_26;\nvar Lcom_google_gwt_user_client_Window$ScrollEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ScrollEvent', 658);\nfunction $initWindowScrollHandler(){\n  var oldOnScroll = $wnd.onscroll;\n  $wnd.onscroll = $entry(function(evt){\n    try {\n      scrollHandlersInitialized && fireEvent_8(($getScrollLeft($doc) , $getScrollTop($doc) , new Window$ScrollEvent));\n    }\n     finally {\n      oldOnScroll && oldOnScroll(evt);\n    }\n  }\n  );\n}\n\nfunction $close(this$static){\n  $doc.documentElement.style['overflow'] = this$static.viewportOverflow;\n  ($clinit_DOM() , this$static.element_0).style['display'] = ($clinit_Style$Display() , 'none');\n  if (this$static.resizeHandler) {\n    $removeHandler(this$static.resizeHandler.real);\n    this$static.resizeHandler = null;\n  }\n  if (this$static.scrollHandler_0) {\n    $removeHandler(this$static.scrollHandler_0.real);\n    this$static.scrollHandler_0 = null;\n  }\n  if (this$static.autoAddedToDocument) {\n    $removeFromParent_0(this$static);\n    this$static.autoAddedToDocument = false;\n  }\n  fire_1(this$static, this$static);\n}\n\nfunction $lambda$0_2(this$static){\n  this$static.focusElement.style['boxShadow'] = '0px 0px 0px ' + this$static.backgroundSize + ' ' + this$static.computedBackgroundColor;\n}\n\nfunction $lambda$1_2(this$static){\n  $setupCutOutPosition(this$static.focusElement, this$static.targetElement, this$static.cutOutPadding, this$static.circle);\n}\n\nfunction $lambda$2_1(this$static){\n  $setupCutOutPosition(this$static.focusElement, this$static.targetElement, this$static.cutOutPadding, this$static.circle);\n}\n\nfunction $open(this$static){\n  var docStyle, temp, style, computed;\n  if (!this$static.targetElement) {\n    throw toJs(new IllegalStateException_0('The target element should be set before calling open().'));\n  }\n  $scrollIntoView(this$static.targetElement);\n  this$static.computedBackgroundColor == null && (temp = new MaterialWidget_0($doc.createElement('div')) , $setBackgroundColor(temp, this$static.backgroundColor) , style = ($clinit_DOM() , temp.element_0).style , style['position'] = ($clinit_Style$Position() , 'fixed') , undefined , style['width'] = ($clinit_Style$Unit() , '1.0px') , undefined , style['height'] = '1.0px' , undefined , style['left'] = '-10.0px' , undefined , style['top'] = '-10.0px' , undefined , style['zIndex'] = '-10000' , undefined , computed = setupComputedBackgroundColor(this$static.backgroundColor) , this$static.opacity_0 < 1 && $equals_2(computed.substr(0, 4), 'rgb(') && (computed = $replace_0($replace_0(computed, 'rgb(', 'rgba('), ')', ', ' + this$static.opacity_0 + ')')) , this$static.computedBackgroundColor = computed , undefined);\n  docStyle = $doc.documentElement.style;\n  this$static.viewportOverflow = docStyle['overflow'];\n  docStyle['overflow'] = 'hidden';\n  this$static.backgroundSize == null && (this$static.backgroundSize = (body_1 == null && (body_1 = $wnd.$('body')) , body_1).width() + 300 + 'px');\n  $setupTransition(this$static);\n  if (this$static.animated) {\n    this$static.focusElement.style['boxShadow'] = '0px 0px 0px 0rem ' + this$static.computedBackgroundColor;\n    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new MaterialCutOut$lambda$0$Type(this$static));\n  }\n   else {\n    this$static.focusElement.style['boxShadow'] = '0px 0px 0px ' + this$static.backgroundSize + ' ' + this$static.computedBackgroundColor;\n  }\n  if (this$static.circle) {\n    this$static.focusElement.style['WebkitBorderRadius'] = '50%';\n    this$static.focusElement.style['borderRadius'] = '50%';\n  }\n   else {\n    this$static.focusElement.style['WebkitBorderRadius'] = '';\n    this$static.focusElement.style['borderRadius'] = '';\n  }\n  $setupCutOutPosition(this$static.focusElement, this$static.targetElement, this$static.cutOutPadding, this$static.circle);\n  !!this$static.resizeHandler && $removeHandler(this$static.resizeHandler.real);\n  !!this$static.scrollHandler_0 && $removeHandler(this$static.scrollHandler_0.real);\n  this$static.resizeHandler = addResizeHandler(new MaterialCutOut$lambda$1$Type(this$static));\n  this$static.scrollHandler_0 = addWindowScrollHandler(new MaterialCutOut$lambda$2$Type(this$static));\n  ($clinit_DOM() , this$static.element_0).style['display'] = '';\n  if (!this$static.parent_1) {\n    this$static.autoAddedToDocument = true;\n    $add_4(($clinit_RootPanel() , get_1(null)), this$static);\n  }\n  fire_2(this$static, this$static);\n}\n\nfunction $setBackgroundColor_0(this$static, bgColor){\n  this$static.backgroundColor = bgColor;\n  this$static.computedBackgroundColor = null;\n}\n\nfunction $setTarget(this$static, targetElement){\n  this$static.targetElement = targetElement;\n}\n\nfunction $setupCutOutPosition(cutOut, relativeTo, padding, circle){\n  var dif, height, left, top_0, width_0;\n  top_0 = $getAbsoluteTop(relativeTo) - (body_1 == null && (body_1 = $wnd.$('body')) , body_1).scrollTop();\n  left = $getAbsoluteLeft(relativeTo);\n  width_0 = (relativeTo.offsetWidth || 0) | 0;\n  height = (relativeTo.offsetHeight || 0) | 0;\n  if (circle) {\n    if (width_0 != height) {\n      dif = width_0 - height;\n      if (width_0 > height) {\n        height += dif;\n        top_0 -= dif / 2;\n      }\n       else {\n        dif = -dif;\n        width_0 += dif;\n        left -= dif / 2;\n      }\n    }\n  }\n  top_0 -= padding;\n  left -= padding;\n  width_0 += padding * 2;\n  height += padding * 2;\n  $wnd.$(cutOut).css('top', top_0 + 'px');\n  $wnd.$(cutOut).css('left', left + 'px');\n  $wnd.$(cutOut).css('width', width_0 + 'px');\n  $wnd.$(cutOut).css('height', height + 'px');\n}\n\nfunction $setupTransition(this$static){\n  if (this$static.animated) {\n    this$static.focusElement.style['WebkitTransition'] = 'box-shadow ' + this$static.animationDuration + ' ' + this$static.animationTimingFunction;\n    this$static.focusElement.style['transition'] = 'box-shadow ' + this$static.animationDuration + ' ' + this$static.animationTimingFunction;\n  }\n   else {\n    this$static.focusElement.style['WebkitTransition'] = '';\n    this$static.focusElement.style['transition'] = '';\n  }\n}\n\nfunction MaterialCutOut(){\n  var style;\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['material-cutout']));\n  this.backgroundColor = ($clinit_Color() , BLUE);\n  this.opacity_0 = 0.8;\n  this.animated = true;\n  this.animationDuration = '0.5s';\n  this.animationTimingFunction = 'ease';\n  this.cutOutPadding = 10;\n  this.circle = false;\n  this.autoAddedToDocument = false;\n  this.focusElement = $doc.createElement('div');\n  $appendChild(($clinit_DOM() , this.element_0), this.focusElement);\n  style = this.element_0.style;\n  style['width'] = ($clinit_Style$Unit() , '100.0%');\n  style['height'] = '100.0%';\n  style['position'] = ($clinit_Style$Position() , 'fixed');\n  style['top'] = '0.0px';\n  style['left'] = '0.0px';\n  style['overflow'] = ($clinit_Style$Overflow() , 'hidden');\n  style['zIndex'] = '10000';\n  style['display'] = ($clinit_Style$Display() , 'none');\n  this.focusElement.className = 'material-cutout-focus';\n  style = this.focusElement.style;\n  style['content'] = \"''\";\n  style['position'] = 'absolute';\n  style['zIndex'] = '-1';\n}\n\ndefineClass(1554, 22, $intern_64, MaterialCutOut);\n_.setBackgroundColor = function setBackgroundColor_0(bgColor){\n  $setBackgroundColor_0(this, bgColor);\n}\n;\n_.animated = false;\n_.autoAddedToDocument = false;\n_.circle = false;\n_.cutOutPadding = 0;\n_.opacity_0 = 0;\nvar Lgwt_material_design_addins_client_cutout_MaterialCutOut_2_classLit = createForClass('gwt.material.design.addins.client.cutout', 'MaterialCutOut', 1554);\nfunction MaterialCutOut$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1555, 1, {}, MaterialCutOut$lambda$0$Type);\n_.execute_1 = function execute_32(){\n  $lambda$0_2(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_addins_client_cutout_MaterialCutOut$lambda$0$Type_2_classLit = createForClass('gwt.material.design.addins.client.cutout', 'MaterialCutOut/lambda$0$Type', 1555);\nfunction MaterialCutOut$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1556, 1, $intern_45, MaterialCutOut$lambda$1$Type);\n_.onResize = function onResize_11(arg0){\n  $lambda$1_2(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_addins_client_cutout_MaterialCutOut$lambda$1$Type_2_classLit = createForClass('gwt.material.design.addins.client.cutout', 'MaterialCutOut/lambda$1$Type', 1556);\nfunction MaterialCutOut$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1557, 1, {15:1, 2323:1}, MaterialCutOut$lambda$2$Type);\nvar Lgwt_material_design_addins_client_cutout_MaterialCutOut$lambda$2$Type_2_classLit = createForClass('gwt.material.design.addins.client.cutout', 'MaterialCutOut/lambda$2$Type', 1557);\nfunction CutOutsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(794, 58, $intern_57, CutOutsPresenter);\n_.onReveal = function onReveal_7(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('CutOuts', 'The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.', 'addins/cutouts/CutOutsView'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsPresenter', 794);\nfunction $onCutOut(this$static){\n  $setTarget(this$static.cutout, $getElement(this$static.btnCutOut));\n  $open(this$static.cutout);\n}\n\nfunction CutOutsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_0(new CutOutsView_BinderImpl$Widgets(this)));\n  $addHandler_0(this.cutout, new CutOutsView$lambda$0$Type, TYPE_16?TYPE_16:(TYPE_16 = new GwtEvent$Type));\n  $addHandler_0(this.cutout, new CutOutsView$lambda$1$Type, (!TYPE_17 && (TYPE_17 = new GwtEvent$Type) , TYPE_17));\n}\n\ndefineClass(1015, 62, $intern_58, CutOutsView);\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView', 1015);\nfunction CutOutsView$lambda$0$Type(){\n}\n\ndefineClass(1016, 1, $intern_50, CutOutsView$lambda$0$Type);\n_.onClose = function onClose_3(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 20, 0, [])), 'Close Event Fired', $intern_69, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView/lambda$0$Type', 1016);\nfunction CutOutsView$lambda$1$Type(){\n}\n\ndefineClass(1017, 1, $intern_105, CutOutsView$lambda$1$Type);\n_.onOpen = function onOpen_1(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 20, 0, [])), 'Open Event Fired', $intern_69, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView/lambda$1$Type', 1017);\nfunction $build_f_MaterialPanel1_0(this$static){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialRow5, f_MaterialTitle3, f_PrettyPre4, sb, f_MaterialTitle6, btnCutOut, cutout, f_MaterialTitle7, btnCutOutClose, f_PrettyPre8, sb_0, f_PrettyPre9, sb_1;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_14(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $getElement(f_MaterialTitle3.header).innerHTML = 'Usage' , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre4.element_0), 'lang-xml', true) , f_PrettyPre4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_14(f_MaterialPanel1, (f_MaterialRow5 = new MaterialRow , $add_14(f_MaterialRow5, (f_MaterialTitle6 = new MaterialTitle , $setText_12(f_MaterialTitle6.paragraph, 'Click the icon below to show a material cutout.') , $getElement(f_MaterialTitle6.header).innerHTML = 'Material Cut Out' , f_MaterialTitle6)) , $add_14(f_MaterialRow5, (btnCutOut = new MaterialIcon , $setIconType_3(btnCutOut, ($clinit_IconType() , POLYMER)) , $addClickHandler(btnCutOut, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , this$static.owner.btnCutOut = btnCutOut , btnCutOut)) , $add_14(f_MaterialRow5, (cutout = new MaterialCutOut , $add_14(cutout, (f_MaterialTitle7 = new MaterialTitle , $setText_12(f_MaterialTitle7.paragraph, 'Description of your new Feature') , $getElement(f_MaterialTitle7.header).innerHTML = 'New Feature' , $setTextColor(f_MaterialTitle7, ($clinit_Color() , WHITE)) , f_MaterialTitle7)) , $add_14(cutout, (btnCutOutClose = new MaterialButton , $setBackgroundColor(btnCutOutClose, WHITE) , $setText_6(btnCutOutClose.span_1, 'Close') , btnCutOutClose.span_1.attached || $add_14(btnCutOutClose, btnCutOutClose.span_1) , $setTextColor(btnCutOutClose, BLUE) , $addClickHandler(btnCutOutClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnCutOutClose)) , $setBackgroundColor_0(cutout, BLUE) , $setTextAlign(cutout, ($clinit_TextAlign() , CENTER_5)) , cutout.opacity_0 = 0.8 , cutout.computedBackgroundColor = null , cutout.circle = true , this$static.owner.cutout = cutout , cutout)) , $add_14(f_MaterialRow5, (f_PrettyPre8 = new PrettyPre , $setHTML_0(f_PrettyPre8, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre8.element_0, 'lang-xml', true) , f_PrettyPre8)) , $add_14(f_MaterialRow5, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_1 = new StringBuilder , sb_1.string += '\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-java', true) , f_PrettyPre9)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5));\n  return f_MaterialPanel1;\n}\n\nfunction CutOutsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CutOutsView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new CutOutsView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n}\n\ndefineClass(1316, 1, {}, CutOutsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl/Widgets', 1316);\nfunction CutOutsView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1317, 1, $intern_67, CutOutsView_BinderImpl$Widgets$1);\n_.onClick = function onClick_42(event_0){\n  $onCutOut(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl/Widgets/1', 1317);\nfunction CutOutsView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1318, 1, $intern_67, CutOutsView_BinderImpl$Widgets$2);\n_.onClick = function onClick_43(event_0){\n  $close(this.this$11.owner.cutout);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_cutouts_CutOutsView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.cutouts', 'CutOutsView_BinderImpl/Widgets/2', 1318);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$) {\n    result0 = new CutOutsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$) {\n    result = new CutOutsView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsView$_annotation$$none$$;\n}\n\ndefineClass(687, 1, $intern_104);\n_.onSuccess_0 = function onSuccess_4(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$cutouts$CutOutsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(4);\n\n//# sourceURL=gwtmaterialdemo-4.js\n")
