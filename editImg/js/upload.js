/**
 * Define action to upload, drag & drop images into canvas
 */

(function () {

  var upload = function (canvas) {

    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

    fabric.Canvas.prototype.getAbsoluteCoords = function (object) {
      return {
        left: object.left + this._offset.left,
        top: object.top + this._offset.top
      };
    }


    function positionBtn(obj) {
      var absCoords = canvas.getAbsoluteCoords(obj);
    }

    const _self = this;
    this.openDragDropPanel = function () {
      console.log('open drag drop panel')
      $('.wrapper').append(`<div class="custom-modal-container">
        <div class="custom-modal-content">
          <div class="drag-drop-input">
            <div>Drag & drop files<br>or click to browse.<br>JPG, PNG or SVG only!</div>
          </div>
        </div>
      </div>`)
      $('.custom-modal-container').click(function () {
        $(this).remove()
      })

      $('.drag-drop-input').click(function () {
        $(`${_self.containerSelector} #btn-image-upload`).click();
      })

      $(".drag-drop-input").on("dragover", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).addClass('dragging');
      });

      $(".drag-drop-input").on("dragleave", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('dragging');
      });

      $(".drag-drop-input").on("drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('dragging');
        if (event.originalEvent.dataTransfer) {
          if (event.originalEvent.dataTransfer.files.length) {
            let files = event.originalEvent.dataTransfer.files
            processFiles(files);
            $('.custom-modal-container').remove();
          }
        }
      });
    }

    const processFiles = (files) => {
      if (files.length === 0) return;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml']

      for (let file of files) {
        // check type
        if (!allowedTypes.includes(file.type)) continue

        let reader = new FileReader()

        // handle image, read file, add to canvas
        reader.onload = (f) => {
          fabric.Image.fromURL(f.target.result, (img) => {
            img.set({
              height: img.height,
              width: img.width,
              scaleX: 0.7,
              scaleY: 0.7,
            });

            console.log(file.type);
            if (file.type === 'image/jpeg') {
              img.filters.push(new fabric.Image.filters.RemoveColor({
                // color: "#fff",
                threshold: 13,
                alpha: 0,
                distance: 0.2
              }));
            }

            if (img.width > 900) {
              img.set({
                scaleX: 0.5,
                scaleY: 0.5,
              })
            };

            // img.filters.push(new fabric.Image.filters.BlendColor({
            //   image: img,
            //   mode: 'multiply',
            //   alpha: 0.5
            // }));

            img.applyFilters();

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


            let groupObjectSize = new fabric.Group([img, objectSizeWrapper, objectSizeText], {
              left: getRndInteger(120, 200),
              top: getRndInteger(90, 200),
            });


            canvas.add(groupObjectSize).setActiveObject(groupObjectSize);

            canvas.sendToBack(groupObjectSize);

            img.on('moving', function () { positionBtn(img) });
            positionBtn(img);

            canvas.renderAll();
          })
        }

        reader.readAsDataURL(file)
      }
    }

    this.containerEl.append(`<input id="btn-image-upload" type="file" accept="image/*" multiple hidden>`);
    document.querySelector(`${this.containerSelector} #btn-image-upload`).addEventListener('change', function (e) {
      if (e.target.files.length === 0) return;
      processFiles(e.target.files);
    })

    $('.search__img').click(function (e) {
      let image = new fabric.Image(this);
      image.set({
        height: image.height,
        width: image.width,
        // mode: 'multiply',
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


      let groupObjectSize = new fabric.Group([image, objectSizeWrapper, objectSizeText], {
        left: getRndInteger(120, 200),
        top: getRndInteger(110, 200),
      });

      canvas.add(groupObjectSize).setActiveObject(groupObjectSize);
    })


    canvas.on({
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
  }


  window.ImageEditor.prototype.initializeUpload = upload;
})()