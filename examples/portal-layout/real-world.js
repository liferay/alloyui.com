AUI().use(
  'aui-portal-layout',
  function(A) {
    var proxyNode = A.Node.create('<div class="aui-portal-layout-proxy"></div>');
    var DDM = A.DD.DDM;

    var portalLayout = new A.PortalLayout(
      {
        dragNodes: '.portlet',
        dropContainer: '#myPortalLayout',
        proxyNode: proxyNode
      }
    );

    //Create new constructor for Portlet adding widget
    var PortletItem = function() {
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
    A.extend(
      PortletItem,
      A.PortalLayout,
      {
        _getAppendNode: function() {
          var instance = this;
          instance.appendNode = DDM.activeDrag.get('node').clone();
          color = instance.appendNode.get('id');

          return instance.appendNode;
        }
      }
    );

    var portletList = new PortletItem();

    //Create new node which replaces clone and add drop plugin to new node
    var livePortlet;
    portletList.on(
      'drag:end',
      function(event) {
        var newPortlet = A.Node.create('<div class="portlet ' + color + '">New Portlet</div>');
        var dropConfig = {
          bubbleTargets: this,
          useShim: false
        };

        if (portletList.appendNode && portletList.appendNode.inDoc()) {
          portletList.appendNode.replace(newPortlet);
          var livePortlet = A.one('.' + color);
          livePortlet.plug(A.Plugin.Drop, dropConfig);
          livePortlet.drop.set('groups', ['portal-layout']);
        }
      }
    );
  }
);