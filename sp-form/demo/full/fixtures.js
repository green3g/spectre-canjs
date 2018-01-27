import fixture from 'can-fixture';
// this example uses fixtures to catch requests and simulate
// file upload server
function getBase64 (file) { 
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
    return reader;
}

fixture.delay = 2000;
fixture({
    method: 'POST',
    url: '/upload'
}, function (request, response, headers, ajaxSettings) {
    try {
        const fields = Array.from(request.data.entries());
        const fileField = fields.filter((f) => {
            return f[0] === 'uri';
        });
        const file = fileField[0][1];
        const reader = getBase64(file);
        reader.onload = function () {
            response({
                uri: reader.result,
                id: file.name
            }, {'content-type': 'application/json'});
                
        };
    } catch (e) {
        dev.warn(e);
    }
});

fixture({
    method: 'DELETE',
    url: '/upload/{id}'
}, function (request, response, headers, ajaxSettings) {
    console.warn(request);
    response({
        result: 'success'
    })
});
