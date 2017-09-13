$wnd.gwtmaterialdemo.runAsyncCallback26("function $applyCollapsibleProgress(this$static, isShow){\n  var body_0, item_0;\n  item_0 = castTo(this$static.uiObject, 88);\n  body_0 = castTo($get_1(item_0.children_1, 1), 97);\n  if (($getElement(this$static.uiObject).className || '').indexOf('active') != -1) {\n    if (isShow) {\n      $setDisplay(body_0, ($clinit_Display() , NONE_3));\n      $add_25(item_0, this$static.progress_0);\n    }\n     else {\n      $setDisplay(body_0, ($clinit_Display() , BLOCK_0));\n      $removeFromParent_0(this$static.progress_0);\n    }\n  }\n}\n\nfunction $hideProgress(this$static){\n  instanceOf(this$static.uiObject, 88)?$applyCollapsibleProgress(this$static, false):$removeFromParent_0(this$static.progress_0);\n}\n\nfunction $showProgress(this$static){\n  instanceOf(this$static.uiObject, 88)?$applyCollapsibleProgress(this$static, true):instanceOf(this$static.uiObject, 145) && $add_30(castTo(this$static.uiObject, 145), this$static.progress_0);\n}\n\nfunction $clinit_LoaderSize(){\n  $clinit_LoaderSize = emptyMethod;\n  MEDIUM_1 = new LoaderSize('MEDIUM', 0, '');\n  SMALL_0 = new LoaderSize('SMALL', 1, 'small');\n  BIG = new LoaderSize('BIG', 2, 'big');\n}\n\nfunction LoaderSize(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_47(){\n  $clinit_LoaderSize();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_LoaderSize_2_classLit, 1), $intern_8, 313, 0, [MEDIUM_1, SMALL_0, BIG]);\n}\n\ndefineClass(313, 27, {49:1, 313:1, 118:1, 4:1, 37:1, 27:1}, LoaderSize);\n_.getCssName = function getCssName_73(){\n  return this.cssClass;\n}\n;\nvar BIG, MEDIUM_1, SMALL_0;\nvar Lgwt_material_design_client_constants_LoaderSize_2_classLit = createForEnum('gwt.material.design.client.constants', 'LoaderSize', 313, values_47);\nfunction progress_1(visible, container){\n  $clinit_MaterialLoader();\n  $setType_10(loader, 1);\n  $setContainer(loader, container);\n  visible?$show_0(loader):$hide_0(loader);\n}\n\nfunction $setSize_0(this$static, size_0){\n  $setCssName(this$static.sizeMixin, size_0);\n}\n\nfunction $setColor(this$static, spinnerColor){\n  $setCssName(this$static.spinnerColorMixin, spinnerColor);\n}\n\nfunction LoaderPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(812, 59, $intern_53, LoaderPresenter);\n_.onReveal = function onReveal_46(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Loaders', 'If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.', 'components/loader/LoaderView', 'https://material.io/guidelines/components/progress-activity.html#'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderPresenter', 812);\nfunction $onShowLoaderSpecific(this$static){\n  var timer;\n  loading(true, this$static.loaderCard);\n  $setEnabled_0(this$static.btnProgress, false);\n  timer = new LoaderView$1(this$static);\n  $schedule(timer, $intern_7);\n}\n\nfunction $onShowNavBarProgress(this$static){\n  var lastArg, t;\n  $showProgress((lastArg = this$static.navBar , $clinit_ProgressType() , lastArg).progressMixin);\n  t = new LoaderView$5(this$static);\n  $schedule(t, 3000);\n}\n\nfunction $onShowProgressSpecific(this$static){\n  var timer;\n  progress_1(true, this$static.cardContent);\n  $setEnabled_0(this$static.btnLoader, false);\n  timer = new LoaderView$2(this$static);\n  $schedule(timer, $intern_7);\n}\n\nfunction LoaderView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_25(new LoaderView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1107, 62, $intern_54, LoaderView);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView', 1107);\nfunction LoaderView$1(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(1108, 131, {}, LoaderView$1);\n_.run = function run_11(){\n  $setEnabled_0(this.this$01.btnProgress, true);\n  $clinit_MaterialLoader();\n  loading(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/1', 1108);\nfunction LoaderView$2(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(1109, 131, {}, LoaderView$2);\n_.run = function run_12(){\n  $setEnabled_0(this.this$01.btnLoader, true);\n  $clinit_MaterialLoader();\n  progress_1(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/2', 1109);\nfunction LoaderView$3(){\n  Timer.call(this);\n}\n\ndefineClass(1110, 131, {}, LoaderView$3);\n_.run = function run_13(){\n  $clinit_MaterialLoader();\n  loading(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/3', 1110);\nfunction LoaderView$4(){\n  Timer.call(this);\n}\n\ndefineClass(1111, 131, {}, LoaderView$4);\n_.run = function run_14(){\n  $clinit_MaterialLoader();\n  progress_1(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/4', 1111);\nfunction LoaderView$5(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(1112, 131, {}, LoaderView$5);\n_.run = function run_15(){\n  $hideProgress(this.this$01.navBar.progressMixin);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/5', 1112);\nfunction $build_f_HTMLPanel1_25(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow5, f_MaterialRow8, f_MaterialRow15, f_MaterialRow28, f_MaterialRow39, f_MaterialTitle3, btnShowLoader, f_PrettyPre4, sb, f_MaterialTitle6, btnShowProgress, f_PrettyPre7, sb_0, f_MaterialTitle9, f_MaterialProgress10, f_PrettyPre11, sb_1, f_MaterialTitle12, f_MaterialProgress13, f_PrettyPre14, sb_2, f_MaterialTitle16, f_MaterialRow17, f_MaterialColumn18, f_MaterialPreLoader19, f_MaterialColumn21, f_MaterialPreLoader22, f_MaterialColumn24, f_MaterialPreLoader25, f_PrettyPre27, sb_3, f_MaterialTitle29, btnShowNavBarProgress, navBar, f_MaterialNavBrand30, f_MaterialNavSection31, f_MaterialLink32, f_MaterialLink33, f_MaterialTooltip34, f_MaterialTooltip36, f_PrettyPre38, sb_4, f_MaterialTitle40, f_MaterialRow41, f_MaterialColumn42, btnLoader, btnProgress, f_MaterialColumn43, loaderCard, f_PrettyPre68, sb_5, f_MaterialSpinner20, f_MaterialSpinner23, f_MaterialSpinner26, f_MaterialLink35, f_MaterialLink37, cardContent, f_MaterialRow44, f_MaterialImage45, f_MaterialLabel46, f_MaterialLabel47, f_MaterialRow48, f_MaterialLabel49, f_MaterialRow50, f_MaterialChip51, f_MaterialChip52, f_MaterialChip53, f_MaterialChip54, f_MaterialCardImage55, f_MaterialImage56, f_MaterialCardAction57, f_MaterialRow58, f_MaterialButton59, f_MaterialLabel60, f_MaterialLabel61, f_MaterialButton62, f_MaterialCollection63, f_MaterialCollectionItem64, f_MaterialImage65, f_MaterialLabel66, f_MaterialLabel67;\n  f_HTMLPanel1 = new HTMLPanel($html8(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Circular'))).html_0)) , fire_5(f_MaterialTitle3, 'Circular') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (btnShowLoader = new MaterialButton , setStyleName(btnShowLoader.element_0, 'CWDTSS-r-a', true) , $setText_6(btnShowLoader.span_1, 'Show Loader') , btnShowLoader.span_1.attached || $add_9(btnShowLoader, btnShowLoader.span_1) , $addClickHandler(btnShowLoader, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnShowLoader)) , $add_9(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '// Show Loader<br> MaterialLoader.loading(true);<br><br> // Hide Loader<br> MaterialLoader.loading(false);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre4.element_0, 'lang-java', true) , f_PrettyPre4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow5 = new MaterialRow , $add_9(f_MaterialRow5, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), (new SafeHtmlString(htmlEscape('Linear'))).html_0) , fire_5(f_MaterialTitle6, 'Linear') , f_MaterialTitle6)) , $add_9(f_MaterialRow5, (btnShowProgress = new MaterialButton , setStyleName(btnShowProgress.element_0, 'CWDTSS-r-a', true) , $setText_6(btnShowProgress.span_1, 'Show Progress') , btnShowProgress.span_1.attached || $add_9(btnShowProgress, btnShowProgress.span_1) , $addClickHandler(btnShowProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnShowProgress)) , $add_9(f_MaterialRow5, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '// Show Progress<br> MaterialLoader.progress(true);<br><br>  // Hide Progress<br> MaterialLoader.progress(false);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_9(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Determinate Type'))).html_0) , fire_5(f_MaterialTitle9, 'Determinate Type') , f_MaterialTitle9)) , $add_9(f_MaterialRow8, (f_MaterialProgress10 = new MaterialProgress , $setType_12(f_MaterialProgress10, ($clinit_ProgressType() , DETERMINATE)) , $setPercent(f_MaterialProgress10, 30) , f_MaterialProgress10)) , $add_9(f_MaterialRow8, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialProgress type=\"DETERMINATE\" percent=\"30\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre11.element_0, 'lang-xml', true) , f_PrettyPre11)) , $add_9(f_MaterialRow8, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), (new SafeHtmlString(htmlEscape('Indeterminate Type'))).html_0) , fire_5(f_MaterialTitle12, 'Indeterminate Type') , f_MaterialTitle12)) , $add_9(f_MaterialRow8, (f_MaterialProgress13 = new MaterialProgress , $setType_12(f_MaterialProgress13, INDETERMINATE) , f_MaterialProgress13)) , $add_9(f_MaterialRow8, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialProgress type=\"INDETERMINATE\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre14.element_0, 'lang-xml', true) , f_PrettyPre14)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow15 = new MaterialRow , $add_9(f_MaterialRow15, (f_MaterialTitle16 = new MaterialTitle , $setText_12(f_MaterialTitle16.paragraph, 'Standalone loaders can be added to any place of your app using UiBinder(inside a dialog, a page or everywhere depends on your UI UX).') , $setInnerHTML($getElement(f_MaterialTitle16.header), (new SafeHtmlString(htmlEscape('Stand alone Loaders'))).html_0) , fire_5(f_MaterialTitle16, 'Stand alone Loaders') , f_MaterialTitle16)) , $add_9(f_MaterialRow15, (f_MaterialRow17 = new MaterialRow , $add_9(f_MaterialRow17, (f_MaterialColumn18 = new MaterialColumn , $add_9(f_MaterialColumn18, (f_MaterialPreLoader19 = new MaterialPreLoader , $add_9(f_MaterialPreLoader19, (f_MaterialSpinner20 = new MaterialSpinner , $setColor(f_MaterialSpinner20, ($clinit_SpinnerColor() , BLUE_ONLY)) , f_MaterialSpinner20)) , $setSize_0(f_MaterialPreLoader19, ($clinit_LoaderSize() , BIG)) , f_MaterialPreLoader19)) , $setGrid_0((!f_MaterialColumn18.gridMixin && (f_MaterialColumn18.gridMixin = new GridMixin(f_MaterialColumn18)) , f_MaterialColumn18.gridMixin), 'l4') , f_MaterialColumn18)) , $add_9(f_MaterialRow17, (f_MaterialColumn21 = new MaterialColumn , $add_9(f_MaterialColumn21, (f_MaterialPreLoader22 = new MaterialPreLoader , $add_9(f_MaterialPreLoader22, (f_MaterialSpinner23 = new MaterialSpinner , $setColor(f_MaterialSpinner23, RED_ONLY) , f_MaterialSpinner23)) , f_MaterialPreLoader22)) , $setGrid_0((!f_MaterialColumn21.gridMixin && (f_MaterialColumn21.gridMixin = new GridMixin(f_MaterialColumn21)) , f_MaterialColumn21.gridMixin), 'l4') , f_MaterialColumn21)) , $add_9(f_MaterialRow17, (f_MaterialColumn24 = new MaterialColumn , $add_9(f_MaterialColumn24, (f_MaterialPreLoader25 = new MaterialPreLoader , $add_9(f_MaterialPreLoader25, (f_MaterialSpinner26 = new MaterialSpinner , $setColor(f_MaterialSpinner26, YELLOW_ONLY) , f_MaterialSpinner26)) , $setSize_0(f_MaterialPreLoader25, SMALL_0) , f_MaterialPreLoader25)) , $setGrid_0((!f_MaterialColumn24.gridMixin && (f_MaterialColumn24.gridMixin = new GridMixin(f_MaterialColumn24)) , f_MaterialColumn24.gridMixin), 'l4') , f_MaterialColumn24)) , f_MaterialRow17)) , $add_9(f_MaterialRow15, (f_PrettyPre27 = new PrettyPre , $setHTML_0(f_PrettyPre27, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialPreLoader size=\"BIG\"&gt;<br> \\u2003&lt;m:MaterialSpinner color=\"blue-only\" /&gt;<br> &lt;/m:MaterialPreLoader&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre27.element_0, 'lang-java', true) , f_PrettyPre27)) , setStyleName(f_MaterialRow15.element_0, 'code', true) , f_MaterialRow15), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow28 = new MaterialRow , $add_9(f_MaterialRow28, (f_MaterialTitle29 = new MaterialTitle , $setText_12(f_MaterialTitle29.paragraph, 'Using the progress we can attach it below the nav for better UI / UX when displaying important content on your app.') , $setInnerHTML($getElement(f_MaterialTitle29.header), (new SafeHtmlString(htmlEscape('NavBar Integration'))).html_0) , fire_5(f_MaterialTitle29, 'NavBar Integration') , f_MaterialTitle29)) , $add_9(f_MaterialRow28, (btnShowNavBarProgress = new MaterialButton , setStyleName(btnShowNavBarProgress.element_0, 'CWDTSS-r-a', true) , $setText_6(btnShowNavBarProgress.span_1, 'Show Progress') , btnShowNavBarProgress.span_1.attached || $add_9(btnShowNavBarProgress, btnShowNavBarProgress.span_1) , $addClickHandler(btnShowNavBarProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , btnShowNavBarProgress)) , $add_9(f_MaterialRow28, (navBar = new MaterialNavBar , $add_30(navBar, (f_MaterialNavBrand30 = new MaterialNavBrand , $add_9(f_MaterialNavBrand30, f_MaterialNavBrand30.container) , $getElement(f_MaterialNavBrand30.container).textContent = 'Title' , f_MaterialNavBrand30.element_0.setAttribute('href', '#Test') , $setFloat(f_MaterialNavBrand30, ($clinit_Style$Float() , LEFT)) , f_MaterialNavBrand30.element_0.style['marginLeft'] = ($clinit_Style$Unit() , '60.0px') , f_MaterialNavBrand30)) , $add_30(navBar, (f_MaterialNavSection31 = new MaterialNavSection , $add_13(f_MaterialNavSection31, new ListItem_0((f_MaterialLink32 = new MaterialLink , $setWaves(f_MaterialLink32, ($clinit_WavesType() , LIGHT)) , $setIconType_0(f_MaterialLink32, ($clinit_IconType() , ACCOUNT_CIRCLE)) , $setIconPosition(f_MaterialLink32, ($clinit_IconPosition() , LEFT_5)) , $setText_6(f_MaterialLink32.span_1, 'Account') , f_MaterialLink32.span_1.attached || $add_9(f_MaterialLink32, f_MaterialLink32.span_1) , $setTextColor(f_MaterialLink32, ($clinit_Color() , WHITE)) , f_MaterialLink32))) , $add_13(f_MaterialNavSection31, new ListItem_0((f_MaterialLink33 = new MaterialLink , $setWaves(f_MaterialLink33, LIGHT) , $setIconType_0(f_MaterialLink33, AUTORENEW) , $setIconPosition(f_MaterialLink33, LEFT_5) , $setText_6(f_MaterialLink33.span_1, 'Refresh') , f_MaterialLink33.span_1.attached || $add_9(f_MaterialLink33, f_MaterialLink33.span_1) , $setTextColor(f_MaterialLink33, WHITE) , f_MaterialLink33))) , $add_0(f_MaterialNavSection31, (f_MaterialTooltip34 = new MaterialTooltip , $add_36(f_MaterialTooltip34, (f_MaterialLink35 = new MaterialLink , $setWaves(f_MaterialLink35, LIGHT) , $setIconType_0(f_MaterialLink35, SEARCH_0) , $setTextColor(f_MaterialLink35, WHITE) , f_MaterialLink35)) , f_MaterialTooltip34.text_0 = 'Menu' , $getElement(f_MaterialTooltip34.widget).setAttribute('data-tooltip', 'Menu') , f_MaterialTooltip34)) , $add_0(f_MaterialNavSection31, (f_MaterialTooltip36 = new MaterialTooltip , $add_36(f_MaterialTooltip36, (f_MaterialLink37 = new MaterialLink , $setWaves(f_MaterialLink37, LIGHT) , $setIconType_0(f_MaterialLink37, MORE_VERT) , $setTextColor(f_MaterialLink37, WHITE) , f_MaterialLink37)) , f_MaterialTooltip36.text_0 = 'Starter' , $getElement(f_MaterialTooltip36.widget).setAttribute('data-tooltip', 'Starter') , f_MaterialTooltip36)) , $setFloat(f_MaterialNavSection31, RIGHT) , f_MaterialNavSection31)) , setStyleName(navBar.element_0, 'CWDTSS-r-b', true) , navBar.element_0.style['width'] = '100%' , this$static.owner.navBar = navBar , navBar)) , $add_9(f_MaterialRow28, (f_PrettyPre38 = new PrettyPre , $setHTML_0(f_PrettyPre38, (sb_4 = new StringBuilder , sb_4.string += '// Show NavBar Loader<br> navBar.showLoader();<br><br> // Hide NavBar Loader<br> navBar.hideLoader();<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre38.element_0, 'lang-java', true) , f_PrettyPre38)) , setStyleName(f_MaterialRow28.element_0, 'code', true) , f_MaterialRow28), $get_0(this$static.domId4Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow39 = new MaterialRow , $add_9(f_MaterialRow39, (f_MaterialTitle40 = new MaterialTitle , $setText_12(f_MaterialTitle40.paragraph, 'You can attach the loader / progress to any panels') , $setInnerHTML($getElement(f_MaterialTitle40.header), (new SafeHtmlString(htmlEscape('Specific Panels'))).html_0) , fire_5(f_MaterialTitle40, 'Specific Panels') , f_MaterialTitle40)) , $add_9(f_MaterialRow39, (f_MaterialRow41 = new MaterialRow , $add_9(f_MaterialRow41, (f_MaterialColumn42 = new MaterialColumn , $add_9(f_MaterialColumn42, (btnLoader = new MaterialButton , $setText_6(btnLoader.span_1, 'Show Loader') , btnLoader.span_1.attached || $add_9(btnLoader, btnLoader.span_1) , $addClickHandler(btnLoader, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , this$static.owner.btnLoader = btnLoader , btnLoader)) , $add_9(f_MaterialColumn42, (btnProgress = new MaterialButton , $setText_6(btnProgress.span_1, 'Show Progress') , btnProgress.span_1.attached || $add_9(btnProgress, btnProgress.span_1) , $addClickHandler(btnProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , this$static.owner.btnProgress = btnProgress , btnProgress)) , $setGrid_0((!f_MaterialColumn42.gridMixin && (f_MaterialColumn42.gridMixin = new GridMixin(f_MaterialColumn42)) , f_MaterialColumn42.gridMixin), 'l12 m12 s12') , f_MaterialColumn42)) , $add_9(f_MaterialRow41, (f_MaterialColumn43 = new MaterialColumn , $add_9(f_MaterialColumn43, (loaderCard = new MaterialCard , $add_9(loaderCard, (cardContent = new MaterialCardContent , $add_9(cardContent, (f_MaterialRow44 = new MaterialRow , $add_9(f_MaterialRow44, (f_MaterialImage45 = new MaterialImage , f_MaterialImage45.element_0.style['marginRight'] = '20.0px' , f_MaterialImage45.element_0.style['width'] = '50' , $setFloat(f_MaterialImage45, LEFT) , $setOn((!f_MaterialImage45.circleMixin && (f_MaterialImage45.circleMixin = new ToggleStyleMixin(f_MaterialImage45, 'circle')) , f_MaterialImage45.circleMixin), true) , $setValue_17(f_MaterialImage45, 'https://lh3.googleusercontent.com/-Zu_vZFIl9Ms/AAAAAAAAAAI/AAAAAAAAALk/2pPyCa-IKHg/s60-p-rw-no/photo.jpg', true) , f_MaterialImage45.element_0.style['height'] = '50' , f_MaterialImage45)) , $add_9(f_MaterialRow44, (f_MaterialLabel46 = new MaterialLabel , $setFontSize_1(f_MaterialLabel46.fontSizeMixin, '1.2em') , $setText_5(f_MaterialLabel46.textMixin, 'Mark Kevin Baldemor') , fire_5(f_MaterialLabel46, 'Mark Kevin Baldemor') , $setFloat(f_MaterialLabel46, LEFT) , f_MaterialLabel46.element_0.style['marginTop'] = '20.0px' , $setFontWeight(f_MaterialLabel46, ($clinit_Style$FontWeight() , BOLD)) , f_MaterialLabel46)) , $add_9(f_MaterialRow44, (f_MaterialLabel47 = new MaterialLabel , f_MaterialLabel47.element_0.style['marginRight'] = '20.0px' , $setText_5(f_MaterialLabel47.textMixin, '2d') , fire_5(f_MaterialLabel47, '2d') , $setFloat(f_MaterialLabel47, RIGHT) , $setTextColor(f_MaterialLabel47, GREY) , f_MaterialLabel47.element_0.style['marginTop'] = '20.0px' , f_MaterialLabel47)) , f_MaterialRow44.element_0.style['padding'] = '12.0px' , f_MaterialRow44.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow44)) , $add_9(cardContent, (f_MaterialRow48 = new MaterialRow , $add_9(f_MaterialRow48, (f_MaterialLabel49 = new MaterialLabel , $setText_5(f_MaterialLabel49.textMixin, 'Amazingly clear seas of the Philippines') , fire_5(f_MaterialLabel49, 'Amazingly clear seas of the Philippines') , f_MaterialLabel49)) , $add_9(f_MaterialRow48, (f_MaterialRow50 = new MaterialRow , $add_9(f_MaterialRow50, (f_MaterialChip51 = new MaterialChip , f_MaterialChip51.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip51.chipLabel, '#philippines') , fire_5(f_MaterialChip51, '#philippines') , $setFloat(f_MaterialChip51, LEFT) , $setTextColor(f_MaterialChip51, BLACK) , f_MaterialChip51)) , $add_9(f_MaterialRow50, (f_MaterialChip52 = new MaterialChip , f_MaterialChip52.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip52.chipLabel, '#vacation') , fire_5(f_MaterialChip52, '#vacation') , $setFloat(f_MaterialChip52, LEFT) , $setTextColor(f_MaterialChip52, BLACK) , f_MaterialChip52)) , $add_9(f_MaterialRow50, (f_MaterialChip53 = new MaterialChip , f_MaterialChip53.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip53.chipLabel, '#holiday') , fire_5(f_MaterialChip53, '#holiday') , $setFloat(f_MaterialChip53, LEFT) , $setTextColor(f_MaterialChip53, BLACK) , f_MaterialChip53)) , $add_9(f_MaterialRow50, (f_MaterialChip54 = new MaterialChip , f_MaterialChip54.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip54.chipLabel, '#sea') , fire_5(f_MaterialChip54, '#sea') , $setFloat(f_MaterialChip54, LEFT) , $setTextColor(f_MaterialChip54, BLACK) , f_MaterialChip54)) , f_MaterialRow50.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow50)) , f_MaterialRow48.element_0.style['padding'] = '20.0px' , f_MaterialRow48.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow48)) , cardContent.element_0.style['padding'] = '0.0px' , this$static.owner.cardContent = cardContent , cardContent)) , $add_9(loaderCard, (f_MaterialCardImage55 = new MaterialCardImage , $add_21(f_MaterialCardImage55, (f_MaterialImage56 = new MaterialImage , $setValue_17(f_MaterialImage56, 'https://lh3.googleusercontent.com/SgPPF0Bd5hkPRjb36VHPNay8nYGtprFwxSkbHprpZ65TitKXkVOVquPxPdlsoXKHCIdQ=w1366-h768-rw-no', true) , f_MaterialImage56)) , f_MaterialCardImage55)) , $add_9(loaderCard, (f_MaterialCardAction57 = new MaterialCardAction , $add_9(f_MaterialCardAction57, (f_MaterialRow58 = new MaterialRow , $add_9(f_MaterialRow58, (f_MaterialButton59 = new MaterialButton , $setBackgroundColor(f_MaterialButton59, GREY_LIGHTEN_2) , $setShadow_0((!f_MaterialButton59.shadowMixin && (f_MaterialButton59.shadowMixin = new ShadowMixin(f_MaterialButton59)) , f_MaterialButton59.shadowMixin), 0) , $setIconType_0(f_MaterialButton59, PLUS_ONE) , $setIconColor_0(f_MaterialButton59, GREY) , $setType_0(f_MaterialButton59, ($clinit_ButtonType() , FLOATING)) , $setFloat(f_MaterialButton59, LEFT) , f_MaterialButton59)) , $add_9(f_MaterialRow58, (f_MaterialLabel60 = new MaterialLabel , $setText_5(f_MaterialLabel60.textMixin, '310') , fire_5(f_MaterialLabel60, '310') , $setFloat(f_MaterialLabel60, LEFT) , $setTextColor(f_MaterialLabel60, GREY) , f_MaterialLabel60.element_0.style['marginTop'] = '12.0px' , f_MaterialLabel60.element_0.style['marginLeft'] = '12.0px' , f_MaterialLabel60)) , $add_9(f_MaterialRow58, (f_MaterialLabel61 = new MaterialLabel , $setText_5(f_MaterialLabel61.textMixin, '1000') , fire_5(f_MaterialLabel61, '1000') , $setFloat(f_MaterialLabel61, RIGHT) , $setTextColor(f_MaterialLabel61, GREY) , f_MaterialLabel61.element_0.style['marginTop'] = '12.0px' , f_MaterialLabel61.element_0.style['marginLeft'] = '12.0px' , f_MaterialLabel61)) , $add_9(f_MaterialRow58, (f_MaterialButton62 = new MaterialButton , $setBackgroundColor(f_MaterialButton62, GREY_LIGHTEN_2) , $setShadow_0((!f_MaterialButton62.shadowMixin && (f_MaterialButton62.shadowMixin = new ShadowMixin(f_MaterialButton62)) , f_MaterialButton62.shadowMixin), 0) , $setIconType_0(f_MaterialButton62, SHARE) , $setIconColor_0(f_MaterialButton62, GREY) , $setType_0(f_MaterialButton62, FLOATING) , $setFloat(f_MaterialButton62, RIGHT) , f_MaterialButton62)) , f_MaterialRow58.element_0.style['margin'] = '12.0px' , f_MaterialRow58)) , $add_9(f_MaterialCardAction57, (f_MaterialCollection63 = new MaterialCollection , $add_9(f_MaterialCollection63, (f_MaterialCollectionItem64 = new MaterialCollectionItem , $add_9(f_MaterialCollectionItem64, (f_MaterialImage65 = new MaterialImage , f_MaterialImage65.element_0.style['width'] = '40px' , $setOn((!f_MaterialImage65.circleMixin && (f_MaterialImage65.circleMixin = new ToggleStyleMixin(f_MaterialImage65, 'circle')) , f_MaterialImage65.circleMixin), true) , $setValue_17(f_MaterialImage65, 'http://materializecss.com/images/yuna.jpg', true) , f_MaterialImage65.element_0.style['height'] = '40px' , f_MaterialImage65)) , $add_9(f_MaterialCollectionItem64, (f_MaterialLabel66 = new MaterialLabel , $setText_5(f_MaterialLabel66.textMixin, 'Yuna') , fire_5(f_MaterialLabel66, 'Yuna') , $setFontWeight(f_MaterialLabel66, BOLD) , f_MaterialLabel66)) , $add_9(f_MaterialCollectionItem64, (f_MaterialLabel67 = new MaterialLabel , $setText_5(f_MaterialLabel67.textMixin, 'I grew up in the island of the Philippines. The water is clear. Some are not sandy. Water is just the right temperature.') , fire_5(f_MaterialLabel67, 'I grew up in the island of the Philippines. The water is clear. Some are not sandy. Water is just the right temperature.') , f_MaterialLabel67)) , $setType_5(f_MaterialCollectionItem64, ($clinit_CollectionType() , AVATAR)) , f_MaterialCollectionItem64)) , f_MaterialCollection63)) , f_MaterialCardAction57.element_0.style['padding'] = '0.0px' , f_MaterialCardAction57)) , this$static.owner.loaderCard = loaderCard , loaderCard)) , $setGrid_0((!f_MaterialColumn43.gridMixin && (f_MaterialColumn43.gridMixin = new GridMixin(f_MaterialColumn43)) , f_MaterialColumn43.gridMixin), 'l6 m6 s12') , f_MaterialColumn43)) , f_MaterialRow41)) , $add_9(f_MaterialRow39, (f_PrettyPre68 = new PrettyPre , $setHTML_0(f_PrettyPre68, (sb_5 = new StringBuilder , sb_5.string += '\\u2003@UiHandler(\"btnLoader\")<br> void onShowLoaderSpecific(ClickEvent e) {<br> \\u2003Timer timer = new Timer() {<br> \\u2003\\u2003@Override<br> \\u2003\\u2003public void run() {<br> \\u2003\\u2003\\u2003MaterialLoader.loading(true, cardContent);<br> \\u2003\\u2003}<br> \\u2003};<br> \\u2003timer.schedule(2000);<br> }<br><br>  @UiHandler(\"btnProgress\")<br> void onShowProgressSpecific(ClickEvent e) {<br> \\u2003Timer timer = new Timer() {<br> \\u2003\\u2003@Override<br> \\u2003\\u2003public void run() {<br> \\u2003\\u2003\\u2003MaterialLoader.progress(true, cardContent);<br> \\u2003\\u2003}<br> \\u2003};<br> \\u2003timer.schedule(2000);<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre68.element_0, 'lang-java', true) , f_PrettyPre68)) , setStyleName(f_MaterialRow39.element_0, 'code', true) , f_MaterialRow39), $get_0(this$static.domId5Element));\n  return f_HTMLPanel1;\n}\n\nfunction LoaderView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LoaderView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LoaderView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new LoaderView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new LoaderView_BinderImpl$Widgets$4;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new LoaderView_BinderImpl$Widgets$5(this);\n  this.owner = owner;\n  this.style_0 = ($clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16);\n  $ensureInjected_15(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n}\n\ndefineClass(1511, 1, {}, LoaderView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets', 1511);\nfunction LoaderView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1512, 1, $intern_63, LoaderView_BinderImpl$Widgets$1);\n_.onClick = function onClick_223(event_0){\n  $onShowLoaderSpecific(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/1', 1512);\nfunction LoaderView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1513, 1, $intern_63, LoaderView_BinderImpl$Widgets$2);\n_.onClick = function onClick_224(event_0){\n  $onShowProgressSpecific(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/2', 1513);\nfunction LoaderView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1514, 1, $intern_63, LoaderView_BinderImpl$Widgets$3);\n_.onClick = function onClick_225(event_0){\n  var t;\n  $clinit_MaterialLoader();\n  loading(true, ($clinit_RootPanel() , get_1(null)));\n  t = new LoaderView$3;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/3', 1514);\nfunction LoaderView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(1515, 1, $intern_63, LoaderView_BinderImpl$Widgets$4);\n_.onClick = function onClick_226(event_0){\n  var t;\n  $clinit_MaterialLoader();\n  progress_1(true, ($clinit_RootPanel() , get_1(null)));\n  t = new LoaderView$4;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/4', 1515);\nfunction LoaderView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1516, 1, $intern_63, LoaderView_BinderImpl$Widgets$5);\n_.onClick = function onClick_227(event_0){\n  $onShowNavBarProgress(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/5', 1516);\nvar style_16;\nfunction $ensureInjected_15(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    inject(($clinit_LocaleInfo() , '.CWDTSS-r-a{width:200px;margin-bottom:10px}.CWDTSS-r-b{padding-left:0!important}'));\n    return true;\n  }\n  return false;\n}\n\nfunction LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2005, 1, {}, LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_131(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2005);\nfunction $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_16 = new LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html8(arg0, arg1, arg2, arg3, arg4, arg5){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$) {\n    result0 = new LoaderPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$) {\n    result = new LoaderView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$;\n}\n\ndefineClass(724, 1, $intern_105);\n_.onSuccess_0 = function onSuccess_27(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
