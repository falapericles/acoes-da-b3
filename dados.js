let dados = [
    {   
        codigo: "PETR4",
        titulo: "Petrobras (PETR4)",
        descricao: "Petrobras (PETR4) é uma das maiores empresas de petróleo e gás do mundo, atuando na exploração, produção, refino, comercialização e transporte de petróleo e gás natural.",
        link: "https://pt.wikipedia.org/wiki/Petrobras"
    },
    {   
        codigo: "GOGL34",
        titulo: "Google Brasil (GOGL34)",
        descricao: "A Google Brasil (GOGL34) é uma subsidiária da Alphabet Inc., uma das maiores empresas de tecnologia do mundo. A empresa oferece uma ampla gama de produtos e serviços, incluindo o motor de busca Google, o sistema operacional Android e serviços em nuvem.",
        link: "https://pt.wikipedia.org/wiki/Google"
    },
    {   
        codigo: "VALE3",
        titulo: "Vale (VALE3)",
        descricao: "Vale (VALE3) é uma das maiores mineradoras do mundo, com foco na produção de minério de ferro e níquel, além de atuar no setor de logística e energia.",
        link: "https://pt.wikipedia.org/wiki/Vale_S.A."
    },
    {   
        codigo: "ITUB4",
        titulo: "Itaú Unibanco (ITUB4)",
        descricao: "Itaú Unibanco (ITUB4) é um dos maiores bancos do Brasil e da América Latina, oferecendo serviços bancários, seguros e investimentos.",
        link: "https://pt.wikipedia.org/wiki/Itaú_Unibanco"
    },
    {   
        codigo: "BBDC4",
        titulo: "Bradesco (BBDC4)",
        descricao: "Bradesco (BBDC4) é um dos maiores bancos do Brasil, com atuação em diversos segmentos financeiros, incluindo seguros, previdência e capitalização.",
        link: "https://pt.wikipedia.org/wiki/Bradesco"
    },
    {   
        codigo: "ABEV3",
        titulo: "Ambev (ABEV3)",
        descricao: "Ambev (ABEV3) é uma das maiores empresas de bebidas do mundo, com marcas populares como Brahma, Skol, e Antarctica.",
        link: "https://pt.wikipedia.org/wiki/Ambev"
    },
    {   
        codigo: "B3SA3",
        titulo: "B3 (B3SA3)",
        descricao: "B3 (B3SA3) é a bolsa de valores do Brasil, responsável pela negociação de ações, títulos públicos e privados, e outros ativos financeiros.",
        link: "https://pt.wikipedia.org/wiki/B3"
    },
    {   
        codigo: "BBAS3",
        titulo: "Banco do Brasil (BBAS3)",
        descricao: "Banco do Brasil (BBAS3) é uma das instituições financeiras mais tradicionais do Brasil, com atuação em crédito, investimentos e outros serviços financeiros.",
        link: "https://pt.wikipedia.org/wiki/Banco_do_Brasil"
    },
    {   
        codigo: "WEGE3",
        titulo: "Weg (WEGE3)",
        descricao: "Weg (WEGE3) é uma empresa multinacional brasileira, líder na fabricação de equipamentos elétricos, motores e automação.",
        link: "https://pt.wikipedia.org/wiki/Weg"
    },
    {   
        codigo: "BPAC11",
        titulo: "BTG Pactual (BPAC11)",
        descricao: "BTG Pactual (BPAC11) é um dos maiores bancos de investimento da América Latina, oferecendo serviços financeiros como gestão de ativos, corporate banking e consultoria.",
        link: "https://pt.wikipedia.org/wiki/BTG_Pactual"
    },
    {   
        codigo: "ELET3",
        titulo: "Eletrobras (ELET3)",
        descricao: "Eletrobras (ELET3) é uma das maiores empresas do setor de energia elétrica da América Latina, atuando em geração, transmissão e distribuição de energia.",
        link: "https://pt.wikipedia.org/wiki/Eletrobras"
    },
    {   
        codigo: "CSNA3",
        titulo: "CSN (CSNA3)",
        descricao: "CSN (CSNA3) é uma das maiores siderúrgicas do Brasil, com atuação em mineração, logística, cimento e energia.",
        link: "https://pt.wikipedia.org/wiki/Companhia_Siderúrgica_Nacional"
    },
    {   
        codigo: "EGIE3",
        titulo: "Engie (EGIE3)",
        descricao: "Engie (EGIE3) é uma empresa de energia, atuando na geração e distribuição de eletricidade, com foco em fontes renováveis.",
        link: "https://pt.wikipedia.org/wiki/Engie_Brasil"
    },
    {   
        codigo: "RAIZ4",
        titulo: "Raízen (RAIZ4)",
        descricao: "Raízen (RAIZ4) é uma empresa integrada de energia, com atuação na produção de etanol, açúcar e energia elétrica a partir de biomassa.",
        link: "https://pt.wikipedia.org/wiki/Raízen"
    },
    {   
        codigo: "JBSS3",
        titulo: "JBS (JBSS3)",
        descricao: "JBS (JBSS3) é uma das maiores indústrias de alimentos do mundo, especializada em processamento de carnes bovina, suína, ovina e de aves.",
        link: "https://pt.wikipedia.org/wiki/JBS"
    },
    {   
        codigo: "BEEF3",
        titulo: "Minerva (BEEF3)",
        descricao: "Minerva (BEEF3) é uma das principais empresas brasileiras no setor de processamento de carnes, com atuação em diversos países da América Latina.",
        link: "https://pt.wikipedia.org/wiki/Minerva_S.A."
    },
    {   
        codigo: "ALPA4",
        titulo: "Alpargatas (ALPA4)",
        descricao: "Alpargatas (ALPA4) é uma empresa brasileira conhecida mundialmente pela marca Havaianas, além de outras marcas de calçados e artigos esportivos.",
        link: "https://pt.wikipedia.org/wiki/Alpargatas"
    },
    {   
        codigo: "AZUL4",
        titulo: "Azul (AZUL4)",
        descricao: "Azul (AZUL4) é uma das maiores companhias aéreas do Brasil, com foco em voos regionais e uma ampla rede de destinos.",
        link: "https://pt.wikipedia.org/wiki/Azul_Linhas_Aéreas"
    },
    {   
        codigo: "BRKM5",
        titulo: "Braskem (BRKM5)",
        descricao: "Braskem (BRKM5) é a maior produtora de resinas termoplásticas das Américas, atuando no setor petroquímico.",
        link: "https://pt.wikipedia.org/wiki/Braskem"
    },
    {   
        codigo: "ASAI3",
        titulo: "Assaí (ASAI3)",
        descricao: "Assaí (ASAI3) é uma das maiores redes de atacado do Brasil, especializada em produtos alimentícios e não alimentícios.",
        link: "https://pt.wikipedia.org/wiki/Assaí_Atacadista"
    },
    {   
        codigo: "CPLE6",
        titulo: "Copel (CPLE6)",
        descricao: "Copel (CPLE6) é uma empresa do setor de energia elétrica, com atuação em geração, transmissão e distribuição no Paraná.",
        link: "https://pt.wikipedia.org/wiki/Copel"
    },
    {   
        codigo: "CRFB3",
        titulo: "Carrefour (CRFB3)",
        descricao: "Carrefour (CRFB3) é uma das maiores redes de supermercados do Brasil, com presença em todo o território nacional.",
        link: "https://pt.wikipedia.org/wiki/Carrefour_Brasil"
    },
    {   
        codigo: "BRAP4",
        titulo: "Bradespar (BRAP4)",
        descricao: "Bradespar (BRAP4) é uma holding de investimentos, com participação relevante em empresas como a Vale.",
        link: "https://pt.wikipedia.org/wiki/Bradespar"
    },
    {   
        codigo: "CMIG4",
        titulo: "Cemig (CMIG4)",
        descricao: "Cemig (CMIG4) é uma das principais empresas do setor elétrico brasileiro, com atuação em geração, transmissão e distribuição de energia.",
        link: "https://pt.wikipedia.org/wiki/Cemig"
    },
    {   
        codigo: "DXCO3",
        titulo: "Dexco (DXCO3)",
        descricao: "Dexco (DXCO3), anteriormente conhecida como Duratex, é uma empresa brasileira focada na produção de painéis de madeira, louças e metais sanitários.",
        link: "https://pt.wikipedia.org/wiki/Dexco"
    },
    {   
        codigo: "EMBR3",
        titulo: "Embraer (EMBR3)",
        descricao: "Embraer (EMBR3) é uma das maiores fabricantes de aeronaves do mundo, com destaque na aviação comercial, executiva e de defesa.",
        link: "https://pt.wikipedia.org/wiki/Embraer"
    },
    {   
        codigo: "CIEL3",
        titulo: "Cielo (CIEL3)",
        descricao: "Cielo (CIEL3) é líder no setor de pagamentos eletrônicos no Brasil, oferecendo soluções para captura, processamento e liquidação de transações.",
        link: "https://pt.wikipedia.org/wiki/Cielo_S.A."
    },
    {   
        codigo: "COGN3",
        titulo: "Cogna (COGN3)",
        descricao: "Cogna (COGN3) é uma das maiores empresas de educação no Brasil, com foco em ensino superior e básico.",
        link: "https://pt.wikipedia.org/wiki/Cogna_Educação"
    },
    {   
        codigo: "CPFE3",
        titulo: "CPFL Energia (CPFE3)",
        descricao: "CPFL Energia (CPFE3) é uma das maiores empresas do setor de energia no Brasil, com atuação em geração, transmissão e distribuição.",
        link: "https://pt.wikipedia.org/wiki/CPFL_Energia"
    },
    {   
        codigo: "CCRO3",
        titulo: "CCR (CCRO3)",
        descricao: "CCR (CCRO3) é uma das maiores concessionárias de infraestrutura do Brasil, com atuação em rodovias, mobilidade urbana e aeroportos.",
        link: "https://pt.wikipedia.org/wiki/CCR_S.A."
    }
];

