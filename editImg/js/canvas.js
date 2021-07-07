/**
 * Canvas section management of image editor
 */
(function () {
  'use strict';
  var canvas = function () {
    try {
      $(`${this.containerSelector} .main-panel`).append(`<div class="canvas-holder" id="canvas-holder"><div class="content"><canvas id="c"></canvas></div></div>`);
      let fabricCanvas = new fabric.Canvas('c').setDimensions({
        width: 620,
        height: 877,

        allowTouchScrolling: true
      });

      // var disableScroll = function () {
      //   fabricCanvas.allowTouchScrolling = false;
      // };

      // var enableScroll = function () {
      //   fabricCanvas.allowTouchScrolling = true;
      // };

      // fabricCanvas.on('selection:created', fabricCanvas.disableScroll);
      // fabricCanvas.on('selection:cleared', fabricCanvas.enableScroll);



      $('.formatList').bind('change', function (e) {
        const formatList = document.querySelector('.formatList:checked').value;

        if (formatList === 'a4') {
          fabricCanvas.setDimensions({
            width: fabric.util.parseUnit('210mm'),
            height: fabric.util.parseUnit('297mm'),
            allowTouchScrolling: true
          })
        }

        if (formatList === 'a5') {
          fabricCanvas.setDimensions({
            width: fabric.util.parseUnit('148mm'),
            height: fabric.util.parseUnit('210mm')
          })
        }
      });

      $('.formatList').trigger('change');

      fabricCanvas.originalW = fabricCanvas.width;
      fabricCanvas.originalH = fabricCanvas.height;


      // retrieve active selection to react state
      fabricCanvas.on('selection:created', (e) => this.setActiveSelection(e.target))
      fabricCanvas.on('selection:updated', (e) => this.setActiveSelection(e.target))
      fabricCanvas.on('selection:cleared', (e) => this.setActiveSelection(null))


      // snap to an angle on rotate if shift key is down
      fabricCanvas.on('object:rotating', (e) => {
        if (e.e.shiftKey) {
          e.target.snapAngle = 15;
        } else {
          e.target.snapAngle = false;
        }
      });


      fabricCanvas.on('object:scaling', () => {
        for (let i = 0; i < this.activeSelection._objects.length; i++) {
          const element = this.activeSelection._objects[i];
          if (element.id === 'objectSizeText' || this.activeSelection.id === 'cloneObjectText' || this.activeSelection.id === 'cloneObjectBlock') {
            let objectSizeWidth = (this.activeSelection.width * this.activeSelection.scaleX / 3.75).toFixed(2);
            let objectSizeHeight = (this.activeSelection.height * this.activeSelection.scaleY / 3.75).toFixed(2);

            if (this.activeSelection.id === 'cloneObjectText' || this.activeSelection.id === 'cloneObjectBlock') {
              this.activeSelection._objects[2].text = `Ш:${objectSizeWidth}мм * В: ${objectSizeHeight}мм`;
            } else {
              element.text = `Ш:${objectSizeWidth}мм * В: ${objectSizeHeight}мм`;
            }
          }
        }
      });

      fabricCanvas.on('object:modified', () => {
        let currentState = this.canvas.toJSON();
        this.history.push(JSON.stringify(currentState));
      });

      const savedCanvas = saveInBrowser.load('canvasEditor');
      if (savedCanvas) {
        fabricCanvas.loadFromJSON(savedCanvas, fabricCanvas.renderAll.bind(fabricCanvas));
      }

      // move objects with arrow keys
      (() => document.addEventListener('keydown', (e) => {
        const key = e.which || e.keyCode;
        let activeObject;

        if (document.querySelectorAll('textarea:focus, input:focus').length > 0) return;

        if (key === 37 || key === 38 || key === 39 || key === 40) {
          e.preventDefault();
          activeObject = fabricCanvas.getActiveObject();
          if (!activeObject) {
            return;
          }
        }

        if (key === 37) {
          activeObject.left -= 1;
        } else if (key === 39) {
          activeObject.left += 1;
        } else if (key === 38) {
          activeObject.top -= 1;
        } else if (key === 40) {
          activeObject.top += 1;
        }

        if (key === 37 || key === 38 || key === 39 || key === 40) {
          activeObject.setCoords();
          fabricCanvas.renderAll();
          fabricCanvas.trigger('object:modified');
        }
      }))();

      (() => {
        document.addEventListener('keydown', (e) => {
          const key = e.which || e.keyCode;
          if (
            key === 46 &&
            document.querySelectorAll('textarea:focus, input:focus').length === 0
          ) {

            fabricCanvas.getActiveObjects().forEach(obj => {
              fabricCanvas.remove(obj);
            });

            fabricCanvas.discardActiveObject().requestRenderAll();
            fabricCanvas.trigger('object:modified')
          }
        })
      })();

      setTimeout(() => {
        let currentState = fabricCanvas.toJSON();
        this.history.push(JSON.stringify(currentState));
      }, 1000);


      // function scrollContents() {
      //   let $dump = $('.container-sm'),
      //     curScroll = $(window).scrollTop(),
      //     curHeight = $dump.height(), newHeight;
      //   // $(`.tab-content .toolpanel`).slideDown(250);
      //   $(`.tab-content .toolpanel`)[0].style.display = 'block';

      //   newHeight = $dump.height();

      //   scrollTo(0, curScroll + (newHeight - curHeight));
      // }

      // fabricCanvas.on('selection:created', (e) => {
      //   return scrollContents();
      // });

      return fabricCanvas;
    } catch (_) {
      console.error("can't create canvas instance");
      return null;
    }
  }


  window.ImageEditor.prototype.initializeCanvas = canvas;
})();
