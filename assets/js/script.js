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

async function getRepo(username, page, perpage) {
        const repos = await request(`${username}/repos`);
        const link = `https://github.com/${username}/`

        for (rep of repos){
            let enlace = link.concat(rep);
            $("#resultadosRight").append(`            
            <div clas="col-6 text-right"> 
                <a href="${enlace}" target="_blank">${rep.name}</a>
            </div>
            `)
        }
   
    console.log(repos)
};

async function request(path) {
    try {
        const datos = await fetch(`https://api.github.com/users/${path}`);
        const retorno = await datos.json();
        return retorno
    }catch(error){
        console.log(error.message)
    }
};