$wnd.gwtmaterialdemo.runAsyncCallback30("function $clinit_ViewWithUiHandlers(){\n  $clinit_ViewWithUiHandlers = emptyMethod;\n  $ensureNamesAreInitialized(Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit);\n}\n\ndefineClass(888, 59, $intern_55);\nvar Lcom_gwtplatform_mvp_client_ViewWithUiHandlers_2_classLit = createForClass('com.gwtplatform.mvp.client', 'ViewWithUiHandlers', 888);\nfunction $getFragment_gwt_material_design_demo_client_resources(this$static){\n  !this$static.fieldFragment_gwt$material$design$demo$client$resources && (this$static.fieldFragment_gwt$material$design$demo$client$resources = new com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_58);\n  return this$static.fieldFragment_gwt$material$design$demo$client$resources;\n}\n\nfunction $setTarget_1(this$static){\n  $setAttribute(($clinit_DOM() , this$static.element), 'target', '_blank');\n}\n\nfunction Version(version, date, linkCore, linkAddins, linkThemes, color_0){\n  this.version = version;\n  this.date = date;\n  this.linkCore = linkCore;\n  this.linkAddins = linkAddins;\n  this.linkThemes = linkThemes;\n  this.color_0 = color_0;\n}\n\ndefineClass(151, 1, {151:1, 8:1}, Version);\nvar Lgwt_material_design_demo_client_application_dto_Version_2_classLit = createForClass('gwt.material.design.demo.client.application.dto', 'Version', 151);\nfunction $clinit_Version$VersionLink(){\n  $clinit_Version$VersionLink = emptyMethod;\n  CORE_1_5_SNAPSHOT = new Version$VersionLink('CORE_1_5_SNAPSHOT', 0, 'https://oss.sonatype.org/content/repositories/snapshots/com/github/gwtmaterialdesign/gwt-material/1.5.0-SNAPSHOT/');\n  CORE_1_4_1 = new Version$VersionLink('CORE_1_4_1', 1, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.4.1');\n  CORE_1_4 = new Version$VersionLink('CORE_1_4', 2, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.4');\n  CORE_1_3_3 = new Version$VersionLink('CORE_1_3_3', 3, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.3.3');\n  CORE_1_3_2 = new Version$VersionLink('CORE_1_3_2', 4, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.3.2');\n  CORE_1_3_1 = new Version$VersionLink('CORE_1_3_1', 5, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.3.1');\n  CORE_1_3 = new Version$VersionLink('CORE_1_3', 6, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.3');\n  CORE_1_2 = new Version$VersionLink('CORE_1_2', 7, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.2');\n  CORE_1 = new Version$VersionLink('CORE_1', 8, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material/1.0');\n  THEME_1_4 = new Version$VersionLink('THEME_1_4', 9, 'http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material-themes/1.4');\n  ADDINS_1_5_SNAPSHOT = new Version$VersionLink('ADDINS_1_5_SNAPSHOT', 10, 'https://oss.sonatype.org/content/repositories/snapshots/com/github/gwtmaterialdesign/gwt-material-addins/1.5-SNAPSHOT/');\n}\n\nfunction Version$VersionLink(enum$name, enum$ordinal, name_0){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.name_0 = name_0;\n}\n\nfunction values_56(){\n  $clinit_Version$VersionLink();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_demo_client_application_dto_Version$VersionLink_2_classLit, 1), $intern_6, 137, 0, [CORE_1_5_SNAPSHOT, CORE_1_4_1, CORE_1_4, CORE_1_3_3, CORE_1_3_2, CORE_1_3_1, CORE_1_3, CORE_1_2, CORE_1, THEME_1_4, ADDINS_1_5_SNAPSHOT]);\n}\n\ndefineClass(137, 21, {137:1, 8:1, 30:1, 21:1}, Version$VersionLink);\nvar ADDINS_1_5_SNAPSHOT, CORE_1, CORE_1_2, CORE_1_3, CORE_1_3_1, CORE_1_3_2, CORE_1_3_3, CORE_1_4, CORE_1_4_1, CORE_1_5_SNAPSHOT, THEME_1_4;\nvar Lgwt_material_design_demo_client_application_dto_Version$VersionLink_2_classLit = createForEnum('gwt.material.design.demo.client.application.dto', 'Version/VersionLink', 137, values_56);\nfunction GettingStartedPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n  dynamicCast(this.view, 1673);\n}\n\ndefineClass(664, 55, $intern_54, GettingStartedPresenter);\n_.onReveal = function onReveal_41(){\n  $loadAllVersions(dynamicCast(this.view, 1673));\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Getting Started', 'Learn how to easily start using GWT Material Design in your app.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedPresenter', 664);\nfunction $loadAllVersions(this$static){\n  var i, version, version$iterator, versions;\n  $clear_1(this$static.versionColaps);\n  i = 0;\n  for (version$iterator = new AbstractList$IteratorImpl((versions = new ArrayList , $add_35(versions, new Version('1.5.0-SNAPSHOT', 'Ongoing', ($clinit_Version$VersionLink() , CORE_1_5_SNAPSHOT).name_0, ADDINS_1_5_SNAPSHOT.name_0, THEME_1_4.name_0, 'deep-orange')) , $add_35(versions, new Version('1.4.1', 'January 2016', CORE_1_4_1.name_0, null, THEME_1_4.name_0, 'red')) , $add_35(versions, new Version('1.4', 'November 2015', CORE_1_4.name_0, null, THEME_1_4.name_0, 'purple')) , $add_35(versions, new Version('1.3.3', 'July 2015', CORE_1_3_3.name_0, null, null, 'pink')) , $add_35(versions, new Version('1.3.2', 'June 2015', CORE_1_3_2.name_0, null, null, 'brown')) , $add_35(versions, new Version('1.3.1', 'April 2015', CORE_1_3_1.name_0, null, null, 'red')) , $add_35(versions, new Version('1.3', 'April 2015', CORE_1_3.name_0, null, null, 'blue')) , $add_35(versions, new Version('1.2', 'April 2015', CORE_1_2.name_0, null, null, 'green')) , $add_35(versions, new Version('1.0', 'April 2015', CORE_1.name_0, null, null, 'amber')) , versions)); version$iterator.i < version$iterator.this$01_0.size_1();) {\n    version = (checkCriticalElement(version$iterator.i < version$iterator.this$01_0.size_1()) , dynamicCast(version$iterator.this$01_0.get_1(version$iterator.last = version$iterator.i++), 151));\n    $add_19(this$static.versionColaps, new VersionCollapsibleItem(version, i));\n    ++i;\n  }\n}\n\nfunction GettingStartedView(){\n  $clinit_ViewWithUiHandlers();\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_12(new GettingStartedView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(889, 888, {16:1, 1673:1}, GettingStartedView);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView', 889);\nfunction GettingStartedView_BinderImpl(){\n}\n\ndefineClass(1209, 1, {}, GettingStartedView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl', 1209);\nfunction $build_f_MaterialPanel1_12(this$static){\n  var f_MaterialPanel1, f_MaterialPanel2, f_MaterialPanel5, f_MaterialTitle7, f_MaterialRow8, f_MaterialRow15, f_MaterialPanel16, f_MaterialTitle21, f_MaterialLink22, f_MaterialTitle23, f_PrettyPre24, f_MaterialTitle25, f_PrettyPre26, f_MaterialPanel27, f_MaterialPanel30, f_MaterialPanel35, f_MaterialTitle3, btnMaven, f_PrettyPre4, sb, f_MaterialTitle6, btnDownloadGWTMaterial, f_MaterialColumn9, f_MaterialLabel10, f_MaterialColumn11, f_MaterialLabel12, f_MaterialLabel13, f_MaterialLabel14, versionColaps, f_MaterialTitle17, f_PrettyPre18, sb_0, f_MaterialTitle19, f_PrettyPre20, sb_1, sb_2, sb_3, f_MaterialTitle28, f_PrettyPre29, sb_4, f_MaterialTitle31, f_PrettyPre32, sb_5, f_MaterialTitle33, f_PrettyPre34, sb_6, f_MaterialRow36, f_MaterialColumn37, f_MaterialTitle38, f_MaterialImage39, btnDemoStarter, btnSourceStarter;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialPanel2 = new MaterialPanel , $add_13(f_MaterialPanel2, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Maven Repository') , $setText_9(f_MaterialTitle3.paragraph, 'We release a maven repository in order to improve the productivity of GWT Material.') , f_MaterialTitle3)) , $add_13(f_MaterialPanel2, (btnMaven = new MaterialLink , $setIconPosition(btnMaven, ($clinit_IconPosition() , LEFT_4)) , btnMaven.span_1.setText('http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material.') , $add_13(btnMaven, btnMaven.span_1) , $setTextColor_0((!btnMaven.colorsMixin_0 && (btnMaven.colorsMixin_0 = new ColorsMixin(btnMaven)) , btnMaven.colorsMixin_0), 'blue') , $setIconType(btnMaven, ($clinit_IconType() , LINK_1)) , $addDomHandler(btnMaven, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnMaven)) , $add_13(f_MaterialPanel2, (f_PrettyPre4 = new PrettyPre , $setHTML(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003&lt;dependency&gt;<br> \\u2003&lt;groupId&gt;com.github.gwtmaterialdesign&lt;/groupId&gt;<br> \\u2003&lt;artifactId&gt;gwt-material&lt;/artifactId&gt;<br> \\u2003&lt;version&gt;1.5.0-SNAPSHOT&lt;/version&gt;<br> &lt;/dependency&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre4.element), 'lang-xml', true) , setStyleName(f_PrettyPre4.element, 'z-depth-1', true) , f_PrettyPre4)) , f_MaterialPanel2));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel5 = new MaterialPanel , $add_13(f_MaterialPanel5, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Download the JAR (Alternative)') , $setText_9(f_MaterialTitle6.paragraph, 'If you are not using maven you can download the latest Jar Release easily and add it in your classpath.') , f_MaterialTitle6)) , $add_13(f_MaterialPanel5, (btnDownloadGWTMaterial = new MaterialButton , $setEnabled_3((!btnDownloadGWTMaterial.enabledMixin && (btnDownloadGWTMaterial.enabledMixin = new EnabledMixin(btnDownloadGWTMaterial)) , btnDownloadGWTMaterial.enabledMixin), false) , $setIconPosition(btnDownloadGWTMaterial, RIGHT_5) , btnDownloadGWTMaterial.span_1.setText('Download 1.5.0') , $add_13(btnDownloadGWTMaterial, btnDownloadGWTMaterial.span_1) , $setBackgroundColor_0((!btnDownloadGWTMaterial.colorsMixin_0 && (btnDownloadGWTMaterial.colorsMixin_0 = new ColorsMixin(btnDownloadGWTMaterial)) , btnDownloadGWTMaterial.colorsMixin_0), 'blue') , $setWaves(btnDownloadGWTMaterial, ($clinit_WavesType() , LIGHT)) , $setIconType(btnDownloadGWTMaterial, FILE_DOWNLOAD) , $addDomHandler(btnDownloadGWTMaterial, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnDownloadGWTMaterial)) , f_MaterialPanel5));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'Version Table') , $setText_9(f_MaterialTitle7.paragraph, 'You can view the hierarchy of versions of gwt-material here and also the supported version for addins and themes.') , f_MaterialTitle7));\n  $add_13(f_MaterialPanel1, (f_MaterialRow8 = new MaterialRow , $add_13(f_MaterialRow8, (f_MaterialColumn9 = new MaterialColumn , $add_13(f_MaterialColumn9, (f_MaterialLabel10 = new MaterialLabel , $setInnerHTML(f_MaterialLabel10.element, 'Version') , $setTextColor_0(f_MaterialLabel10.colorsMixin, 'grey') , $setGrid(f_MaterialLabel10.gridMixin, 'l6 m6 s5') , $setFontSize_0(f_MaterialLabel10.fontSizeMixin, '0.8em') , f_MaterialLabel10)) , $add_13(f_MaterialColumn9, (f_MaterialColumn11 = new MaterialColumn , $add_13(f_MaterialColumn11, (f_MaterialLabel12 = new MaterialLabel , $setInnerHTML(f_MaterialLabel12.element, 'Core') , $setTextColor_0(f_MaterialLabel12.colorsMixin, 'grey') , $setGrid(f_MaterialLabel12.gridMixin, 'l4 s4 m4') , $setFontSize_0(f_MaterialLabel12.fontSizeMixin, '0.8em') , f_MaterialLabel12)) , $add_13(f_MaterialColumn11, (f_MaterialLabel13 = new MaterialLabel , $setInnerHTML(f_MaterialLabel13.element, 'Addins') , $setTextColor_0(f_MaterialLabel13.colorsMixin, 'grey') , $setGrid(f_MaterialLabel13.gridMixin, 'l4 s4 m4') , $setFontSize_0(f_MaterialLabel13.fontSizeMixin, '0.8em') , f_MaterialLabel13)) , $add_13(f_MaterialColumn11, (f_MaterialLabel14 = new MaterialLabel , $setInnerHTML(f_MaterialLabel14.element, 'Themes') , $setTextColor_0(f_MaterialLabel14.colorsMixin, 'grey') , $setGrid(f_MaterialLabel14.gridMixin, 'l4 s4 m4') , $setFontSize_0(f_MaterialLabel14.fontSizeMixin, '0.8em') , f_MaterialLabel14)) , $setGrid((!f_MaterialColumn11.gridMixin_0 && (f_MaterialColumn11.gridMixin_0 = new GridMixin(f_MaterialColumn11)) , f_MaterialColumn11.gridMixin_0), 'l6 m6 s7') , f_MaterialColumn11)) , $setGrid((!f_MaterialColumn9.gridMixin_0 && (f_MaterialColumn9.gridMixin_0 = new GridMixin(f_MaterialColumn9)) , f_MaterialColumn9.gridMixin_0), 'l7 m7 s12') , f_MaterialColumn9)) , f_MaterialRow8));\n  $add_13(f_MaterialPanel1, (f_MaterialRow15 = new MaterialRow , $add_13(f_MaterialRow15, (versionColaps = new MaterialCollapsible , $setGrid((!versionColaps.gridMixin_0 && (versionColaps.gridMixin_0 = new GridMixin(versionColaps)) , versionColaps.gridMixin_0), 'l7 m7 s12') , versionColaps.element.style['padding'] = ($clinit_Style$Unit() , '0.0px') , this$static.owner.versionColaps = versionColaps , versionColaps)) , f_MaterialRow15));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel16 = new MaterialPanel , $add_13(f_MaterialPanel16, (f_MaterialTitle17 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle17.header), 'Configuring your module') , $setText_9(f_MaterialTitle17.paragraph, 'You will have to configure your App.gwt.xml file to inherit the Gwt Material Widget widget library. You can do it like this:') , f_MaterialTitle17)) , $add_13(f_MaterialPanel16, (f_PrettyPre18 = new PrettyPre , $setHTML(f_PrettyPre18, (sb_0 = new StringBuilder , sb_0.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialWithJQuery\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre18.element, 'lang-xml', true) , setStyleName(f_PrettyPre18.element, 'z-depth-1', true) , f_PrettyPre18)) , $add_13(f_MaterialPanel16, (f_MaterialTitle19 = new MaterialTitle , $setText_9(f_MaterialTitle19.paragraph, 'Here are the available modules for 1.4 release') , f_MaterialTitle19)) , $add_13(f_MaterialPanel16, (f_PrettyPre20 = new PrettyPre , $setHTML(f_PrettyPre20, (sb_1 = new StringBuilder , sb_1.string += '\\u2003- GwtMaterialDesign # Standard use with all resources (but will not load jQuery for you).<br> - GwtMaterialDesignDebug # Same as above but will load non-minified js and Source URL included for Chrome debugging<br> - GwtMaterialWithJQuery # Standard use with all resources and will also include loading jQuery<br> - GwtMaterialWithJQueryDebug # Same as but will load non-minified js and Source URL included for Chrome debugging<br> - GwtMaterialDesignBasic # Use without materialize.css file (but will not load jQuery for you).<br> - GwtMaterialBasicWithJQuery # Same as above but will also include loading jQuery<br> - GwtMaterialBasicWithJQueryDebug # Same as above but with non-minified js and Source URL included for Chrome debugging.<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre20.element, 'lang-yaml', true) , setStyleName(f_PrettyPre20.element, 'z-depth-1', true) , f_PrettyPre20)) , $setScrollspy((!f_MaterialPanel16.scrollspyMixin && (f_MaterialPanel16.scrollspyMixin = new ScrollspyMixin(f_MaterialPanel16)) , f_MaterialPanel16.scrollspyMixin), 'Configuring Your Module') , f_MaterialPanel16));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle21 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle21.header), 'Theming') , $setText_9(f_MaterialTitle21.paragraph, 'We created another project for gwtmaterial themes .See below the link of the repo.') , f_MaterialTitle21));\n  $add_13(f_MaterialPanel1, (f_MaterialLink22 = new MaterialLink , $setIconPosition(f_MaterialLink22, LEFT_4) , f_MaterialLink22.span_1.setText('Gwt Material Themes Github Repo') , $add_13(f_MaterialLink22, f_MaterialLink22.span_1) , $setTextColor_0((!f_MaterialLink22.colorsMixin_0 && (f_MaterialLink22.colorsMixin_0 = new ColorsMixin(f_MaterialLink22)) , f_MaterialLink22.colorsMixin_0), 'blue') , $setAttribute(f_MaterialLink22.element, 'target', '_blank') , $setAttribute(f_MaterialLink22.element, 'href', 'https://github.com/GwtMaterialDesign/gwt-material-themes') , $setIconType(f_MaterialLink22, LINK_1) , f_MaterialLink22));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle23 = new MaterialTitle , $setText_9(f_MaterialTitle23.paragraph, 'First: Make sure you are using GwtMaterialDesignBasic module (This will not load the materialize.css default file allowing you to customize your design.)') , f_MaterialTitle23));\n  $add_13(f_MaterialPanel1, (f_PrettyPre24 = new PrettyPre , $setHTML(f_PrettyPre24, (sb_2 = new StringBuilder , sb_2.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialDesignBasic\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre24.element, 'lang-xml', true) , setStyleName(f_PrettyPre24.element, 'z-depth-1', true) , f_PrettyPre24));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle25 = new MaterialTitle , $setText_9(f_MaterialTitle25.paragraph, 'Second: Checkout the theme project and add it to your build path. And define it on your app.gwt.xml file.') , f_MaterialTitle25));\n  $add_13(f_MaterialPanel1, (f_PrettyPre26 = new PrettyPre , $setHTML(f_PrettyPre26, (sb_3 = new StringBuilder , sb_3.string += '&lt;inherits name=\"gwt.material.design.themes.GwtMaterialThemeBlue\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre26.element, 'lang-xml', true) , setStyleName(f_PrettyPre26.element, 'z-depth-1', true) , f_PrettyPre26));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel27 = new MaterialPanel , $add_13(f_MaterialPanel27, (f_MaterialTitle28 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle28.header), 'Responsive Design') , $setText_9(f_MaterialTitle28.paragraph, 'Add meta tag for responsive design on Mobile devices in your gwt-app.html') , f_MaterialTitle28)) , $add_13(f_MaterialPanel27, (f_PrettyPre29 = new PrettyPre , $setHTML(f_PrettyPre29, (sb_4 = new StringBuilder , sb_4.string += '&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre29.element, 'lang-xml', true) , setStyleName(f_PrettyPre29.element, 'z-depth-1', true) , f_PrettyPre29)) , f_MaterialPanel27));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel30 = new MaterialPanel , $add_13(f_MaterialPanel30, (f_MaterialTitle31 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle31.header), 'UiBinder usage') , $setText_9(f_MaterialTitle31.paragraph, \"Assuming that you're using UIBinder, add the following namespace to the <ui:UIBinder> element:\") , f_MaterialTitle31)) , $add_13(f_MaterialPanel30, (f_PrettyPre32 = new PrettyPre , $setHTML(f_PrettyPre32, (sb_5 = new StringBuilder , sb_5.string += 'xmlns:m=\"urn:import:gwt.material.design.client.ui\"' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre32.element, 'lang-xml', true) , setStyleName(f_PrettyPre32.element, 'z-depth-1', true) , f_PrettyPre32)) , $add_13(f_MaterialPanel30, (f_MaterialTitle33 = new MaterialTitle , $setText_9(f_MaterialTitle33.paragraph, 'Then you can easily use the m namespace in your widget design, like MaterialButton:') , f_MaterialTitle33)) , $add_13(f_MaterialPanel30, (f_PrettyPre34 = new PrettyPre , $setHTML(f_PrettyPre34, (sb_6 = new StringBuilder , sb_6.string += '&lt;m:MaterialButton text=\"Button\" waves=\"DEFAULT\" backgroundColor=\"white\" textColor=\"black\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html_0) , setStyleName(f_PrettyPre34.element, 'lang-xml', true) , setStyleName(f_PrettyPre34.element, 'z-depth-1', true) , f_PrettyPre34)) , f_MaterialPanel30));\n  $add_13(f_MaterialPanel1, (f_MaterialPanel35 = new MaterialPanel , $add_13(f_MaterialPanel35, (f_MaterialRow36 = new MaterialRow , $add_13(f_MaterialRow36, (f_MaterialColumn37 = new MaterialColumn , $add_13(f_MaterialColumn37, (f_MaterialTitle38 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle38.header), 'Starter Template') , $setText_9(f_MaterialTitle38.paragraph, 'You can copy and paste the UI Binder Code of this starter template into your app to know how GWT Material works with basic Nav Bar, Side Bar, Fixed Footer, and Container works.') , f_MaterialTitle38)) , $add_13(f_MaterialColumn37, (f_MaterialImage39 = new MaterialImage , $setResource_1(f_MaterialImage39, (new MaterialResources_default_InlineClientBundleGenerator_0 , $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator_0() , starter)) , $setType_8(f_MaterialImage39, ($clinit_ImageType() , MATERIALBOXED)) , f_MaterialImage39)) , $add_13(f_MaterialColumn37, (btnDemoStarter = new MaterialButton , $setIconPosition(btnDemoStarter, RIGHT_5) , btnDemoStarter.span_1.setText('Demo') , $add_13(btnDemoStarter, btnDemoStarter.span_1) , $setIconType(btnDemoStarter, SEARCH_0) , $addDomHandler(btnDemoStarter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnDemoStarter)) , $add_13(f_MaterialColumn37, (btnSourceStarter = new MaterialButton , $setIconPosition(btnSourceStarter, RIGHT_5) , btnSourceStarter.span_1.setText('Source') , $add_13(btnSourceStarter, btnSourceStarter.span_1) , $setIconType(btnSourceStarter, FILE_DOWNLOAD) , $addDomHandler(btnSourceStarter, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnSourceStarter)) , $setGrid((!f_MaterialColumn37.gridMixin_0 && (f_MaterialColumn37.gridMixin_0 = new GridMixin(f_MaterialColumn37)) , f_MaterialColumn37.gridMixin_0), 's12 m6 l6') , f_MaterialColumn37)) , f_MaterialRow36)) , f_MaterialPanel35));\n  return f_MaterialPanel1;\n}\n\nfunction GettingStartedView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new GettingStartedView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new GettingStartedView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new GettingStartedView_BinderImpl$Widgets$3;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new GettingStartedView_BinderImpl$Widgets$4;\n  this.owner = owner;\n}\n\ndefineClass(1210, 1, {}, GettingStartedView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets', 1210);\nfunction GettingStartedView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1211, 1, $intern_63, GettingStartedView_BinderImpl$Widgets$1);\n_.onClick = function onClick_146(event_0){\n  open_0('http://mvnrepository.com/artifact/com.github.gwtmaterialdesign/gwt-material', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/1', 1211);\nfunction GettingStartedView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(1212, 1, $intern_63, GettingStartedView_BinderImpl$Widgets$2);\n_.onClick = function onClick_147(event_0){\n  open_0('http://gwtmaterialdesign.github.io/gwt-material-template/snapshot/', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/2', 1212);\nfunction GettingStartedView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1213, 1, $intern_63, GettingStartedView_BinderImpl$Widgets$3);\n_.onClick = function onClick_148(event_0){\n  open_0('https://github.com/GwtMaterialDesign/gwt-material-template/blob/master/src/main/java/gwt/material/starter/client/application/ApplicationView.ui.xml', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/3', 1213);\nfunction GettingStartedView_BinderImpl$Widgets$4(){\n}\n\ndefineClass(1214, 1, $intern_63, GettingStartedView_BinderImpl$Widgets$4);\n_.onClick = function onClick_149(event_0){\n  open_0('http://central.maven.org/maven2/com/github/gwtmaterialdesign/gwt-material/1.4/gwt-material-1.4.jar', '_blank', '');\n}\n;\nvar Lgwt_material_design_demo_client_application_gettingstarted_GettingStartedView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted', 'GettingStartedView_BinderImpl/Widgets/4', 1214);\nfunction $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$) {\n    result = new GettingStartedPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$) {\n    result = new GettingStartedView((new GettingStartedView_BinderImpl , $get_Key$type$gwt$material$design$demo$client$resources$MaterialConstants$_annotation$$none$$($getFragment_gwt_material_design_demo_client_resources(this$static.injector))));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedView$_annotation$$none$$;\n}\n\ndefineClass(598, 1, $intern_79);\n_.onSuccess_0 = function onSuccess_29(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$gettingstarted$GettingStartedPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nfunction VersionCollapsibleItem(version, index_0){\n  $initWidget(this, $build_colapsItem(new VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl$Widgets(this)));\n  $setText_7(this.lblVersion, version.version);\n  $setText_7(this.lblDate, version.date);\n  $setBackgroundColor(this.btnCore, version.color_0);\n  $setBackgroundColor(this.btnAddins, version.color_0);\n  $setBackgroundColor(this.btnThemes, version.color_0);\n  if (version.linkCore == null) {\n    $setEnabled_0(this.btnCore);\n  }\n   else {\n    $setHref(this.btnCore, version.linkCore);\n    $setTarget_1(this.btnCore);\n  }\n  if (version.linkAddins == null) {\n    $setEnabled_0(this.btnAddins);\n  }\n   else {\n    $setHref(this.btnAddins, version.linkAddins);\n    $setTarget_1(this.btnAddins);\n  }\n  if (version.linkThemes == null) {\n    $setEnabled_0(this.btnThemes);\n  }\n   else {\n    $setHref(this.btnThemes, version.linkThemes);\n    $setTarget_1(this.btnThemes);\n  }\n  index_0 % 2 == 0 && $setBackgroundColor(this.colapsItem, 'grey lighten-4');\n}\n\ndefineClass(1583, $intern_27, $intern_28, VersionCollapsibleItem);\nvar Lgwt_material_design_demo_client_application_gettingstarted_version_VersionCollapsibleItem_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted.version', 'VersionCollapsibleItem', 1583);\nfunction $build_colapsItem(this$static){\n  var colapsItem, f_MaterialRow1, f_MaterialColumn2, lblVersion, lblDate, f_MaterialColumn3, f_MaterialColumn4, f_MaterialColumn5, f_MaterialColumn6, btnCore, btnAddins, btnThemes;\n  colapsItem = new MaterialCollapsibleItem;\n  $add_22(colapsItem, (f_MaterialRow1 = new MaterialRow , $add_13(f_MaterialRow1, (f_MaterialColumn2 = new MaterialColumn , $add_13(f_MaterialColumn2, (lblVersion = new MaterialLabel , $setFontSize_0(lblVersion.fontSizeMixin, '1.2em') , this$static.owner.lblVersion = lblVersion , lblVersion)) , $add_13(f_MaterialColumn2, (lblDate = new MaterialLabel , $setTextColor_0(lblDate.colorsMixin, 'grey') , $setFontSize_0(lblDate.fontSizeMixin, '0.9em') , this$static.owner.lblDate = lblDate , lblDate)) , $setGrid((!f_MaterialColumn2.gridMixin_0 && (f_MaterialColumn2.gridMixin_0 = new GridMixin(f_MaterialColumn2)) , f_MaterialColumn2.gridMixin_0), 'l6 m6 s5') , f_MaterialColumn2)) , $add_13(f_MaterialRow1, (f_MaterialColumn3 = new MaterialColumn , $add_13(f_MaterialColumn3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (btnCore = new MaterialAnchorButton , $setBackgroundColor_0((!btnCore.colorsMixin_0 && (btnCore.colorsMixin_0 = new ColorsMixin(btnCore)) , btnCore.colorsMixin_0), 'deep-orange') , $cssSetOpacity(($clinit_DOM() , btnCore.element).style, 1) , $setType_0(btnCore, ($clinit_ButtonType() , FLOATING)) , $setIconType(btnCore, ($clinit_IconType() , POLYMER)) , this$static.owner.btnCore = btnCore , btnCore)) , $setGrid((!f_MaterialColumn4.gridMixin_0 && (f_MaterialColumn4.gridMixin_0 = new GridMixin(f_MaterialColumn4)) , f_MaterialColumn4.gridMixin_0), 'l4 m4 s4') , f_MaterialColumn4)) , $add_13(f_MaterialColumn3, (f_MaterialColumn5 = new MaterialColumn , $add_13(f_MaterialColumn5, (btnAddins = new MaterialAnchorButton , $setBackgroundColor_0((!btnAddins.colorsMixin_0 && (btnAddins.colorsMixin_0 = new ColorsMixin(btnAddins)) , btnAddins.colorsMixin_0), 'deep-orange') , $cssSetOpacity(btnAddins.element.style, 1) , $setType_0(btnAddins, FLOATING) , $setIconType(btnAddins, EXTENSION) , this$static.owner.btnAddins = btnAddins , btnAddins)) , $setGrid((!f_MaterialColumn5.gridMixin_0 && (f_MaterialColumn5.gridMixin_0 = new GridMixin(f_MaterialColumn5)) , f_MaterialColumn5.gridMixin_0), 'l4 m4 s4') , f_MaterialColumn5)) , $add_13(f_MaterialColumn3, (f_MaterialColumn6 = new MaterialColumn , $add_13(f_MaterialColumn6, (btnThemes = new MaterialAnchorButton , $setBackgroundColor_0((!btnThemes.colorsMixin_0 && (btnThemes.colorsMixin_0 = new ColorsMixin(btnThemes)) , btnThemes.colorsMixin_0), 'deep-orange') , $cssSetOpacity(btnThemes.element.style, 1) , $setType_0(btnThemes, FLOATING) , $setIconType(btnThemes, PALETTE) , this$static.owner.btnThemes = btnThemes , btnThemes)) , $setGrid((!f_MaterialColumn6.gridMixin_0 && (f_MaterialColumn6.gridMixin_0 = new GridMixin(f_MaterialColumn6)) , f_MaterialColumn6.gridMixin_0), 'l4 m4 s4') , f_MaterialColumn6)) , $setGrid((!f_MaterialColumn3.gridMixin_0 && (f_MaterialColumn3.gridMixin_0 = new GridMixin(f_MaterialColumn3)) , f_MaterialColumn3.gridMixin_0), 'l6 m6 s7') , f_MaterialColumn3)) , f_MaterialRow1.element.style['marginBottom'] = ($clinit_Style$Unit() , '0.0px') , undefined , f_MaterialRow1.element.style['padding'] = '12.0px' , undefined , f_MaterialRow1));\n  this$static.owner.colapsItem = colapsItem;\n  return colapsItem;\n}\n\nfunction VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl$Widgets(owner){\n  var style;\n  this.owner = owner;\n  style = (new VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_19);\n  $ensureInjected_24(style);\n}\n\ndefineClass(1616, 1, {}, VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_gettingstarted_version_VersionCollapsibleItem_1VersionCollapsibleItemUiBinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted.version', 'VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl/Widgets', 1616);\nfunction VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1667, 1, {}, VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_19;\nvar Lgwt_material_design_demo_client_application_gettingstarted_version_VersionCollapsibleItem_1VersionCollapsibleItemUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted.version', 'VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 1667);\nfunction $ensureInjected_24(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1668, 1, {}, VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_39(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_gettingstarted_version_VersionCollapsibleItem_1VersionCollapsibleItemUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.gettingstarted.version', 'VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1668);\nfunction $clinit_VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_19 = new VersionCollapsibleItem_VersionCollapsibleItemUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction MaterialConstants_(){\n}\n\ndefineClass(1215, 1, {}, MaterialConstants_);\nvar Lgwt_material_design_demo_client_resources_MaterialConstants_1_2_classLit = createForClass('gwt.material.design.demo.client.resources', 'MaterialConstants_', 1215);\nvar starter;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$starterInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator_0();\n  starter = new ImageResourcePrototype('starter', ($clinit_UriUtils() , new SafeUriString(externalImage20)), 1599, 789);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$resources$MaterialConstants$_annotation$$none$$(){\n  var created;\n  created = new MaterialConstants_;\n  return created;\n}\n\nfunction com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_58(){\n}\n\ndefineClass(679, 1, {}, com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment_58);\nvar Lgwt_material_design_demo_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2_classLit = createForClass('gwt.material.design.demo.client.resources', 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', 679);\n$entry(onLoad_0)(30);\n\n//# sourceURL=gwtmaterialdemo-30.js\n")