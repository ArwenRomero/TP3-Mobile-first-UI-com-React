import "./QmSomos09C.css"

const images = [
    {
        src: 'https://cdn-icons-png.flaticon.com/128/741/741407.png',
        alt: 'React Logo'
    },
    {
        src: 'https://cdn-icons-png.flaticon.com/128/1865/1865273.png',
        alt: 'Next.js Logo'
    },
    {
        src: 'https://cdn-icons-png.flaticon.com/128/2203/2203183.png',
        alt: 'React Native Logo'
    },
];
const QmSomos = () => {
    return(
        <div id="quem-somos"className="container">
            <div className="sobre-nos">
                <h1>Quem Somos</h1>
                <p>Ut sed lacus ultricies, elementum nulla quis, tincidunt diam. Nulla ultrices ut tellus et laoreet. Phasellus dapibus risus purus, ut elementum metus pellentesque id. In et varius dolor. Morbi ac porttitor sem. Pellentesque metus risus, vehicula quis pharetra sit amet, volutpat sit amet quam. Nunc diam dui, mollis at elementum eu, bibendum et nunc.</p>

                <div className="lista-produtos">
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QmSomos;
