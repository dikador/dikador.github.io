$(document).ready(function () {

  /*  let option_0 = '<li class="select__item " data-value="Informacion General de la Obligación">Informacion General de la Obligación</li>\n' +
        '<li class="select__item " data-value="Solicitud acuerdo de Pago">Solicitud acuerdo de Pago</li>\n' +
        '<li class="select__item " data-value="Solicitud Paz y Salvo">Solicitud Paz y Salvo</li>\n' +
        '<li class="select__item " data-value="Estado de cuenta">Estado de cuenta</li>\n' +
        '<li class="select__item " data-value="Actualización en centrales de riesgo">Actualización en centrales de riesgo</li>\n' +
        '<li class="select__item " data-value="Derecho de Petición">Derecho de Petición</li>\n' +
        '<li class="select__item " data-value="Solicitud Certificado de deuda">Solicitud Certificado de deuda</li>';

    let option_1 = '<li class="select__item " data-value="Inconformidad por la gestion de cobro">Inconformidad por la gestion de cobro</li>\n' +
        '<li class="select__item " data-value="Inconformidad por el servicio al cliente">Inconformidad por el servicio al cliente</li>\n' +
        '<li class="select__item " data-value="Otros">Otros</li>';

    let option_2 = '<li class="select__item " data-value="Inconvenientes con el acuerdo de pago">Inconvenientes con el acuerdo de pago</li>\n' +
        '<li class="select__item " data-value="Notificación fraude o suplantación">Notificación fraude o suplantación</li>\n' +
        '<li class="select__item " data-value="Otros">Otros</li>';

    let option_3 = '<li class="select__item " data-value="Solicitud de entes regulatorios">Solicitud de entes regulatorios</li>\n' +
        '<li class="select__item " data-value="Información general Doctorpeso">Información general Doctorpeso</li>\n' +
        '<li class="select__item " data-value="Información general del servicio">Información general del servicio</li>\n' +
        '<li class="select__item " data-value="Sugerencia">Sugerencia</li>\n' +
        '<li class="select__item " data-value="Recurso">Recurso</li>\n' +
        '<li class="select__item " data-value="Otros">Otros</li>';*/

    $(document).on('click', '.choose-time-call_choose-box', function () {
       $('#input-time-select').val($(this).attr('data-value'));
    });

    $(document).on('click', '.select .select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $(document).on('click', '.select .select__item', function () {
        let name_parent = $(this).parent().attr('data-parent');
        $('#dinamyc-select').removeClass('selected');
        $('#dinamyc-select .select__head').html('Cual es el problema');
        $('.second-select li').remove();

     /*   if (name_parent === "main") {

            switch ($(this).attr('data-value')) {
                case("0"):
                    $('.second-select').prepend(option_0);
                    console.log($(this).val());
                    break;
                case("1"):
                    $('.second-select').prepend(option_1);
                    console.log($(this).val());
                    break;
                case("2"):
                    $('.second-select').prepend(option_2);
                    console.log($(this).val());
                    break;
                case("3"):
                    $('.second-select').prepend(option_3);
                    console.log($(this).val());
                    break;
            }
        }*/

        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());

        $(this).parent().find('.select__item').removeClass('selected');
        $(this).addClass('selected');

        let value = $(this).html();
        $(this).closest('.select').addClass('selected');
        $(this).closest('.select').find('.select__value').val(value);
        $(this).closest('.select').trigger('change');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });


    $('#time-call-choose').mask('00:00');
});
function replacer(el) {
    el.value = el.value.replace(/[^0-9]/g, '');
}

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function SendMail (mail) {
    return new Promise(function(succeed, fail) {
        var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
        var token = "Bearer w7f6w87fdJIObwef87fe7q896bcRf78qn34m98cnq39vuAWDw45ug0n89y34wfb6nwj395mfunw983y5g78b6dsfnwe8r7GEt98j0347n8t678ntn8978b68n908m89n06089";
        xmlhttp.open('POST', 'https://scrm.doctorpeso.do/api/Communication/SetFeedback', true); // Открываем асинхронное соединение
        // xmlhttp.open('POST', 'https://testscrm.doctorpeso.co/api/Communication/SetFeedback', true); // Открываем асинхронное соединение

        xmlhttp.setRequestHeader('Content-Type', 'application/json'); // Отправляем кодировку
        xmlhttp.setRequestHeader('Authorization', token);
        if (!xmlhttp) {
            // Complain early, instead of nesting deeply
            console.log('Unable to set up the XHR object.');
            return;
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                // only if "OK"
                if (xmlhttp.status == 200) {
                    succeed(xmlhttp);

                }
                else if (xmlhttp.status < 405) {
                    console.log(xmlhttp.status);
                    succeed(xmlhttp);

                }else {
                    console.log(xmlhttp.status);
                    succeed(xmlhttp);
                }
            }
        };

        xmlhttp.send(
            JSON.stringify({"Subject": mail.title, "Text":mail.body, "ToEmail":"info@doctorpeso.do", "FromEmail":"noreply@doctorpeso.do"})
        );

    })

}
let SendInformationForAdmin = (type) => {
    $('.confirm-message, .error-message').removeClass('active');
    let  mail = {
        body: {},
        title: ""
    };
    let flag_send = true;
    switch (type){
        case("feedback"):
            let FIO = $('#FIO').val();
            let place = $('#live-place').val();
            let phoneNumber = $('#phone-number-feedback').val();
            let feedback = $('#feedback-body').val();
            if(FIO.length == 0 || place.length == 0 || feedback.length == 0 || phoneNumber.length == 0){
                $(`#${type}-error`).fadeIn('slow','linear');
                setTimeout(() =>  $(`#${type}-error`).fadeOut('slow','linear'), 3000);
                flag_send = false;break;
            }
            else{
                let html = `Nombre:${FIO};\nCiudad Por ejemplo, Bogota:${place};\nnúmero de teléfono:${phoneNumber};\nTu testimonio:${feedback}; `
                mail ={
                    body: html,
                    title: "Testimonios de nuestros clientes"};
                break;
            }
        case("contacts"):
            let name = $('#first-name').val();
            let phone = $('#phone-number').val();
            if(name.length == 0 || phone.length < 7){
                $(`#${type}-error`).fadeIn('slow','linear');
                setTimeout(() =>  $(`#${type}-error`).fadeOut('slow','linear'), 3000);
                flag_send = false;break;
            }
            else{
                let html = `Nombre:${name};\nNúmero con indicativo:${phone};\n`
                mail ={
                    body: html,
                    title: "Contactanos"};
                break;
            }

        case("complaint"):
            let name_report = $('#Nombre').val();
            let phone_report = $('#phone-number-probl').val();
            let select_1 = $('#input-first-select').val();
            let complaint = $('#complaint-checkbox').val();
            if(name_report.length == 0 || phone_report.length == 0){
                $(`#${type}-error`).fadeIn('slow','linear');
                setTimeout(() =>  $(`#${type}-error`).fadeOut('slow','linear'), 3000);
                flag_send = false;break;
            }
            else{
                let html = `Nombre:${name_report};\nTelefono:${phone_report};\nCual es el problema:${select_1};\nCual es su solicitud:${complaint}; `
                mail ={
                    body: html,
                    title: "Reportar el problema"};
                break;
            }
    }

    if(flag_send){
        $(`#${type}-preloader`).toggle();
        SendMail(mail).then(function(responce) {
            console.log(responce);
            if(responce.status == 200){
                $(`#${type}-preloader`).toggle();
                $(`#${type}-success`).fadeIn('slow','linear');
                setTimeout(() => $(`#${type}-success`).fadeOut('slow','linear'), 5000);
            }
            else if(responce.status == 500){
                $(`#${type}-preloader`).toggle();
                $(`#${type}-error`).fadeIn('slow','linear');
                setTimeout(() => $(`#${type}-error`).fadeOut('slow','linear'), 5000);

            }
        });
    }

}

