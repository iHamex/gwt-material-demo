$wnd.gwtmaterialdemo.runAsyncCallback26("function $applyCollapsibleProgress(this$static, isShow){\n  var body_0, item_0;\n  item_0 = castTo(this$static.uiObject, 78);\n  body_0 = castTo($get_3(item_0.children_1, 1), 100);\n  if (($getElement(this$static.uiObject).className || '').indexOf('active') != -1) {\n    if (isShow) {\n      $setDisplay_1(body_0, ($clinit_Display() , NONE_4));\n      $add_30(item_0, this$static.progress);\n    }\n     else {\n      $setDisplay_1(body_0, ($clinit_Display() , BLOCK_0));\n      $removeFromParent_0(this$static.progress);\n    }\n  }\n}\n\nfunction $hideProgress(this$static){\n  instanceOf(this$static.uiObject, 78)?$applyCollapsibleProgress(this$static, false):$removeFromParent_0(this$static.progress);\n}\n\nfunction $showProgress(this$static){\n  instanceOf(this$static.uiObject, 78)?$applyCollapsibleProgress(this$static, true):instanceOf(this$static.uiObject, 149) && $add_35(castTo(this$static.uiObject, 149), this$static.progress);\n}\n\nfunction $clinit_LoaderSize(){\n  $clinit_LoaderSize = emptyMethod;\n  MEDIUM_1 = new LoaderSize('MEDIUM', 0, '');\n  SMALL_0 = new LoaderSize('SMALL', 1, 'small');\n  BIG = new LoaderSize('BIG', 2, 'big');\n}\n\nfunction LoaderSize(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_49(){\n  $clinit_LoaderSize();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_LoaderSize_2_classLit, 1), $intern_8, 315, 0, [MEDIUM_1, SMALL_0, BIG]);\n}\n\ndefineClass(315, 24, {42:1, 315:1, 112:1, 4:1, 31:1, 24:1}, LoaderSize);\n_.getCssName = function getCssName_88(){\n  return this.cssClass;\n}\n;\nvar BIG, MEDIUM_1, SMALL_0;\nvar Lgwt_material_design_client_constants_LoaderSize_2_classLit = createForEnum('gwt.material.design.client.constants', 'LoaderSize', 315, values_49);\nfunction showProgress(isShow, container){\n  $clinit_MaterialLoader();\n  if (isShow) {\n    instanceOf(container, 245) || ($getElement(div_1).style['position'] = ($clinit_Style$Position() , 'absolute') , undefined);\n    $setStyleName(div_1, 'valign-wrapper progress-wrapper');\n    $getElement(progress_1).style['margin'] = 'auto';\n    $add_14(div_1, progress_1);\n    container.add_0(div_1);\n  }\n   else {\n    $removeFromParent_0(div_1);\n    $removeFromParent_0(progress_1);\n  }\n}\n\nfunction $setSize_0(this$static, size_0){\n  $setCssName(this$static.sizeMixin, size_0);\n}\n\nfunction $setColor(this$static, spinnerColor){\n  $setCssName(this$static.spinnerColorMixin, spinnerColor);\n}\n\nfunction LoaderPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(832, 58, $intern_57, LoaderPresenter);\n_.onReveal = function onReveal_45(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Loaders', 'If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.', 'components/loader/LoaderView'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderPresenter', 832);\nfunction $onShowLoaderSpecific(this$static){\n  var timer;\n  showLoading(true, this$static.cardContent);\n  timer = new LoaderView$1;\n  $schedule(timer, $intern_4);\n}\n\nfunction $onShowNavBarProgress(this$static){\n  var lastArg, t;\n  $showProgress((lastArg = this$static.navBar , $clinit_ProgressType() , lastArg).progressMixin);\n  t = new LoaderView$5(this$static);\n  $schedule(t, 3000);\n}\n\nfunction $onShowProgressSpecific(this$static){\n  var timer;\n  showProgress(true, this$static.cardContent);\n  timer = new LoaderView$2;\n  $schedule(timer, $intern_4);\n}\n\nfunction LoaderView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_25(new LoaderView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1115, 62, $intern_58, LoaderView);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView', 1115);\nfunction LoaderView$1(){\n  Timer.call(this);\n}\n\ndefineClass(1116, 130, {}, LoaderView$1);\n_.run = function run_11(){\n  $clinit_MaterialLoader();\n  showLoading(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/1', 1116);\nfunction LoaderView$2(){\n  Timer.call(this);\n}\n\ndefineClass(1117, 130, {}, LoaderView$2);\n_.run = function run_12(){\n  $clinit_MaterialLoader();\n  showProgress(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/2', 1117);\nfunction LoaderView$3(){\n  Timer.call(this);\n}\n\ndefineClass(1118, 130, {}, LoaderView$3);\n_.run = function run_13(){\n  $clinit_MaterialLoader();\n  showLoading(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/3', 1118);\nfunction LoaderView$4(){\n  Timer.call(this);\n}\n\ndefineClass(1119, 130, {}, LoaderView$4);\n_.run = function run_14(){\n  $clinit_MaterialLoader();\n  showProgress(false, ($clinit_RootPanel() , get_1(null)));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/4', 1119);\nfunction LoaderView$5(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(1120, 130, {}, LoaderView$5);\n_.run = function run_15(){\n  $hideProgress(this.this$01.navBar.progressMixin);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/5', 1120);\nfunction $build_f_HTMLPanel1_25(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow5, f_MaterialRow8, f_MaterialRow15, f_MaterialRow28, f_MaterialRow39, f_MaterialTitle3, btnShowLoader, f_PrettyPre4, sb, f_MaterialTitle6, btnShowProgress, f_PrettyPre7, sb_0, f_MaterialTitle9, f_MaterialProgress10, f_PrettyPre11, sb_1, f_MaterialTitle12, f_MaterialProgress13, f_PrettyPre14, sb_2, f_MaterialTitle16, f_MaterialRow17, f_MaterialColumn18, f_MaterialPreLoader19, f_MaterialColumn21, f_MaterialPreLoader22, f_MaterialColumn24, f_MaterialPreLoader25, f_PrettyPre27, sb_3, f_MaterialTitle29, btnShowNavBarProgress, navBar, f_MaterialNavBrand30, f_MaterialNavSection31, f_MaterialLink32, f_MaterialLink33, f_MaterialTooltip34, f_MaterialTooltip36, f_PrettyPre38, sb_4, f_MaterialTitle40, f_MaterialRow41, f_MaterialColumn42, btnLoader, btnProgress, f_MaterialColumn43, f_MaterialCard44, cardContent, f_MaterialRow45, f_MaterialRow49, f_MaterialCardImage56, f_MaterialCardAction58, f_PrettyPre69, sb_5, f_MaterialSpinner20, f_MaterialSpinner23, f_MaterialSpinner26, f_MaterialLink35, f_MaterialLink37, f_MaterialImage46, f_MaterialLabel47, f_MaterialLabel48, f_MaterialLabel50, f_MaterialRow51, f_MaterialChip52, f_MaterialChip53, f_MaterialChip54, f_MaterialChip55, f_MaterialImage57, f_MaterialRow59, f_MaterialButton60, f_MaterialLabel61, f_MaterialLabel62, f_MaterialButton63, f_MaterialCollection64, f_MaterialCollectionItem65, f_MaterialImage66, f_MaterialLabel67, f_MaterialLabel68;\n  f_HTMLPanel1 = new HTMLPanel($html8_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $getElement(f_MaterialTitle3.header).innerHTML = 'Circular' , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (btnShowLoader = new MaterialButton , setStyleName(btnShowLoader.element_0, 'B0JM1SC-u-a', true) , $setText_6(btnShowLoader.span_1, 'Show Loader') , btnShowLoader.span_1.attached || $add_14(btnShowLoader, btnShowLoader.span_1) , $addClickHandler(btnShowLoader, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnShowLoader)) , $add_14(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '// Show Loader<br> MaterialLoader.showLoading(true);<br><br> // Hide Loader<br> MaterialLoader.showLoading(false);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre4.element_0, 'lang-java', true) , f_PrettyPre4)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow5 = new MaterialRow , $add_14(f_MaterialRow5, (f_MaterialTitle6 = new MaterialTitle , $getElement(f_MaterialTitle6.header).innerHTML = 'Linear' , f_MaterialTitle6)) , $add_14(f_MaterialRow5, (btnShowProgress = new MaterialButton , setStyleName(btnShowProgress.element_0, 'B0JM1SC-u-a', true) , $setText_6(btnShowProgress.span_1, 'Show Progress') , btnShowProgress.span_1.attached || $add_14(btnShowProgress, btnShowProgress.span_1) , $addClickHandler(btnShowProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnShowProgress)) , $add_14(f_MaterialRow5, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '// Show Progress<br> MaterialLoader.showProgress(true);<br><br>  // Hide Progress<br> MaterialLoader.showProgress(false);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow5.element_0, 'code', true) , f_MaterialRow5), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_14(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $getElement(f_MaterialTitle9.header).innerHTML = 'Determinate Type' , f_MaterialTitle9)) , $add_14(f_MaterialRow8, (f_MaterialProgress10 = new MaterialProgress , $setType_12(f_MaterialProgress10, ($clinit_ProgressType() , DETERMINATE)) , $getElement(f_MaterialProgress10.div).style['width'] = ($clinit_Style$Unit() , '30.0%') , f_MaterialProgress10)) , $add_14(f_MaterialRow8, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialProgress type=\"DETERMINATE\" percent=\"30\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre11.element_0, 'lang-xml', true) , f_PrettyPre11)) , $add_14(f_MaterialRow8, (f_MaterialTitle12 = new MaterialTitle , $getElement(f_MaterialTitle12.header).innerHTML = 'Indeterminate Type' , f_MaterialTitle12)) , $add_14(f_MaterialRow8, (f_MaterialProgress13 = new MaterialProgress , $setType_12(f_MaterialProgress13, INDETERMINATE) , f_MaterialProgress13)) , $add_14(f_MaterialRow8, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialProgress type=\"INDETERMINATE\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre14.element_0, 'lang-xml', true) , f_PrettyPre14)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow15 = new MaterialRow , $add_14(f_MaterialRow15, (f_MaterialTitle16 = new MaterialTitle , $setText_12(f_MaterialTitle16.paragraph, 'Standalone loaders can be added to any place of your app using UiBinder(inside a dialog, a page or everywhere depends on your UI UX).') , $getElement(f_MaterialTitle16.header).innerHTML = 'Stand alone Loaders' , f_MaterialTitle16)) , $add_14(f_MaterialRow15, (f_MaterialRow17 = new MaterialRow , $add_14(f_MaterialRow17, (f_MaterialColumn18 = new MaterialColumn , $add_14(f_MaterialColumn18, (f_MaterialPreLoader19 = new MaterialPreLoader , $add_14(f_MaterialPreLoader19, (f_MaterialSpinner20 = new MaterialSpinner , $setColor(f_MaterialSpinner20, ($clinit_SpinnerColor() , BLUE_ONLY)) , f_MaterialSpinner20)) , $setSize_0(f_MaterialPreLoader19, ($clinit_LoaderSize() , BIG)) , f_MaterialPreLoader19)) , $setGrid_0((!f_MaterialColumn18.gridMixin && (f_MaterialColumn18.gridMixin = new GridMixin(f_MaterialColumn18)) , f_MaterialColumn18.gridMixin), 'l4') , f_MaterialColumn18)) , $add_14(f_MaterialRow17, (f_MaterialColumn21 = new MaterialColumn , $add_14(f_MaterialColumn21, (f_MaterialPreLoader22 = new MaterialPreLoader , $add_14(f_MaterialPreLoader22, (f_MaterialSpinner23 = new MaterialSpinner , $setColor(f_MaterialSpinner23, RED_ONLY) , f_MaterialSpinner23)) , f_MaterialPreLoader22)) , $setGrid_0((!f_MaterialColumn21.gridMixin && (f_MaterialColumn21.gridMixin = new GridMixin(f_MaterialColumn21)) , f_MaterialColumn21.gridMixin), 'l4') , f_MaterialColumn21)) , $add_14(f_MaterialRow17, (f_MaterialColumn24 = new MaterialColumn , $add_14(f_MaterialColumn24, (f_MaterialPreLoader25 = new MaterialPreLoader , $add_14(f_MaterialPreLoader25, (f_MaterialSpinner26 = new MaterialSpinner , $setColor(f_MaterialSpinner26, YELLOW_ONLY) , f_MaterialSpinner26)) , $setSize_0(f_MaterialPreLoader25, SMALL_0) , f_MaterialPreLoader25)) , $setGrid_0((!f_MaterialColumn24.gridMixin && (f_MaterialColumn24.gridMixin = new GridMixin(f_MaterialColumn24)) , f_MaterialColumn24.gridMixin), 'l4') , f_MaterialColumn24)) , f_MaterialRow17)) , $add_14(f_MaterialRow15, (f_PrettyPre27 = new PrettyPre , $setHTML_0(f_PrettyPre27, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialPreLoader size=\"BIG\"&gt;<br> \\u2003&lt;m:MaterialSpinner color=\"blue-only\" /&gt;<br> &lt;/m:MaterialPreLoader&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre27.element_0, 'lang-java', true) , f_PrettyPre27)) , setStyleName(f_MaterialRow15.element_0, 'code', true) , f_MaterialRow15), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow28 = new MaterialRow , $add_14(f_MaterialRow28, (f_MaterialTitle29 = new MaterialTitle , $setText_12(f_MaterialTitle29.paragraph, 'Using the progress we can attach it below the nav for better UI / UX when displaying important content on your app.') , $getElement(f_MaterialTitle29.header).innerHTML = 'NavBar Integration' , f_MaterialTitle29)) , $add_14(f_MaterialRow28, (btnShowNavBarProgress = new MaterialButton , setStyleName(btnShowNavBarProgress.element_0, 'B0JM1SC-u-a', true) , $setText_6(btnShowNavBarProgress.span_1, 'Show Progress') , btnShowNavBarProgress.span_1.attached || $add_14(btnShowNavBarProgress, btnShowNavBarProgress.span_1) , $addClickHandler(btnShowNavBarProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5) , btnShowNavBarProgress)) , $add_14(f_MaterialRow28, (navBar = new MaterialNavBar , $add_35(navBar, (f_MaterialNavBrand30 = new MaterialNavBrand , $add_14(f_MaterialNavBrand30, f_MaterialNavBrand30.div) , $getElement(f_MaterialNavBrand30.div).textContent = 'Title' , f_MaterialNavBrand30.element_0.setAttribute('href', '#Test') , $setFloat(f_MaterialNavBrand30, ($clinit_Style$Float() , LEFT)) , f_MaterialNavBrand30)) , $add_35(navBar, (f_MaterialNavSection31 = new MaterialNavSection , $add_18(f_MaterialNavSection31, new ListItem_0((f_MaterialLink32 = new MaterialLink , $setWaves(f_MaterialLink32, ($clinit_WavesType() , LIGHT)) , $setIconType(f_MaterialLink32, ($clinit_IconType() , ACCOUNT_CIRCLE)) , $setIconPosition(f_MaterialLink32, ($clinit_IconPosition() , LEFT_6)) , $setText_6(f_MaterialLink32.span_1, 'Account') , f_MaterialLink32.span_1.attached || $add_14(f_MaterialLink32, f_MaterialLink32.span_1) , $setTextColor(f_MaterialLink32, ($clinit_Color() , WHITE)) , f_MaterialLink32))) , $add_18(f_MaterialNavSection31, new ListItem_0((f_MaterialLink33 = new MaterialLink , $setWaves(f_MaterialLink33, LIGHT) , $setIconType(f_MaterialLink33, AUTORENEW) , $setIconPosition(f_MaterialLink33, LEFT_6) , $setText_6(f_MaterialLink33.span_1, 'Refresh') , f_MaterialLink33.span_1.attached || $add_14(f_MaterialLink33, f_MaterialLink33.span_1) , $setTextColor(f_MaterialLink33, WHITE) , f_MaterialLink33))) , $add_0(f_MaterialNavSection31, (f_MaterialTooltip34 = new MaterialTooltip , $add_40(f_MaterialTooltip34, (f_MaterialLink35 = new MaterialLink , $setWaves(f_MaterialLink35, LIGHT) , $setIconType(f_MaterialLink35, SEARCH_0) , $setTextColor(f_MaterialLink35, WHITE) , f_MaterialLink35)) , f_MaterialTooltip34.text_0 = 'Menu' , $getElement(f_MaterialTooltip34.widget).setAttribute('data-tooltip', 'Menu') , f_MaterialTooltip34)) , $add_0(f_MaterialNavSection31, (f_MaterialTooltip36 = new MaterialTooltip , $add_40(f_MaterialTooltip36, (f_MaterialLink37 = new MaterialLink , $setWaves(f_MaterialLink37, LIGHT) , $setIconType(f_MaterialLink37, MORE_VERT) , $setTextColor(f_MaterialLink37, WHITE) , f_MaterialLink37)) , f_MaterialTooltip36.text_0 = 'Starter' , $getElement(f_MaterialTooltip36.widget).setAttribute('data-tooltip', 'Starter') , f_MaterialTooltip36)) , $setFloat(f_MaterialNavSection31, RIGHT) , f_MaterialNavSection31)) , setStyleName(navBar.element_0, 'B0JM1SC-u-b', true) , navBar.element_0.style['width'] = '100%' , this$static.owner.navBar = navBar , navBar)) , $add_14(f_MaterialRow28, (f_PrettyPre38 = new PrettyPre , $setHTML_0(f_PrettyPre38, (sb_4 = new StringBuilder , sb_4.string += '// Show NavBar Loader<br> navBar.showLoader();<br><br> // Hide NavBar Loader<br> navBar.hideLoader();<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre38.element_0, 'lang-java', true) , f_PrettyPre38)) , setStyleName(f_MaterialRow28.element_0, 'code', true) , f_MaterialRow28), $get_0(this$static.domId4Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow39 = new MaterialRow , $add_14(f_MaterialRow39, (f_MaterialTitle40 = new MaterialTitle , $setText_12(f_MaterialTitle40.paragraph, 'You can attach the loader / progress to any panels') , $getElement(f_MaterialTitle40.header).innerHTML = 'Specific Panels' , f_MaterialTitle40)) , $add_14(f_MaterialRow39, (f_MaterialRow41 = new MaterialRow , $add_14(f_MaterialRow41, (f_MaterialColumn42 = new MaterialColumn , $add_14(f_MaterialColumn42, (btnLoader = new MaterialButton , $setText_6(btnLoader.span_1, 'Show Loader') , btnLoader.span_1.attached || $add_14(btnLoader, btnLoader.span_1) , $addClickHandler(btnLoader, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnLoader)) , $add_14(f_MaterialColumn42, (btnProgress = new MaterialButton , $setText_6(btnProgress.span_1, 'Show Progress') , btnProgress.span_1.attached || $add_14(btnProgress, btnProgress.span_1) , $addClickHandler(btnProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnProgress)) , $setGrid_0((!f_MaterialColumn42.gridMixin && (f_MaterialColumn42.gridMixin = new GridMixin(f_MaterialColumn42)) , f_MaterialColumn42.gridMixin), 'l12 m12 s12') , f_MaterialColumn42)) , $add_14(f_MaterialRow41, (f_MaterialColumn43 = new MaterialColumn , $add_14(f_MaterialColumn43, (f_MaterialCard44 = new MaterialCard , $add_14(f_MaterialCard44, (cardContent = new MaterialCardContent , $add_14(cardContent, (f_MaterialRow45 = new MaterialRow , $add_14(f_MaterialRow45, (f_MaterialImage46 = new MaterialImage , f_MaterialImage46.element_0.style['marginRight'] = '20.0px' , f_MaterialImage46.element_0.style['width'] = '50' , $setFloat(f_MaterialImage46, LEFT) , $setOn((!f_MaterialImage46.circleMixin && (f_MaterialImage46.circleMixin = new ToggleStyleMixin(f_MaterialImage46, 'circle')) , f_MaterialImage46.circleMixin), true) , $setUrl_3(f_MaterialImage46.imageMixin, 'https://lh3.googleusercontent.com/-Zu_vZFIl9Ms/AAAAAAAAAAI/AAAAAAAAALk/2pPyCa-IKHg/s60-p-rw-no/photo.jpg') , f_MaterialImage46.element_0.style['height'] = '50' , f_MaterialImage46)) , $add_14(f_MaterialRow45, (f_MaterialLabel47 = new MaterialLabel , $setFontSize_1(f_MaterialLabel47.fontSizeMixin, '1.2em') , f_MaterialLabel47.element_0.innerHTML = 'Mark Kevin Baldemor' , $setFloat(f_MaterialLabel47, LEFT) , f_MaterialLabel47.element_0.style['marginTop'] = '20.0px' , $setFontWeight(f_MaterialLabel47, ($clinit_Style$FontWeight() , BOLD)) , f_MaterialLabel47)) , $add_14(f_MaterialRow45, (f_MaterialLabel48 = new MaterialLabel , f_MaterialLabel48.element_0.style['marginRight'] = '20.0px' , f_MaterialLabel48.element_0.innerHTML = '2d' , $setFloat(f_MaterialLabel48, RIGHT) , $setTextColor(f_MaterialLabel48, GREY) , f_MaterialLabel48.element_0.style['marginTop'] = '20.0px' , f_MaterialLabel48)) , f_MaterialRow45.element_0.style['padding'] = '12.0px' , f_MaterialRow45.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow45)) , $add_14(cardContent, (f_MaterialRow49 = new MaterialRow , $add_14(f_MaterialRow49, (f_MaterialLabel50 = new MaterialLabel , f_MaterialLabel50.element_0.innerHTML = 'Amazingly clear seas of the Philippines' , f_MaterialLabel50)) , $add_14(f_MaterialRow49, (f_MaterialRow51 = new MaterialRow , $add_14(f_MaterialRow51, (f_MaterialChip52 = new MaterialChip , f_MaterialChip52.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip52.span_0, '#philippines') , $add_14(f_MaterialChip52, f_MaterialChip52.span_0) , $setFloat(f_MaterialChip52, LEFT) , $setTextColor(f_MaterialChip52, BLACK) , f_MaterialChip52)) , $add_14(f_MaterialRow51, (f_MaterialChip53 = new MaterialChip , f_MaterialChip53.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip53.span_0, '#vacation') , $add_14(f_MaterialChip53, f_MaterialChip53.span_0) , $setFloat(f_MaterialChip53, LEFT) , $setTextColor(f_MaterialChip53, BLACK) , f_MaterialChip53)) , $add_14(f_MaterialRow51, (f_MaterialChip54 = new MaterialChip , f_MaterialChip54.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip54.span_0, '#holiday') , $add_14(f_MaterialChip54, f_MaterialChip54.span_0) , $setFloat(f_MaterialChip54, LEFT) , $setTextColor(f_MaterialChip54, BLACK) , f_MaterialChip54)) , $add_14(f_MaterialRow51, (f_MaterialChip55 = new MaterialChip , f_MaterialChip55.element_0.style['margin'] = '4.0px' , $setText_6(f_MaterialChip55.span_0, '#sea') , $add_14(f_MaterialChip55, f_MaterialChip55.span_0) , $setFloat(f_MaterialChip55, LEFT) , $setTextColor(f_MaterialChip55, BLACK) , f_MaterialChip55)) , f_MaterialRow51.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow51)) , f_MaterialRow49.element_0.style['padding'] = '20.0px' , f_MaterialRow49.element_0.style['marginBottom'] = '0.0px' , f_MaterialRow49)) , cardContent.element_0.style['padding'] = '0.0px' , this$static.owner.cardContent = cardContent , cardContent)) , $add_14(f_MaterialCard44, (f_MaterialCardImage56 = new MaterialCardImage , $add_26(f_MaterialCardImage56, (f_MaterialImage57 = new MaterialImage , $setUrl_3(f_MaterialImage57.imageMixin, 'https://lh3.googleusercontent.com/SgPPF0Bd5hkPRjb36VHPNay8nYGtprFwxSkbHprpZ65TitKXkVOVquPxPdlsoXKHCIdQ=w1366-h768-rw-no') , f_MaterialImage57)) , f_MaterialCardImage56)) , $add_14(f_MaterialCard44, (f_MaterialCardAction58 = new MaterialCardAction , $add_14(f_MaterialCardAction58, (f_MaterialRow59 = new MaterialRow , $add_14(f_MaterialRow59, (f_MaterialButton60 = new MaterialButton , $setBackgroundColor(f_MaterialButton60, GREY_LIGHTEN_2) , $setShadow_0((!f_MaterialButton60.shadowMixin && (f_MaterialButton60.shadowMixin = new ShadowMixin(f_MaterialButton60)) , f_MaterialButton60.shadowMixin), 0) , $setIconType(f_MaterialButton60, PLUS_ONE) , $setIconColor(f_MaterialButton60, GREY) , $setType_0(f_MaterialButton60, ($clinit_ButtonType() , FLOATING)) , $setFloat(f_MaterialButton60, LEFT) , f_MaterialButton60)) , $add_14(f_MaterialRow59, (f_MaterialLabel61 = new MaterialLabel , f_MaterialLabel61.element_0.innerHTML = '310' , $setFloat(f_MaterialLabel61, LEFT) , $setTextColor(f_MaterialLabel61, GREY) , f_MaterialLabel61.element_0.style['marginTop'] = '12.0px' , f_MaterialLabel61.element_0.style['marginLeft'] = '12.0px' , f_MaterialLabel61)) , $add_14(f_MaterialRow59, (f_MaterialLabel62 = new MaterialLabel , f_MaterialLabel62.element_0.innerHTML = '1000' , $setFloat(f_MaterialLabel62, RIGHT) , $setTextColor(f_MaterialLabel62, GREY) , f_MaterialLabel62.element_0.style['marginTop'] = '12.0px' , f_MaterialLabel62.element_0.style['marginLeft'] = '12.0px' , f_MaterialLabel62)) , $add_14(f_MaterialRow59, (f_MaterialButton63 = new MaterialButton , $setBackgroundColor(f_MaterialButton63, GREY_LIGHTEN_2) , $setShadow_0((!f_MaterialButton63.shadowMixin && (f_MaterialButton63.shadowMixin = new ShadowMixin(f_MaterialButton63)) , f_MaterialButton63.shadowMixin), 0) , $setIconType(f_MaterialButton63, SHARE) , $setIconColor(f_MaterialButton63, GREY) , $setType_0(f_MaterialButton63, FLOATING) , $setFloat(f_MaterialButton63, RIGHT) , f_MaterialButton63)) , f_MaterialRow59.element_0.style['margin'] = '12.0px' , f_MaterialRow59)) , $add_14(f_MaterialCardAction58, (f_MaterialCollection64 = new MaterialCollection , $add_14(f_MaterialCollection64, (f_MaterialCollectionItem65 = new MaterialCollectionItem , $add_14(f_MaterialCollectionItem65, (f_MaterialImage66 = new MaterialImage , f_MaterialImage66.element_0.style['width'] = '40px' , $setOn((!f_MaterialImage66.circleMixin && (f_MaterialImage66.circleMixin = new ToggleStyleMixin(f_MaterialImage66, 'circle')) , f_MaterialImage66.circleMixin), true) , $setUrl_3(f_MaterialImage66.imageMixin, 'http://materializecss.com/images/yuna.jpg') , f_MaterialImage66.element_0.style['height'] = '40px' , f_MaterialImage66)) , $add_14(f_MaterialCollectionItem65, (f_MaterialLabel67 = new MaterialLabel , f_MaterialLabel67.element_0.innerHTML = 'Yuna' , $setFontWeight(f_MaterialLabel67, BOLD) , f_MaterialLabel67)) , $add_14(f_MaterialCollectionItem65, (f_MaterialLabel68 = new MaterialLabel , f_MaterialLabel68.element_0.innerHTML = 'I grew up in the island of the Philippines. The water is clear. Some are not sandy. Water is just the right temperature.' , f_MaterialLabel68)) , $setType_5(f_MaterialCollectionItem65, ($clinit_CollectionType() , AVATAR)) , f_MaterialCollectionItem65)) , f_MaterialCollection64)) , f_MaterialCardAction58.element_0.style['padding'] = '0.0px' , f_MaterialCardAction58)) , f_MaterialCard44)) , $setGrid_0((!f_MaterialColumn43.gridMixin && (f_MaterialColumn43.gridMixin = new GridMixin(f_MaterialColumn43)) , f_MaterialColumn43.gridMixin), 'l6 m6 s12') , f_MaterialColumn43)) , f_MaterialRow41)) , $add_14(f_MaterialRow39, (f_PrettyPre69 = new PrettyPre , $setHTML_0(f_PrettyPre69, (sb_5 = new StringBuilder , sb_5.string += '\\u2003@UiHandler(\"btnLoader\")<br> void onShowLoaderSpecific(ClickEvent e) {<br> \\u2003Timer timer = new Timer() {<br> \\u2003\\u2003@Override<br> \\u2003\\u2003public void run() {<br> \\u2003\\u2003\\u2003MaterialLoader.showLoading(true, cardContent);<br> \\u2003\\u2003}<br> \\u2003};<br> \\u2003timer.schedule(2000);<br> }<br><br>  @UiHandler(\"btnProgress\")<br> void onShowProgressSpecific(ClickEvent e) {<br> \\u2003Timer timer = new Timer() {<br> \\u2003\\u2003@Override<br> \\u2003\\u2003public void run() {<br> \\u2003\\u2003\\u2003MaterialLoader.showProgress(true, cardContent);<br> \\u2003\\u2003}<br> \\u2003};<br> \\u2003timer.schedule(2000);<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre69.element_0, 'lang-java', true) , f_PrettyPre69)) , setStyleName(f_MaterialRow39.element_0, 'code', true) , f_MaterialRow39), $get_0(this$static.domId5Element));\n  return f_HTMLPanel1;\n}\n\nfunction LoaderView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LoaderView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LoaderView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new LoaderView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new LoaderView_BinderImpl$Widgets$4;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new LoaderView_BinderImpl$Widgets$5(this);\n  this.owner = owner;\n  this.style_0 = ($clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_18);\n  $ensureInjected_24(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n}\n\ndefineClass(1457, 1, {}, LoaderView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets', 1457);\nfunction LoaderView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1458, 1, $intern_67, LoaderView_BinderImpl$Widgets$1);\n_.onClick = function onClick_162(event_0){\n  $onShowLoaderSpecific(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/1', 1458);\nfunction LoaderView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1459, 1, $intern_67, LoaderView_BinderImpl$Widgets$2);\n_.onClick = function onClick_163(event_0){\n  $onShowProgressSpecific(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/2', 1459);\nfunction LoaderView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1460, 1, $intern_67, LoaderView_BinderImpl$Widgets$3);\n_.onClick = function onClick_164(event_0){\n  var t;\n  $clinit_MaterialLoader();\n  showLoading(true, ($clinit_RootPanel() , get_1(null)));\n  t = new LoaderView$3;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/3', 1460);\nfunction LoaderView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(1461, 1, $intern_67, LoaderView_BinderImpl$Widgets$4);\n_.onClick = function onClick_165(event_0){\n  var t;\n  $clinit_MaterialLoader();\n  showProgress(true, ($clinit_RootPanel() , get_1(null)));\n  t = new LoaderView$4;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/4', 1461);\nfunction LoaderView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1462, 1, $intern_67, LoaderView_BinderImpl$Widgets$5);\n_.onClick = function onClick_166(event_0){\n  $onShowNavBarProgress(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/5', 1462);\nvar style_18;\nfunction $ensureInjected_24(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    inject(($clinit_LocaleInfo() , '.B0JM1SC-u-a{width:200px;margin-bottom:10px}.B0JM1SC-u-b{padding-left:0!important}'));\n    return true;\n  }\n  return false;\n}\n\nfunction LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2025, 1, {}, LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_141(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2025);\nfunction $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_18 = new LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html8_0(arg0, arg1, arg2, arg3, arg4, arg5){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$) {\n    result0 = new LoaderPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$) {\n    result = new LoaderView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$;\n}\n\ndefineClass(747, 1, $intern_104);\n_.onSuccess_0 = function onSuccess_27(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
