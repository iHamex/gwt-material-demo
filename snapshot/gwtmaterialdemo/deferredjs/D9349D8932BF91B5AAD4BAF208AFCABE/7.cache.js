$wnd.gwtmaterialdemo.runAsyncCallback7("function $clinit_MaterialIconMorph(){\n  $clinit_MaterialIconMorph = emptyMethod;\n  !startupState && (startupState = new StartupState$DebugState);\n  startupState?injectCss(($clinit_MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator$morphCssDebugInitializer() , morphCssDebug)):injectCss(($clinit_MaterialIconMorphClientBundle_default_InlineClientBundleGenerator$morphCssInitializer() , morphCss));\n}\n\nfunction $build_8(this$static){\n  if (this$static.children_1.size_0 >= 2) {\n    this$static.source = castTo($get_1(this$static.children_1, 0), 34);\n    $addStyleName(this$static.source, 'icons source');\n    this$static.target_0 = castTo($get_1(this$static.children_1, 1), 34);\n    $addStyleName(this$static.target_0, 'icons target');\n  }\n}\n\nfunction $setIconSize(this$static, size_0){\n  $setCssName(this$static.sizeMixin, size_0);\n}\n\nfunction MaterialIconMorph(){\n  $clinit_MaterialIconMorph();\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['anim-container']));\n  this.sizeMixin = new CssNameMixin(this);\n  ($clinit_DOM() , this.element_0).setAttribute('onclick', \"this.classList.toggle('morphed')\");\n}\n\ndefineClass(304, 25, $intern_61, MaterialIconMorph);\n_.onLoad = function onLoad_10(){\n  $onLoad_0(this);\n  $build_8(this);\n}\n;\nvar morphCss;\nfunction MaterialIconMorphClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2183, 1, {}, MaterialIconMorphClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_22(){\n  return 'morphCss';\n}\n;\n_.getText = function getText_21(){\n  return '.anim-container{height:4rem;width:4rem;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;position:relative;cursor:pointer}.anim-container .icons{transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;font-size:4em!important;height:1em;width:1em;position:absolute;left:0}.anim-container .source{transform:rotate(-135deg);-moz-transform:rotate(-135deg);-webkit-transform:rotate(-135deg);opacity:0}.anim-container.morphed{transform:rotate(135deg);-moz-transform:rotate(135deg);-webkit-transform:rotate(135deg)}.anim-container.morphed .source{opacity:1;visibility:visible}.anim-container.morphed .target{opacity:0;visibility:hidden}.anim-container.tiny{height:1rem;width:1rem;font-size:.5rem}.anim-container.small{height:2rem;width:2rem;font-size:.5rem}.anim-container.medium{height:4rem;width:4rem;font-size:.5rem}.anim-container.large{height:6rem;width:6rem;font-size:.5rem}.anim-container.tiny .icons{font-size:2em!important}.anim-container.medium .icons{font-size:8em!important}.anim-container.large .icons{font-size:12em!important}';\n}\n;\nvar Lgwt_material_design_addins_client_iconmorph_MaterialIconMorphClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.iconmorph', 'MaterialIconMorphClientBundle_default_InlineClientBundleGenerator/1', 2183);\nfunction $clinit_MaterialIconMorphClientBundle_default_InlineClientBundleGenerator$morphCssInitializer(){\n  $clinit_MaterialIconMorphClientBundle_default_InlineClientBundleGenerator$morphCssInitializer = emptyMethod;\n  morphCss = new MaterialIconMorphClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nvar morphCssDebug;\nfunction MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2182, 1, {}, MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_23(){\n  return 'morphCssDebug';\n}\n;\n_.getText = function getText_22(){\n  return '.anim-container {\\n    height: 4rem;\\n    width: 4rem;\\n    transition: .3s;\\n    -webkit-transition: .3s;\\n    -moz-transition: .3s;\\n    position: relative;\\n    cursor: pointer;\\n}\\n.anim-container .icons {\\n    transition: .3s;\\n    -moz-transition: .3s;\\n    -webkit-transition: .3s;\\n    position: absolute;\\n    font-size: 4em !important;\\n    height: 1em;\\n    width: 1em;\\n    position: absolute;\\n    left: 0;\\n}\\n.anim-container .source {\\n    transform: rotate(-135deg);\\n    -moz-transform: rotate(-135deg);\\n    -webkit-transform: rotate(-135deg);\\n    opacity: 0;\\n}\\n\\n.anim-container.morphed {\\n    transform: rotate(135deg);\\n    -moz-transform: rotate(135deg);\\n    -webkit-transform: rotate(135deg);\\n}\\n.anim-container.morphed .source {\\n    opacity: 1;\\n    visibility: visible;\\n}\\n.anim-container.morphed .target {\\n    opacity: 0;\\n    visibility: hidden;\\n}\\n\\n.anim-container.tiny {\\n    height: 1rem;\\n    width: 1rem;\\n    font-size: .5rem;\\n}\\n\\n.anim-container.small {\\n    height: 2rem;\\n    width: 2rem;\\n    font-size: .5rem;\\n}\\n\\n.anim-container.medium {\\n    height: 4rem;\\n    width: 4rem;\\n    font-size: .5rem;\\n}\\n\\n.anim-container.large {\\n    height: 6rem;\\n    width: 6rem;\\n    font-size: .5rem;\\n}\\n\\n.anim-container.tiny .icons{\\n    font-size: 2em !important;\\n}\\n.anim-container.medium .icons{\\n    font-size: 8em !important;\\n}\\n.anim-container.large .icons{\\n    font-size: 12em !important;\\n}';\n}\n;\nvar Lgwt_material_design_addins_client_iconmorph_MaterialIconMorphDebugClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.iconmorph', 'MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator/1', 2182);\nfunction $clinit_MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator$morphCssDebugInitializer(){\n  $clinit_MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator$morphCssDebugInitializer = emptyMethod;\n  morphCssDebug = new MaterialIconMorphDebugClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction IconMorphPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(779, 59, $intern_54, IconMorphPresenter);\n_.onReveal = function onReveal_13(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Icon Morph', 'Provides visual continuity by morphing two material icons.', 'addins/iconmorph/IconMorph', 'https://material.io/guidelines/motion/creative-customization.html#creative-customization-icons'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphPresenter', 779);\nfunction IconMorphView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_11(new IconMorphView_BinderImpl$Widgets));\n}\n\ndefineClass(1047, 62, $intern_55, IconMorphView);\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphView', 1047);\nfunction $build_f_HTMLPanel1_11(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow5, f_MaterialRow10, f_MaterialTitle3, f_PrettyPre4, sb, f_iconmorph$MaterialIconMorph6, f_MaterialIcon7, f_MaterialIcon8, f_PrettyPre9, sb_0, f_MaterialTitle11, f_iconmorph$MaterialIconMorph12, f_MaterialIcon13, f_MaterialIcon14, f_iconmorph$MaterialIconMorph15, f_MaterialIcon16, f_MaterialIcon17, f_iconmorph$MaterialIconMorph18, f_MaterialIcon19, f_MaterialIcon20, f_iconmorph$MaterialIconMorph21, f_MaterialIcon22, f_MaterialIcon23, f_PrettyPre24, sb_1;\n  f_HTMLPanel1 = new HTMLPanel($html4_3(this$static.domId0, this$static.domId1, this$static.domId2).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Usage'))).html_0)) , fire_5(f_MaterialTitle3, 'Usage') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:iconmorph.MaterialIconMorph iconSize=\"MEDIUM\"&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"MENU\"/&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"ARROW_BACK\"/&gt;<br> &lt;/ma:iconmorph.MaterialIconMorph&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre4.element_0, 'lang-xml', true) , f_PrettyPre4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow5 = new MaterialRow , $add_9(f_MaterialRow5, (f_iconmorph$MaterialIconMorph6 = new MaterialIconMorph , $add_9(f_iconmorph$MaterialIconMorph6, (f_MaterialIcon7 = new MaterialIcon , $setIconType_4(f_MaterialIcon7, ($clinit_IconType() , MENU_0)) , f_MaterialIcon7)) , $add_9(f_iconmorph$MaterialIconMorph6, (f_MaterialIcon8 = new MaterialIcon , $setIconType_4(f_MaterialIcon8, ARROW_BACK) , f_MaterialIcon8)) , $setIconSize(f_iconmorph$MaterialIconMorph6, ($clinit_IconSize() , MEDIUM_0)) , f_iconmorph$MaterialIconMorph6)) , $add_9(f_MaterialRow5, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;ma:iconmorph.MaterialIconMorph iconSize=\"MEDIUM\"&gt;<br>  \\u2003&lt;m:MaterialIcon iconType=\"MENU\"/&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"ARROW_BACK\"/&gt;<br> &lt;/ma:iconmorph.MaterialIconMorph&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-xml', true) , f_PrettyPre9)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow10 = new MaterialRow , $add_9(f_MaterialRow10, (f_MaterialTitle11 = new MaterialTitle , $setText_12(f_MaterialTitle11.paragraph, \"Like Material Icons you can easily adjust the sizes of icons by adding iconSize='SIZE' into your MaterialIconMorph component\") , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('Sizes'))).html_0) , fire_5(f_MaterialTitle11, 'Sizes') , f_MaterialTitle11)) , $add_9(f_MaterialRow10, (f_iconmorph$MaterialIconMorph12 = new MaterialIconMorph , $add_9(f_iconmorph$MaterialIconMorph12, (f_MaterialIcon13 = new MaterialIcon , $setIconType_4(f_MaterialIcon13, POLYMER) , f_MaterialIcon13)) , $add_9(f_iconmorph$MaterialIconMorph12, (f_MaterialIcon14 = new MaterialIcon , $setIconType_4(f_MaterialIcon14, DONE) , f_MaterialIcon14)) , $setIconSize(f_iconmorph$MaterialIconMorph12, TINY) , f_iconmorph$MaterialIconMorph12)) , $add_9(f_MaterialRow10, (f_iconmorph$MaterialIconMorph15 = new MaterialIconMorph , $add_9(f_iconmorph$MaterialIconMorph15, (f_MaterialIcon16 = new MaterialIcon , $setIconType_4(f_MaterialIcon16, POLYMER) , f_MaterialIcon16)) , $add_9(f_iconmorph$MaterialIconMorph15, (f_MaterialIcon17 = new MaterialIcon , $setIconType_4(f_MaterialIcon17, DONE) , f_MaterialIcon17)) , $setIconSize(f_iconmorph$MaterialIconMorph15, SMALL) , f_iconmorph$MaterialIconMorph15)) , $add_9(f_MaterialRow10, (f_iconmorph$MaterialIconMorph18 = new MaterialIconMorph , $add_9(f_iconmorph$MaterialIconMorph18, (f_MaterialIcon19 = new MaterialIcon , $setIconType_4(f_MaterialIcon19, POLYMER) , f_MaterialIcon19)) , $add_9(f_iconmorph$MaterialIconMorph18, (f_MaterialIcon20 = new MaterialIcon , $setIconType_4(f_MaterialIcon20, DONE) , f_MaterialIcon20)) , $setIconSize(f_iconmorph$MaterialIconMorph18, MEDIUM_0) , f_iconmorph$MaterialIconMorph18)) , $add_9(f_MaterialRow10, (f_iconmorph$MaterialIconMorph21 = new MaterialIconMorph , $add_9(f_iconmorph$MaterialIconMorph21, (f_MaterialIcon22 = new MaterialIcon , $setIconType_4(f_MaterialIcon22, POLYMER) , f_MaterialIcon22)) , $add_9(f_iconmorph$MaterialIconMorph21, (f_MaterialIcon23 = new MaterialIcon , $setIconType_4(f_MaterialIcon23, DONE) , f_MaterialIcon23)) , $setIconSize(f_iconmorph$MaterialIconMorph21, LARGE_0) , f_iconmorph$MaterialIconMorph21)) , $add_9(f_MaterialRow10, (f_PrettyPre24 = new PrettyPre , $setHTML_0(f_PrettyPre24, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;ma:iconmorph.MaterialIconMorph iconSize=\"TINY\"&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"POLYMER\"/&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"DONE\"/&gt;<br> &lt;/ma:iconmorph.MaterialIconMorph&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre24.element_0, 'lang-xml', true) , f_PrettyPre24)) , setStyleName(f_MaterialRow10.element_0, 'code', true) , f_MaterialRow10), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction IconMorphView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(1316, 1, {}, IconMorphView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphView_BinderImpl/Widgets', 1316);\nfunction $html4_3(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$) {\n    result0 = new IconMorphPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$) {\n    result = new IconMorphView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$;\n}\n\ndefineClass(672, 1, $intern_106);\n_.onSuccess_0 = function onSuccess_8(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(7);\n\n//# sourceURL=gwtmaterialdemo-7.js\n")
