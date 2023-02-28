function carregaDicionario() {
    var biografias = {
        bio1: {
            nome: "Ada Lovelace",
            imagem: "https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/tumblr_ndfy29isqi1qg46g8o1_500.jpg?quality=70&strip=all",
            descricao: "Augusta Ada Byron King, mais conhecida como Ada Lovelace devido a seu titulo de Condessa de Lovelace, foi uma mulher, mãe, matemática e escritora brilhante. Postumamente conhecida como encantadora de números e mãe dos softwares. Em 1843, aos 28 anos, traduziu um artigo sobre o funcionamento da máquina analítica de Babbage, adicionando notas pessoais. Nos comentários, Ada sugere um plano que é considerado o primeiro programa de computador do mundo."
        },
        bio2: {
            nome: "Carol Shaw",
            imagem: "http://gigaufba.net/wp-content/uploads/2012/03/carol_shaw_box_small1.jpg",
            descricao: "Nascida na Califórnia (Estados Unidos) em 1955, Carol Shaw sempre esteve na região do Vale do Silício e, naturalmente, foi influenciada pela revolução tecnológica que ali aconteceu. Graduou-se em engenharia elétrica e também em ciência da computação em 1977, conquistando um mestrado no segundo curso em Berkeley. E a evolução profissional de Shaw foi rápida: já em 1978 tornou-se a primeira mulher a desenvolver um jogo eletrônico em toda a história."
        },
        bio3: {
            nome: "Grace Hopper",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
            descricao: "Hopper foi uma analista de sistemas da Marinha dos Estados Unidos nas décadas de 1940 e 1950, e enquanto atuava por lá desenvolveu a linguagem de programação Flow-Matic, que foi a primeira delas a ser adaptada para o idioma inglês. Essa linguagem, apesar de já extinta, serviu como base para a criação do COBOL – usado até os dias de hoje em processamento de bancos de dados comerciais. Grace Hopper também é apontada como a autora do termo “bug”, que usamos até os dias de hoje para designar uma falha em códigos-fonte."
        },
        bio4: {
            nome: "Irmã Mary Kenneth Keller",
            imagem: "https://www.intalio.com/wp-content/uploads/2021/03/Square-Format_Sister-Mary-Kenneth-Keller-cropped-1024x591-copy-300x300.png",
            descricao: "Mary Kenneth Keller, mais conhecida como Irmã Mary Kenneth Keller, foi uma importante freira e cientista da computação. Em 7 de junho de 1965,junto de Irving Tang da Universidade Washington em St. Louis, se tornaram os primeiros doutores na área no país, além de ser a primeira mulher a receber um doutorado na área. Em 1958, Mary começou a trabalhar em uma oficina de ciência da computação, da Fundação Nacional de Ciência, dos Estados Unidos, no Dartmouth College, onde participou do desenvolvimento da linguagem de programação BASIC."
        },
        bio5: {
            nome: "Jean Sammet",
            imagem: "https://www.mtholyoke.edu/sites/default/files/profile-images/News_Sammet_ObituaryHL.jpg",
            descricao: "Jean E. Sammet foi uma cientista da computação americana que desenvolveu a linguagem FORMAC em 1962. Ela recebeu seu grau de bacharel em matemática pelo Mount Holyoke College em 1948 e seu mestrado em matemática pela Universidade de Illinois em Urbana-Champaign no ano de 1949. Trabalhou por 27 anos para a IBM onde desenvolveu o FORMAC, a primeira linguagem de computador amplamente utilizada para manipulação simbólica de fórmulas matemáticas. Ela foi também um dos membros da subcomissão que criou a linguagem COBOL."
        },
        bio6: {
            nome: "Radia Perlman",
            imagem: "https://cdn.theatlantic.com/thumbor/Ki7Yffdd7RCO_3jqMJGNcQr14V4=/126x44:2810x2057/1200x900/media/img/mt/2014/02/radia/original.jpg",
            descricao: "Radia Joy Perlman, nascida em Portsmouth, Virginia, recebeu, em 1973, seu diploma em matemática e em 1976 obteve mestrado na mesma área pelo MIT. Pelman concluiu seu doutorado em ciência da computação em 1988 também no MIT. Em 1984, ela criou o protocolo Spanning Tree. Conseguiu criar um protocolo que conseguisse funcionar de maneira adequada com nuvens de rede significativamente grandes. Depois, a cientista criou o protocolo TRILL. Este último permite que a LAN utilize de uma maneira ideal a largura de banda. "
        }

    };

    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML +=
            '<div class="card"> <img src = "' +
            biografias[bio].imagem +
            '" alt="' +
            biografias[bio].nome +
            '"> <details> <summary>' +
            biografias[bio].nome +
            '</summary> <p>' +
            biografias[bio].descricao +
            '</p> </details> </div> ';
    }
}

carregaDicionario();