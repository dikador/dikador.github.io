
(function () {
  const textBoxDrawing = function (fabricCanvas) {

    let inputValue = $('#inscription-input')[0].value;

    $('#textbox').click(function (e) {
      e.preventDefault();
      let textbox = new fabric.Textbox(inputValue, {
        width: 222,
        fontSize: 46,
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        fontFamily: "'Open Sans', sans-serif",
        id: 'textbox',
      });

      let objectSizeText = new fabric.Textbox(`Ш: мм`, {
        fontSize: 10,
        width: 140,
        textAlign: 'center',
        fill: '#009900',
        fontFamily: "'Open Sans', sans-serif",
        id: 'objectSizeText',
      });

      let objectSizeWrapper = new fabric.Rect({
        width: 140,
        height: 15,
        fill: '#ddfeda',
        stroke: '#009900',
        strokeWidth: 1,
        rx: 5,
        ry: 5,
        id: 'objectSizeWrapper'
      });


      let groupObjectSize = new fabric.Group([textbox, objectSizeWrapper, objectSizeText], {
        left: getRndInteger(100, 200),
        top: getRndInteger(100, 200),
      });

      fabricCanvas.add(groupObjectSize).setActiveObject(groupObjectSize);
      fabricCanvas.on({
        'object:scaling': handleScalingEvent
      });

      function handleScalingEvent(obj) {
        var text = obj.target.item(2),
          object = obj.target.item(1)
        group = obj.target,
          scaleX = group.width / (group.width * group.scaleX),
          scaleY = group.height / (group.height * group.scaleY);

        text.set('scaleX', scaleX);
        object.set('scaleX', scaleX);

        text.set('scaleY', scaleY);
        object.set('scaleY', scaleY);
      }

      fabricCanvas.requestRenderAll();
    });
  }
  window.ImageEditor.prototype.initializeTextBoxDrawing = textBoxDrawing;
})();
