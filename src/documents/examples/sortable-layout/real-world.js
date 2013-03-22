YUI().use('aui-sortable-layout', function (Y) {
  var proxyNode = Y.Node.create('<div class="aui-sortable-layout-proxy"></div>');
  var DDM = Y.DD.DDM;

  var sortableLayout = new Y.SortableLayout({
    dragNodes: '.portlet',
    dropContainer: '#mySortableLayout',
    proxyNode: proxyNode
  });

  // Create new constructor for Portlet adding widget
  var PortletItem = function () {
    PortletItem.superclass.constructor.apply(this, arguments);
  };

  PortletItem.NAME = 'PortletItem';

  PortletItem.ATTRS = {
    dd: {
      value: false
    },
    delegateConfig: {
      value: {
        nodes: '.portlet-item',
        target: false
      }
    },
    itemContainer: {
      value: '.sidebar'
    },
    proxyNode: {
      value: proxyNode
    }
  };

  //Extend widget to clone itself when dragged
  var color = '';

  Y.extend(PortletItem, Y.SortableLayout, {
    _getAppendNode: function () {
      var instance = this;

      instance.appendNode = DDM.activeDrag.get('node').clone();
      color = instance.appendNode.get('id');

      return instance.appendNode;
    }
  });

  var portletList = new PortletItem();

  //Create new node which replaces clone and add drop plugin to new node
  var livePortlet;

  portletList.on('drag:end', function (event) {
    var newPortlet = Y.Node.create('<div class="portlet ' + color + '">New Portlet</div>');

    var dropConfig = {
      bubbleTargets: this,
      useShim: false
    };

    if (portletList.appendNode && portletList.appendNode.inDoc()) {
      portletList.appendNode.replace(newPortlet);

      var livePortlet = Y.one('.' + color);

      livePortlet.plug(Y.Plugin.Drop, dropConfig);
      livePortlet.drop.set('groups', ['portal-layout']);
    }
  });
});