
fabric.Object.prototype.setControlsVisibility({
   // mtr: false,
   mt: false,
   mr: false,
   ml: false,
   mb: false,
   // centeredRotation: false
   // tl: rotate
});

fabric.Object.prototype.set({
   transparentCorners: false,
   borderColor: '#9ba3ae',
   cornerColor: '#ffea00',
   centeredScaling: true,
   cornerStyle: 'rect',
   cornerStrokeColor: '#9ba3ae',
   borderDashArray: [4, 2]
});
// fabric.Object.prototype.centeredRotation = false;


let cloneIcon = 'img/clone.png';
let deleteIcon = 'img/delete.png';
let reverseIcon = 'img/reverse.png';


let deleteImg = document.createElement('img');
deleteImg.src = deleteIcon;

let cloneImg = document.createElement('img');
cloneImg.src = cloneIcon;

let reverseImg = document.createElement('img');
reverseImg.src = reverseIcon;


fabric.Object.prototype.transparentCorners = false;


function renderIcon(icon) {
   return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      ctx.restore();
   }
}

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
   x: 0,
   y: -0.5,
   offsetY: 15,
   cursorStyle: 'pointer',
   mouseUpHandler: deleteObject,
   render: renderIcon(deleteImg),
   cornerSize: 30,
});

fabric.Object.prototype.controls.clone = new fabric.Control({
   x: -0.5,
   y: 0,
   offsetX: 16,
   cursorStyle: 'pointer',
   mouseUpHandler: cloneObject,
   render: renderIcon(cloneImg),
   cornerSize: 30
});


fabric.Group.prototype.controls.deleteControl = new fabric.Control({
   x: 0,
   y: -0.5,
   offsetY: 15,
   cursorStyle: 'pointer',
   mouseUpHandler: deleteObject,
   render: renderIcon(deleteImg),
   cornerSize: 30,
});

fabric.Group.prototype.controls.clone = new fabric.Control({
   x: -0.5,
   y: 0,
   offsetX: 16,
   cursorStyle: 'pointer',
   mouseUpHandler: cloneObject,
   render: renderIcon(cloneImg),
   cornerSize: 30
});


fabric.Object.prototype.controls.mtr.x = 0.5;
fabric.Object.prototype.controls.mtr.y = 0;
fabric.Object.prototype.controls.mtr.offsetX = -16;
fabric.Object.prototype.controls.mtr.offsetY = 0;
fabric.Object.prototype.controls.mtr.cornerSize = 30;
fabric.Object.prototype.controls.mtr.render = renderIcon(reverseImg);

fabric.Textbox.prototype.controls.mtr.x = 0.5;
fabric.Textbox.prototype.controls.mtr.y = 0;
fabric.Textbox.prototype.controls.mtr.offsetX = -16;
fabric.Textbox.prototype.controls.mtr.offsetY = 0;
fabric.Textbox.prototype.controls.mtr.cornerSize = 30;
fabric.Textbox.prototype.controls.mtr.render = renderIcon(reverseImg);

function deleteObject(eventData, transform) {
   let target = transform.target;
   let canvas = target.canvas;
   canvas.remove(target);
   canvas.requestRenderAll();
}

function cloneObject(eventData, transform) {
   let target = transform.target;
   let canvas = target.canvas;
   target.clone(function (cloned) {
      cloned.left += 10;
      cloned.top += 10;

      if (target._objects[0].id === 'textbox') {
         cloned.id = 'cloneObjectText';

         cloned._objects[0].set({
            id: 'textbox'
         })
         cloned._objects[1].set({
            id: 'objectSizeWrapper'
         })
         cloned._objects[2].set({
            id: 'objectSizeText'
         });

      } else {
         cloned.id = 'cloneObjectBlock';

         cloned._objects[1].set({
            id: 'objectSizeWrapper'
         })
         cloned._objects[2].set({
            id: 'objectSizeText'
         });
      }

      canvas.add(cloned).setActiveObject(cloned);
   });
}
