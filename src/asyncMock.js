const products = [
    {
        id: '1',
        name: 'Cabernet',
        price: 2340,
        category: 'tintos',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-tinto.png',
        stock: 25,
        description:'Un vino que encarna la excelencia en cada sorbo. Con una intensidad aromática cautivadora, despliega una sinfonía de frutas negras maduras entrelazadas con sutiles matices especiados. En boca, su cuerpo robusto se revela plenamente, ofreciendo una experiencia sensorial inolvidable. Los sabores profundos de grosellas y cassis se entrelazan con taninos suaves, culminando en un final largo que deja una impresión duradera. Un vino que celebra la pasión y el arte de la vinificación.'
    },
    {
        id: '2',
        name: 'Pinot Noir',
        price: 1550,
        category: 'tintos',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-tinto-dos.png',
        stock: 45,
        description:'El Pinot Noir BACO cautiva los sentidos con su elegancia y delicadeza. Sus aromas seductores de cerezas y frutos rojos se entrelazan con sutiles notas de especias y toques terrosos. En boca, su textura suave y sedosa envuelve el paladar, revelando sabores vibrantes de fresas maduras y ciruelas, respaldados por una acidez refrescante. Su final persistente y equilibrado deja una impresión duradera y lo convierte en una elección perfecta para los amantes del vino sofisticado.'
    },
    {
        id: '3',
        name: 'Merlot',
        price: 2000,
        category: 'tintos',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-tinto-cuatro.png',
        stock: 5,
        description:'Un vino excepcional que deleita los sentidos con su elegancia y profundidad. Con una nariz cautivadora de frutas maduras como ciruelas y moras, complementadas por sutiles notas de chocolate y vainilla, invita a un viaje sensorial. En boca, su textura sedosa y suave despliega sabores jugosos de cerezas negras y grosellas, envueltas en taninos suaves y bien integrados. El final prolongado y equilibrado deja una huella placentera y convierte a este Merlot en una elección perfecta para los amantes de los vinos de calidad.'
    },
    {
        id: '4',
        name: 'Malbec',
        price: 2000,
        category: 'tintos',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-tinto-tres.png',
        stock: 5,
        description:'Un vino de carácter audaz y seductor. Con una intensidad aromática cautivadora, despliega notas de frutas maduras como ciruelas y moras, junto con toques especiados y sutiles pinceladas de vainilla. En boca, su cuerpo generoso y estructurado revela sabores profundos de frutas negras y matices de cacao, con taninos firmes pero suaves. Una elección apasionante para los amantes de los vinos intensos y expresivos.'
    },
    {
        id: '5',
        name: 'Blanc',
        price: 2340,
        category: 'blancos',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-blanco.png',
        stock: 20,
        description:'El Cabernet Blanc de marca BACO es un vino blanco extraordinario que sorprende con su elegancia y frescura. Con una fragancia cautivadora de cítricos y frutas tropicales, se combina con delicadas notas herbáceas y florales. En boca, su cuerpo equilibrado revela sabores vibrantes de lima, piña y melón, con una acidez refrescante y una textura sedosa. Su final persistente y refrescante invita a seguir degustando. Este vino Cabernet Blanc es una elección perfecta para aquellos que buscan una experiencia fresca y sofisticada en cada sorbo.'
    },
    {
        id: '6',
        name: 'Chardonnay',
        price: 1550,
        category: 'blancos',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-blanco-dos.png',
        stock: 42,
        description:'El Chardonnay de marca BACO es un vino blanco excepcional que combina elegancia y estructura. Su bouquet aromático cautiva con notas de frutas tropicales como piña y mango, complementadas por sutiles matices de vainilla y tostado. En boca, su textura sedosa y cremosa envuelve el paladar, revelando sabores de manzana verde, pera y cítricos, equilibrados por una refrescante acidez. Su final largo y vibrante deja una impresión duradera y convierte a este Chardonnay en una elección sofisticada para los amantes de los vinos blancos de calidad.'
    },
    {
        id: '7',
        name: 'Champagne',
        price: 2000,
        category: 'espumantes',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-champagne.png',
        stock: 5,
        description:'El Champagne de marca BACO es una expresión exquisita del arte del espumoso. Con su elegancia y finura, despliega una cascada de burbujas delicadas y persistentes. Su bouquet aromático seduce con notas de manzana verde, pan tostado y sutiles matices de almendras. En boca, su textura cremosa y su acidez equilibrada brindan sabores frescos de cítricos y frutas blancas, culminando en un final largo y vibrante. Este Champagne encarna la celebración y el lujo en cada sorbo.'
    },
    {
        id: '8',
        name: 'Sidra',
        price: 2000,
        category: 'espumantes',
        img:'https://santiagogiusto.github.io/coderPreEntrega3/multimedia/img/-productos/vinos-sidra.png',
        stock: 5,
        description:'La Sidra de marca BACO es una opción refrescante y llena de sabor. Con su característico aroma a manzanas frescas y notas sutiles de especias, invita a un deleite sensorial. En boca, su textura suave y efervescente despliega sabores jugosos y equilibrados de manzana, con un toque refrescante de acidez. Su final limpio y chispeante deja una sensación revitalizante. Esta Sidra es perfecta para aquellos que buscan una alternativa refrescante y llena de carácter.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500 )
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};
