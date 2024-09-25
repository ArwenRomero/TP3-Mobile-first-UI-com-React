import "./Produtos09C.css"

const imgsProdutos = [
  {
    imagem: 'https://cdn-icons-png.flaticon.com/128/2276/2276931.png',
    alt: 'Comida'
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/128/2405/2405597.png',
    alt: 'Bebida'
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/128/1261/1261106.png',
    alt: 'Moveis'
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/128/10115/10115715.png',
    alt: 'Games'
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/128/3389/3389081.png',
    alt: 'Livros'
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/128/9542/9542843.png',
    alt: 'Segurança'
  }
];

const ProdutosLitas = () => {
  return (
    <div id="produtos"><h1>Produtos</h1>
    <div id="produtos"className="imgs-Produtos">
      {imgsProdutos.map((imag, index) => (
        <img key={index} src={imag.imagem} alt={imag.alt} />
      ))}
    </div>
    </div>
  );
};

export default ProdutosLitas;