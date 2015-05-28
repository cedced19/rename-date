$(document).ready(function() {
    $.material.init();

    var rename = require('./node_modules/rename-date'),
        path = require('path'),
        fs = require('fs');

    $('#exec').click(function() {
        var directory = path.normalize($('#path').val());
        if (fs.existsSync(directory)) {
            rename(directory, $('#french').is(":checked"), function() {
                $('#success-modal').modal('show');
                $('#modal').modal('toggle');
            });
        } else {
            $('#error-modal').modal('show');
            $('#modal').modal('toggle');
        }
    });
});