/**
 * Plone lightbox Plugin
 *
 * @author Franco Pellegrini
 */

(function() {
    tinymce.create('tinymce.plugins.PloneLightboxPlugin', {
        init : function(ed, url) {
            // Register commands
            ed.addCommand('mcePloneLightbox', function() {
                // Internal image object like a flash placeholder
                if (ed.dom.getAttrib(ed.selection.getNode(), 'class').indexOf('mceItem') != -1)
                    return;

                ed.windowManager.open({
                    file : url + '/plonelightbox.htm',
                    width : 300 + parseInt(ed.getLang('plonelightbox.delta_width', 0)),
                    height : 120 + parseInt(ed.getLang('plonelightbox.delta_height', 0)),
                    inline : 1
                }, {
                    plugin_url : url
                });
            });

            // Register buttons
            ed.addButton('lightbox', {
                title : 'Lightbox',
                cmd : 'mcePloneLightbox'
            });
        },

        getInfo : function() {
            return {
                longname : 'Plone Lightbox',
                author : 'Franco Pellegrini',
                authorurl : 'http://plone.org',
                infourl : 'http://plone.org/products/tinymce',
                version : tinymce.majorVersion + "." + tinymce.minorVersion
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('plonelightbox', tinymce.plugins.PloneLightboxPlugin);
})();