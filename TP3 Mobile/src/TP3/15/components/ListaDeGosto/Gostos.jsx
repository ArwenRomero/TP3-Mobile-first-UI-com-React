

function ListaAfinidade({ preferenciasUsuario, usuarios }) {
    const calcularAfinidade = (usuario) => {
        const gostosComuns = usuario.gostos.filter((item) =>
            preferenciasUsuario.gostos.includes(item)
        ).length;
        const naoGostosComuns = usuario.naoGostos.filter((item) =>
            preferenciasUsuario.naoGostos.includes(item)
        ).length;
        return gostosComuns + naoGostosComuns;
    };

    const usuariosOrdenados = usuarios
        .map((usuario) => ({
            ...usuario,
            afinidade: calcularAfinidade(usuario)
        }))
        .sort((a, b) => b.afinidade - a.afinidade);

    return (
        <div>
            <h2>Usuários com afinidade:</h2>
            <ul>
                {usuariosOrdenados.map((usuario) => (
                    <li key={usuario.nome}>
                        {usuario.nome} - Afinidade: {usuario.afinidade}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaAfinidade;
