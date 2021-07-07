
(function () {
  'use strict';
  const AlignmentButtonList = [{
    pos: 'left',
    icon: `<svg enable-background="new 0 0 100 100" viewBox="0 0 100 125" xml:space="preserve"><g transform="translate(1.4305e-6 -17.438)" stroke-width="1.2346"><rect x="14.815" y="48.16" width="85.185" height="24.691"></rect><rect x="14.815" y="87.025" width="45.679" height="24.691"></rect><rect y="34.877" width="8.642" height="90.123"></rect></g></svg>`
  }, {
    pos: 'center-h',
    icon: `<svg enable-background="new 0 0 100 100" viewBox="0 0 100 125" xml:space="preserve"><g stroke-width="1.2346"><rect x="7.4075" y="30.722" width="85.185" height="24.691"></rect><rect x="27.16" y="69.587" width="45.679" height="24.691"></rect><rect x="45.679" y="17.439" width="8.642" height="90.123"></rect></g></svg>`,
  }, {
    pos: 'right',
    icon: `<svg enable-background="new 0 0 100 100" viewBox="0 0 100 125" xml:space="preserve"><g transform="translate(1.4305e-6 -17.438)" stroke-width="1.2346"><rect transform="scale(-1,1)" x="-85.185" y="48.16" width="85.185" height="24.691"></rect><rect transform="scale(-1,1)" x="-85.185" y="87.025" width="45.679" height="24.691"></rect><rect transform="scale(-1,1)" x="-100" y="34.877" width="8.642" height="90.123"></rect></g></svg>`,
  }, {
    pos: 'top',
    icon: `<svg enable-background="new 0 0 100 100" viewBox="0 0 100 125" xml:space="preserve"><g transform="translate(1.4305e-6 -17.438)"><g transform="matrix(0 -1 -1 0 129.94 129.94)" stroke-width="1.2346"><rect transform="scale(-1,1)" x="-85.185" y="48.16" width="85.185" height="24.691"></rect><rect transform="scale(-1,1)" x="-85.185" y="87.025" width="45.679" height="24.691"></rect><rect transform="scale(-1,1)" x="-100" y="34.877" width="8.642" height="90.123"></rect></g></g></svg>`,
  }, {
    pos: 'center-v',
    icon: `<svg enable-background="new 0 0 100 100" viewBox="0 0 100 125" xml:space="preserve"><g stroke-width="1.2346"><rect transform="rotate(90)" x="19.908" y="-81.779" width="85.185" height="24.691"></rect><rect transform="rotate(90)" x="39.66" y="-42.913" width="45.679" height="24.691"></rect><rect transform="rotate(90)" x="58.179" y="-95.062" width="8.642" height="90.123"></rect></g></svg>`
  }, {
    pos: 'bottom',
    icon: `<svg enable-background="new 0 0 100 100" viewBox="0 0 100 125" xml:space="preserve"><g transform="translate(1.4305e-6 -17.438)"><g transform="rotate(90 50 79.938)" stroke-width="1.2346"><rect transform="scale(-1,1)" x="-85.185" y="48.16" width="85.185" height="24.691"></rect><rect transform="scale(-1,1)" x="-85.185" y="87.025" width="45.679" height="24.691"></rect><rect transform="scale(-1,1)" x="-100" y="34.877" width="8.642" height="90.123"></rect></g></g></svg>`
  }]
  var selectionSettings = function () {
    const _self = this;
    $(`.tab-content #menu-inscription`).append(`<div class="toolpanel" id="select-panel"><div class="content"></div></div>`);
    // font section
    (() => {
      $(`.tab-content .toolpanel#select-panel .content`).append(`
          <textarea data-text="С Днём 
Рождения!" class="main-input input-inscription" id="inscription-input" name="inscription-text">С Днём 
Рождения!</textarea>

          <div class="family">
            <div class="input-container">
            <select class="main-input" id="font-family">
              <option selected value="'Arial', sans-serif">Arial</option>
              <option value="'Open Sans', sans-serif">Open Sans</option>
              <option value="'Oswald', sans-serif">Oswald</option>
              <option value="'Playfair Display', serif">Playfair Display</option>
              <option value="'Cormorant Garamond', serif">Cormorant Garamond</option>
              <option value="Impact, Charcoal, sans-serif">Impact</option>
              <option value="'Lucida Console', Monaco, monospace">Lucida Console</option>
              <option value="'Comic Sans MS', 'Comic Sans', cursive, sans-serif">Comic Sans</option>
              <option value="'Dancing Script', cursive">Dancing Script</option>
              <option value="'Indie Flower', cursive">Indie Flower</option>
              <option value="'Amatic SC', cursive">Amatic SC</option>
              <option value="'Permanent Marker', cursive">Permanent Marker</option>
            </select>
            </div>

            <div class="input-container">
            <div id="text-align">

    <div class="label-alignment">
              <input value="left" class="align-text" type="radio" id="left" name="text-alignment">
              <label for="left">
              <svg class="text-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" width="985px" height="985px" viewBox="0 0 985 985" style="enable-background:new 0 0 985 985;"
              xml:space="preserve">
              <path
                  d="M915,61.55H70c-38.7,0-70,31.3-70,70c0,38.7,31.3,70,70,70h845c38.7,0,70-31.3,70-70C985,92.85,953.7,61.55,915,61.55z" />
              <path d="M985,612.851c0-38.701-31.3-70-70-70H70c-38.7,0-70,31.299-70,70c0,38.699,31.3,70,70,70h845
                C953.7,682.851,985,651.45,985,612.851z" />
                    <path d="M70,442.15h695.4c38.699,0,70-31.3,70-70s-31.301-70-70-70H70c-38.7,0-70,31.3-70,70S31.3,442.15,70,442.15z" />
                    <path d="M592.3,853.45c0-38.701-31.3-70-70-70H70c-38.7,0-70,31.299-70,70c0,38.699,31.3,70,70,70h452.3
                C561,923.45,592.3,892.149,592.3,853.45z" />
                </svg>
              </label>
              </div>


    <div class="label-alignment">
    <input value="center" class="align-text" checked type="radio" id="center" name="text-alignment">
              <label for="center">
              <svg  class="text-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px" y="0px" width="990.9px" height="990.9px" viewBox="0 0 990.9 990.9" style="enable-background:new 0 0 990.9 990.9;"
                  xml:space="preserve">
                  <path d="M920.8,64.5H70c-38.7,0-70,31.3-70,70c0,38.7,31.3,70,70,70h850.9c38.7,0,70-31.3,70-70C990.9,95.8,959.5,64.5,920.8,64.5z
              " />
                  <path d="M920.8,545.801H70c-38.7,0-70,31.299-70,70c0,38.699,31.3,70,70,70h850.9c38.7,0,70-31.301,70-70
              C990.9,577.1,959.5,545.801,920.8,545.801z" />
                  <path d="M804.101,445.1c38.699,0,70-31.3,70-70s-31.301-70-70-70H186.8c-38.7,0-70,31.3-70,70s31.3,70,70,70H804.101z" />
                  <path d="M682.5,926.4c38.7,0,70-31.301,70-70c0-38.701-31.3-70-70-70H308.3c-38.7,0-70,31.299-70,70c0,38.699,31.3,70,70,70H682.5z
              " />
              </svg>
              </label>
              </div>



    <div class="label-alignment">
    <input value="right" class="align-text" type="radio" id="right" name="text-alignment">
              <label for="right">
              <svg class="text-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px" y="0px" width="985px" height="985px" viewBox="0 0 985 985" style="enable-background:new 0 0 985 985;"
                  xml:space="preserve">
                  <path d="M70,201.55h845c38.7,0,70-31.3,70-70c0-38.7-31.3-70-70-70H70c-38.7,0-70,31.3-70,70C0,170.25,31.3,201.55,70,201.55z" />
                  <path d="M915,542.851H70c-38.7,0-70,31.299-70,70c0,38.699,31.3,70,70,70h845c38.7,0,70-31.301,70-70
              C985,574.149,953.7,542.851,915,542.851z" />
                  <path d="M915,302.15H219.6c-38.7,0-70,31.3-70,70s31.3,70,70,70H915c38.7,0,70-31.3,70-70S953.7,302.15,915,302.15z" />
                  <path d="M915,783.45H462.7c-38.7,0-70,31.299-70,70c0,38.699,31.3,70,70,70H915c38.7,0,70-31.301,70-70
              C985,814.749,953.7,783.45,915,783.45z" />
              </svg>
              </label>
            </div>
              </div>
              </div>
          </div>

          <div class="color">
            <div class="input-container">
            <input type="text" id="color-picker" value="#ff99fd">
            </div>
          </div>
      `);
      $(`.tab-content .toolpanel#select-panel #font-family`).click(function () {
        let type = $(this).attr('id');
        switch (type) {
          case 'subscript':
            if (getActiveFontStyle(_self.activeSelection._objects[0], 'deltaY') > 0) {
              setActiveFontStyle(_self.activeSelection._objects[0], 'fontSize', undefined)
              setActiveFontStyle(_self.activeSelection._objects[0], 'deltaY', undefined)
            } else {
              _self.activeSelection._objects[0].setSubscript()
              _self.canvas.renderAll()
            }
            break;
          case 'superscript':
            if (getActiveFontStyle(_self.activeSelection._objects[0], 'deltaY') < 0) {
              setActiveFontStyle(_self.activeSelection._objects[0], 'fontSize', undefined)
              setActiveFontStyle(_self.activeSelection._objects[0], 'deltaY', undefined)
            } else {
              _self.activeSelection._objects[0].setSuperscript()
              _self.canvas.renderAll()
            }
            break;
          default:
            break;
        }
        _self.canvas.renderAll();
        //  _self.canvas.trigger('object:modified');
      })

      $(`.tab-content .toolpanel#select-panel .family #font-family`).change(function () {
        let family = $(this).val();
        setActiveFontStyle(_self.activeSelection._objects[0], 'fontFamily', family)
        _self.canvas.renderAll();
      })


      $(`.align-text`).change(function () {
        let mode = $(this).val();
        if (_self.activeSelection._objects[0].textAlign);
        {
          setActiveFontStyle(_self.activeSelection._objects[0], 'textAlign', mode);
          _self.canvas.renderAll();
        }
      })

      $(`#color-picker`).spectrum({
        showPaletteOnly: true,
        color: '#ff99fd',
        palette: [
          ["#ffffff", "#fefdbd", "#ffca6e", "#92ff94", "#a9fffc", "#8cd8fc", "#cf89fd", "#ff99fd", "#fd84c7", "#ff8d8d"],
          ["#c4c4c4", "#fffb83", "#ff9738", "#00ff05", "#78fefd", "#34b8ff", "#b643ff", "#ff5dfe", "#ff41a9", "#ff4d4d"],
          ["#939393", "#fff701", "#ff7900", "#00d900", "#02fbff", "#008ddc", "#9c00ff", "#ff00fc", "#ff008a", "#fe0000"],
          ["#3e3e3e", "#cdc500", "#b55500", "#009e00", "#01c5c4", "#036195", "#6e00b7", "#b900b6", "#c8006b", "#c30000"],
          ["#000000", "#888301", "#723600", "#006d00", "#007c7e", "#023c61", "#500181", "#7d017d", "#840147", "#8c0000"],
        ]
      });

      $('#inscription-input').on('keyup', function () {
        let val = $(this).val();
        for (let i = 0; i < _self.activeSelection._objects.length; i++) {
          const element = _self.activeSelection._objects[i];

          if (element.id === 'textbox' || _self.activeSelection.id === 'cloneObjectText');
          {
            let elText = element;
            elText.text = val;
            _self.activeSelection.addWithUpdate();
            return _self.canvas.renderAll()
          }
        }
      });


      Object.defineProperty($(`#color-picker`)[0], "value", {
        get() {
          return this.getAttribute("value");
        },
        set(value) {
          setActiveFontStyle(_self.activeSelection._objects[0], 'fill', value);
          _self.canvas.renderAll();
          this.setAttribute("value", value);
        }
      });
    })();
  }

  window.ImageEditor.prototype.initializeSelectionSettings = selectionSettings;
})()

