
var LightBox = {

    init : function() {
        tinyMCEPopup.resizeToInnerSize();

        var lightboxForm = document.forms[0],
            inst = tinyMCEPopup.editor,
            elm = inst.selection.getNode();

        elm = inst.dom.getParent(elm, "A");
        if (elm != null && elm.nodeName == "A"){
            var lightbox_name = inst.dom.getAttrib(elm, 'data-lightbox');
            lightboxForm.elements["lightbox-name"].value = lightbox_name;
        }
    },

    apply : function() {
        tinyMCEPopup.execCommand("mceBeginUndoLevel");
        var lightboxForm = document.forms[0],
            inst = tinyMCEPopup.editor,
            elm = inst.selection.getNode(),
            val = lightboxForm.elements["lightbox-name"].value,
            parent,
            href;
      
        parent = inst.dom.getParent(elm, "A");
        if (parent == null || parent.nodeName != "A"){
            // We only have the <img> so we have to wrap it around an <a>
            // Only if we have a name for it
            if ((typeof(val) != "undefined") && (val != "")) {
                href = inst.dom.getAttrib(elm, 'src');
                tinyMCEPopup.execCommand("CreateLink", false, href.split("/@@images")[0], {skip_undo : 1});
            }
        }

        parent = inst.dom.getParent(elm, "A");
        if (parent != null && parent.nodeName == "A"){
            // It might happen that there was no name, so we didn't have
            // an <a> from before, neither was recently created
            if ((typeof(val) != "undefined") && (val != "")) {
                // We have a proper name and an <a>, just assign it
                inst.dom.setAttrib(parent, 'data-lightbox', val);
            } else {
                // No name was entered, but the <img> was wrapped with an <a>
                // already. so just remove the data attribute.
                inst.dom.setAttrib(parent, 'data-lightbox');
            }
        }
        inst.focus();
        inst.selection.select(elm);
        inst.selection.collapse(0);
        tinyMCEPopup.storeSelection();

        tinyMCEPopup.execCommand("mceEndUndoLevel");
        tinyMCEPopup.close();   
    }
};

tinyMCEPopup.onInit.add(LightBox.init, LightBox);
