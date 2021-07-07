/**
 * The Core of Image Editor
 */



(function () {
  'use strict';

  /**
   * Image Editor class
   * @param {String} containerSelector jquery selector for image editor container
   * @param {Array} buttons define toolbar buttons 
   * @param {Array} shapes define shapes
   */

  var ImageEditor = function (containerSelector, buttons, shapes) {
    this.containerSelector = containerSelector;
    this.containerEl = $(containerSelector);

    this.buttons = buttons;
    this.shapes = shapes;

    this.containerEl.addClass('default-container');

    this.canvas = null;
    this.activeTool = null;
    this.activeSelection = null;

    /**
     * Get current state of canvas as object
     * @returns {Object}
     */
    this.getCanvasJSON = () => {
      return this.canvas.toJSON();
    }

    /**
     * Set canvas status by object
     * @param {Object} current the object of fabric canvas status
     */
    this.setCanvasJSON = (current) => {
      current && this.canvas.loadFromJSON(JSON.parse(current), this.canvas.renderAll.bind(this.canvas));
    }



    this.setActiveTool = (id) => {
      $('#menu-inscription-tab').removeClass('active');
      $('#menu-inscription').removeClass('active');
      this.activeTool = id;

      let objsInCanvas = this.canvas.getObjects();

      for (let i = 0; i < objsInCanvas.length; i++) {
        let allObject = objsInCanvas[i];
        $(allObject._objects).each(function (index, element) {
          if (element.id === "objectSizeWrapper") {
            element.set({
              width: 0,
              height: 0,
            })
          }

          if (element.id === "objectSizeText") {
            element.set({
              width: 0,
              fontSize: 0
            });
          }
        });
      }

      // $(`.tab-content .toolpanel`).slideUp(250);
      $(`.open__selected`).removeClass('active');

      if (id !== 'select' || (id == 'select' && this.activeSelection)) {
        if (id === 'select') {
          for (let i = 0; i < this.activeSelection._objects.length; i++) {
            const element = this.activeSelection._objects[i];

            let objectSizeWidth = (this.activeSelection.width * this.activeSelection.scaleX / 3.75).toFixed(2);
            let objectSizeHeight = (this.activeSelection.height * this.activeSelection.scaleY / 3.75).toFixed(2);

            if (element.id === 'objectSizeText') {
              let objectSizeText = element;
              objectSizeText.text = `Ш:${objectSizeWidth}мм * В: ${objectSizeHeight}мм`;
              objectSizeText.left = 0;
              objectSizeText.top = (this.activeSelection.height / 2) - 12;

              objectSizeText.set({
                fontSize: 10,
                width: 140,
              })
            }

            if (element.id == 'objectSizeWrapper') {
              let objectSizeBlock = element;
              objectSizeBlock.left = 0;
              objectSizeBlock.top = (this.activeSelection.height / 2) - 12.5;


              objectSizeBlock.set({
                height: 15,
                width: 140,
              })
            }

            if (element.id === 'textbox' || this.activeSelection.id === 'cloneObjectText') {
              $('#inscription-input')[0].value = element.text;

              if (this.activeSelection.id === 'cloneObjectText') {
                $('#inscription-input')[0].value = this.activeSelection._objects[0].text;
              }

              $('button.nav-link.active').removeClass('active');
              $('.tabq').removeClass('active show');
              $('#menu-inscription').addClass('active');
              $('#menu-inscription-tab').addClass('active');

              for (let index = 0; index < $('.sp-thumb-el').length; index++) {
                let colorIndex = $('.sp-thumb-el')[index];
                let colorI = colorIndex.title;
                let thisColor = this.activeSelection._objects[0].fill

                if (thisColor === colorI) {
                  thisColor = colorI;
                  $('.sp-thumb-el').removeClass('sp-thumb-active');
                  $(colorIndex).addClass('sp-thumb-active');
                }
              }

              for (let i = 0; i < $('.align-text').length; i++) {
                const element = $('.align-text')[i];
                if (this.activeSelection._objects[0].__dimensionAffectingProps.textAlign == element.value) {
                  element.checked = true;
                }
              }

              $(`.tab-content .toolpanel#select-panel`).attr('class', `toolpanel visible type-textbox`);
              // $(`.tab-content .toolpanel`).slideDown(250);

              $(`.open__selected`).addClass('active');
            }
          }
        }
      }


      if (id !== 'select') {
        this.canvas.discardActiveObject();
        this.canvas.renderAll();
        this.activeSelection = null;
      }

      this.canvas.isDrawingLineMode = false;
      this.canvas.isDrawingPathMode = false;
      this.canvas.isDrawingMode = false;
      this.canvas.isDrawingTextMode = false;

      this.canvas.defaultCursor = 'default';
      this.canvas.selection = true;
      this.canvas.forEachObject(o => {
        o.selectable = true;
        o.evented = true;
      })

      switch (id) {

        case 'draw':
          this.canvas.isDrawingMode = true;
          break;
        case 'line':
          this.canvas.isDrawingLineMode = true
          this.canvas.defaultCursor = 'crosshair'
          this.canvas.selection = false
          this.canvas.forEachObject(o => {
            o.selectable = false
            o.evented = false
          });
          break;
        case 'path':
          this.canvas.isDrawingPathMode = true
          this.canvas.defaultCursor = 'crosshair'
          this.canvas.selection = false
          this.canvas.forEachObject(o => {
            o.selectable = false
            o.evented = false
          });
          this.updateTip('Tip: click to place points, press and pull for curves! Click outside or press Esc to cancel!');
          break;
        case 'textbox':
          this.canvas.isDrawingTextMode = true
          this.canvas.defaultCursor = 'crosshair'
          this.canvas.selection = false
          this.canvas.forEachObject(o => {
            o.selectable = false
            o.evented = false
          });
          break;
        case 'upload':
          this.openDragDropPanel();
          break;
        default:
          break;
      }

    }

    this.undo = () => {
      try {
        let undoList = this.history.getValues().undo;
        if (undoList.length) {
          let current = undoList[undoList.length - 1];
          this.history.undo();
          current && this.canvas.loadFromJSON(JSON.parse(current), this.canvas.renderAll.bind(this.canvas))
        }
      } catch (_) {
        console.error("undo failed")
      }
    }

    /**
     * Event handler when perform redo
     */
    this.redo = () => {
      try {
        let redoList = this.history.getValues().redo;
        if (redoList.length) {
          let current = redoList[redoList.length - 1];
          this.history.redo();
          current && this.canvas.loadFromJSON(JSON.parse(current), this.canvas.renderAll.bind(this.canvas))
        }
      } catch (_) {
        console.error("redo failed")
      }
    }

    /**
     * Event handler when select objects on fabric canvas
     * @param {Object} activeSelection fabric js object
     */
    this.setActiveSelection = (activeSelection) => {
      this.activeSelection = activeSelection;
      this.setActiveTool('select');
    }

    /**
     * Initialize undo/redo stack
     */
    this.configUndoRedoStack = () => {
      this.history = window.UndoRedoStack();
      const ctrZY = (e) => {
        const key = e.which || e.keyCode;

        if (e.ctrlKey && document.querySelectorAll('textarea:focus, input:focus').length === 0) {
          if (key === 90) this.undo()
          if (key === 89) this.redo()
        }
      }
      document.addEventListener('keydown', ctrZY)
    }

    /**
     * Initialize image editor
     */
    this.init = () => {
      this.configUndoRedoStack();

      this.initializeToolbar();
      this.initializeMainPanel();

      this.initializeShapes();

      this.initializeCanvasSettingPanel();
      this.initializeSelectionSettings();

      this.canvas = this.initializeCanvas();

      this.initializeTextBoxDrawing(this.canvas);
      this.initializeUpload(this.canvas);
      this.initializeCopyPaste(this.canvas);
      this.initializeTipSection();

      this.extendHideShowToolPanel();
      this.extendNumberInput();
    }

    /**
     * Initialize main panel 
     */
    this.initializeMainPanel = () => {
      $(`${containerSelector}`).append('<div class="main-panel"></div>');
    }


    this.init();
  }

  window.ImageEditor = ImageEditor;
})();