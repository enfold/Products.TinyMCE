(function(){tinymce.create("tinymce.plugins.PloneBrowserPlugin",{init:function(a,b){a.addCommand("mcePloneImage",function(){var c=a.dom.getAttrib(a.selection.getNode(),"class");if(c&&c.indexOf("mceItem")!==-1){return}a.windowManager.open({file:b+"/plonebrowser.htm?ploneimage=1",width:820+parseInt(a.getLang("plonebrowser.delta_width",0),10),height:540+parseInt(a.getLang("plonebrowser.delta_height",0),10),inline:1},{plugin_url:b})});a.addCommand("mcePloneLink",function(){var c=a.selection;if(c.isCollapsed()&&!a.dom.getParent(c.getNode(),"A")){return}a.windowManager.open({file:b+"/plonebrowser.htm?plonelink=1",width:820+parseInt(a.getLang("plonebrowser.delta_width",0)),height:540+parseInt(a.getLang("plonebrowser.delta_height",0)),inline:1},{plugin_url:b})});a.addButton("image",{title:"advanced.image_desc",cmd:"mcePloneImage"});a.addButton("link",{title:"advanced.link_desc",cmd:"mcePloneLink"});a.addShortcut("ctrl+k","advanced.link_desc","mcePloneLink")},getInfo:function(){return{longname:"Plone browser",author:"Plone Foundation",authorurl:"http://plone.org",infourl:"http://plone.org/products/tinymce",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("plonebrowser",tinymce.plugins.PloneBrowserPlugin)}());
