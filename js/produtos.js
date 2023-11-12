const produtos = [
    {
        "id": "1",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "2",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "3",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "4",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
]

const prodDiv = document.getElementById("prodDiv") 

produtos.forEach(produtosDia => {
    prodDiv.innerHTML += 
    `<div class="produtos hidden">
        <img src="${produtosDia.img}" class="prodImg"/>
        <div class="prodInfo">
            <h1 class="prodTitulo">${produtosDia.nome}</h1>
            <h4 class="prodDesc">${produtosDia.descricao}</h4>
            <h4 class="prodPreco">${produtosDia.preco}</h4>
        </div>
    </div>`
});

const produtosPopulares = [
    {
        "id": "1",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "2",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "3",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "4",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "1",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "2",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "3",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
    {
        "id": "4",
        "img": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png",
        "nome": "Nome do produto",
        "descricao": "Descricao do produto Descricao do produto Descricao do produto Descricao do produto",
        "preco": "R$ 99,00",
    },
]

const popdDiv = document.getElementById("popdDiv") 

produtosPopulares.forEach(prodPopulares => {
    popDiv.innerHTML += 
    `<div class="produtos hidden">
        <img src="${prodPopulares.img}" class="prodImg"/>
        <div class="prodInfo">
            <h1 class="prodTitulo">${prodPopulares.nome}</h1>
            <h4 class="prodDesc">${prodPopulares.descricao}</h4>
            <h4 class="prodPreco">${prodPopulares.preco}</h4>
        </div>
    </div>`
});