$("form").on("submit", function(ev){
    ev.preventDefault();
    const nombre = $('#nombre').val();
    const pagina = $('#pagina').val();
    const repoPagina = $('#repoPagina').val();

    getUser(nombre);
    getRepo(nombre, pagina, repoPagina);

});

async function getUser(username) {
    usuario = await request(username);

    $("#resultadosLeft").html(`
    <div clas="col-6 text-left">
        <h1>Datos del Usuario</h1>
        <img src="${usuario.avatar_url}" alt="avatar" class="img-fluid w-50">
        <p>Nombre de usuario: ${usuario.name}<p>
        <p>Nombre de Login: ${usuario.login}<p>
        <p>Cantidad de Repositorios: ${usuario.public_repos}<p>
        <p>Localidad: ${usuario.location}<p>
        <p>Tipo de Usuario: ${usuario.type}<p>
    </div>
    `)
};

