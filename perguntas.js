const quizQuestions = [
    {
      q: "Qual é o prazo de duração estabelecido para as atividades do Banestes S.A. segundo o seu Estatuto Social?",
      options: [
        "Cento e vinte anos civis, renováveis automaticamente por igual período.",
        "Noventa e nove anos de exploração bancária comercial, prorrogáveis por deliberação soberana.",
        "Prazo de duração indeterminado.",
        "Vinculado estritamente ao prazo dos acordos e convênios públicos de exclusividade estadual."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 2º determina expressamente que o prazo de duração da Sociedade é indeterminado, garantindo a perenidade institucional do banco."
    },
    {
      q: "De acordo com as vedações expressas no Estatuto Social do Banestes S.A., a instituição está autorizada a captar recursos no mercado de capitais por meio de quais dos seguintes títulos?",
      options: [
        "Debêntures conversíveis em ações preferenciais nominativas escriturais.",
        "Partes beneficiárias vinculadas a fundos de investimento imobiliário corporativo.",
        "Ações preferenciais e ordinárias apenas, sendo vedada a emissão de debêntures ou partes beneficiárias.",
        "Debêntures simples não conversíveis com garantia flutuante ou real."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 6º, Parágrafo Quarto, traz um bloqueio textual estrito, impedindo terminantemente o banco de emitir debêntures ou partes beneficiárias."
    },
    {
      q: "Em caso de eventual liquidação do Banestes S.A., qual é o privilégio patrimonial exato garantido aos titulares de ações preferenciais (PN)?",
      options: [
        "Prioridade no reembolso de capital, com acréscimo de um prêmio de dez por cento.",
        "Prioridade no reembolso de capital, sem prêmio.",
        "Conversão automática compulsória em títulos da dívida pública consolidada do Estado.",
        "Direito de voto emergencial e temporário na Assembleia para fiscalizar o fluxo de ativos."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "A alínea 'a' do Parágrafo Segundo do Artigo 5º assegura a preferência na fila de devolução de recursos em caso de liquidação, mas deixa claro: sem prêmio."
    },
    {
      q: "Qual é a participação mínima com direito a voto que o Estado do Espírito Santo deve manter perpetuamente no Banestes S.A.?",
      options: [
        "Cinquenta por cento mais uma ação preferencial escritural sem direito a voto.",
        "No mínimo cinquenta e um por cento do capital social com direito a voto.",
        "Trinta e um por cento das ações ordinárias dispersas nas plataformas de negociação.",
        "Cem por cento das ações preferenciais nominativas emitidas para o tesouro estadual."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 7º blinda o controle estatal de forma perene, exigindo a manutenção de pelo menos 51% das ações ordinárias (ON), que são as que detêm direito de voto."
    },
    {
      q: "Sobre o limite do Capital Autorizado, quantas novas ações podem ser emitidas pelo Conselho de Administração de forma ágil, independentemente de reforma estatutária?",
      options: [
        "Até oitenta milhões de novas ações, ordinárias ou preferenciais.",
        "Até vinte e cinco milhões de ações exclusivamente ordinárias.",
        "Qualquer quantidade livre de teto, desde que aprovada pelo Conselho Fiscal.",
        "O Banestes atua com capital social estático; qualquer nova emissão exige reforma em Assembleia."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "O Artigo 6º confere essa margem de até 80 milhões de novas ações (ON ou PN) ao CA para dar celeridade a captações de mercado, sem burocracia de Assembleia."
    },
    {
      q: "Diante das regras de segregação de comando e governança do Banestes, qual é a restrição estatutária quanto ao acúmulo de cargos no topo da administração?",
      options: [
        "O Diretor-Presidente pode acumular a presidência do Conselho de Administração em caso de vacância.",
        "É permitida a acumulação contanto que haja autorização prévia por decreto do Governador do Estado.",
        "Em hipótese alguma os cargos de Presidente do Conselho de Administração e de Diretor-Presidente da Sociedade poderão ser acumulados pelo mesmo profissional.",
        "O Conselheiro Independente assume a Diretoria de Finanças de forma cumulativa automática."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 28, Parágrafo Terceiro, impõe essa barreira absoluta para garantir a independência da supervisão estratégica (CA) frente à execução diária (COLED)."
    },
    {
      q: "Qual é a composição numérica regulamentar definida pelo Estatuto para o colegiado do Conselho de Administração do Banestes S.A.?",
      options: [
        "No mínimo cinco e no máximo sete membros estaduais.",
        "No mínimo vinte membros titulares fixos de livre escolha acionária.",
        "No mínimo sete e no máximo nove membros.",
        "De três a cinco membros, dependendo do patrimônio líquido ajustado apurado."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 26 define os patamares limites do CA: composto por no mínimo 7 e no máximo 9 membros eleitos pela Assembleia Geral."
    },
    {
      q: "Para fins de cômputo da cota obrigatória de membros independentes no Conselho de Administração, qual assento é expressamente excluído do cálculo pelo Estatuto?",
      options: [
        "O conselheiro indicado pela Fundação BANESES de Seguridade Social.",
        "O Diretor-Presidente do banco na qualidade de membro nato.",
        "Os conselheiros eleitos pelos empregados do banco.",
        "Os membros independentes substitutos cooptados em reuniões extraordinárias."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 29, Parágrafo Quarto, blinda o cálculo de governança, proibindo usar as vagas eleitas por voto funcional dos empregados para preencher a cota de independência."
    },
    {
      q: "Para a instalação regular e funcionamento válido de uma reunião do Conselho de Administração do Banestes S.A., exige-se qual quórum mínimo de presença?",
      options: [
        "Presença mínima de um terço de seus conselheiros eleitos.",
        "Presença física unânime de todos os membros ativos homologados.",
        "Presença mínima da maioria de seus membros em exercício.",
        "Presença de pelo menos dois conselheiros independentes e o Ouvidor Geral."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Parágrafo Primeiro do Artigo 33 dita a regra padrão de instalação: o CA se instala de forma válida com a presença da maioria absoluta de seus conselheiros ativos."
    },
    {
      q: "Como são resolvidas as situações de impasse ou empate técnico nas votações regulares conduzidas no âmbito do Conselho de Administração?",
      options: [
        "A matéria empacada é considerada sumariamente rejeitada e arquivada.",
        "O projeto é enviado para o crivo do Conselho Fiscal, que emitirá voto de minerva.",
        "Cabe ao Presidente do Conselho o voto de qualidade.",
        "Transfere-se a decisão final para o Diretor de Finanças de forma monocrática."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 26 estabelece que as deliberações são tomadas por maioria de votos dos presentes, cabendo ao Presidente do CA o voto de qualidade (desempate)."
    },
    {
      q: "Qual das seguintes decisões estratégicas do banco NÃO exige quórum qualificado especial de dois terços dos membros do Conselho de Administração?",
      options: [
        "Nomeação ou dispensa do Gerente de Auditoria Interna do Banco.",
        "Aprovação do planejamento anual e do regulamento de auditoria interna.",
        "Deliberações corriqueiras sobre contratação de fornecedores operacionais comuns.",
        "Subscrição da Carta Anual de Políticas Públicas e Metas integradas com o Estado."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "Contratações rotineiras e pautas administrativas comuns seguem o fluxo de aprovação por maioria simples, enquanto as frentes listadas no Parágrafo Único do Art. 34 travam em 2/3."
    },
    {
      q: "Atingido o teto máximo de reconduções consecutivas permitidas para um administrador, qual é a quarentena de afastamento exigida antes de uma nova indicação?",
      options: [
        "Interstício e afastamento compulsório por seis meses civis.",
        "Interstício e afastamento total por um ano fiscal contábil completo.",
        "Interstício de afastamento obrigatório por no mínimo dois anos.",
        "Os administradores podem retornar imediatamente se referendados por unanimidade na AGO."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Parágrafo Único do Artigo 16 (e repetido nas normas do CA) impõe que, após o teto de 3 reeleições seguidas, o gestor deve cumprir uma quarentena de 2 anos fora do cargo."
    },
    {
      q: "Salvo motivo de força maior ou caso fortuito, o membro do Conselho de Administração perderá o cargo se deixar de comparecer, sem justificativa, a quantas reuniões?",
      options: [
        "Duas reuniões ordinárias consecutivas ou três alternadas ao ano.",
        "Três reuniões ordinárias consecutivas ou a quatro reuniões ordinárias alternadas durante o prazo de gestão.",
        "Apenas se faltar a dez reuniões alternadas no transcorrer do ano fiscal.",
        "Uma única reunião de homologação contábil do balanço anual consolidado."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 20, Inciso I, pune o absenteísmo injustificado fixando a perda automática do mandato para quem faltar a 3 sessões seguidas ou 4 alternadas na gestão."
    },
    {
      q: "Qual restrição estatutária rígida de voto impera sobre o conselheiro de administração eleito na cota dos empregados ativos do banco?",
      options: [
        "Não participará das discussões e deliberações sobre assuntos que envolvam relações sindicais, remuneração, benefícios e vantagens.",
        "Fica impedido de votar nas pautas que discutam a escolha da firma de auditoria independente.",
        "Está impedido de votar na eleição ou destituição do Diretor-Presidente do banco.",
        "Sua presença é desconsiderada para fins de quórum de instalação de sessões extraordinárias."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "O Parágrafo Segundo do Artigo 27 afasta o representante dos empregados de votações sindicais, salariais ou de benefícios para evitar conflito de interesse direto."
    },
    {
      q: "Qual é a composição numérica regulamentar definida pelo Estatuto para o funcionamento regular da Diretoria Colegiada (COLED) do Banestes?",
      options: [
        "Composta por exatamente quatro diretores estatutários fixos de mercado.",
        "No mínimo quatro e no máximo oito membros.",
        "No mínimo dez membros eleitos de forma direta na Assembleia Geral.",
        "Organizada de forma livre a critério exclusivo do Governador do Estado por decreto."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 35 determina que o braço executivo de gestão diária do banco (COLED) deve flutuar na banda móvel de no mínimo 4 e no máximo 8 diretores executivos."
    },
    {
      q: "Para blindar o conhecimento histórico da instituição, o Estatuto Social garante qual cota permanente de funcionários na Diretoria Colegiada (COLED)?",
      options: [
        "Metade exata de todas as cadeiras operacionais da diretoria executiva do banco.",
        "Apenas a Diretoria de Finanças é restrita a funcionários concursados estáveis.",
        "Participação de, no mínimo, dois empregados ativos de carreira de provimento efetivo do quadro do Sistema Banestes.",
        "Não existem cotas de carreira fixadas para assentos na Diretoria do banco."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 35, Parágrafo Sexto, assegura que no mínimo 2 assentos na COLED pertençam a funcionários concursados da própria casa, valorizando o quadro interno."
    },
    {
      q: "Qual é a frequência regular obrigatória estipulada pelo Estatuto Social para a ocorrência das reuniões da Diretoria Colegiada (COLED)?",
      options: [
        "Reúnem-se ordinariamente uma vez por mês, após a consolidação dos balancetes contábeis.",
        "Reúnem-se ordinariamente uma vez por semana.",
        "Periodicidade quinzenal, com participação obrigatória de gerentes regionais.",
        "Dinâmica de livre agendamento, dependendo exclusivamente da pauta técnica do DRI."
      ],
      options_alias: [],
      correct: 1,
      theme: "estatuto",
      feedback: "A dinâmica operacional do banco exige agilidade executiva constante, por isso o Artigo 38 estipula que a COLED deve se reunir ordinariamente uma vez por semana."
    },
    {
      q: "Como são resolvidas as situações de impasse ou empate nas votações semanais conduzidas no âmbito das reuniões da Diretoria Colegiada (COLED)?",
      options: [
        "A matéria é suspensa e enviada automaticamente para análise do Conselho de Administração.",
        "O Diretor de Finanças profere voto de minerva contábil de desempate.",
        "A pauta é considerada rejeitada e arquivada, sendo vedada nova reapresentação rápida.",
        "As decisões são tomadas pela maioria simples de voto dos seus membros, cabendo ao Diretor-Presidente o voto de qualidade."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Para destravar decisões operacionais urgentes, o Artigo 38 confere o voto de qualidade (desempate) ao Diretor-Presidente da instituição, sendo vedada a abstenção."
    },
    {
      q: "Para a validade de qualquer ato, contrato ou documento que gere obrigação financeira para o Banestes, exige-se obrigatoriamente qual rito de assinaturas?",
      options: [
        "Assinatura isolada e unilateral de qualquer diretor executivo em exercício de pasta.",
        "Assinatura conjunta de dois Diretores, ou um Diretor e um Procurador, ou dois Procuradores.",
        "Assinatura eletrônica do Diretor de Relações com Investidores acoplada ao Ouvidor.",
        "Endosso passivo e formal lançado em ata trimestral pelo Conselho Fiscal."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 47 amarra a segurança jurídica do banco ao controle cruzado duplo, exigindo sempre assinaturas em par (duplas) para validar compromissos perante terceiros."
    },
    {
      q: "A competência estatutária privativa para criar, transferir ou suprimir sucursais, filiais, agências ou correspondentes no País pertence a qual órgão?",
      options: [
        "Ao Conselho de Administração, exigindo aprovação qualificada de dois terços.",
        "À Diretoria Colegiada (COLED).",
        "À Assembleia Geral de acionistas em sessão ordinária anual.",
        "Ao Comitê de Auditoria (COAUD) em seu parecer técnico de risco de capital."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "Gerenciar a capilaridade da rede de agências e correspondentes bancários na ponta comercial é atribuição operacional privativa da Diretoria Colegiada (Art. 43, VIII)."
    },
    {
      q: "O Comitê de Auditoria (COAUD), órgão de assessoramento direto ao CA, possui qual composição de membros e teto máximo de mandatos sucessivos permitidos?",
      options: [
        "No mínimo três membros, com mandato de um ano e limite de renovação até cinco anos consecutivos.",
        "De três a cinco membros, com mandato de dois anos vedada qualquer forma de recondução.",
        "Exatamente quatro integrantes independentes, com prazo de permanência perpétuo.",
        "No mínimo dois especialistas externos, com prazo de permanência livre atrelado à AGO."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Alinhado ao BACEN, o Artigo 49 dita mandatos anuais de 1 ano, permitindo renovações consecutivas até o teto de 5 anos, exigindo depois uma quarentena de 3 anos."
    },
    {
      q: "Qual é a frequência mínima de reuniões ordinárias estabelecida pelo Estatuto Social para o funcionamento do Comitê de Auditoria (COAUD)?",
      options: [
        "Bimestral, focada na revisão dos fluxos de risco operacional das agências.",
        "Trimestral, acompanhando o calendário de reuniões do Conselho Fiscal.",
        "No mínimo uma vez por mês.",
        "Semestral, concentrada nas Notas Explicativas contábeis finais."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 59 fixa o piso de reuniões ordinárias do COAUD: deve se reunir no mínimo uma vez por mês para fiscalizar os fluxos contábeis e de controles internos."
    },
    {
      q: "Identificada qualquer evidência de erro relevante ou fraude material na contabilidade, o COAUD deve reportar o fato diretamente ao Banco Central do Brasil em qual prazo?",
      options: [
        "No prazo máximo de até vinte e quatro horas da ciência do fato.",
        "Em até cinco dias úteis, acoplado ao parecer técnico da diretoria de riscos.",
        "No prazo máximo de até três dias úteis da identificação.",
        "Até o encerramento do trimestre contábil civil subsequente via relatório."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 61, Inciso XIX, impõe um prazo estrito de urgência: o COAUD tem até 3 dias úteis para comunicar o BACEN/SUSEP sobre fraudes ou erros materiais graves."
    },
    {
      q: "Conforme o Estatuto Social, quais são os requisitos de elegibilidade e o prazo regulamentar máximo de resposta conclusiva impositivos para a Ouvidoria do Banestes?",
      options: [
        "Profissional de mercado sem vínculo, com prazo de resposta de até vinte dias corridos.",
        "Diretor executivo eleito em acúmulo de pasta, com resposta em até quinze dias.",
        "Membro do Conselho Fiscal indicado pelo CRC, com resposta em até vinte dias úteis.",
        "Funcionário estável de carreira por no mínimo três anos, certificado, com resposta em até dez dias úteis."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 74 estabelece barreiras rígidas para a Ouvidoria: o ouvidor precisa ser funcionário estável da casa (3+ anos), certificado e responder às queixas em até 10 dias úteis."
    },
    {
      q: "Diferente de companhias que instalam o conselho fiscal apenas sob demanda, o Conselho Fiscal (CONFI) do Banestes S.A. opera sob qual regime regulamentar?",
      options: [
        "Regime temporário, instalando-se apenas sob requerimento de acionistas minoritários.",
        "Regime permanente, operando como órgão de funcionamento contínuo e obrigatório.",
        "Convocado excepcionalmente se o banco de economia mista registrar prejuízo operacional.",
        "Regime facultativo, acionado a critério discricionário do Diretor-Presidente do banco."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "Como grande S.A. estatal e instituição do SFN, o Banestes mantém o seu Conselho Fiscal em caráter de funcionamento permanente por mandatos contínuos (Art. 75)."
    },
    {
      q: "O Conselho Fiscal do Banestes é composto por no mínimo 3 e no máximo 5 membros efetivos. Dessas vagas, quais as indicações permanentes asseguradas por regulamento?",
      options: [
        "Um representante eleito pelos sindicatos e um auditor independente externo da CVM.",
        "Um servidor público permanente indicado pelo Estado e um contador indicado pelo CRC-ES.",
        "Dois contadores independentes escolhidos pela Diretoria Colegiada via licitação.",
        "Um representante da BANESES de Seguridade e um conselheiro independente do CA."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 75 (§3º e §4º) destina assentos permanentes a um servidor de carreira do Estado controlador e a um profissional indicado em lista tríplice pelo CRC-ES."
    },
    {
      q: "Qual é a trava de limite máximo permitida para o pagamento por Participação nos Lucros e Resultados (PLR) distribuída aos membros administradores da COLED e do CA?",
      options: [
        "Limitada a até três honorários base mensais fixos, independente do lucro real.",
        "Trava percentual fixa de cinco por cento do lucro operacional bruto auditado.",
        "O bônus não pode ultrapassar a sua remuneração anual nem dez por cento dos lucros líquidos ajustados, prevalecendo o que for menor.",
        "Não há limites estatutários para bônus, dependendo da aprovação global na AGO."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "Seguindo os limites da LSA incorporados ao Artigo 84 (III e IV), a PLR dos administradores trava no menor valor entre sua renda anual ou o teto de 10% do lucro ajustado."
    },
    {
      q: "Qual é a banda proporcional mínima e máxima fixada pelo Estatuto para o pagamento do dividendo obrigatório aos acionistas sobre o lucro líquido ajustado?",
      options: [
        "Pagamento fixo de vinte e cinco por cento, sem margem para retenção de lucros.",
        "Pagamento de dez por cento no mínimo, não podendo exceder a trinta por cento.",
        "No mínimo vinte e cinco por cento e no máximo sessenta por cento do lucro líquido ajustado.",
        "Distribuição livre definida anualmente pelo Comitê de Auditoria conforme o caixa."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 85, Inciso II, fixa os parâmetros de retorno aos acionistas em uma banda prudencial de payout que roda entre o piso de 25% e o teto máximo de 60% do lucro ajustado."
    },
    {
      q: "Alinhado à Lei das S.A., em quanto tempo prescrevem os dividendos ou JCP colocados à disposição pelo Banestes que não forem retirados ou reclamados pelo acionista?",
      options: [
        "Prazo prescritivo de um ano, após o qual os valores revertem ao tesouro do Estado.",
        "Prazo prescritivo de cinco anos, em alinhamento com as obrigações do Código Civil.",
        "Os proventos escriturais são perpétuos e nunca prescrevem na custódia central da B3.",
        "Prazo prescritivo de três anos, revertendo integralmente em favor do caixa ordinário do banco."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 85, §5º (alinhado à LSA e à Política de Dividendos) dita que os proventos esquecidos prescrevem em 3 anos da data de disponibilização, revertendo ao caixa do banco."
    },
    {
      q: "O que determina o princípio da Indenidade e qual a obrigação do administrador caso seja condenado em definitivo com comprovação de fraude ou dolo?",
      options: [
        "Garante imunidade penal absoluta e o prejuízo financeiro total é absorvido pelo banco.",
        "Fornece amparo de risco corporativo e as multas são quitadas por apólice pública do Estado.",
        "Assegura defesa técnica jurídica gratuita por atos regulares de gestão de boa-fé, mas impõe o dever de ressarcir integralmente o banco em caso de dolo ou fraude comprovados em decisão definitiva.",
        "Garante blindagem patrimonial irrestrita e o saldo é liquidado por apólice da CVM."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 101 assegura custas e defesa jurídica para atos legítimos de gestão regular conduzidos de boa-fé, mas se houver fraude ou dolo transitado em julgado, o gestor perde a proteção e deve ressarcir tudo ao banco."
    },
    {
      q: "Caso o acionista controlador decida alienar o controle do Banestes S.A., qual a proteção mínima de Tag-Along garantida pelo Estatuto aos acionistas minoritários ordinaristas e preferencialistas?",
      options: [
        "Paridade de oitenta por cento para ações ordinárias e exclusão total das preferenciais.",
        "Paridade de oitenta por cento para todas as classes de ações, conforme piso da Lei das S.A.",
        "Paridade de cem por cento restrita às ações ordinárias com direito a voto.",
        "Preço igual a cem por cento do valor pago por ação ordinária aos controladores, estendido a ambas as classes (ON e PN)."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Pegadinha de concurso! Embora a Lei das S.A. fixe o piso de 80% apenas para as ordinárias, o Artigo 5º, §6º do Estatuto do Banestes eleva a governança e garante 100% de paridade para ambas as classes (ON e PN)."
    },
    {
      q: "Em conformidade com o Estatuto Social, a eleição dos membros da Diretoria Colegiada (COLED) pelo Conselho de Administração deve ocorrer em qual prazo regulamentar?",
      options: [
        "No mesmo dia da realização da Assembleia Geral Ordinária, em ato contínuo de posse.",
        "Em até trinta dias contados do encerramento do exercício social contábil anterior.",
        "No prazo improrrogável de até dez dias úteis após a divulgação do balanço anual.",
        "Até cinco dias úteis após a data da realização da Assembleia Geral Ordinária."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Texto literal do Artigo 35: A eleição dos diretores da COLED pelo Conselho de Administração ocorrerá em até 5 dias úteis após a data da realização da Assembleia Geral Ordinária."
    },
    {
      q: "Se ocorrer a vacância abrupta da maioria dos cargos preenchidos do Conselho de Administração do Banestes S.A., como deve ser processado o reabastecimento do colegiado?",
      options: [
        "O Governador do Estado preencherá as vagas por decreto administrativo imediato.",
        "Os conselheiros remanescentes cooptarão os substitutos de forma autônoma.",
        "A Assembleia Geral deverá ser convocada obrigatoriamente para proceder a nova eleição.",
        "O Diretor-Presidente assumirá as funções acumuladas até o término do biênio."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "Cuidado! Se a vacância for de cargos minoritários, o próprio CA coopta os substitutos provisórios. Contudo, o Artigo 31 (Parágrafo Único) determina que, havendo vacância da maioria dos cargos, a Assembleia Geral deve ser convocada para nova eleição."
    },
    {
      q: "No âmbito do Comitê de Elegibilidade e Remuneração (COERE), qual o tempo máximo de permanência contínua permitido para um mesmo membro e qual a quarentena exigida para o seu retorno?",
      options: [
        "Limite de dois anos consecutivos; quarentena de seis meses civis.",
        "Limite de cinco anos consecutivos; quarentena de um ano fiscal.",
        "Limite de oito anos consecutivos; quarentena de dois anos civis.",
        "Limite de dez anos; quarentena de no mínimo três anos."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Conforme o Artigo 66, Parágrafo Quinto, o teto de permanência acumulada no COERE é de 10 anos, exigindo-se quarentena compulsória de 3 anos para que o integrante possa retornar ao comitê."
    },
    {
      q: "De quem é a alçada privativa para aprovar a estrutura organizacional do Banestes S.A. em nível equivalente e superior à Superintendência?",
      options: [
        "Do Conselho de Administração (CA).",
        "Da Diretoria Colegiada (COLED).",
        "A Assembleia Geral de Acionistas (AGO/AGE).",
        "Do Comitê de Elegibilidade e Remuneração (COERE)."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "O Artigo 34, Inciso XXVIII, confere ao Conselho de Administração a atribuição privativa de aprovar o organograma do Banco no nível de Superintendência ou superior."
    },
    {
      q: "Qual é o quórum de deliberação qualificado exigido no Conselho de Administração para aprovar a escolha e a destituição das firmas de auditores independentes do banco?",
      options: [
        "Maioria simples dos conselheiros presentes na sessão ordinária.",
        "Unanimidade absoluta de todos os conselheiros independentes da mesa.",
        "Maioria absoluta de todos os membros ativos em exercício.",
        "Maioria qualificada de no mínimo dois terços de todos os seus membros."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Matéria de concurso! O Parágrafo Único do Artigo 34 amarra a escolha ou destituição de auditores independentes ao quórum qualificado e rígido de 2/3 dos votos de todo o Conselho de Administração."
    },
    {
      q: "Em caso de afastamento ou licença temporária de um membro da Diretoria Colegiada, por quanto tempo o posto pode ser acumulado provisoriamente por outro diretor?",
      options: [
        "Pelo prazo máximo e improrrogável de trinta dias corridos.",
        "Pelo prazo máximo de noventa dias.",
        "Pelo prazo de até cento e vinte dias úteis integrados.",
        "Livremente até a ocorrência da próxima reunião ordinária do CA."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "Nos termos do Artigo 21, o afastamento temporário de diretor admite substituição interna em regime de acúmulo de funções pelo prazo limite de até 90 dias."
    },
    {
      q: "No âmbito do cálculo do dividendo obrigatório e constituição de fundos, qual a porcentagem do lucro líquido que deve ser destinada à Reserva Legal antes de qualquer outra distribuição?",
      options: [
        "Dez por cento, até que o fundo atinja metade do capital social subscrito.",
        "Dois por cento, até que o fundo iguale o montante do capital autorizado.",
        "Vinte e cinco por cento, sem limite máximo de retenção contábil do balanço.",
        "Cinco por cento, deixando de ser obrigatória quando atingir vinte por cento do capital social."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Alinhado à Lei das S.A., o Artigo 85, Inciso I, fixa a retenção compulsória de 5% do lucro líquido para a Reserva Legal, cessando a obrigação quando o fundo alcançar 20% do Capital Social integralizado."
    },
    {
      q: "Qual órgão corporativo do Banestes S.A. detém competência estatutária privativa para aprovar o Guia de Conduta Ética e o Programa de Integridade (Compliance)?",
      options: [
        "A Diretoria Colegiada (COLED) via comitê executivo de RH.",
        "A Assembleia Geral de Acionistas por maioria simples de votos.",
        "O Comitê de Auditoria (COAUD) em seu parecer de riscos.",
        "O Conselho de Administração (CA)."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 34, Inciso XLVIII, estabelece como atribuição privativa e estratégica do Conselho de Administração a aprovação final do Guia de Conduta Ética e do Programa de Integridade."
    },
    {
      q: "De acordo com o Artigo 75 do Estatuto Social, o Conselho Fiscal (CONFI) possui qual estrutura de membros efetivos e suplentes eleitos na AGO?",
      options: [
        "No mínimo três e no máximo cinco membros efetivos, e igual número de suplentes.",
        "Exatamente três membros efetivos e apenas um suplente geral da mesa.",
        "No mínimo cinco e no máximo sete membros efetivos e dois suplentes.",
        "De três a cinco membros efetivos, sendo dispensável a eleição de suplentes."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "O Artigo 75 determina que o Conselho Fiscal de funcionamento permanente deve ser composto por uma banda de 3 a 5 membros efetivos, elegendo obrigatoriamente igual número de suplentes."
    },
    {
      q: "Qual é o limite de mandatos e reconduções consecutivas permitidas para a investidura de um membro eleito no Conselho Fiscal (CONFI) do Banestes?",
      options: [
        "Mandato de um ano, permitida apenas uma única recondução sucessiva.",
        "Mandato unificado de dois anos, vedada qualquer forma de reeleição contínua.",
        "Mandato de um ano, com reeleições livres sem travas de compliance.",
        "Mandato de dois anos, permitidas duas reconduções consecutivas."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Atenção à regra do Conselho Fiscal (Art. 75): o mandato é de 2 anos e o teto limite de reeleições permite até 2 reconduções consecutivas, diferindo do CA que permite até 3."
    },
    {
      q: "Em qual periodicidade o Conselho Fiscal (CONFI) do Banestes deve se reunir de forma ordinária para analisar os balancetes contábeis?",
      options: [
        "Semanalmente, em conjunto com as mesas operacionais da COLED.",
        "Trimestralmente, acompanhando o rito de divulgação de resultados.",
        "Uma vez por mês.",
        "Semestralmente, antes do fechamento das demonstrações contábeis."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "Não confunda! Embora analise os balancetes trimestrais e o balanço semestral, o Artigo 79 estipula que o Conselho Fiscal reúne-se ordinariamente uma vez por mês."
    },
    {
      q: "Caso ocorra a vacância definitiva abrupta no cargo de Ouvidor Geral do Banco, qual instância detém a alçada regulamentar para eleger o novo titular?",
      options: [
        "A Diretoria Colegiada através de ato integrado de recursos humanos.",
        "A Assembleia Geral de acionistas em votação por maioria simples.",
        "O Comitê de Elegibilidade e Remuneração (COERE).",
        "O Conselho de Administração (CA)."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "A Ouvidoria é um órgão acessório de compliance ligado ao topo do organograma. O Artigo 34, Inciso II, confere ao Conselho de Administração a competência privativa para eleger ou destituir o Ouvidor."
    },
    {
      q: "Diante de pautas que apresentem interesse conflitante com os do Banco para um membro do Conselho de Administração, como ele deve proceder?",
      options: [
        "Pode votar normalmente, contanto que registre a justificativa em separado.",
        "Fica impedido de participar da deliberação do Conselho de Administração relacionada ao assunto.",
        "Transfere o seu direito de voto ao Diretor-Presidentes de forma irrevogável.",
        "Exerce voto consultivo com peso reduzido nas decisões da mesa."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "Regra ética absoluta: o Artigo 33, Parágrafo Sexto, determina que o conselheiro estará totalmente impedido de debater ou votar pautas que configurem conflito de interesse pessoal."
    },
    {
      q: "Quem detém a alçada privativa de estabelecer o valor de alçada para a aquisição ou a alienação de bens do ativo permanente do Banestes S.A.?",
      options: [
        "A Diretoria Colegiada (COLED) via diretoria de logística.",
        "A Assembleia Geral de Acionistas em sessão ordinária anual.",
        "O Comitê de Auditoria (COAUD) em seu parecer patrimonial.",
        "O Conselho de Administração (CA)."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Nos termos do Artigo 34, Inciso XXIII, fixar os valores monetários limite de alçada para compras ou vendas de ativos fixos e permanentes da instituição compete ao Conselho de Administração."
    },
    {
      q: "De acordo com o Artigo 54, qual a exigência técnica explícita imposta a pelo menos um dos membros do Comitê de Auditoria (COAUD)?",
      options: [
        "Deve possuir comprovados conhecimentos nas áreas de contabilidade e auditoria.",
        "Deve ser funcionário concursado do banco com mais de dez anos de carreira.",
        "Deve possuir formação jurídica com especialização em direito bancário público.",
        "Deve ser um acionista detentor de ações preferenciais da companhia."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Para garantir a capacidade de escrutínio contábil, o Artigo 54 (§1º) exige que pelo menos um integrante do COAUD comprove sólida qualificação técnica em contabilidade societária e auditoria."
    },
    {
      q: "Nas ofertas públicas por subscrição ou emissões de ações nos limites do capital autorizado, quem possui a faculdade estatutária de excluir o direito de preferência dos acionistas?",
      options: [
        "O Governador do Estado via decreto de interesse público coletivo.",
        "A Assembleia Geral de Acionistas em votação qualificada de dois terços.",
        "A Diretoria Colegiada (COLED) através de instrução normativa de RI.",
        "O Conselho de Administração (CA)."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "A caneta de mercado pertence ao CA: o Artigo 34, Inciso XV, autoriza o Conselho de Administração a deliberar emissões de ações e, se necessário para colocação pública célere, excluir o direito de preferência."
    },
    {
      q: "Conforme o Artigo 34, qual a exigência temporal mínima para que o Conselho de Administração aprova o Plano de Negócios (Guidance) do exercício seguinte?",
      options: [
        "Até o final do primeiro trimestre civil do ano de vigência das metas.",
        "Invariável em até noventa dias contados do encerramento do balanço.",
        "Livremente ao longo do ano, dependendo do cenário de liquidez.",
        "Até a última reunião ordinária do ano anterior."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Planejamento preventivo! O Artigo 34, Inciso XXVI, dita que o Plano de Negócios gerencial e orçamentário anual deve ser validado e aprovado pelo CA até a última reunião ordinária do ano anterior."
    },
    {
      q: "O Estatuto Social estabelece que a estratégia de longo prazo atualizada com análise de riscos e oportunidades deve abranger qual horizonte mínimo de tempo?",
      options: [
        "Horizonte de doze meses, focando nas metas comerciais imediatas.",
        "Horizonte mínimo de três anos fiscais integrados corporativos.",
        "Horizonte mínimo de cinco anos.",
        "Horizonte de dez anos contínuos, alinhados ao plano plurianual."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "Texto literal do Artigo 34, Inciso XXVII: O CA deve aprovar a estratégia de longo prazo com análise de riscos e oportunidades cobrindo o horizonte mínimo de 5 anos."
    },
    {
      q: "Se um administrador do Banestes S.A. incorrer em faltas injustificadas repetidas nas reuniões ordinárias do CA, qual instância possui alçada estatutária privativa para declarar a perda de seu cargo?",
      options: [
        "O Comitê de Elegibilidade e Remuneração (COERE) em seu parecer ético.",
        "A Diretoria Colegiada (COLED) por meio de ato integrado de controle.",
        "O Conselho Fiscal (CONFI) mediante relatório técnico enviado à CVM.",
        "A Assembleia Geral de Acionistas, órgão que o elegeu."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Princípio de simetria societária da LSA: o Artigo 26 preceitua que os conselheiros são 'eleitos pela Assembleia Geral e por ela destituíveis a qualquer tempo'. Logo, a declaração de perda do cargo por absenteísmo compete aos acionistas soberanos em Assembleia."
    },
    {
      q: "Nos termos do Estatuto Social, a função social do banco de economia mista cumpre-se prioritariamente através de qual diretriz operacional?",
      options: [
        "A aplicação de taxas de juros flutuantes acima da média das instituições privadas do país.",
        "A contribuição para o desenvolvimento econômico e social do Espírito Santo, colaborando com a democratização do crédito.",
        "O repasse integral de seus lucros operacionais brutos a fundos filantrópicos municipais.",
        "O financiamento exclusivo de obras públicas federais fora da região capixaba."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 1º, Parágrafo Único, determina que a função social do banco é gerar valor sustentável focando no desenvolvimento econômico e social do Estado do Espírito Santo."
    },
    {
      q: "Qual instância corporativa detém a alçada e a competência privativa soberana para reformar o Estatuto Social do Banestes S.A.?",
      options: [
        "O Conselho de Administração, por quórum unânime.",
        "A Diretoria Colegiada, mediante resoluções normativas internas.",
        "A Assembleia Geral de Acionistas.",
        "O Comitê de Auditoria, em conjunto com o Banco Central."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "A Assembleia Geral de Acionistas é o órgão soberano máximo da companhia, detendo a competência privativa exclusiva de reformar o Estatuto Social (Art. 14, I)."
    },
    {
      q: "Nas hipóteses em que ocorram sobras financeiras decorrentes da venda e alienação de participações acionárias pelo Estado controlador, qual o destino contábil obrigatório determinado?",
      options: [
        "Transferência definitiva aos cofres da União como dividendo extraordinário.",
        "Depósito compulsório em fundo cego patrimonial gerido pelo BNDES.",
        "Amortização imediata de passivos tributários da Secretaria de Fazenda (SEFAZ).",
        "Destinação para novos aportes de capital e subscrição de ações no próprio Banestes."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "De acordo com o Artigo 7º (Parágrafo Único), o Estado do Espírito Santo poderá reaplicar o saldo remanescente das negociações de suas ações para fins de nova subscrição no próprio banco."
    },
    {
      q: "Buscando o alinhamento com as boas práticas de governança corporativa e diversidade, o Estatuto Social fixa qual cota permanente para a composição da alta administração?",
      options: [
        "Exigência de metade das vagas do Conselho de Administração preenchidas por servidores estáveis.",
        "Percentual mínimo de trinta por cento de vagas reservadas a PCDs em diretorias.",
        "Reserva facultativa de um assento consultivo para o gênero feminino nas comissões.",
        "Presença permanente de no mínimo uma mulher e um membro de comunidade sub-representada."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 17, Inciso IV, estabelece de forma vanguardista a obrigatoriedade de se manter, no mínimo, uma mulher e um membro de comunidade sub-representada nos órgãos diretivos."
    },
    {
      q: "No âmbito do Conselho de Administração, quem detém a prerrogativa estatutária e legal de indicar o profissional que ocupará o cargo de Presidente do Conselho?",
      options: [
        "O Diretor de Finanças e Relações com Investidores da companhia.",
        "O Comitê de Elegibilidade e Remuneração (COERE).",
        "Os acionistas minoritários detentores de blocos de ações preferenciais.",
        "O acionista controlador, Estado do Espírito Santo."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 28, Parágrafo Segundo, determina expressamente que o Presidente do Conselho de Administração será o profissional indicado pelo acionista controlador estatal."
    },
    {
      q: "Qual o órgão corporativo do Banestes S.A. encarregado de julgar, avaliar o desempenho individual anual e ratear a política de remuneração da Diretoria Colegiada (COLED)?",
      options: [
        "A Assembleia Geral Ordinária de acionistas de forma direta.",
        "O Conselho de Administração (CA).",
        "O Conselho Fiscal (CONFI) por meio de parecer analítico.",
        "O Comitê de Auditoria (COAUD) em seu relatório de riscos."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Conselho de Administração atua como órgão supervisor imediato do braço executivo, competindo-lhe avaliar o desempenho e fixar atribuições dos diretores (Art. 34, III)."
    },
    {
      q: "A quem o Comitê de Auditoria (COAUD) subordina-se de forma direta e deve reportar os pareceres e os resultados de suas fiscalizações contábeis?",
      options: [
        "À Assembleia Geral de Acionistas no encerramento do exercício.",
        "À Diretoria Colegiada (COLED), visando à correção de falhas em agências.",
        "Ao Conselho de Administração (CA).",
        "Ao Conselho Fiscal (CONFI), por simetria regulatória tributária."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 53 preceitua que o Comitê de Auditoria deve reportar-se diretamente ao Conselho de Administração, atuando com total independência em relação à Diretoria Executiva."
    },
    {
      q: "No âmbito do Comitê de Auditoria (COAUD), as regras operacionais de seu próprio funcionamento interno demandam aprovação final de qual instância?",
      options: [
        "Do Conselho de Administração (CA).",
        "Da Diretoria Colegiada (COLED) via auditoria interna.",
        "Do Banco Central do Brasil por meio de homologação digital.",
        "Da própria maioria absoluta dos integrantes independentes do COAUD."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Nos termos do Artigo 61, Inciso I, embora o COAUD estabeleça suas regras operacionais por escrito, a validação e aprovação final cabem ao Conselho de Administração."
    },
    {
      q: "Para conferir total isenção e compliance técnico na triagem de novos candidatos ao CA e COLED, o Comitê de Elegibilidade e Remuneração (COERE) adota qual regra impositiva de composição?",
      options: [
        "Todos os seus integrantes devem pertencer obrigatoriamente à Diretoria Colegiada.",
        "Exige-se a presença de pelo menos dois auditores contábeis independentes externos.",
        "As vagas são restritas a funcionários de carreira com mais de vinte anos de casa.",
        "Pelo menos um de seus integrantes deve ser membro externo, não administrador do banco."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 65 estabelece que o COERE (composto de 3 a 5 membros) deve contar com, no mínimo, um integrante externo para afastar potenciais conflitos de interesse na triagem."
    },
    {
      q: "Em conformidade com a Lei das S.A. transposta para o Estatuto, qual o prazo regulamentar que os órgãos da administração possuem para colocar as cópias das atas de reuniões à disposição do Conselho Fiscal?",
      options: [
        "No prazo máximo de até dez dias do seu recebimento ou lavratura.",
        "No prazo improrrogável de até vinte e quatro horas úteis de calendário.",
        "Em até cinco dias úteis após a homologação digital interna.",
        "Disponibilizadas apenas no encerramento de cada trimestre contábil civil."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Seguindo o rigor da legislação societária federal, os órgãos de administração são obrigados a fornecer cópias das atas de reuniões ao Conselho Fiscal dentro do prazo de 10 dias."
    },
    {
      q: "Qual o prazo fixado pelo Estatuto para que a administração coloque à disposição dos membros do Conselho Fiscal as cópias dos balancetes periódicos emitidos?",
      options: [
        "Em até quarenta e oito horas contadas da transmissão oficial ao Banco Central.",
        "No prazo de até quinze dias de seu recebimento ou emissão contábil.",
        "No prazo limite de até trinta dias corridos do fechamento civil do mês.",
        "Entregues exclusivamente de forma consolidada no primeiro quadrimestre anual."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "A administração do banco deve fornecer os balancetes periódicos e demonstrações contábeis ao Conselho Fiscal dentro do prazo estrito de 15 dias de sua emissão."
    },
    {
      q: "A quem compete estatutariamente deliberar sobre a compra e venda de ações de emissão do próprio Banco para efeito de cancelamento ou permanência em tesouraria?",
      options: [
        "À Diretoria de Relações com Investidores e Finanças de forma monocrática.",
        "À Assembleia Geral de Acionistas em sessão extraordinária específica.",
        "Ao Conselho de Administração (CA).",
        "Ao Comitê de Auditoria (COAUD) em seu parecer patrimonial de capital."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 34, Inciso XVII, confere ao Conselho de Administração a atribuição privativa de deliberar sobre negociações com as próprias ações para fins de tesouraria ou cancelamento."
    },
    {
      q: "Os Juros sobre o Capital Próprio (JCP) eventualmente declarados e distribuídos sofrem qual tratamento contábil obrigatório perante os dividendos, segundo o Estatuto?",
      options: [
        "São adicionados ao lucro bruto gerencial, sem comunicação com dividendos mínimos.",
        "São estornados do Patrimônio Líquido e convertidos em bônus de subscrição.",
        "Ficam retidos em conta de reserva estatutária sem trâmite fiscal na fonte.",
        "São imputados, líquidos do imposto de renda retido na fonte, ao valor do dividendo obrigatório."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 85, §3º preceitua que os JCP distribuídos aos acionistas serão imputados, líquidos do imposto retido, ao valor do dividendo obrigatório fixado em balanço."
    },
    {
      q: "Qual é a taxa limitadora máxima indexada pela lei e pelo Estatuto que serve de teto para a apuração e o cálculo de remuneração a título de JCP pelo banco?",
      options: [
        "A variação pró-rata dia da Taxa de Juros de Longo Prazo (TJLP).",
        "A variação acumulada mensal da taxa Selic apurada no ano fiscal.",
        "O índice inflacionário oficial medido pelo IPCA do período contábil.",
        "A variação real de caixa ajustada pela taxa do Certificado de Depósito Interbancário."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "O Artigo 85, §4º, fixa uma trava técnica importante: a remuneração de JCP não pode ser superior à variação pró-rata dia da Taxa de Juros de Longo Prazo (TJLP) sobre as contas do PL."
    },
    {
      q: "A contratação da apólice corporativa de responsabilidade civil para amparar os riscos de atos de gestão legítimos (Seguro D&O) deve ser autorizada por qual órgão?",
      options: [
        "Pela própria seguradora do Estado de forma unilateral automática.",
        "Pelo Conselho de Administração (CA).",
        "Pela Diretoria Colegiada (COLED) via comitê de contratos logísticos.",
        "Pela Assembleia Geral Ordinária de minoritários nas plataformas abertas."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 101, §5º, confere ao Conselho de Administração a atribuição de autorizar a contratação de apólices de seguro D&O em favor dos administradores e ouvidor do banco."
    },
    {
      q: "Nas frentes em que ocorra uma controvérsia ou impasse de interpretação contábil entre o Conselho Fiscal (CONFI) e a Diretoria Executiva sobre o balanço, a palavra final pertence a quem?",
      options: [
        "Ao Comitê de Auditoria (COAUD) através de parecer vinculante na mesa.",
        "Ao Conselho Regional de Contabilidade (CRC-ES) por regras corporativas.",
        "Ao Banco Central do Brasil por meio de sua assessoria técnica regional.",
        "À Assembleia Geral de Acionistas, após a apresentação dos pareceres."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "A Assembleia Geral é a instância soberana máxima da corporação. Diante de impasses contábeis ou visões divergentes entre órgãos e conselhos, cabe aos acionistas julgar e aprovar as contas (Art. 14)."
    },
    {
      q: "Caso o Conselho de Administração (CA) decida promover a modificação, alteração ou extinção de carteiras operacionais do banco múltiplo, qual o quórum exigido?",
      options: [
        "Aprovação por maioria simples dos votos dos conselheiros presentes.",
        "Aprovação por quórum especial qualificado de dois terços de todo o colegiado.",
        "Exigência de unanimidade absoluta dos assentos independentes ativos.",
        "Proposta de alteração de carteiras é alçada exclusiva da Assembleia Geral."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Atenção à pegadinha! Extinguir e criar carteiras operacionais (Art. 34, Inciso LI) não está no rol de exceções de 2/3 do Parágrafo Único, logo, é deliberado por maioria simples do CA."
    },
    {
      q: "A quem compete estatutariamente fixar as diretrizes de limites de alçadas internas para concessão de créditos de grande porte e gerenciar as políticas de riscos?",
      options: [
        "À Diretoria de Finanças de forma monocrática sem aval dos comitês.",
        "Ao Comitê de Auditoria (COAUD) em seu relatório anual de compliance.",
        "Ao Conselho de Administração (CA).",
        "Ao Conselho Fiscal (CONFI) mediante resoluções mensais ordinárias."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 34, Inciso XLIV, encarrega formalmente o Conselho de Administração de fixar os níveis de apetite a risco e supervisionar as estruturas de controle interno."
    },
    {
      q: "No âmbito do cálculo de dedutibilidade fiscal do JCP consolidados pela legislação, as subvenções públicas governamentais de investimento recebidas pelo banco sofrem qual tratamento contábil obrigatório?",
      options: [
        "São incorporadas integralmente ao Patrimônio Líquido elegível com peso dobrado.",
        "Devem ser obrigatoriamente deduzidas da apuração do Patrimônio Líquido elegível.",
        "Permanecem neutras, não afetando os limites patrimoniais de dedutibilidade.",
        "São transferidas para contas de passivo circulante com correção automática."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "Seguindo os limites da Lei nº 14.789/2023 incorporados às análises contábeis, as subvenções públicas de investimento devem ser excluídas da base patrimonial elegível para dedução de JCP."
    },
    {
      q: "Qual é a alíquota fixa de retenção de Imposto de Renda (IRRF) que incide na fonte sobre o montante bruto distribuído a título de JCP aos investidores residentes no país em 2026?",
      options: [
        "Alíquota fixa de dez por cento, acompanhando as novas regras dos dividendos.",
        "Alíquota regressiva variando entre vinte e dois por cento e quinze por cento.",
        "Alíquota de quinze por cento sem alterações contratuais de mercado na fonte.",
        "Alíquota de dezessete vírgula cinco por cento sobre o valor bruto declarado."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "No cenário fiscal de 2026, a alíquota de retenção na fonte (IRRF) sobre o montante bruto distribuído a título de Juros sobre o Capital Próprio (JCP) foi fixada em 17,5%."
    },
    {
      q: "Qual o tratamento contábil exigido pela Instrução Normativa BCB nº 272/2022 para dividendos intermediários declarados após o fechamento do período contábil?",
      options: [
        "Devem ser pagos imediatamente ao mercado de ações em até dez dias úteis.",
        "São estornados e incorporados de forma definitiva e integral ao capital social.",
        "Devem ser transferidos para contas de provisão passiva no passivo circulante.",
        "Devem ser mantidos no patrimônio líquido do Banco enquanto não forem aprovados pela AGO."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Conforme a IN BCB nº 272/2022 refletida na Política do banco, os proventos declarados pós-fechamento contábil devem ficar 'represados' no PL até receberem validação na AGO."
    },
    {
      q: "Para que ocorra a instalação regular de uma reunião da Diretoria Colegiada (COLED) e validação de suas atas semanais, exige-se qual quórum mínimo de presença?",
      options: [
        "Presença de no mínimo dois diretores executivos de qualquer pasta.",
        "Presença da maioria absoluta de seus diretores executivos em exercício.",
        "Presença unânime de todos os diretores operacionais homologados.",
        "Instalação livre conduzida pelo Diretor de RI com qualquer quórum."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 38 estipula de forma clara que as sessões semanais ordinárias ou extraordinárias da COLED dependem do quórum de instalação composto pela maioria absoluta de seus diretores."
    },
    {
      q: "De acordo com as vedações do Artigo 18 (Lei das Estatais), qual das seguintes pessoas está elegível para assumir cargo de administração no Banestes S.A.?",
      options: [
        "Membro ativo com mandato em exercício no Poder Legislativo Estadual.",
        "Dirigente de estrutura decisória municipal de partido político ativo.",
        "Coordenador ativo de campanha eleitoral de pleito majoritário recente.",
        "Profissional sem vínculo político-partidário ativo e sem conflito comercial nos últimos 36 meses."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 18 barra indicações políticas com quarentena de 36 meses, exigindo independência técnica e ausência de restrições ou conflitos comerciais com a companhia."
    },
    {
      q: "As reuniões ordinárias do Conselho de Administração (CA) do Banestes S.A. devem ocorrer com qual periodicidade estatutária obrigatória?",
      options: [
        "Semanalmente, para acompanhamento diário das metas das agências.",
        "Quinzenalmente, alternando com os comitês técnicos de riscos.",
        "Uma vez por mês.",
        "Trimestralmente, focada na revisão dos balancetes contábeis integrados."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "Diferente da COLED que se reúne semanalmente, o Conselho de Administração foca no nível estratégico, reunindo-se ordinariamente uma vez por mês (Art. 33)."
    },
    {
      q: "Qual o quórum de deliberação qualificado exigido no CA do Banestes para aprovar propostas de modificação estrutural do apetite global a riscos?",
      options: [
        "Maioria qualificada de no mínimo dois terços de todos os conselheiros ativos.",
        "Maioria absoluta de todos os conselheiros independentes da mesa.",
        "Maioria simples dos votos dos conselheiros presentes na sessão.",
        "Aprovação por unanimidade absoluta do comitê de auditoria (COAUD)."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Decisões críticas envolvendo políticas integradas e gerenciamento de riscos operacionais ou de capital exigem o quórum qualificado e especial de 2/3 do CA (Art. 34, Parágrafo Único)."
    },
    {
      q: "Se um acionista minoritário do Banestes S.A. for detentor de ações preferenciais (PN), qual o direito político de voto assegurado a ele em separado?",
      options: [
        "Direito de voto pleno e unitário em igualdade com as ações ordinárias.",
        "Direito de voto restrito às pautas de fixação de salários de agências.",
        "Não conferem direito de voto, exceto para eleger um membro e suplente do Conselho Fiscal.",
        "Direito de vetar fusões societárias caso represente mais de dez por cento."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "As ações preferenciais abrem mão do direito político de voto em troca de privilégios patrimoniais, mas o Artigo 75 (§6º) garante o direito de eleger 1 membro e suplente do Conselho Fiscal em separado."
    },
    {
      q: "Quem possui alçada e competência privativa estatutária para a aprovação final do Regulamento Interno de Licitações e Contratos exigido para o Banestes S.A.?",
      options: [
        "À Diretoria Colegiada (COLED) através de ato integrado de comissão.",
        "À Assembleia Legislativa do Estado do Espírito Santo (ALES).",
        "Ao Comitê de Auditoria (COAUD) em seu relatório de controles internos.",
        "Ao Conselho de Administração (CA)."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Como sociedade de economia mista sob a Lei das Estatais, o Banestes possui normativo próprio de contratações, cabendo ao CA a aprovação e revisão técnica privativa (Art. 34)."
    },
    {
      q: "Qual diretor executivo possui a atribuição estatutária de gerenciar e responder legalmente pela transmissão de negociações de administradores e informações à CVM?",
      options: [
        "O Diretor-Presidente do Banco de forma isolada.",
        "O Diretor de Riscos e Controles Internos da respectiva pasta.",
        "O Diretor de Finanças e Relações com Investidores (DRI).",
        "O Coordenador de Auditoria Contábil do comitê técnico eleito."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "A cadeira executiva de Finanças acumula a função técnica e fiduciária de Diretor de Relações com Investidores (DRI), respondendo civilmente perante os órgãos reguladores (Art. 36)."
    },
    {
      q: "No âmbito das reuniões ordinárias do Conselho Fiscal (CONFI), qual a prerrogativa técnica e vaga permanente assegurada ao CRC-ES por regulamento?",
      options: [
        "Indicação de um auditor externo para chefiar a Auditoria Interna.",
        "Apresentação de lista tríplice de contadores habilitados para eleição.",
        "Assento permanente com direito a veto duplo em pautas de payout.",
        "Indicação do Coordenador do Comitê de Auditoria (COAUD) de forma direta."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "O Artigo 75 (§4º) dita o rito corporativo: o Conselho Regional de Contabilidade possui a prerrogativa de indicar lista tríplice para uma vaga de membro efetivo e suplente no Conselho Fiscal."
    },
    {
      q: "De acordo com o Estatuto Social e as regras societárias integradas, qual o prazo regulamentar para que a Diretoria coloque as cópias dos balancetes periódicos e demonstrações contábeis à disposição dos membros do Conselho Fiscal?",
      options: [
        "Em até quarenta e oito horas contadas da transmissão oficial ao Banco Central.",
        "No prazo de até cinco dias úteis após a aprovação interna da COLED.",
        "No prazo limite de até trinta dias corridos do fechamento civil do mês.",
        "Dentro de quinze dias do seu recebimento ou de sua emissão contábil."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Regra clássica de prazos de fiscalização: a Diretoria do banco possui o prazo impositivo de até 15 dias para repassar os balancetes e cópias contábeis ao Conselho Fiscal."
    },
    {
      q: "Identificada qualquer evidência de erro relevante ou fraude material nas demonstrações contábeis do banco, o Comitê de Auditoria (COAUD) deve formalizar a comunicação direta ao Banco Central do Brasil em qual prazo estrito?",
      options: [
        "No prazo máximo de até vinte e quatro horas da ciência do fato.",
        "Em até cinco dias úteis, acoplado ao parecer técnico da diretoria de riscos.",
        "Até o encerramento do trimestre contábil civil subsequente via relatório.",
        "No prazo máximo de três dias úteis a partir da identificação do evento."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 61, Inciso XIX, impõe um prazo estrito de urgência regulatória: o COAUD tem até 3 dias úteis para comunicar o BACEN ou a SUSEP sobre fraudes da diretoria ou erros materiais graves."
    },
    {
      q: "No âmbito do Comitê de Auditoria (COAUD), as normas de governança estabelecem que os integrantes independentes podem ter seus mandatos anuais renovados sucessivamente até qual limite cronológico máximo?",
      options: [
        "Permitida apenas uma única recondução consecutiva.",
        "Limite máximo de três anos consecutivos de permanência no assento.",
        "Limite máximo de cinco anos consecutivos, mediante prévia autorização do Banco Central.",
        "Permitidas renovações livres e por prazo indeterminado a critério do CA."
      ],
      correct: 2,
      theme: "estatuto",
      feedback: "O Artigo 49 dita mandatos curtos de 1 ano, permitindo renovações consecutivas e sucessivas até o teto máximo de 5 anos, exigindo validação do BACEN."
    },
    {
      q: "Atingido o teto regulamentar limite de permanência e renovações permitidas no Comitê de Auditoria (COAUD), qual o interstício obrigatório de quarentena exigido antes que o profissional possa retornar ao órgão?",
      options: [
        "Afastamento compulsório por seis meses civis.",
        "Afastamento total por um ano fiscal contábil completo.",
        "Afastamento obrigatório por no mínimo dois anos.",
        "Afastamento total e obrigatório por decorridos, no mínimo, três anos."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Para assegurar o distanciamento fiduciário e a isenção, o Artigo 51 (e diretrizes associadas) impõe uma quarentena compulsória de 3 anos de afastamento total antes de uma nova indicação ao COAUD."
    },
    {
      q: "Para conferir total isenção na triagem técnica de novos candidatos à alta administração, o Comitê de Elegibilidade e Remuneração (COERE) adota qual limite de permanência acumulada para seus integrantes?",
      options: [
        "Mandato de dois anos, sendo vedada qualquer forma de reeleição contínua.",
        "Limite de cinco anos consecutivos, com quarentena de um ano.",
        "Limite de oito anos de participação contínua nas comissões.",
        "Prazo de permanência no comitê limitado ao teto máximo de dez anos."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Rigor das regras das estatais: o Artigo 66, Parágrafo Quinto, estabelece que a permanência acumulada de um mesmo integrante no COERE não pode ultrapassar o teto histórico de 10 anos."
    },
    {
      q: "Cumprido o prazo máximo de permanência acumulada permitido no seio do Comitê de Elegibilidade e Remuneração (COERE), o integrante cumpre qual quarentena de afastamento obrigatório?",
      options: [
        "Afastamento compulsório por seis meses civis.",
        "Afastamento total e obrigatório por no mínimo três anos.",
        "Afastamento de um ano fiscal casado com o término do mandato.",
        "Afastamento por dois anos civis contados do encerramento da AGO."
      ],
      correct: 1,
      theme: "estatuto",
      feedback: "Texto literal do Artigo 66, Parágrafo Quinto: atingido o teto limite de dez anos, o integrante somente poderá retornar ao COERE após decorridos, no mínimo, 3 anos de afastamento anterior."
    },
    {
      q: "Diferente de outros órgãos de assessoramento que possuem mandatos anuais, o Conselho Fiscal (CONFI) de funcionamento permanente opera com mandatos individuais de qual duração?",
      options: [
        "Mandato unificado de seis meses civis.",
        "Mandato fixado em um ano fiscal contábil.",
        "Mandato de três anos, admitindo-se apenas uma reeleição.",
        "Prazo de mandato fixado em dois anos."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 75 dita o rito estável do Conselho Fiscal: seus membros efetivos e suplentes são eleitos na Assembleia Geral Ordinária para mandatos fixos de 2 anos."
    },
    {
      q: "No âmbito das eleições para o Conselho Fiscal (CONFI), qual o limite máximo de reeleições sucessivas autorizadas para um mesmo membro?",
      options: [
        "Nenhuma recondução é permitida, exigindo-se rotatividade total.",
        "Permitida apenas uma única recondução sucessiva na AGO.",
        "Permitidas até três reconduções consecutivas, imitando o CA.",
        "Permitidas duas reconduções consecutivas."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Pegadinha clássica de prova! Enquanto o Conselho de Administração (CA) admite até 3 reconduções sucessivas, o Conselho Fiscal (CONFI) limita as reeleições ao teto de até 2 reconduções consecutivas (Art. 75)."
    },
    {
      q: "Atingido o teto máximo de reconduções consecutivas no Conselho Fiscal (CONFI), qual o tempo de quarentena exigido antes que o profissional possa se candidatar à vaga novamente?",
      options: [
        "Somente poderão retornar aos seus cargos após decorridos, no mínimo, dois anos.",
        "Interstício de afastamento compulsório por seis meses civis.",
        "Interstício de afastamento obrigatório por três anos completos.",
        "Afastamento por cinco anos acompanhando os planos plurianuais."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Regra simétrica de quarentena de estatais: após esgotar o limite de 2 reconduções no Fiscal, o membro precisa cumprir o interstício de no mínimo 2 anos fora do cargo antes de retornar (Art. 75)."
    },
    {
      q: "Caso a Diretoria Executiva do banco identifique internamente a ocorrência de fraudes ou erros contábeis materiais, ela deve notificar o COAUD obrigatoriamente em qual prazo?",
      options: [
        "No prazo máximo de doze horas contadas da auditoria de filiais.",
        "No prazo regulamentar de até quarenta e oito horas da ocorrência.",
        "Em até três dias úteis da triagem interna de compliance.",
        "No prazo máximo de vinte e quatro horas da identificação."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Fluxo rápido de mitigação de riscos: o Parágrafo Único do Artigo 61 obriga as Diretorias do banco a comunicarem ao COAUD erros ou fraudes em no máximo 24 horas da identificação."
    },
    {
      q: "Aprovada a declaração de dividendos ordinários ou intermediários pelo banco, em até quantos dias os recursos financeiros devem ser colocados à disposição dos investidores?",
      options: [
        "No prazo limite de até quinze dias úteis do fato relevante.",
        "No prazo limite de até trinta dias corridos pela equipe de RI.",
        "No prazo máximo de quarenta e cinco dias integrados ao balanço.",
        "No prazo de até sessenta dias contados da data de aprovação."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Cumprindo as metas fiduciárias de pagamento da Política de Dividendos (Item 4.1) e do Estatuto, os proventos aprovados devem ficar à disposição dos acionistas em até 60 dias da homologação."
    },
    {
      q: "Se um investidor minoritário ou detentor de ações escriturais esquecer de resgatar seus dividendos ou JCP na companhia, os saldos sofrem perda por prescrição em qual prazo?",
      options: [
        "Prazo prescritivo de um ano, revertendo ao tesouro do Estado.",
        "Prazo prescritivo de dois anos contados do fechamento social.",
        "Prazo prescritivo de cinco anos seguindo as regras do código civil.",
        "Prescreverão no prazo de três anos, revertendo em favor do Banco."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Alinhado ao Artigo 287 da Lei das S.A. incorporado ao Artigo 85 (§5º) do Estatuto, os dividendos e JCP colocados à disposição e não reclamados prescrevem em 3 anos, revertendo ao caixa do Banestes."
    },
    {
      q: "Caso o Conselho de Administração promova modificações estruturais ou revisões nas suas Políticas de Divulgação ou de Negociação com ações, qual o prazo para relatar as mudanças à CVM?",
      options: [
        "Prazo de cinco dias úteis através de comunicado eletrônico de RI.",
        "Prazo de dez dias corridos acompanhado do texto descritivo.",
        "Prazo de trinta dias de calendário contados da lavratura da ata.",
        "Comunicado à Comissão de Valores Mobiliários no prazo de até quinze dias."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "O Artigo 18 (e regulamentos de compliance) determina que alterações no teor das políticas corporativas de divulgação e negociação exigem envio e atualização na CVM em até 15 dias."
    },
    {
      q: "Buscando afastar interferências político-partidárias, o Estatuto fixa qual prazo de quarentena para candidatos que coordenaram campanhas ou integraram cúpulas de partidos políticos?",
      options: [
        "Proibidos os candidatos com atuação partidária nos últimos doze meses.",
        "Vedação impeditiva estipulada no patamar de vinte e quatro meses.",
        "Veto absoluto focado nas atividades realizadas nos últimos quarenta e oito meses.",
        "Vedada a indicação de pessoa que atuou nos últimos trinta e seis meses."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Alinhamento rígido com a Lei das Estatais: o Artigo 18, Inciso II, bloqueia indicações para o CA ou Diretoria de quem tenha atuado em campanhas ou partidos políticos nos últimos 36 meses."
    },
    {
      q: "Nas situações de afastamento emergencial de um diretor executivo, a vaga admite preenchimento temporário por acúmulo de funções até qual limite cronológico máximo?",
      options: [
        "Pelo prazo de até trinta dias úteis, vedada qualquer prorrogação.",
        "Pelo prazo máximo de quarenta e cinco dias corridos de calendário.",
        "Pelo prazo limite de até sessenta dias em provisão sob ato do DRI.",
        "Posto ocupado provisoriamente por outro membro pelo prazo máximo de noventa dias."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Rito de substituição emergencial: o Artigo 21 dita que posições vagas ou afastamentos na Diretoria admitem acúmulo por outro diretor pelo teto máximo de 90 dias."
    },
    {
      q: "Aprovada a declaração e distribuição de Juros sobre o Capital Próprio (JCP) intermediários semestrais (junho/dezembro), os recursos devem ser liquidados em qual prazo?",
      options: [
        "Efetuados de forma imediata em até cinco dias úteis da ata.",
        "No prazo máximo de dez dias corridos da transmissão dos dados.",
        "No prazo limite de até sessenta dias contados do encerramento civil.",
        "Pagos em até trinta dias após serem declarados pelo Conselho de Administração."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Cronograma de pagamento de JCP: de acordo com o Item 7.1 da Política de Dividendos, os proventos intermediários semestrais são pagos em até 30 dias de sua declaração pelo CA."
    },
    {
      q: "O Conselho de Administração avalia e elege os diretores da Diretoria Colegiada (COLED) após a AGO de acionistas dentro de qual limite de tempo regulamentar?",
      options: [
        "A eleição ocorre de forma unificada no mesmo dia da AGO.",
        "Em até quarenta e oito horas úteis contadas da lavratura da ata.",
        "No prazo improrrogável de até dez dias corridos da posse do conselho.",
        "Eleição ocorrerá até cinco dias úteis após a data da realização da AGO."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Texto literal do Artigo 35: A renovação ou eleição da chapa executiva da COLED pelo Conselho de Administração deve ocorrer no prazo de até 5 dias úteis após a Assembleia Geral Ordinária."
    },
    {
      q: "Seguindo as regras de compartilhamento de informações societárias federais, as cópias das atas de reuniões da Diretoria Executiva devem ser enviadas ao Conselho Fiscal em qual prazo?",
      options: [
        "Dentro de dez dias de sua lavratura ou realização.",
        "Em até quarenta e oito horas da assinatura digital na plataforma.",
        "No prazo limite de até cinco dias úteis contados do encerramento.",
        "Entregues exclusivamente em bloco de forma trimestral na sede."
      ],
      correct: 0,
      theme: "estatuto",
      feedback: "Rito de transparência cruzada: os órgãos de administração do banco devem remeter cópias de suas atas de reuniões ao Conselho Fiscal em até 10 dias (Art. 75, §1º / Lei das S.A.)."
    },
    {
      q: "No âmbito do Conselho de Administração (CA), os conselheiros eleitos cumprem mandatos individuais de qual duração segundo o Estatuto Social?",
      options: [
        "Mandato fixado em um ano civil, permitidas renovações lineares.",
        "Mandato de três anos, permitindo-se apenas uma única recondução.",
        "Mandato unificado de quatro anos casados com o plano de governo.",
        "Prazo unificado de gestão de dois anos."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Duração de mandatos: o Artigo 26 define de forma clara que o Conselho de Administração é composto por membros eleitos com prazo unificado de gestão de 2 anos."
    },
    {
      q: "Para fins de contabilidade e transparência de mercado de capitais, qual o horizonte mínimo exigido para o Plano Estratégico de Longo Prazo do Banestes S.A.?",
      options: [
        "Horizonte de doze meses, revisado a cada trimestre civil.",
        "Horizonte mínimo de dois anos contados do balanço patrimonial.",
        "Horizonte mínimo de três anos fiscais integrados corporativos.",
        "Horizonte mínimo de cinco anos com análises de riscos e oportunidades."
      ],
      correct: 3,
      theme: "estatuto",
      feedback: "Planejamento fiduciário estável: o Artigo 34, Inciso XXVII, obriga o CA a revisar e aprovar anualmente a estratégia de longo prazo com horizonte mínimo de 5 anos."
    },
    {
      q: "De acordo com o Artigo 109 da Lei das S.A., qual direito é classificado como essencial e não pode ser retirado do acionista nem pelo estatuto social e nem por deliberação da assembleia geral?",
      options: [
        "O direito de participar dos lucros sociais e do acervo da companhia em caso de liquidação.",
        "O direito de veto absoluto sobre a destituição de diretores executivos da companhia.",
        "O direito de preferência na contratação de prestadores de serviços logísticos corporativos.",
        "O direito de eleger o Coordenador Geral do Comitê de Auditoria de forma direta."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "O Artigo 109 da Lei nº 6.404/76 lista os direitos essenciais intocáveis do acionista, fixando a participação nos lucros (dividendos) e a parcela do acervo em liquidações."
    },
    {
      q: "Se o estatuto social de uma companhia aberta for totalmente omisso quanto ao cálculo do dividendo mínimo obrigatório, qual é a regra padrão impositiva determinada pela Lei nº 6.404/76?",
      options: [
        "Distribuição discricionária de qualquer percentual definido pela Diretoria Colegiada.",
        "Retenção de cem por cento do lucro líquido para a formação de Reservas de Capital.",
        "Pagamento compulsório equivalente a vinte e vinte e cinco por cento do lucro bruto total.",
        "Pagamento de metade do lucro líquido do exercício ajustado nos termos da legislação societária."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Regra clássica de prova! O Artigo 202 da LSA estabelece que, na omissão completa do estatuto, o dividendo obrigatório corresponderá a 50% (metade) do lucro líquido ajustado."
    },
    {
      q: "Para que um Acordo de Acionistas que regula o exercício do direito de voto ou a compra e venda de ações seja de observância obrigatória pela companhia, qual rito formal é exigido pela Lei das S.A.?",
      options: [
        "Publicação resumida no Diário Oficial e registro na Junta Comercial correspondente.",
        "Homologação prévia por meio de decisão unânime dos membros do Conselho Fiscal.",
        "Adesão assinada por cem por cento dos detentores de ações de classe preferencial.",
        "Arquivamento do instrumento do acordo na sede da própria companhia."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Segundo o Artigo 118 da Lei nº 6.404/76, os acordos de acionistas só vinculam e obrigam a própria companhia a respeitá-los se estiverem formalmente arquivados na sua sede."
    },
    {
      q: "Qual é o prazo mínimo de antecedência exigido em primeira convocação para a realização de uma Assembleia Geral de uma companhia aberta nos termos da Lei das S.A.?",
      options: [
        "Dez dias de calendário contados da publicação digital do primeiro aviso.",
        "Quinze dias úteis de antecedência da data fixada para a abertura dos trabalhos.",
        "Oito dias corridos de antecedência para qualquer modalidade de conclave societário.",
        "Vinte e um dias de antecedência contados da publicação do primeiro anúncio."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Prazo rígido! O Artigo 124, § 1º, Inciso I da LSA determina que, para companhias abertas, a convocação em primeira chamada deve respeitar o prazo mínimo de 21 dias de antecedência."
    },
    {
      q: "Caso ocorra a falta de quórum de instalação na primeira chamada de uma Assembleia Geral de companhia aberta, qual o prazo mínimo de antecedência exigido para o anúncio de segunda convocação?",
      options: [
        "Vinte e quatro horas úteis antes da abertura programada da mesa diretora.",
        "No mínimo oito dias de antecedência da data da nova assembleia.",
        "Três dias de calendário contados da ocorrência da sessão frustrada na sede.",
        "No mínimo quinze dias corridos integrados ao compliance de relações com investidores."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Texto literal do Artigo 124, § 1º, Inciso II da LSA: em segunda convocação para companhias abertas, os anúncios de edital devem respeitar o prazo mínimo de 8 dias."
    },
    {
      q: "O acionista dissidente de deliberações assembleares graves, como fusões ou incorporações, possui direito de retirada da sociedade. Esse direito deve ser exercido em qual prazo legal?",
      options: [
        "Em até dez dias úteis contados da data de votação final na mesa assemblear.",
        "No prazo máximo e decadencial de quinze dias corridos do encerramento da sessão.",
        "Prazo livre atrelado à ocorrência da próxima reunião ordinária de conselhos.",
        "Dentro de trinta dias contados da publicação da ata da assembleia geral."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "O Artigo 137, Inciso IV da LSA fixa que o direito de recesso/retirada deve ser exercido dentro de 30 dias contados da publicação oficial da ata que aprovou a matéria dissidente."
    },
    {
      q: "Qual o limite percentual máximo fixado pela Lei das S.A. para a emissão de ações preferenciais (PN) sem direito a voto em relação ao capital social total de uma companhia aberta?",
      options: [
        "Até vinte e cinco por cento de todo o volume de títulos subscritos em dinheiro.",
        "Até trinta e três por cento de toda a estrutura acionária ativa da S.A.",
        "Não há limites, podendo a companhia emitir preferenciais de forma livre.",
        "Não poderá ultrapassar de cinquenta por cento do total das ações emitidas."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "O Artigo 15, § 2º da LSA estabelece a trava de equilíbrio de governança: o número de ações preferenciais sem voto ou com voto restrito não pode superar 50% do capital social total."
    },
    {
      q: "Nas companhias abertas, a Lei das S.A. faculta a participação remota dos acionistas em assembleias gerais. Quem detém a alçada de regulamentar as condições e o fluxo do voto a distância?",
      options: [
        "A mesa diretora do Conselho de Administração da própria companhia emissora.",
        "O Banco Central do Brasil, via resoluções monetárias e bancárias integradas.",
        "A Junta Comercial do Estado onde está localizada a sede social principal do banco.",
        "A Comissão de Valores Mobiliários (CVM)."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "O parágrafo único do Artigo 121 da LSA atribui de forma exclusiva à Comissão de Valores Mobiliários (CVM) a alçada para ditar as regras regulamentares sobre voto remoto."
    },
    {
      q: "Para salvaguardar a fiscalização fiduciária, a Lei das S.A. determina que a administração da companhia deve fornecer cópias das atas de suas reuniões ao Conselho Fiscal em qual prazo?",
      options: [
        "No prazo máximo de quarenta e oito horas da ocorrência da sessão diretiva.",
        "Em até cinco dias úteis contados da lavratura final do documento em livro.",
        "Dentro de dez dias de sua lavratura ou realização.",
        "Dentro de vinte dias corridos do encerramento civil do mês de referência."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Transparência cruzada! O Artigo 163, § 1º determina que os administradores devem colocar cópias das atas das reuniões à disposição do Conselho Fiscal dentro de 10 dias."
    },
    {
      q: "Qual demonstração financeira complementar é de elaboração e publicação compulsória e obrigatória para as companhias abertas, mas facultativa para as S.A. de capital fechado?",
      options: [
        "O Balanço Patrimonial detalhado por contas analíticas de ativo circulante.",
        "A Demonstração dos Lucros ou Prejuízos Acumulados de fechamento social.",
        "A Demonstração dos Fluxos de Caixa ajustada pelo método contábil direto.",
        "A Demonstração do Valor Adicionado (DVA)."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Rigor de companhia aberta! O Artigo 176, Inciso V da LSA obriga as companhias listadas a elaborarem e publicarem a DVA (Demonstração do Valor Adicionado) ao fim do ano."
    },
    {
      q: "Nos termos da Lei das S.A., a companhia aberta deve submeter suas demonstrações financeiras de encerramento de exercício obrigatoriamente ao exame de quem?",
      options: [
        "De um consórcio técnico formado por gerentes das agências comerciais filiais.",
        "Do comitê consultivo da associação dos funcionários estaduais da companhia.",
        "Da auditoria interna gerencial vinculada diretamente à Diretoria Executiva.",
        "De auditores independentes registrados na Comissão de Valores Mobiliários."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Exigência de auditoria externa: o Artigo 177, § 3º da LSA dita que as demonstrações contábeis das companhias abertas devem ser auditadas por firmas independentes registradas na CVM."
    },
    {
      q: "O que preceitua a Lei das S.A. sobre o dever de sigilo do administrador em relação a informações corporativas confidenciais obtidas em razão de seu cargo?",
      options: [
        "Deve guardar sigilo sobre qualquer informação ainda não divulgada para conhecimento do mercado.",
        "O sigilo é facultativo se o administrador julgar o fato de interesse público.",
        "Cessa imediatamente quando o gestor se desliga fisicamente de suas funções diárias.",
        "Aplica-se apenas ao Diretor de Finanças e Relações com Investidores de forma isolada."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Dever de lealdade: o Artigo 155 da LSA obriga o administrador a reter segredo total sobre atos ocultos capazes de afetar cotações, proibindo o uso dos dados em proveito próprio."
    },
    {
      q: "Caso o estatuto social de uma S.A. seja reformado para introduzir pela primeira vez uma cláusula de dividendo obrigatório, a lei fixa qual piso mínimo percentual de proteção?",
      options: [
        "Piso fixo intangível de dez por cento do lucro bruto total corporativo.",
        "Mínimo de quinze por cento calculado sobre o faturamento líquido ajustado.",
        "Banda flexível de livre escolha sem limites mínimos fixados em texto de lei.",
        "Não poderá ser inferior a vinte e sem por cento do lucro líquido ajustado."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Trava de proteção: de acordo com o Artigo 202, § 3º da LSA, quando uma S.A. altera o estatuto omisso para fixar o dividendo obrigatório, o piso mínimo introduzido não pode ser inferior a 25%."
    },
    {
      q: "Qual o canal oficial obrigatório determinado pela Lei nº 6.404/76 para a realização de publicações e avisos legais ordenados de companhias abertas?",
      options: [
        "Jornais físicos impressos locais de grande circulação comercial e tiragem.",
        "Diário Oficial do Estado correspondente à comarca de registro de atas.",
        "Portais comerciais privados de notícias financeiras com acesso restrito pago.",
        "Sítios eletrônicos da CVM e da entidade administradora do mercado onde as ações são negociadas."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "O Artigo 289 da LSA modernizou o rito, migrando as publicações obrigatórias de jornais de papel para os portais eletrônicos oficiais da CVM e da Bolsa de Valores (B3)."
    },
    {
      q: "Para garantir a autenticidade e a segurança jurídica das publicações digitais das companhias abertas, a Lei das S.A. exige o uso de qual ferramenta tecnológica?",
      options: [
        "Criptografia proprietária desenvolvida pelo setor interno de tecnologia do banco.",
        "Certificação digital de autenticidade emitida por autoridade credenciada no âmbito da ICP-Brasil.",
        "Autenticação por biometria facial cruzada com dados civis governamentais.",
        "Assinatura em dupla de dois procuradores externos com registro notarial em cartório."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Fidelidade eletrônica: o Artigo 289 determina que todos os documentos digitais publicados pelas S.A. abertas devem possuir certificação digital nos padrões oficiais da ICP-Brasil."
    },
    {
      q: "Sob o manto do Artigo 156 da Lei das S.A., como deve agir um administrador que possua interesse pessoal conflitante em uma determinada operação social do banco?",
      options: [
        "Pode debater e votar normalmente contanto que declare o interesse em separado.",
        "Submete seu direito político de voto de forma monocrática ao Conselho Fiscal.",
        "Vota de forma secreta para não influenciar o posicionamento dos pares na mesa.",
        "É vedado intervir na operação social, devendo cientificar os demais e registrar o impedimento na ata."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Conflito de interesse: o Artigo 156 veda a intervenção ou voto do administrador em matérias onde possua interesse colidente com o da companhia, exigindo registro do impedimento em ata."
    },
    {
      q: "O Conselho Fiscal de uma companhia aberta possui, por força da Lei das S.A., direito de receber quais documentos contábeis trimestrais e em qual prazo limite?",
      options: [
        "Cópias das atas de comitês de agências comerciais em até vinte e quatro horas.",
        "Demonstrações de fluxo de caixa gerencial bruto em trinta dias de calendário.",
        "Notas explicativas resumidas em até cinco dias da emissão contábil interna.",
        "Cópias dos balancetes e demais demonstrações financeiras em até quinze dias de sua elaboração."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Acesso total: o Artigo 163, § 1º da LSA estabelece que a administração deve enviar as cópias dos balancetes contábeis e demonstrativos ao Conselho Fiscal em no máximo 15 dias de sua emissão."
    },
    {
      q: "Qual o direito político de fiscalização assegurado por lei ao acionista ou grupo de acionistas que represente uma fatia mínima de capital social perante o Conselho Fiscal?",
      options: [
        "Direito de exigir a substituição imediata do auditor independente externo do banco.",
        "Direito de travar de forma monocrática o pagamento de PLR variáveis da Diretoria.",
        "Direito de avocar para si a coordenação e redação das atas semanais da COLED.",
        "O conselho fiscal fornecerá, sempre que solicitadas, informações sobre matérias de sua competência a quem detenha no mínimo cinco por cento do capital."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Canal minoritário: o § 6º do Artigo 163 assegura que acionistas detentores de no mínimo 5% do capital social da companhia possuem o direito legal de obter informações e relatórios do Fiscal."
    },
    {
      q: "Os pareceres, relatórios técnicos e representações formais lavrados pelo Conselho Fiscal gozam de qual prerrogativa de leitura em Assembleias Gerais?",
      options: [
        "Podem ser apresentados e lidos na assembleia-geral, independentemente de publicação prévia e ainda que a matéria não conste da ordem do dia.",
        "Exigem publicação em Diário Oficial com trinta dias de antecedência padrão.",
        "Dependem de autorização prévia por escrito exarada pelo Diretor de RI do banco.",
        "São arquivados sob sigilo absoluto, sendo vedada sua leitura pública aberta em AGO."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Voz ativa: o parágrafo único do Artigo 164 garante que os pareceres do Fiscal podem ser lidos diretamente na mesa da Assembleia Geral, sem barreiras de publicação ou de pauta prévia."
    },
    {
      q: "Se uma grande transação comercial com Partes Relacionadas (TPR) envolver valores que superem metade do ativo total constante do último balanço aprovado da companhia, a competência de aprovação pertence a quem?",
      options: [
        "À Diretoria Colegiada de forma soberana reativa em comitê interno.",
        "Ao Comitê de Auditoria (COAUD) via parecer técnico unânime da mesa.",
        "Ao Conselho de Administração (CA) em reunião ordinária mensal fixada.",
        "Privativamente à Assembleia Geral de Acionistas."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Trava societária de grande porte: o Artigo 122, Inciso X da LSA, confere de forma privativa e exclusiva à Assembleia Geral a alçada para aprovar operações com partes relacionadas que superem 50% dos ativos."
    },
    {
      q: "Nos termos do Artigo 158 da Lei das S.A., em qual hipótese o diretor ou conselheiro responde pessoalmente com seus bens civis por obrigações contraídas em nome da companhia?",
      options: [
        "Sempre que assinar qualquer contrato comercial de captação de recursos no mercado.",
        "Se a companhia aberta registrar prejuízo contábil líquido ao encerramento do ano.",
        "Se agir estritamente dentro de suas atribuições normais com boa-fé comercial.",
        "Quando proceder com dolo, culpa ou com violação expressa da lei ou do estatuto social."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Quebra da blindagem: o Artigo 158 afasta o risco pessoal do patrimônio do gestor que atua de forma regular de boa-fé, mas quebra a proteção se comprovado dolo, culpa ou violação de leis."
    },
    {
      q: "Nas companhias abertas, os bônus ou opções de compra de ações outorgados a diretores executivos ou funcionários dependem de aprovação compulsória de qual instância?",
      options: [
        "Do Comitê de Elegibilidade e Remuneração de forma isolada em atas técnicas.",
        "Da Comissão de Valores Mobiliários via portaria regulada em diário oficial.",
        "Do Conselho de Administração em deliberação regular de quórum de maioria simples.",
        "Da Assembleia Geral de Acionistas, nos termos de planos específicos aprovados."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Planos de incentivo: o Artigo 168, § 3º da LSA estabelece que a outorga de opções de compra de ações (Stock Options) a administradores ou colaboradores exige aprovação soberana da Assembleia Geral."
    },
    {
      q: "Para o cálculo do patrimônio líquido ajustado visando à base de cálculo de dividendos, a cota retida destinada à Reserva Legal é calculada em qual proporção do lucro?",
      options: [
        "Dez por cento do lucro operacional bruto antes de provisões fiscais bancárias.",
        "Vinte e cinco por cento do saldo acumulado total de lucros retidos na companhia.",
        "Dois por cento do capital social integralizado em dinheiro pelos sócios do bloco.",
        "Cinco por cento do lucro líquido do exercício social."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Retenção legal: em perfeita harmonia com o Artigo 193 da LSA, a companhia deve reter 5% do lucro líquido do exercício social para a constituição da Reserva Legal."
    },
    {
      q: "O direito de retirada ou recesso do acionista dissidente em virtude de incorporação de ações ou fusões societárias calcula o valor de reembolso dos papéis com base em qual métrica legal padrão?",
      options: [
        "Cotação de fechamento da ação no pregão da B3 na véspera da convocação do ato.",
        "Valor econômico futuro projetado por consultoria através de fluxo de caixa descontado.",
        "Preço médio ponderado arbitrado livremente pelos fiscais do conselho permanente.",
        "Valor de patrimônio líquido da ação constante do último balanço aprovado pela assembleia."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Base de reembolso: de acordo com o Artigo 45 da LSA, na omissão do estatuto, o valor do reembolso das ações do dissidente utiliza como base o valor patrimonial contábil do último balanço aprovado."
    },
    {
      q: "O que diz o Artigo 153 da Lei nº 6.404/76 sobre o padrão de diligência exigível ao conselheiro ou diretor executivo no exercício de suas funções corporativas?",
      options: [
        "Deve empregar o cuidado e a diligência que todo homem ativo e probo costuma empregar na administração dos seus próprios negócios.",
        "Deve empregar o mínimo de esforço necessário para não incorrer em culpa administrativa.",
        "Responde sob regime de responsabilidade civil objetiva por todos os riscos normais de mercado.",
        "Garante o sucesso comercial absoluto e o lucro líquido das operações financeiras do banco."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "O Dever de Diligência (Art. 153) fixa o padrão fiduciário do 'homem ativo e probo' (bônus pater familias) como métrica legal para avaliar a conduta e as escolhas dos administradores."
    },
    {
      q: "Se uma Assembleia Geral Ordinária de companhia aberta for suspensa antes do término de suas pautas, as convocações para a continuidade dos trabalhos exigem quais prazos?",
      options: [
        "Nova publicação de editais com vinte e um dias de antecedência padrão regulamentar.",
        "Carência de dez dias úteis para atualização completa dos mapas de voto remotos na CVM.",
        "Reinício imediato e compulsório em até quarenta e oitenta horas de calendário civil.",
        "Dispensados novos editais se a data e o local de reinício forem fixados na própria ata de suspensão."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Continuidade dos trabalhos: se a sessão assemblear fixar em ata a data, hora e o local de retorno antes de suspender os trabalhos, fica dispensada nova publicação de editais de convocação."
    },
    {
      q: "De acordo com o Artigo 111 da Lei das S.A., em qual cenário excepcional as ações preferenciais (PN) sem direito a voto adquirem o direito político de voto pleno nas Assembleias?",
      options: [
        "Sempre que a companhia aberta registrar prejuízo contábil líquido semestral auditado.",
        "Se passarem mais de noventa dias sem a ocorrência de reuniões ordinárias do CA na sede.",
        "Se a companhia, pelo prazo fixado no estatuto, não superior a 3 exercícios consecutivos, deixar de pagar os dividendos fixos ou mínimos a que fizerem jus.",
        "Quando o Estado acionista controlador alienar mais de cinco por cento de ações ordinárias."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Sanção de voto: o Artigo 111 cria uma proteção ao investidor de PNs. Se a S.A. falhar no pagamento de dividendos prioritários por até 3 anos seguidos, as PNs ganham voto pleno até a quitação."
    },
    {
      q: "Qual a instância corporativa classificada pela Lei das S.A. como o órgão soberano máximo de deliberação de uma sociedade anônima aberta?",
      options: [
        "O Conselho de Administração (CA) da companhia aberta.",
        "A Assembleia Geral de Acionistas.",
        "A Diretoria Colegiada Executiva (COLED) em sessões ordinárias.",
        "O Comitê de Auditoria (COAUD) em conjunto com o Banco Central."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Soberania societária: a Assembleia Geral reúne os acionistas detentores do capital e configura o órgão máximo de decisões e rumos da corporação (Art. 121)."
    },
    {
      q: "A eleição e a destituição dos membros efetivos e suplentes do Conselho Fiscal permanente da companhia competem a quem nos termos da LSA?",
      options: [
        "Ao Conselho de Administração em escrutínio secreto de maioria qualificada de dois terços.",
        "À Diretoria Colegiada via resoluções normativas integradas de RH e comitês associados.",
        "Ao Comitê de Elegibilidade e Remuneração em seu parecer técnico analítico de compliance.",
        "Privativamente à Assembleia Geral de Acionistas."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Atribuição da Assembleia: eleger ou destituir os integrantes do Conselho Fiscal e fixar a sua remuneração anual global é competência privativa e exclusiva dos acionistas (Art. 122)."
    },
    {
      q: "As atas de reuniões do Conselho de Administração de companhias abertas devem ser lavradas e registradas em qual livro obrigatório, segundo a LSA?",
      options: [
        "No Livro de Registro de Transferência de Ações Preferenciais Escriturais da S.A.",
        "No Livro de Atas das Reuniões da Diretoria Colegiada Executiva Operacional.",
        "No Livro de Atas das Assembleias Gerais Ordinárias e Extraordinárias da companhia.",
        "No Livro de Atas das Reuniões do Conselho de Administração."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Formalização legal: para fins de validade e fiscalização por acionistas e reguladores, as atas do CA possuem livro próprio mandatório encadernado na sede (Art. 100, Inciso VI)."
    },
    {
      q: "Qual o percentual mínimo de capital votante exigido pela Lei das S.A. para que os acionistas minoritários possam requerer a adoção do processo de voto múltiplo na eleição do Conselho de Administração de uma companhia aberta?",
      options: [
        "Dez por cento de todas as ações preferenciais sem direito a voto.",
        "Cinco por cento do capital social com direito a voto.",
        "Vinte e cinco por cento de todo o capital social integralizado.",
        "Quinze por cento de todas as ordens de debêntures em circulação."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Direito de minoria! O Artigo 141 da LSA estabelece que os acionistas que representem no mínimo 5% do capital social votante (ações ordinárias) podem exigir o voto múltiplo."
    },
    {
      q: "A quem compete fixar a remuneração global ou individual dos membros do Conselho de Administração e da Diretoria Executiva de uma sociedade anônima, nos termos da Lei nº 6.404/76?",
      options: [
        "Exclusivamente à Assembleia Geral de Acionistas.",
        "Ao próprio Conselho de Administração, em reunião de quórum de dois terços.",
        "Ao Comitê de Auditoria Interna, através de relatórios anuais de compliance.",
        "À comissão temporária de remuneração instituída pelo Conselho Fiscal."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Alçada soberana! O Artigo 152 da LSA determina de forma privativa e exclusiva que a Assembleia Geral de acionistas deve fixar o montante global ou de rateio dos administradores."
    },
    {
      q: "Segundo as diretrizes de abuso de poder da Lei das S.A., o acionista controlador responde civilmente pelos danos causados por atos praticados com desvio de finalidade perante quem?",
      options: [
        "Apenas perante o fundo garantidor de créditos do mercado nacional.",
        "Exclusivamente perante a Junta Comercial do local de registro.",
        "Perante a companhia, os acionistas minoritários e os terceiros lesados.",
        "Perante os credores fiscais federais de forma subsidiária e direta."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Responsabilidade fiduciária! O Artigo 117 da LSA estabelece que o acionista controlador deve usar seu poder para fazer a S.A. cumprir seu objeto, respondendo por abusos perante a empresa, minoritários e terceiros prejudicados."
    },
    {
      q: "Salvo disposição em contrário do estatuto de companhia aberta com capital autorizado, qual o prazo mínimo legal assegurado aos acionistas para o exercício do direito de preferência na subscrição de novas ações?",
      options: [
        "Quinze dias corridos contados da publicação oficial dos editais.",
        "Dez dias úteis a partir da emissão dos relatórios de RI.",
        "Sessenta dias de calendário integrados ao fluxo de liquidação.",
        "Trinta dias contados da data de publicação do aviso aos acionistas."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Prazo regulamentar! O Artigo 171, § 4º da LSA assegura que o direito de preferência dos acionistas na subscrição de capital deve respeitar o prazo mínimo de 30 dias."
    },
    {
      q: "De acordo com o texto da Lei das S.A., para ser eleito e exercer validamente um cargo nos órgãos de administração da companhia, o profissional pessoa natural deve obrigatoriamente:",
      options: [
        "Ser detentor de um bloco mínimo de ações preferenciais conversíveis.",
        "Ser residente no país, ressalvadas as exceções fixadas por lei.",
        "Comprovar vínculo anterior estável com o serviço público estadual.",
        "Possuir registro permanente ativo na Bolsa de Valores como operador."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Filtro de investidura! Conforme o Artigo 146 da LSA, os membros eleitos para o CA ou COLED devem ser obrigatoriamente residentes no país (ou nomear procurador com poderes específicos no caso de estrangeiros)."
    },
    {
      q: "Se houver autorização estatutária expressa, qual órgão possui alçada para declarar dividendos à conta de lucros apurados em balanço intercalar, levantado em período inferior ao semestre?",
      options: [
        "O Conselho de Administração ou a Diretoria Colegiada.",
        "A Assembleia Geral Extraordinária de acionistas minoritários.",
        "O Conselho Fiscal permanente através de atas mensais regulares.",
        "O Comitê de Auditoria (COAUD) em seu parecer técnico analítico."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Flexibilidade contábil! O Artigo 204 da LSA autoriza que os órgãos de administração (CA ou Diretoria, conforme desenhado em estatuto) declarem dividendos intercalares com base em balanços periódicos menores."
    },
    {
      q: "O saldo das reservas de lucros, exceto as reservas para contingências, de incentivos fiscais e de lucros a realizar, não pode ultrapassar qual limite legal em relação ao capital social?",
      options: [
        "Não pode ultrapassar dez por cento do capital bruto de faturamento.",
        "Não pode ultrapassar metade de todas as ações ordinárias em circulação.",
        "Não poderá ultrapassar o valor do próprio capital social integralizado.",
        "Não possui tetos ou paradas por se tratar de conta patrimonial livre."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Trava patrimonial! O Artigo 199 da LSA estabelece o teto de acumulação: se o saldo das reservas de lucros estipuladas ultrapassar o Capital Social, o excesso deve ser capitalizado ou pago em dividendos."
    },
    {
      q: "Ressalvadas as exceções e quóruns qualificados previstos em lei para matérias críticas, a Assembleia Geral instala-se em segunda convocação com qual número de acionistas?",
      options: [
        "Presença mínima de um terço de todo o capital votante ativo.",
        "Presença de metade mais um de todos os sócios ordinaristas da chapa.",
        "Presença de pelo menos cinco investidores com blocos de controle fixo.",
        "Com qualquer número de acionistas presentes na sessão da sede."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Rito de instalação! O Artigo 125 da LSA dita a regra geral de celeridade corporativa: em segunda chamada, a Assembleia Geral abre e delibera com qualquer número de acionistas presentes."
    },
    {
      q: "A Lei nº 6.404/76 estabelece um veto rígido ao direito de voto do acionista nas deliberações da Assembleia Geral que tratem de matérias relativas a:",
      options: [
        "Aprovação do Plano de Negócios e orçamento geral anual da S.A.",
        "Laudo de avaliação de bens com que concorrer para a formação do capital.",
        "Escolha e destituição dos membros titulares ativos do Conselho Fiscal.",
        "Mudança do endereço de correspondência da sede administrativa secundária."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Conflito de interesse acionário! O Artigo 115, § 1º impede o acionista de votar pautas de laudos de seus próprios bens trazidos para integralizar capital, visando proteger a companhia de superfaturamentos."
    },
    {
      q: "Quando o montante acumulado das reservas de lucros ultrapassar o valor do capital social da companhia, a Assembleia Geral deve obrigatoriamente deliberar sobre:",
      options: [
        "O aumento do capital social ou a distribuição de dividendos em dinheiro.",
        "A redução imediata do valor nominal de todas as ações preferenciais.",
        "O repasse compulsório do saldo excedente a fundos cambiais públicos.",
        "O cancelamento definitivo do registro de companhia aberta na CVM."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Destinação do excesso! Conforme o Artigo 199 da LSA, estourado o teto em que as reservas igualam o capital social, os acionistas devem votar a injeção do dinheiro no capital ou o repasse aos bolsos sob a forma de proventos."
    },
    {
      q: "A ação de responsabilidade civil da companhia contra o administrador, para ressarcimento de prejuízos causados ao patrimônio social, depende de aprovação prévia de quem?",
      options: [
        "Do Conselho de Administração em escrutínio secreto qualificado.",
        "Do Comitê de Auditoria através de parecer vinculante de riscos.",
        "Da Assembleia Geral de Acionistas em deliberação regular.",
        "Do Conselho Fiscal mediante relatório de auditoria independente."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Ação social de responsabilidade! O Artigo 159 da LSA dita que mover processo de cobrança cível da S.A. contra atos culposos/dolosos de seus próprios diretores depende de aval prévio dos acionistas em Assembleia."
    },
    {
      q: "Os membros do Conselho Fiscal respondem civilmente pelos danos causados em virtude de omissão no cumprimento de seus deveres fiduciários sob qual regime legal?",
      options: [
        "Responsabilidade objetiva integral por variações normais de mercado.",
        "Isenção civil completa se o erro decorrer de relatórios da Diretoria.",
        "Responsabilidade restrita ao valor total das cotas de PLR recebidas.",
        "Responsabilidade solidária, caso não denunciem as irregularidades à Assembleia."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Rigor fiscal! De acordo com o Artigo 165 da LSA, os membros do Conselho Fiscal respondem solidariamente pelos prejuízos se omitirem-se do dever de denunciar fraudes contábeis das quais tiveram ciência."
    },
    {
      q: "De acordo com o Artigo 176 da LSA, a companhia aberta pode deixar de publicar de forma isolada a Demonstração dos Lucros ou Prejuízos Acumulados (DLPA) caso inclua seus dados na:",
      options: [
        "Demonstração do Valor Adicionado (DVA) do exercício contábil.",
        "Demonstração de Mutações do Patrimônio Líquido (DMPL).",
        "Demonstração do Resultado do Exercício (DRE) anual detalhada.",
        "Demonstração dos Fluxos de Caixa (DFC) apurada pelo método direto."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Otimização de balanço! O § 2º do Artigo 176 permite a substituição e incorporação da DLPA dentro das páginas mais amplas da DMPL (Mutações do PL), poupando espaço de publicação."
    },
    {
      q: "Para fins de fiscalização ativa, qual a fração mínima de capital social que confere a um grupo de acionistas o direito de requerer exibição judicial dos livros da S.A.?",
      options: [
        "Cinco por cento do capital social da companhia aberta.",
        "Um por cento de todas as ações de classe ordinária votantes.",
        "Dois por cento de todo o capital social autorizado em texto.",
        "Dez por cento de todas as ordens de debêntures emitidas."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Exibição judicial de livros! O Artigo 105 da LSA confere essa importante alçada de fiscalização minoritária a acionistas que somem, no mínimo, 5% do capital social da empresa."
    },
    {
      q: "A Lei das S.A. prevê que a companhia aberta pode ser dissolvida por vias judiciais, mediante ação própria, na hipótese comprovada de:",
      options: [
        "Registro de prejuízo líquido em dois exercícios anuais seguidos.",
        "Fechamento voluntário de mais de metade de suas agências comerciais.",
        "Anulação do seu registro de constituição ou insolvência civil contínua.",
        "Substituição imotivada da firma externa de auditoria independente."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Dissolução judicial! Conforme o Artigo 206, Inciso II da LSA, a S.A. aberta pode ser extinta por vias judiciais se declarada sua falência/insolvência ou em caso de anulação de seus制造 ou atos de criação."
    },
    {
      q: "A aprovação de matérias graves listadas no Artigo 136 da LSA, como a fusão ou a mudança do objeto essencial da companhia, depende do voto de acionistas que representem:",
      options: [
        "Maioria simples de todos os votos dos ordinaristas presentes na mesa.",
        "Unanimidade de todas as ações preferenciais nominativas da carteira.",
        "Dois terços de todas as ordens de investidores estrangeiros custodiadas.",
        "Mais de metade das ações com direito a voto, salvo teto maior do estatuto."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Quórum qualificado por lei! Alterar o coração dos negócios (objeto essencial), fundir ou cindir a S.A. exige aprovação de metade mais uma de todas as ações votantes emitidas da companhia aberta."
    },
    {
      q: "O administrador de uma companhia aberta descumpre o dever legal de lealdade fixado pelo direito societário federal na hipótese ativa em que:",
      options: [
        "Aprova orçamentos operacionais com metas de cortes de custos estruturais.",
        "Utiliza em proveito próprio oportunidades de negócio de que teve ciência.",
        "Determina a abertura de novas praças comerciais de sucursais em feriados.",
        "Contrata firmas externas homologadas e registradas na CVM para auditorias."
      ],
      correct: 1,
      theme: "lsa",
      feedback: "Quebra de lealdade! O Artigo 155, Inciso I veda expressamente ao diretor ou conselheiro desviar oportunidades comerciais da S.A. (da qual teve ciência pelo cargo) em benefício próprio ou de terceiros."
    },
    {
      q: "A Lei nº 6.404/76 exige que a companhia mantenha livros obrigatórios na sede corporativa. Qual desses livros registra a identidade dos donos e as transferências de propriedade?",
      options: [
        "Livro de Registro de Ações Nominativas e Transferências.",
        "Livro de Atas das Reuniões da Diretoria Colegiada Executiva.",
        "Livro de Registro de Debêntures Endossáveis em Circulação Comercial.",
        "Livro de Pareceres e Relatórios Técnicos do Comitê de Auditoria."
      ],
      correct: 0,
      theme: "lsa",
      feedback: "Livros societários! O Artigo 100, Inciso I obriga manter o Livro de Registro de Ações Nominativas para escriturar a propriedade real dos papéis, transferências, gravames e repasse de dividendos."
    },
    {
      q: "Nos termos das restrições políticas da LSA, os membros do Conselho de Administração e da Diretoria Executiva ficam impedidos de votar na Assembleia sobre:",
      options: [
        "A alteração e modernização das cláusulas gerais do estatuto social.",
        "A aprovação de novos planos de negócios com horizontes de cinco anos.",
        "A aprovação de suas próprias contas e relatórios financeiros anuais.",
        "A eleição e escolha dos futuros membros titulares do Conselho Fiscal."
      ],
      correct: 2,
      theme: "lsa",
      feedback: "Impedimento de voto da gestão! O Artigo 134, § 1º retira o direito de voto de diretores e conselheiros nas pautas que julgam seus próprios balanços contábeis e contas de desempenho."
    },
    {
      q: "A competência fiduciária para deliberar sobre a destinação final do lucro líquido do exercício social e a homologação de dividendos anuais pertence a quem?",
      options: [
        "À Diretoria Colegiada Operacional via comitê financeiro interno.",
        "Ao Comitê de Auditoria Interna (COAUD) em seu parecer técnico.",
        "Ao Conselho de Administração em reunião de quórum de dois terços.",
        "Privativamente à Assembleia Geral Ordinária de Acionistas."
      ],
      correct: 3,
      theme: "lsa",
      feedback: "Alçada da AGO! Embora o Conselho de Administração recomende e envie a proposta técnica, bater o martelo sobre o rateio do lucro e dividendos anuais é competência da Assembleia Geral Ordinária (Art. 132)."
    },
    {
      q: "Segundo a Resolução CVM nº 44/2021, o que caracteriza fundamentalmente um ato ou fato relevante para fins de divulgação obrigatória ao mercado de capitais?",
      options: [
        "Qualquer acontecimento político, técnico ou financeiro capaz de influir de modo ponderável na cotação dos valores mobiliários ou na decisão dos investidores de comprar, vender ou manter os referidos ativos.",
        "A ocorrência mensal de variações patrimoniais brutas que alterem o capital social autorizado em patamares superiores a cinco por cento.",
        "Toda deliberação rotineira da Diretoria Colegiada que envolva a contratação de prestadores de serviços de logística terceirizada.",
        "A publicação semestral das Notas Explicativas contábeis auditadas por firmas independentes registadas no Banco Central."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Definição do Artigo 2º: Ato ou fato relevante é qualquer decisão ou evento que possa influir de modo ponderável na cotação dos valores mobiliários, na decisão dos investidores de negociá-los ou no exercício de direitos inerentes."
    },
    {
      q: "A quem cumpre precipuamente, nos termos da Resolução CVM nº 44/2021, a responsabilidade legal de divulgar e comunicar qualquer ato ou fato relevante ocorrido nos negócios da companhia aberta?",
      options: [
        "Ao Coordenador Geral independente do Comitê de Auditoria (COAUD) de forma isolada.",
        "Ao Diretor de Relações com Investidores (DRI), imediatamente após o conhecimento do evento.",
        "Ao Presidente em exercício do Conselho de Administração mediante edital público.",
        "Aos membros titulares efetivos integrantes do Conselho Fiscal em atas mensais."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Atribuição legal do DRI: o Artigo 3º estabelece que cumpre ao Diretor de Relações com Investidores a tarefa fiduciária de transmitir o fato relevante à CVM e às bolsas imediatamente."
    },
    {
      q: "Qual o momento preferencial estabelecido pela Resolução CVM nº 44/2021 para a veiculação de um comunicado de ato ou fato relevante pela companhia aberta?",
      options: [
        "Exclusivamente aos finais de semana, visando a congelar a volatilidade das ações.",
        "Durante o horário de funcionamento regular do pregão ao vivo da Bolsa de Valores.",
        "Sempre que possível, antes do início ou após o encerramento dos negócios nas entidades administradoras do mercado.",
        "No primeiro dia útil subsequente à ocorrência da reunião mensal do Conselho de Administração."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Equilíbrio de mercado: o Artigo 5º dita que a divulgação deve ocorrer, sempre que possível, fora do horário de pregão para permitir o processamento uniforme da informação pelos investidores."
    },
    {
      q: "Sob quais condições excepcionais os administradores ou acionistas controladores podem decidir pela não divulgação imediata de um fato relevante?",
      options: [
        "Sempre que o volume financeiro do pregão da B3 registrar patamares de liquidez reduzida na semana.",
        "Se a matéria envolver apenas alterações salariais ordinárias de funcionários concursados da companhia.",
        "Caso ocorra oscilação atípica no preço dos papéis que exija intervenção monocrática do DRI.",
        "Se entenderem que a sua revelação imediata colocará em risco interesse legítimo da companhia aberta."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Exceção ao sigilo: o Artigo 6º autoriza a retenção temporária do fato relevante caso sua publicidade prematura traga prejuízos ou riscos a interesses legítimos da S.A. (ex: negociações de fusões)."
    },
    {
      q: "Ocorrendo uma oscilação atípica na cotação ou no volume de negociação das ações na Bolsa de Valores na pendência de uma informação mantida sob sigilo legítimo, qual a conduta compulsória exigida pela CVM?",
      options: [
        "Os administradores ficam obrigados a divulgar imediatamente o ato ou fato relevante ao mercado, diretamente ou por meio do DRI.",
        "O DRI deve solicitar a suspensão imediata do pregão das ações da companhia por prazo indeterminado.",
        "Os controladores devem recolher os papéis em tesouraria para estabilizar os preços artificialmente.",
        "A companhia pode manter o sigilo contanto que encaminhe uma justificativa confidencial em envelope lacrado."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Queda do sigilo: o parágrafo único do Artigo 6º determina que, se a informação escapar ou se houver movimentação atípica de preços e volumes na Bolsa, o segredo cai e a divulgação vira dever imediato."
    },
    {
      q: "Caso um funcionário ou terceiro de confiança de um diretor da companhia venha a vazar uma informação privilegiada antes da sua divulgação oficial, como se configura a responsabilidade civil?",
      options: [
        "A penalidade recai exclusivamente sobre a pessoa do subordinado que realizou o vazamento físico.",
        "O administrador responde solidariamente com subordinados e terceiros de sua confiança pela guarda do sigilo.",
        "O banco absorve a perda contábil integral e exime as contas privadas de seus executivos estatutários.",
        "A Comissão de Valores Mobiliários anula os negócios realizados, sem punições pecuniárias aos gestores."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Dever de vigilância: o Artigo 8º preceitua que cabe aos administradores, conselheiros e controladores guardar sigilo e zelar para que subordinados o façam, respondendo solidariamente em caso de quebra."
    },
    {
      q: "Os diretores e membros do conselho de administração ficam obrigados a comunicar à companhia as negociações por eles realizadas com valores mobiliários da própria emissão em qual prazo regulamentar?",
      options: [
        "No prazo máximo de quarenta e oito horas de calendário contadas da liquidação financeira do lote.",
        "Até o primeiro dia útil subsequente ao término do mês de referência das ordens de compra.",
        "No prazo de cinco dias após a realização de cada negócio no pregão.",
        "Janela discricionária de até trinta dias contados da assinatura dos termos de adesão corporativos."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Radar interno do DRI: o Artigo 11, § 4º, Inciso I, fixa a janela rápida de até 5 dias após a transação para que o administrador comunique seus negócios pessoais à área de RI da companhia."
    },
    {
      q: "Após o encerramento do mês em que se verificarem alterações nas posições acionárias de seus administradores, qual o prazo limite regulamentar que a companhia aberta possui para consolidar e transmitir esses dados à CVM?",
      options: [
        "No prazo de até três dias úteis contados do encerramento contábil mensal.",
        "Em até vinte e quatro horas úteis após receber as notificações dos gerentes de mesa.",
        "Até o dia quinze do mês subsequente casado com os informativos de dividendos intermediários.",
        "No prazo de dez dias após o término do mês em que se verificarem as alterações."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Envio de relatórios: em perfeita harmonia com o Artigo 11, § 6º, o DRI assume o dever de compilar os negócios da administração e enviá-los à CVM em até 10 dias após o término do mês de referência."
    },
    {
      q: "A obrigação dos administradores de informar a titularidade e as negociações com valores mobiliários da própria S.A. aberta estende-se de forma compulsória a quem por força de lei?",
      options: [
        "Aos cônjuges, companheiros, dependentes incluídos na declaração anual de imposto de renda e sociedades controladas.",
        "A todos os parentes consanguíneos em linha reta ou colateral até o quarto grau de afinidade.",
        "Aos fornecedores comerciais de insumos e agências de publicidade contratadas pela companhia aberta.",
        "Aos acionistas minoritários que detenham participações em carteiras inferiores a um por cento do bloco."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Efeito cascata familiar: para capturar o uso indireto de informações, o Artigo 11, § 2º estende as travas e reportes aos cônjuges (não separados), companheiros, dependentes de IR e controladas."
    },
    {
      q: "Para fins de monitoramento e reporte de posições acionárias de administradores, qual aplicação financeira equipara-se à negociação direta com valores mobiliários da própria companhia?",
      options: [
        "Fundos multimercados macro abertos com alocações cambiais diversificadas no exterior.",
        "Fundos de investimento cujas carteiras sejam compostas exclusivamente por ações de emissão da companhia ou controlada.",
        "Certificados de Operações Estruturadas (COE) atrelados a índices de inflação geral da praça.",
        "Letras de Crédito Imobiliário (LCI) emitidas com prazos de carência superiores a noventa dias."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Vedação a desvios indiretos: o Artigo 11, § 9º equipara à negociação de ações próprias os aportes ou resgates em fundos exclusivos focados de forma integral em ativos da emissão da companhia."
    },
    {
      q: "Considera-se negociação relevante, disparando o dever de comunicação imediata ao DRI, a transação ou conjunto de transações pelas quais a participação acionária de uma pessoa ou grupo ultrapassa qual patamar?",
      options: [
        "Os limites de um por cento, dois por cento, três por cento, e assim sucessivamente, de ações ordinárias.",
        "Os limites de dez por cento fixados para debêntures conversíveis com garantias reais na Bolsa.",
        "Os patamares de cinco por cento, dez por cento, quinze por cento, e assim sucessivamente, de espécie ou classe de ações.",
        "O teto fixo de trinta por cento de ações preferenciais nominais escriturais sem direito a voto."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "O radar dos 5%: de acordo com o Artigo 12, § 1º, cruzar os marcos de 5%, 10%, 15% (para cima ou para baixo) de qualquer classe ou espécie de ações em circulação caracteriza negociação relevante obrigatória."
    },
    {
      q: "Para fins de verificação do atingimento de participações relevantes de mercado (marcos de cinco por cento), como devem ser computados os instrumentos derivativos de liquidação física?",
      options: [
        "Devem ser desconsiderados do cálculo bruto total por se tratarem de contratos futuros opcionais.",
        "São somados com peso reduzido de metade caso possuam prazos de vencimento curtos.",
        "As posições vendidas em derivativos anulam e compensam de forma automática as compras físicas de lotes.",
        "As ações diretamente detidas e aquelas referenciadas por derivativos de liquidação física devem ser consideradas em conjunto."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Soma de frentes físicas: o Artigo 12, § 3º, Inciso I impõe o cômputo agregado de ações físicas e posições de derivativos com entrega física para fins de estouro da banda de participação relevante."
    },
    {
      q: "Ao calcular o volume de exposição econômica para fins de atingimento de participações acionárias relevantes, qual a regra imposta pela CVM sobre a compensação de posições contrárias em derivativos?",
      options: [
        "A quantidade de ações referenciadas em derivativos de exposição comprada não pode ser compensada com posições vendidas.",
        "A compensação é permitida de forma livre contanto que os contratos possuam a mesma câmara de compensação.",
        "Permite-se abater as posições compradas das vendidas apenas para investidores classificados como institucionais.",
        "A compensação ocorre de forma automática e compulsória pela plataforma de liquidação central de compensação da B3."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Proibição de netting artificial: o Artigo 12, § 3º, Inciso III impede que o investidor subtraia posições compradas de vendidas para camuflar o atingimento do radar de participação de 5%."
    },
    {
      q: "As obrigações de reporte e aviso de participação relevante ficam expressamente dispensadas nos casos de instrumentos financeiros derivativos ou fundos de índice em que as ações da companhia possuam peso inferior a qual patamar?",
      options: [
        "Peso inferior a trinta por cento da carteira total do respectivo fundo estruturado.",
        "Peso inferior a vinte por cento da carteira do fundo ou índice.",
        "Peso inferior a dez por cento medido pelo valor patrimonial contábil líquido ajustado.",
        "Isenção total concedida apenas se a fatia financeira for menor do que cem mil reais por pregão."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Margem de desvinculação: o Artigo 12, § 3º, Inciso IV exime de avisos de participação os índices de mercado amplos (como o Ibovespa ou fundos de índice) onde a ação alvo represente menos de 20% do mix."
    },
    {
      q: "Caso a aquisição de uma participação de cinco por cento do capital votante tenha por objetivo explícito alterar a estrutura administrativa ou a composição do controle da S.A., o adquirente fica obrigado a:",
      options: [
        "Suspender suas ordens de compra no pregão da B3 por quarentena de noventa dias corridos.",
        "Solicitar referendo e autorização unânime prévia aos membros eleitos do Conselho Fiscal.",
        "Promover a divulgação de aviso contendo os seus termos e metas pelos mesmos canais habituais da companhia.",
        "Vender metade de sua carteira de ações nas plataformas abertas em até quarenta e oito horas."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Aviso de intenção de controle: o Artigo 12, § 5º dita que se a montagem de posição relevante visar à mudança de controle ou assentos de gestão, exige-se publicar um aviso ostensivo ao mercado."
    },
    {
      q: "Qual a principal vedação de negociação estabelecida pela Resolução CVM nº 44/2021 para salvaguardar a equidade informativa e combater o Insider Trading no mercado de capitais?",
      options: [
        "Proibição de operar ativos de renda fixa bancária em feriados civis locais.",
        "Bloqueio de transações cruzadas no pregão conduzidas por investidores estrangeiros.",
        "Veto a vendas parciais de lotes acionários detidos por fundos imobiliários parceiros.",
        "É vedada a negociação por quem quer que tenha conhecimento de informação relativa a ato ou fato relevante não divulgado."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "A vedação do Insider Trading: o Artigo 13 positiva o núcleo proibitivo tradicional do mercado de capitais: proibido negociar papéis portando informação relevante oculta para obter vantagens."
    },
    {
      q: "O chamado período vedado ou blackout period impõe uma restrição automática e objetiva às negociações com ações de emissão da própria companhia em qual intervalo temporal regulamentar?",
      options: [
        "No período de quinze dias que anteceder a data da divulgação das informações contábeis trimestrais e anuais.",
        "Nos trinta dias posteriores à data de ocorrência da Assembleia Geral Ordinária anual.",
        "Durante as janelas de recesso civil das atividades do Conselho de Administração.",
        "Nos cinco dias úteis subsequentes à declaração de dividendos intermediários intercalares."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "O Blackout de 15 dias: o Artigo 14 impõe um bloqueio temporal cego e objetivo na quinzena que antecede a liberação do ITR e DFP, travando movimentações de administradores e controladores."
    },
    {
      q: "Sobre a vedação de negociação nos quinze dias anteriores à divulgação das informações contábeis trimestrais e anuais da companhia, a CVM estabelece que o impedimento:",
      options: [
        "Aplica-se apenas se o gestor tiver participado ativamente da auditoria contábil dos balancetes.",
        "Independe do conhecimento, por parte das pessoas referidas, do conteúdo das informações contábeis correspondentes.",
        "Pode ser flexibilizado se o volume financeiro diário da transação for de pequeno porte.",
        "Torna-se nulo caso a auditoria externa independente já tenha emitido seu parecer sem ressalvas."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Presunção absoluta de calendário: o parágrafo único do Artigo 14 deixa claro que a trava dos 15 dias opera de forma objetiva, independente de o profissional ter visto ou não os dados prévios do balanço."
    },
    {
      q: "A CVM presume de forma relativa o uso ilícito de informação privilegiada não divulgada se o ex-administrador que se desligou da companhia aberta negociar valores mobiliários de sua emissão dentro de qual intervalo de tempo?",
      options: [
        "No prazo de até trinta dias corridos contados do registro de sua saída na Junta Comercial.",
        "Na janela de trinta dias úteis de calendário subsequentes à AGO que tomou as contas do ano.",
        "No período de 3 (três) meses contados do seu desligamento dispondo de dado não divulgado.",
        "A presunção é perpétua enquanto a informação mantida em segredo corporativo não for revelada."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Trava pós-desligamento: o Artigo 13, § 1º, Inciso IV fixa a janela de presunção de 3 meses de impedimento de negociação para o administrador que sai da S.A. portando segredos de negócios."
    },
    {
      q: "Nos termos das presunções normativas, a partir de qual marco exato as informações relativas a operações de fusão, incorporação, cisão ou reorganização societária passam a ser consideradas juridicamente relevantes para fins de vedação de negociação?",
      options: [
        "Apenas a partir do dia em que a Assembleia Geral homologar a assinatura dos protocolos finais.",
        "Logo após o Conselho de Administração aprovar o rateio de custos orçamentários da fusão.",
        "No momento em que as firmas independentes externas iniciarem a auditoria de laudos econômicos.",
        "A partir do momento em que tenham início os estudos ou análises relativas às referidas operações."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Marco zero de M&A: o Artigo 13, § 1º, Inciso V positiva que rascunhos, análises preliminares e estudos iniciais de fusões e incorporações já ganham status jurídico de fato relevante de forma antecipada."
    },
    {
      q: "Considera-se relevante, ativando as vedações de negociação do mercado de capitais, a informação sobre pedido de recuperação judicial ou falência da sociedade a partir de qual momento?",
      options: [
        "A partir do momento em que tenham início os estudos ou análises relativas ao pedido.",
        "Apenas após o juiz de direito da comarca civil deferir formalmente o processamento do pleito.",
        "No dia em que o Conselho Fiscal emitir seu parecer unânime favorável à recuperação contábil.",
        "Quando o DRI transmitir o comunicado oficial em formato impresso às agências regionais bancárias."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Marco zero de crise contábil: o Artigo 13, § 1º, Inciso VI dita que os estudos iniciais de insolvência, pedidos de falência ou recuperação judicial já ativam o gatilho de dado relevante impeditivo."
    },
    {
      q: "Qual ferramenta regulamentar é reconhecida pela Resolução CVM nº 44/2021 como apta a afastar a aplicação das vedações autónomas de negociação sobre os administradores da S.A.?",
      options: [
        "A autorização verbal expressa gravada em ata emitida pelo Diretor-Presidente do banco.",
        "O plano individual de investimento ou desinvestimento formalizado por escrito perante a companhia aberta.",
        "O Termo de Compromisso de liquidação futura firmado individualmente nas mesas do pregão B3.",
        "A declaração pública de isenção de ganhos subscrita em cartório de registro de notas."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Válvula de escape legal: o Artigo 16 permite o comércio legítimo e programado de papéis por diretores durante períodos proibidos, contanto que amparado em Plano Individual de Investimento por escrito."
    },
    {
      q: "Para que um plano individual de investimento ou desinvestimento gere amparo de regularidade e comece a produzir efeitos legais de proteção, ele deve estabelecer qual prazo mínimo de carência e antecedência?",
      options: [
        "Janela de carência de trinta dias de calendário contados de sua assinatura eletrônica.",
        "Intervalo rígido de noventa dias úteis auditados pelo setor de controles e compliance.",
        "Prazo mínimo de 3 (três) meses de antecedência para que o plano ou suas modificações comecem a produzir efeitos.",
        "Carência estrita casada com a data de ocorrência da próxima Assembleia Geral Ordinária."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Carência do plano: o Artigo 16, § 1º, Inciso IV amarra a validade do plano individual à antecedência mínima de 3 meses para que passe a valer, coibindo programações oportunas de curto prazo."
    },
    {
      q: "Buscando coibir manobras de arbitragem informativa, qual barreira regulamentar a CVM impõe sobre a estruturação e manutenção de planos individuais de investimento por um mesmo administrador?",
      options: [
        "Exigência de taxas adicionais de custódia cobradas de forma linear pelas clearings de mercado.",
        "Veto à contratação de corretores de valores mobiliários que possuam vínculos estaduais públicos.",
        "Proibição de realizar compras de ações ordinárias em volumes superiores a cem mil reais por trimestre.",
        "É vedada a manutenção simultânea de mais de um plano de investimento ativo ou a realização de operações de hedge."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Proibição de travas cruzadas: o Artigo 16, § 3º veda a manutenção de planos paralelos ou o uso de derivativos de hedge que tentem anular o risco financeiro da programação original do plano individual."
    },
    {
      q: "Caso os administradores desejem formalizar uma consulta ou pleito fundamentado para manter um fato relevante legítimo sob sigilo temporário, a matéria deve ser direcionada a qual órgão técnico da CVM?",
      options: [
        "Em envelope confidencial endereçado à Superintendência de Relações com Empresas (SEP).",
        "Ao Colegiado Superior de Julgamento de Recursos da autarquia de forma direta na mesa.",
        "À Superintendência de Monitoramento de Mercado (SMI) via petição eletrônica assinada.",
        "Diretamente ao gabinete corporativo da Presidência da Comissão de Valores Mobiliários."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Canal oficial de sigilo: o Artigo 7º, § 1º dita o trâmite: o pedido fundamentado de confidencialidade de fatos relevantes deve ser enviado à Superintendência de Relações com Empresas (SEP)."
    },
    {
      q: "Na hipótese de a Comissão de Valores Mobiliários rejeitar o pleito de sigilo e determinar a divulgação da matéria contida em envelope confidencial, o Diretor de RI deve:",
      options: [
        "Apresentar recurso com efeito suspensivo automático que congele a decisão por mais trinta dias.",
        "Providenciar a imediata veiculação do ato ou fato relevante ao mercado nos termos estabelecidos.",
        "Solicitar a anulação do pregão das ações da companhia aberta por erro de julgamento da autarquia.",
        "Manter o sigilo amparado em ata sigilosa de quórum de dois terços do Conselho de Administração."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Cumprimento impositivo: o Artigo 7º, § 2º dita que, diante do indeferimento do pleito de sigilo pela CVM, cabe ao DRI estruturar e veicular o Fato Relevante imediatamente ao mercado."
    },
    {
      q: "A celebração de contrato de alienação do controle acionário da companhia aberta impõe o dever mandatório de veicular fato relevante contendo, no mínimo, qual dado estratégico?",
      options: [
        "O histórico de balancetes mensais emitidos pelas filiais comerciais nos últimos cinco anos.",
        "As assinaturas digitais completas de todos os procuradores outorgados pela gestão executiva.",
        "Os termos da operação, a identificação do adquirente, o preço pago por ação e os objetivos do comprador.",
        "O parecer técnico detalhado sem ressalvas exarado pelo Comitê de Elegibilidade e Remuneração."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Transparência em M&A: o Artigo 10 impõe que o Fato Relevante de venda de controle traga dados profundos: preço, termos, alvos do comprador e se pretende ou não fechar o capital social em 12 meses."
    },
    {
      q: "Para fins de monitoramento e auditoria em casos de suspeitas de vazamento ou insider trading, a companhia aberta deve manter em sua sede arquivos e listas contendo:",
      options: [
        "Os CPFs e CNPJs de todos os correntistas e clientes de agências varejo do banco regional.",
        "As declarações anuais de imposto de renda completas de todos os funcionários concursados de carreira.",
        "A identificação de todas as firmas internacionais que operam debêntures no mercado aberto.",
        "A indicação das pessoas que têm acesso a informações privilegiadas, com as respectivas datas de acesso."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Rastreabilidade de segredos: como boa prática fixada nas regras de compliance associadas, a S.A. deve catalogar em listas atualizadas todas as pessoas (internas ou externas) com acesso a dados privilegiados."
    },
    {
      q: "A transmissão das alterações de posições acionárias individuais agregadas por órgão corporativo (Conselho, Diretoria, Fiscal) deve ser disponibilizada para consulta na internet em qual formato pela CVM?",
      options: [
        "De forma individual e consolidada por órgão ali indicado, ficando disponíveis para consulta geral.",
        "Em formato de notas descritivas compactas sem indicação de saldos acionários iniciais.",
        "Exclusivamente por meio de consultas físicas agendadas na sede central da autarquia no Rio de Janeiro.",
        "Disponibilizadas de formato confidencial restrito apenas ao bloco do acionista controlador estatal."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Transparência de posições: em conformidade com o Artigo 11, § 7º, os saldos e compras de ações da alta administração devem ficar abertos e disponíveis de forma consolidada por órgão para consulta na internet."
    },
    {
      q: "Imediatamente após a decisão corporativa de realizar uma oferta pública de distribuição de valores mobiliários que dependa de registro na autarquia, o ofertante deve:",
      options: [
        "Aguardar o encerramento do trimestre contábil civil em curso para soltar notas ao pregão.",
        "Solicitar audiência consultiva prévia e unânime com os fiscais do conselho de funcionamento permanente.",
        "Divulgar ato ou fato relevante detalhando a quantidade de valores mobiliários, o preço e as condições.",
        "Promover o recolhimento forçado de todas as ações PN mantidas em tesouraria nas corretoras."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Divulgação de emissões: o Artigo 9º impõe o gatilho automático de Fato Relevante assim que decidida a realização de uma oferta pública, informando volumes, alvos de preços e condições financeiras."
    },
    {
      q: "Caso a divulgação de um fato relevante ocorra durante o horário de negociação, qual procedimento o Diretor de Relações com Investidores pode adotar junto à Bolsa de Valores para garantir a equidade?",
      options: [
        "Solicitar o cancelamento definitivo de todos os negócios realizados nas últimas vinte e quatro horas.",
        "Requerer a suspensão da negociação dos valores mobiliários pelo tempo necessário para a disseminação da informação.",
        "Determinar a recompra compulsória imediata das ações mantidas sob custódia dos acionistas minoritários.",
        "Acionar o fundo garantidor de mercado para mitigar a volatilidade gerada pelas ordens de compra."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Controle de volatilidade: o Artigo 3º, § 1º faculta ao DRI solicitar a suspensão temporária do pregão das ações caso um fato relevante precise ser veiculado durante o horário de negociação."
    },
    {
      q: "Qual a obrigação imposta pela Resolução CVM nº 44/2021 aos acionistas controladores, diretores e conselheiros caso tenham conhecimento de ato ou fato relevante ainda não divulgado?",
      options: [
        "Postar os dados de forma confidencial em fóruns privados de negociação na internet.",
        "Submeter o tema a uma auditoria contábil independente externa antes de qualquer aviso.",
        "Suspender de forma definitiva a vigência de seus planos individuais de investimento.",
        "Comunicar o evento imediatamente ao Diretor de Relações com Investidores da companhia."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Fluxo de informação: o Artigo 4º obriga controladores, diretores, conselheiros e membros de órgãos técnicos a reportarem imediatamente ao DRI qualquer fato relevante de que tenham ciência."
    },
    {
      q: "Se as pessoas vinculadas à companhia constatarem que um fato relevante ocorreu, mas o Diretor de Relações com Investidores descumpre o dever de divulgá-lo, qual a conduta mandatória exigida pela norma?",
      options: [
        "Comunicar o fato relevante imediatamente à Comissão de Valores Mobiliários.",
        "Aguardar o encerramento do trimestre contábil civil para relatar a omissão na AGO.",
        "Vender suas participações acionárias de forma privada para evitar perdas financeiras.",
        "Convocar extraordinariamente os membros do Conselho Fiscal para lavrar uma ata sigilosa."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Dever de salvaguarda: o parágrafo único do Artigo 4º estabelece que se os vinculados reportarem o fato ao DRI e este não fizer a divulgação, eles devem comunicar o evento diretamente à CVM."
    },
    {
      q: "Nos termos das presunções estabelecidas pela Resolução CVM nº 44/2021, os diretores, conselheiros e acionistas controladores são considerados detentores de acesso à informação relevante a partir de qual momento?",
      options: [
        "Apenas a partir do registro formal da ata de deliberação na Junta Comercial.",
        "No momento em que a firma externa de auditoria emitir o seu parecer sem ressalvas.",
        "Desde o momento em que a informação relevante tenha sido gerada.",
        "Quando o portal de notícias veicular o resumo do fato econômico de forma gratuita."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Presunção de acesso: o Artigo 13, § 1º, Inciso II fixa a presunção legal de que a alta administração e os controladores detêm o acesso ao dado de forma imediata desde o momento de sua geração."
    },
    {
      q: "As vedações de negociação com valores mobiliários na pendência de fato relevante não divulgado não se aplicam a qual das seguintes movimentações de ações?",
      options: [
        "Vendas fracionadas em Bolsa conduzidas por dependentes declarados no imposto de renda.",
        "Aportes discricionários em fundos multimercados geridos por administradores da própria S.A.",
        "Operações de arbitragem internacional com títulos de BDR executadas no pregão.",
        "Operações destinadas ao exercício do direito de opção de compra de ações anteriormente outorgada."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Exceção regulatória: o Artigo 13, § 2º afasta as vedações automáticas de negociação nos casos de exercícios legítimos de opções de compra de ações que tenham sido outorgadas anteriormente."
    },
    {
      q: "Qual das seguintes exceções afasta a aplicação das vedações autónomas de negociação sobre a própria companhia aberta portando fato relevante não divulgado?",
      options: [
        "Aquisições de ações por meio de transações privadas que integrem plano de recompra aprovado pelo conselho.",
        "Vendas operacionais diretas no pregão visando ao aumento imediato do fluxo de caixa diário.",
        "Aplicações de sobras de tesouraria em fundos exclusivos focados em ativos de emissão própria.",
        "Transferências de controle acionário minoritário referendadas unicamente pelo Conselho Fiscal."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Recompra autorizada: o Artigo 13, § 3º abre exceção para as aquisições de ações em tesouraria pela própria S.A., contanto que realizadas via operações privadas vinculadas a plano de recompra aprovado pelo CA."
    },
    {
      q: "A vedação de negociação de valores mobiliários na pendência de fato relevante não divulgado estende-se aos membros que se afastarem temporariamente de seus órgãos de administração por qual regra?",
      options: [
        "Cessa imediatamente na data de protocolo do pedido de licença ou afastamento temporário.",
        "Aplica-se integralmente a quem se afastar temporariamente da administração da companhia.",
        "Fica suspensa contanto que o gestor se abstenha de acessar os relatórios contábeis internos.",
        "Garante isenção automática se o afastamento ocorrer durante o período de blackout contábil."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Afastamento e amarras: o Artigo 14, § 2º dita que as vedações de negociação continuam vigentes e aplicando-se com total rigor mesmo aos membros temporariamente afastados ou licenciados do cargo."
    },
    {
      q: "Caso ocorreu qualquer alteração na relação cadastral contendo os nomes e CPFs de cônjuges ou dependentes dos administradores, qual o prazo regulamentar para atualizar esses dados perante o DRI?",
      options: [
        "No prazo máximo de quarenta e oito horas contadas do fato gerador da modificação civil.",
        "Em até cinco dias úteis após o encerramento do mês de referência das negociações.",
        "No prazo de até vinte dias contados da data da referida alteração.",
        "No prazo de até quinze dias contados da data da referida alteração."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Atualização cadastral: em conformidade com o Artigo 11, § 11, os administradores devem notificar o DRI sobre alterações na lista de seus dependentes e cônjuges em no máximo 15 dias."
    },
    {
      q: "A adoção e aprovação de uma Política de Divulgação de Ato ou Fato Relevante pelo Conselho de Administração é obrigatória para quais tipos de companhias abertas?",
      options: [
        "Apenas para as S.A. que registrem patrimônio líquido ajustado superior a um bilhão de reais.",
        "Exclusivamente para bancos múltiplos de economia mista sob controle governamental perene.",
        "Para todas as sociedades por ações de capital aberto que emitam debêntures conversíveis.",
        "Para as companhias abertas registradas na categoria A autorizadas à negociação de ações em mercado regulado."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Obrigatoriedade por Categoria: o Artigo 15 vincula a exigência da Política de Divulgação de Fatos Relevantes às companhias registradas na Categoria A com ações listadas em Bolsa."
    },
    {
      q: "No âmbito da governança corporativa, qual instância é responsável por verificar a aderência e o cumprimento das programações contidas nos planos individuais de investimento dos administradores?",
      options: [
        "O Conselho de Administração da companhia aberta.",
        "A Diretoria Colegiada Executiva por meio de sua assessoria jurídica de compliance.",
        "O Conselho Fiscal permanente mediante parecer analítico semestral.",
        "O Comitê de Auditoria Interna em conjunto com os auditores independentes externos."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Supervisão de planos: de acordo com o Artigo 16, § 2º, cabe expressamente ao Conselho de Administração verificar o cumprimento e a aderência das ordens emitidas nos planos individuais."
    },
    {
      q: "A regulamentação estabelece que as modificações ou o cancelamento voluntário de um plano individual de investimento ou desinvestimento de um administrador:",
      options: [
        "Produzem efeitos imediatos a partir do protocolo digital do aditamento perante o DRI.",
        "Devem respeitar o prazo mínimo de três meses de antecedência para produzir efeitos.",
        "Exigem autorização prévia por meio de decisão unânime do Comitê de Auditoria.",
        "Fica vedados se a companhia aberta estiver operando janelas de planos de recompra."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Modificações sob carência: para coibir alterações oportunas baseadas em dados internos recentes, o Artigo 16 (§ 1º, IV) estende a carência de 3 meses para alterações ou cancelamento do plano."
    },
    {
      q: "As vedações de negociação com ações da própria emissão na quinzena anterior à divulgação de balanços contábeis aplicam-se a quais instâncias de liderança?",
      options: [
        "Apenas aos diretores executivos das pastas de finanças e relações com investidores.",
        "Exclusivamente ao bloco de controle do acionista majoritário controlador.",
        "À própria companhia, aos acionistas controladores, diretores, membros do CA e do Conselho Fiscal.",
        "Aos gerentes seniores de filiais comerciais e coordenadores de comitês técnicos."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Alcance do Blackout Period: o Artigo 14 elenca o rol completo sob impedimento na quinzena pré-balanço, abrangendo a própria S.A., controladores, diretores, conselheiros do CA e fiscais."
    },
    {
      q: "As normas e obrigações de transparência e negociação contidas na Resolução CVM nº 44/2021 aplicam-se a quais frentes internacionais de negociação?",
      options: [
        "Exclusivamente a fundos soberanos estrangeiros que operem derivativos cambiais na Bolsa.",
        "Aos contratos de exportação mercantil firmados com nações signatárias do Mercosul.",
        "Às companhias fechadas que busquem financiamento por meio de emissões de notas promissórias.",
        "Às empresas patrocinadoras de programas de BDR níveis II e III."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Aplicação internacional: o Artigo 22 expande expressamente o compliance e o radar normativo da CVM 44 às empresas estrangeiras patrocinadoras de programas de BDR Níveis II e III."
    },
    {
      q: "As pessoas naturais eleitas para cargos de administração ou fiscalização devem fornecer ao DRI a sua posição inicial de ações da companhia em qual marco temporal?",
      options: [
        "No primeiro dia útil após a investidura no cargo.",
        "Em até cinco dias corridos contados da homologação do pleito pela AGO.",
        "Na data de encerramento do primeiro trimestre civil do ano fiscal de posse.",
        "Janela flexível de até dez dias úteis após a assinatura do termo de posse."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Marco zero patrimonial: o Artigo 11, § 4º, Inciso II obriga o gestor recém-empossado a reportar formalmente sua carteira inicial de ações no primeiro dia útil após assumir o cargo."
    },
    {
      q: "Para fins de atendimento às obrigações de publicidade, de que forma o Fato Relevante deve ser veiculado na internet para garantir o livre acesso geral?",
      options: [
        "Por meio de portais privados de notícias financeiras com sistemas de acesso pago.",
        "Em pelo menos um portal de notícias que disponibilize a informação de forma gratuita e na sua integralidade.",
        "Através de resumos compactos em redes sociais corporativas sem indicação de valores.",
        "Postado exclusivamente em formato de arquivo encravado de acesso restrito na CVM."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Democratização informativa: o Artigo 3º, § 4º autoriza canais digitais de internet em substituição aos jornais físicos, exigindo integralidade e gratuidade absoluta de acesso ao público."
    },
    {
      q: "As vedações de negociação baseadas em presunções de uso de dados privilegiados não se aplicam às aplicações ou resgates em quais estruturas específicas de investimento?",
      options: [
        "Fundos exclusivos de investimento imobiliário corporativo focados em sedes administrativas.",
        "Carteiras administradas discricionariamente por corretores vinculados ao bloco de controle.",
        "Fundos exclusivos cujos cotistas sejam seguradoras ou entidades abertas de previdência para planos PGBL e VGBL.",
        "Clubes de investimento fechados constituídos por parentes de conselheiros do CA."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Exceção técnica de previdência: o parágrafo único do Artigo 21 afasta as presunções de insider sobre movimentações de fundos institucionais vinculados a apólices e planos PGBL/VGBL."
    },
    {
      q: "Imediatamente após a tomada de decisão de realizar uma oferta pública de distribuição de valores mobiliários, o ofertante deve veicular fato relevante contendo quais dados técnicos?",
      options: [
        "O histórico completo de notas fiscais emitidas pelas subsidiárias locais nos últimos anos.",
        "A relação nominal com os CPFs de todos os coordenadores de comitês de governança.",
        "As atas semanais consolidadas das reuniões de cúpula da Diretoria Colegiada Executiva.",
        "A quantidade de valores mobiliários, o preço e as condições de pagamento da emissão."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Transparência em captações: o Artigo 9º impõe o dever automático de Fato Relevante na decisão de ofertas públicas, detalhando lotes de títulos, preços e condições de pagamento."
    },
    {
      q: "Nos termos das presunções da norma, a negociação de valores mobiliários por quem possui conhecimento de informação relevante não divulgada configura:",
      options: [
        "Presunção de uso da referida informação relevante não divulgada na transação.",
        "Infração administrativa objetiva menor, sanada por meio de termo de ajustamento passivo.",
        "Prática legítima de proteção patrimonial contanto que não gere perdas a terceiros.",
        "Cenário de neutralidade operacional, exigindo auditoria contábil interna prévia."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "A presunção do uso: o Artigo 13, § 1º, Inciso I dita o encargo probatório do compliance: se o indivíduo opera portando o dado confidencial, presume-se de forma relativa o seu uso ilícito."
    },
    {
      q: "As pessoas mencionadas no caput do Artigo 11 devem apresentar a relação contendo o nome e o CPF de cônjuges e dependentes em qual momento?",
      options: [
        "No encerramento de cada exercício social contábil casado com a DFP.",
        "Juntamente com as comunicações de investidura no cargo ou registro de companhia aberta.",
        "Até o dia dez do mês subsequente à realização da primeira Assembleia Geral Ordinária.",
        "Janela discricionária de sessenta dias contados da assinatura eletrônica do termo de adesão."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Ficha cadastral de investidura: o Artigo 11, § 10 exige a entrega da lista nominal com CPFs de familiares e dependentes no momento em que o administrador toma posse do cargo."
    },
    {
      q: "Se a companhia aberta mantiver uma informação relevante sob sigilo legítimo por interesse da S.A., quem responde solidariamente pela guarda e segurança do segredo informativo?",
      options: [
        "Exclusivamente o Diretor de Finanças e Relações com Investidores em sua pasta.",
        "A firma externa de auditoria independente e os prestadores de serviços de custódia.",
        "Os acionistas controladores, diretores, membros do CA, do Conselho Fiscal e empregados.",
        "O consórcio técnico formado por coordenadores de agências varejo locais do banco."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Círculo de sigilo ampliado: o Artigo 8º pulveriza o dever fiduciário de custódia da informação confidencial, obrigando controladores, diretores, conselheiros, fiscais e empregados de forma solidária."
    },
    {
      q: "Nos termos da Resolução CVM nº 81/2022, o anúncio de convocação de uma assembleia geral de acionistas deve enumerar expressamente as matérias da ordem do dia, sendo expressamente vedada:",
      options: [
        "A inclusão de propostas relacionadas à remuneração variável de diretores executivos.",
        "A utilização da rubrica 'assuntos gerais' ou expressões equivalentes para pautas que dependam de deliberação.",
        "A fixação de prazos de chamadas em intervalos inferiores a trinta dias corridos de calendário.",
        "A indicação de candidatos avulsos que não possuam apoio direto do acionista controlador estatal."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Transparência de pauta: o Artigo 4º, parágrafo único, proíbe taxativamente o uso da rubrica genérica 'assuntos gerais' para abrigar matérias ocultas que dependam de votação dos acionistas."
    },
    {
      q: "Considera-se que uma assembleia geral de acionistas de uma companhia aberta é realizada de modo exclusivamente digital sempre que:",
      options: [
        "As propostas da administração forem disponibilizadas de formato puramente eletrônico no site de RI.",
        "Os sistemas eletrônicos servirem apenas para a transmissão ao vivo, sem recepção de votos remotos.",
        "Os acionistas somente possam participar e votar por meio de sistemas eletrônicos, sem prejuízo do uso do boletim de voto a distância.",
        "A totalidade dos detentores de ações preferenciais renunciar presencialmente ao direito de voz no conclave."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Modalidade digital pura: conforme o Artigo 5º, § 2º, Inciso I, a assembleia digital restringe a participação aos canais e sistemas eletrônicos interativos de dados ou transmissão."
    },
    {
      q: "No caso de assembleias gerais realizadas de formato exclusivamente digital, qual o local considerado por força de lei como o de realização do conclave?",
      options: [
        "O endereço eletrônico do servidor de internet homologado pela clearing central da B3.",
        "A sede da Comissão de Valores Mobiliários localizada na cidade do Rio de Janeiro.",
        "O foro central da comarca onde reside a maioria absoluta dos acionistas minoritários ordinaristas.",
        "A sede da própria companhia aberta."
      ],
      correct: 3,
      theme: "cvm81",
      feedback: "Ficção jurídica de localidade: para fins de registro e cumprimento de formalidades legais e estatutárias, o Artigo 5º, § 3º estabelece que a assembleia exclusivamente digital considera-se realizada na sede da S.A."
    },
    {
      q: "Sempre que a administração optar por realizar uma assembleia geral de modo parcialmente digital ou exclusivamente digital, o edital de convocação deve obrigatoriamente:",
      options: [
        "Apresentar as razões pelas quais entende mais adequado realizar a assembleia em tal modalidade.",
        "Fixar uma taxa compulsória de conexão digital para manutenção das plataformas virtuais.",
        "Exigir firma reconhecida em cartório para todos os termos de adesão cadastrais dos internautas.",
        "Bloquear a participação de acionistas dissidentes que possuam menos de cinco por cento de cotas."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Dever de justificativa: o Artigo 5º, § 4º obriga a diretoria da S.A. a fundamentar perante o mercado os motivos de conveniência corporativa para adotar formatos digitais ou híbridos."
    },
    {
      q: "Ressalvada a hipótese de assembleia exclusivamente digital, qual a exigência impositiva de presença física fixada pela Resolução CVM nº 81/2022 para as sessões híbridas?",
      options: [
        "Presença física de no mínimo dez por cento dos acionistas detentores de ações preferenciais.",
        "O presidente da mesa, o secretário e ao menos um administrador devem participar presencialmente na sede.",
        "Participação em mesa restrita à equipe de auditores independentes registrados na CVM.",
        "Presença compulsória na sede de todos os candidatos indicados para as vagas de comitês estatutários."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Marco de mesa presencial: nas assembleias híbridas (parcialmente digitais), o Artigo 5º, § 6º exige que o comando dos trabalhos (presidente, secretário) e pelo menos um diretor estejam fisicamente na sede."
    },
    {
      q: "Qual o prazo limite padrão impositivo fixado pela Resolução CVM nº 81/2022 para que uma companhia aberta disponibilize o Boletim de Voto a Distância (BVD) por ocasião da Assembleia Geral Ordinária (AGO)?",
      options: [
        "Até quinze dias de antecedência contados da publicação do edital gerencial.",
        "No prazo máximo de até quarenta e cinco dias corridos antes do conclave.",
        "Até um mês antes da data marcada para a realização da assembleia.",
        "Janela flexível de dez dias úteis contados da liberação do Formulário de Referência."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Piso cronológico do BVD: de acordo com o Artigo 26, § 1º, Inciso I, a S.A. aberta deve fornecer o boletim de voto remoto com a antecedência mínima de 1 mês da data da AGO."
    },
    {
      q: "Com as recentes alterações vigentes introduzidas na esteira de processos, o Boletim de Voto a Distância (BVD) preenchido pelo acionista deve ser recebido pela companhia aberta em qual prazo final de corte?",
      options: [
        "Até sete dias antes da data de realização da assembleia geral correspondente.",
        "No prazo de até quarenta e oito horas de antecedência da abertura da primeira chamada.",
        "Até o encerramento do horário bancário comercial do dia útil imediatamente anterior à AGO.",
        "Até quatro dias antes da data da assembleia."
      ],
      correct: 3,
      theme: "cvm81",
      feedback: "Novo fechamento de coleta: o Artigo 27 da CVM 81 (atualizado pelas reformas recentes) encurtou a trava final de recepção dos votos remotos de 7 para até 4 dias antes da assembleia, agilizando o trâmite."
    },
    {
      q: "De acordo com o fluxo regulatório de transmissão, os custodiantes de mercado devem compilar e enviar o mapa de votação remota ao depositário central em qual marco cronológico?",
      options: [
        "Até três dias antes da data de realização da assembleia.",
        "No prazo de vinte e quatro horas contadas do encerramento da recepção dos papéis.",
        "Em até cinco dias úteis após o investidor transmitir sua ordem digital pela corretora.",
        "Livremente ao longo da quinzena pré-balanço, sem travas fixadas em texto normativo."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Esteira de prazos intermediários: o Artigo 43 determina que os custodiantes processem e remetam o mapa consolidado de suas bases à central depositária em até 3 dias antes do evento (D-3)."
    },
    {
      q: "A central depositária e o escriturador de ações devem consolidar e encaminhar à companhia aberta os mapas sintéticos e analíticos de votação até qual limite temporal?",
      options: [
        "No primeiro dia útil subsequente ao encerramento dos prazos das corretoras.",
        "Até quarenta e oito horas antes da data de realização da assembleia.",
        "Janela estrita de até vinte e quatro horas de antecedência do início da sessão.",
        "Entregues exclusivamente em formato físico na mesa diretora durante o conclave."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Prazo das clearings (D-2): nos termos dos Artigos 44 e 45, os prestadores de serviços de escrituração e custódia centralizada têm até 48 horas antes da assembleia para entregar os mapas consolidados ao banco."
    },
    {
      q: "A equipe de Relações com Investidores da companhia aberta deve obrigatoriamente divulgar publicamente os mapas sintéticos de votos recebidos na internet em qual prazo?",
      options: [
        "Em até três dias úteis contados do encerramento geral da apuração física de atas.",
        "Até vinte e quatro horas antes da assembleia.",
        "No mesmo instante em que receber os arquivos magnéticos do escriturador em D-2.",
        "Lançados de formato confidencial restrito apenas à visualização do conselho fiscal."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Transparência pré-assembleia (D-1): o Artigo 46-B obriga a S.A. a postar na página da CVM e no seu site de RI as posições compiladas de mapas sintéticos até 24 horas antes do início dos trabalhos."
    },
    {
      q: "Após a ocorrência e encerramento dos trabalhos da Assembleia Geral, qual o prazo regulamentar para que a companhia aberta divulgue o mapa final de votação resumido?",
      options: [
        "Até o dia útil seguinte ao da realização da assembleia.",
        "No prazo máximo de até três dias corridos de calendário contados da ata.",
        "Em até cinco dias úteis integrados ao fluxo de controle societário de RI.",
        "Na mesma data de transmissão da ata assemblear oficial registrada na Junta Comercial."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Resultado ágil sintético: o Artigo 48, Inciso I exige a publicação do mapa final resumido (computando votos virtuais e presenciais, aprovações e rejeições) até o primeiro dia útil seguinte ao conclave."
    },
    {
      q: "O mapa final de votação detalhado, contendo os cinco primeiros dígitos do CPF ou CNPJ de cada investidor e o teor de seu voto, deve ser publicado pela S.A. em qual prazo?",
      options: [
        "Em até quarenta e oito horas úteis contadas do término do encerramento da sessão.",
        "No prazo limite de até cinco dias corridos de calendário pós-assembleia.",
        "Em até 7 (sete) dias úteis após a data da realização da assembleia.",
        "Até trinta dias contados do registro e arquivamento dos livros de presença na sede."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Rastreabilidade completa pós-voto: o Artigo 48, Inciso II fixa a janela de até 7 dias úteis para a liberação do mapa detalhado com identificação parcial de CPF/CNPJ por razões de auditoria de votos."
    },
    {
      q: "Para fins de caracterização normativa da Resolução CVM nº 81/2022, o que configura formalmente um 'Pedido Público de Procuração' quando promovido pela própria administração ou controlador?",
        options: [
        "Qualquer contato via correio eletrônico restrito direcionado a até dois investidores ordinaristas.",
        "Os pedidos de votos por mandato dirigidos a mais de 5 (cinco) acionistas.",
        "As solicitações de assinaturas em bloco promovidas nas salas internas de comitês de crédito.",
        "Toda circular interna enviada em formato estritamente confidencial aos conselheiros do CA."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Gatilho de pedido público por gestão: o Artigo 50, Inciso II dita que se a Diretoria ou o Controlador abordarem mais de 5 acionistas solicitando procuração, o ato configura captação pública regulada."
    },
    {
      q: "Caso o pedido de procuração por mandato de voto seja promovido por um acionista minoritário ou terceiro, o ato passa a ser classificado como público ao atingir qual volume de abordados?",
      options: [
        "Pedidos dirigidos a mais de dez acionistas, quando promovidos por qualquer outra pessoa.",
        "Abordagens diretas que envolvam mais de trinta titulares de ações preferenciais em Bolsa.",
        "Solicitações que alcancem fatias superiores a um por cento do capital social votante real.",
        "Sempre que o proponente utilizar correspondência física timbrada com assinaturas em dupla."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Gatilho para terceiros: o Artigo 50, Inciso III estabelece que para acionistas fora do bloco de comando, a captação de procurações vira ato público regulado se direcionada a mais de 10 investidores."
    },
    {
      q: "Se a Diretoria ou a administração do banco manifestar a intenção de realizar um pedido público de procuração aos minoritários, ela deve comunicar o mercado com qual antecedência mínima?",
      options: [
        "Antecedência mínima de quarenta e oito horas úteis contadas da liberação do edital.",
        "Carência regulamentar estrita de cinco dias corridos via fato relevante de RI.",
        "Com pelo menos 10 (dez) dias úteis de antecedência, indicando as matérias pretendidas.",
        "Janela flexível de quinze dias de calendário casada com os mapas analíticos da B3."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Carência de captação pública: de acordo com o Artigo 55, a S.A. deve soltar comunicado informando sua intenção de colher procurações públicas com pelo menos 10 dias úteis de antecedência do disparo."
    },
    {
      q: "O acionista ou grupo de acionistas que deseje incluir propostas de deliberação (pedidos de pauta) na ordem do dia da AGO deve remeter o pleito ao DRI em qual prazo limite?",
      options: [
        "Até sessenta dias antes da data fixada para o encerramento do ano fiscal corporativo.",
        "No prazo de até trinta dias corridos contados da publicação inicial do edital de convocação.",
        "Até quarenta e cinco dias antes da data de realização da assembleia geral ordinária.",
        "Janela ágil de dez dias úteis contados da liberação do Balanço Patrimonial consolidado."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Inserção de pautas (D-45): o Artigo 37, § 1º, Inciso II fixa o marco de 45 dias antes da AGO para que minoritários qualificados enviem sugestões e propostas de matérias para compor a ordem do dia."
    },
    {
      q: "Para a indicação e inclusão de candidatos aos assentos eletivos do Conselho de Administração ou Conselho Fiscal no Boletim de Voto (BVD), qual o prazo final para o envio do pleito dos minoritários?",
      options: [
        "Até vinte e cinco dias antes da data de realização da assembleia geral ordinária.",
        "Até quinze dias de calendário de antecedência do início da primeira chamada oficial.",
        "No prazo improrrogável de quarenta e cinco dias corridos anteriores à data marcada da AGO.",
        "Janela aberta até o encerramento do primeiro trimestre civil do ano fiscal de posse."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Inclusão de candidatos (D-25): o Artigo 37, § 1º, Inciso I, alínea 'a' confere o prazo de até 25 dias antes da AGO ordinária para que acionistas submetam nomes e fichas de candidatos aos conselhos."
    },
    {
      q: "Recebido o pedido de inclusão de propostas ou de candidatos enviado pelos acionistas, qual o prazo legal que o Diretor de RI possui para emitir validação ou recusa fundamentada?",
      options: [
        "No prazo máximo de até vinte e quatro horas úteis de calendário do recebimento eletrônico.",
        "Em até 3 (três) dias úteis do recebimento da solicitação de inclusão.",
        "Janela de cinco dias corridos vinculada à análise do comitê de elegibilidade (COERE).",
        "Até o dia útil imediatamente anterior à data programada de liberação do boletim BVD."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Triagem do RI (3 dias): conforme o Artigo 39, a área de RI do banco tem até 3 dias úteis do recebimento do pleito do acionista para dar o veredito de aceitação ou listar os motivos técnicos de rejeição."
    },
    {
      q: "Caso ocorra aditamento de pautas ou inclusão válida de novos candidatos remetidos por minoritários, a companhia deve reapresentar o Boletim de Voto (BVD) atualizado até qual marco?",
      options: [
        "Até trinta dias corridos contados da ocorrência da primeira chamada da assembleia.",
        "Em até setenta e duas horas úteis da homologação pelo Conselho de Administração.",
        "Até vinte dias antes da data de realização da assembleia geral.",
        "Janela de segurança fixada no piso limite de sete dias úteis anteriores à AGO."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Nova liberação do BVD (D-20): se a ordem do dia ou a listagem de chapas for alterada por solicitações legítimas, o Artigo 37 dita que o BVD corrigido deve ser republicado até 20 dias antes da assembleia."
    },
    {
      q: "Se uma companhia aberta deixar de disponibilizar os documentos e propostas da administração no prazo regulamentar de um mês antes da AGO, o acionista pode requerer à CVM:",
      options: [
        "A liquidação forçada imediata de todas as ações preferenciais mantidas em tesouraria.",
        "A interrupção do prazo de antecedência de convocação da assembleia, nos termos das normas.",
        "O afastamento compulsório monocrático do Diretor de Relações com Investidores de sua pasta.",
        "A anulação automática de todas as atas das reuniões semanais da Diretoria Colegiada."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Interrupção de prazos pela CVM: o descumprimento de prazos de fornecimento de dados abre margem regulatória para que acionistas provoquem a CVM visando paralisar e adiar a contagem do calendário assemblear."
    },
    {
      q: "As informações fornecidas no pedido público de procuração formulado por acionistas minoritários devem detalhar obrigatoriamente as relações mantidas com a S.A. cobrindo qual intervalo retroativo?",
      options: [
        "Relações societárias, empresariais ou familiares mantidas nos últimos 3 anos com a companhia.",
        "Histórico de transações comerciais e de crédito operadas nos últimos doze meses civis.",
        "Vínculos e contratos firmados com o bloco de controle na última meia década acumulada.",
        "Inexistência de parentesco com funcionários concursados de carreira nos últimos dez anos."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Radar retrospectivo de vínculos: o Anexo da norma exige que o formulário de pedido de procuração mapeie e exponha de formato transparente conflitos e relações societárias ocorridas nos últimos 3 anos."
    },
    {
      q: "A regulamentação de assembleias digitais exige que os sistemas eletrônicos adotados pela companhia aberta garantam de formato impositivo aos acionistas conectados:",
      options: [
        "Acesso restrito em modo puramente ouvinte, sendo vedadas manifestações de voz em tempo real.",
        "Garantia de gravação confidencial das sessões com guarda exclusiva do acionista controlador.",
        "A possibilidade de manifestação e o acesso concomitante a documentos apresentados durante a sessão.",
        "Bloqueio automático de ferramentas de chat interativo para investidores preferencialistas."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Direito de voz e dados: para mimetizar com perfeição o rito presencial protetivo, o sistema eletrônico da assembleia virtual deve viabilizar manifestações tempestivas e exame de documentos na tela."
    },
    {
      q: "Na contagem das posições sintéticas informadas no mapa de 24 horas pré-assembleia (D-1), a companhia aberta deve consolidar dados oriundos de quais frentes de custódia?",
      options: [
        "Apenas os dados de custódia direta mantidos no caixa de depósitos da própria sede do banco.",
        "Os mapas sintéticos do depositário central, do escriturador e os votos enviados direto à companhia.",
        "O sumário de intenções de voto compilado informalmente pelas associações sindicais e de funcionários.",
        "Os relatórios de tráfego eletrônico fornecidos pelas operadoras de internet banda larga regional."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Tríplice origem de dados: em conformidade com o Artigo 46-B, a consolidação pré-assembleia agrega três canais oficiais de entrada: clearing (B3), banco escriturador e canais diretos da S.A."
    },
    {
      q: "Caso o edital de convocação de uma assembleia geral ordinária de companhia aberta venha a ser retificado por erro material grosseiro em sua redação original, o prazo de antecedência mínima de 21 dias deve:",
      options: [
        "Ser reiniciado integralmente a partir da data de publicação do edital retificado, caso a alteração mude as obrigações da ordem do dia.",
        "Ser mantido inalterado contanto que a Diretoria envie um e-mail de desculpas à CVM em 24 horas.",
        "Ser reduzido automaticamente para o piso emergencial de oito dias em segunda chamada de mesa.",
        "Ser dispensado de publicação se a matéria já tiver parecer favorável do comitê de auditoria."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Recontagem por alteração de pauta: se a retificação do edital modificar o teor ou o escopo das pautas da ordem do dia, o calendário protetivo de 21 dias exige reinício para não surpreender a base acionária."
    },
    {
      q: "De acordo com as atualizações vigentes, o mapa final de votação detalhado pós-assembleia (D+7 dias úteis) deve conter qual nível de identificação de dados de privacidade dos investidores?",
      options: [
        "Exposição completa sem travas do nome civil, CPF, endereço residencial e e-mail dos acionistas.",
        "Anonimização total de dados substituindo os nomes por códigos criptográficos aleatórios cegos.",
        "Os 5 primeiros números da inscrição do acionista no CPF ou no CNPJ.",
        "Exibição restrita da unidade federativa de domicílio tributário fiscal dos detentores de papéis."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Equilíbrio de transparência e LGPD: o Artigo 48, Inciso II determina que o mapa analítico pós-voto traga a identificação parcial nítida exibindo os 5 primeiros dígitos do registro de CPF ou CNPJ do votante."
    },
    {
      q: "Se a companhia aberta disponibilizar o Boletim de Voto (BVD) para uma Assembleia Geral Extraordinária (AGE) convocada para ocorrer de forma isolada fora da data da AGO, qual o prazo de carência exigido?",
      options: [
        "Até vinte e um dias antes da data marcada para a realização da assembleia extraordinária.",
        "Antecedência mínima e fixa de trinta dias de calendário contados do primeiro anúncio de mídia.",
        "Janela ágil de dez dias úteis casada com os informativos de proventos do banco escriturador.",
        "Prazo de quarenta e cinco dias corridos amarrados aos pedidos de pautas societárias de minoritários."
      ],
      correct: 0,
      theme: "cvm81",
      feedback: "Prazos em AGE isolada: o Artigo 26, § 1º, Inciso II dita que para assembleias extraordinárias soltas (não coincidentes com a data da AGO), o prazo mínimo de fornecimento do BVD é de 21 dias."
    },
    {
      q: "Nos termos da Resolução CVM nº 81/2022, os pedidos públicos de procuração formulados pela administração devem ser acompanhados obrigatoriamente por:",
      options: [
        "Uma declaração de quitação de débitos pessoais de todos os diretores executivos na tesouraria.",
        "Cópia física timbrada com autenticação notarial de todo o Estatuto Social consolidado do banco.",
        "O inteiro teor de todas as atas de reuniões da Diretoria Colegiada ocorridas no semestre civil.",
        "Todos os documentos e informações necessários ao exercício do direito de voto nas matérias de pauta."
      ],
      correct: 3,
      theme: "cvm81",
      feedback: "Informativo de voto no pedido: captações públicas de mandatos de voto exigem o fornecimento completo de dados e propostas da administração para embasar e esclarecer a tomada de decisão do minoritário."
    },
    {
      q: "Caso o acionista decida enviar o seu Boletim de Voto a Distância (BVD) por meio de seu respectivo agente de custódia (corretora), ele deve observar quais prazos e fluxos?",
      options: [
        "Entrega direta na sede física da central depositária com quarenta e oito horas de antecedência.",
        "Os prazos internos de corte estabelecidos pela própria corretora, que antecedem o limite regulamentar do banco.",
        "Janela aberta de formato perene e livre até o horário de abertura oficial da mesa da AGO.",
        "Envio exclusivo em formato duplo assinado por certificado digital ICP-Brasil padrão ouro."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Prazos da esteira de intermediários: para que corretoras e clearings compilem milhares de votos a tempo de entregar os mapas consolidados em D-2, os prazos de corte para o cliente final na corretora são mais curtos."
    },
    {
      q: "A central depositária (B3), ao receber os mapas compilados dos custodiantes intermediários em D-3, realiza qual procedimento técnico de validação antes do repasse ao banco escriturador?",
      options: [
        "A verificação de assinaturas em cartório de notas digitais de todos os procuradores outorgados.",
        "A auditoria das declarações de imposto de renda individuais de investidores estrangeiros.",
        "O cruzamento automatizado de posições acionárias para checar se há estouro ou duplicação de votos.",
        "A suspensão temporária preventiva do pregão de opções ativas referenciadas nas ações ON."
      ],
      correct: 2,
      theme: "cvm81",
      feedback: "Consolidação e expurgo de inconsistências: a clearing central da B3 atua como um grande filtro, identificando eletronicamente se o mesmo investidor tentou votar duas vezes ou acima de seu saldo real de custódia."
    },
    {
      q: "A regulamentação de assembleias digitais determina que as manifestações por escrito enviadas pelos acionistas conectados eletronicamente durante a sessão devem ser:",
      options: [
        "Arquivadas sob sigilo confidencial interno, sendo vedada sua anexação aos registros de atas.",
        "Registradas na ata da assembleia geral, integrando a documentação oficial do conclave corporativo.",
        "Submetidas a uma triagem de veto prévio e discricionário conduzida pelo secretário da mesa.",
        "Lidas e respondidas de formato restrito apenas se o autor possuir mais de dez por cento do capital."
      ],
      correct: 1,
      theme: "cvm81",
      feedback: "Fidelidade de ata virtual: todas as intervenções escritas ou orais transmitidas pelos canais eletrônicos da assembleia digital devem constar obrigatoriamente no corpo ou anexos da ata oficial do evento (Art. 5º)."
    },
    {
      q: "Caso o Diretor de Relações com Investidores (DRI) decida reter provisoriamente a divulgação de um fato relevante por entender que sua revelação imediata põe em risco interesse legítimo da S.A., como o normativo classifica essa omissão?",
      options: [
        "Uma infração de compliance presumida, sujeita a multas diárias automáticas da autarquia.",
        "Uma faculdade discricionária de mercado que exime a companhia de prestar esclarecimentos posteriores.",
        "Uma exceção legítima ao dever de informar, cuja manutenção fica sob a responsabilidade dos administradores.",
        "Um procedimento padrão aplicável apenas no encerramento de cada exercício contábil anual."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Exceção do Artigo 6º: A não divulgação de ato ou fato relevante por interesse legítimo da companhia é permitida de forma excepcional, desde que mantida sob estrito controle e confidencialidade dos administradores."
    },
    {
      q: "Se uma informação mantida em sigilo legítimo vazar ou se houver oscilações anômalas na cotação das ações, os administradores ficam obrigados por lei a:",
      options: [
        "Solicitar a imediata suspensão preventiva da liquidação de contratos derivativos pela B3.",
        "Providenciar de formato imediato a divulgação do fato relevante ao mercado, diretamente ou via DRI.",
        "Efetuar a recompra emergencial de todas as cotas negociadas nas plataformas de pregão.",
        "Manter o sigilo institucional contanto que enviem uma justificativa por escrito à CVM."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Gatilho de vazamento: o parágrafo único do Artigo 6º determina que se o segredo escapar do controle das equipes ou houver oscilação atípica de preços, a divulgação vira dever imediato."
    },
    {
      q: "A quem se estende formalmente o dever de guardar sigilo sobre informações relativas a ato ou fato relevante às quais tenham acesso privilegiado antes da divulgação oficial?",
      options: [
        "Exclusivamente ao Diretor de Finanças e Relações com Investidores em sua pasta estatutária.",
        "Aos fornecedores comerciais secundários de insumos e agências de publicidade do banco.",
        "Aos acionistas controladores, diretores, membros do CA, do Conselho Fiscal, órgãos técnicos e empregados.",
        "Aos correntistas varejo e clientes detentores de linhas de crédito junto ao banco regional."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Círculo ampliado de sigilo: o Artigo 8º obriga solidariamente toda a cadeia interna da companhia (controladores, administradores, fiscais, órgãos estatutários e colaboradores) a guardar o segredo corporativo."
    },
    {
      q: "Qual a consequência regulatória imposta a um administrador caso um subordinado de sua estrita confiança venha a vazar informações e realizar insider trading?",
      options: [
        "O administrador fica isento de culpa caso comprove que não obteve lucros financeiros diretos.",
        "A penalidade administrativa e civil recai unicamente sobre a pessoa do subordinado infrator.",
        "O administrador responde solidariamente com subordinados e terceiros pela quebra do sigilo.",
        "A Comissão de Valores Mobiliários suspende as negociações da S.A. por prazo indeterminado."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Dever de vigilância: nos termos do Artigo 8º, cabe ao gestor zelar para que subordinados e terceiros de sua confiança mantenham o sigilo, respondendo solidariamente em caso de descumprimento."
    },
    {
      q: "Imediatamente após a tomada de decisão de realizar uma oferta pública de distribuição de valores mobiliários dependente de registro, o ofertante assume o dever de:",
      options: [
        "Aguardar a aprovação e o parecer técnico unânime por parte do comitê fiscal permanente.",
        "Encaminhar os dados de forma confidencial em envelope lacrado à Secretaria de Fazenda.",
        "Divulgar fato relevante detalhando a quantidade de valores, o preço e as condições de pagamento.",
        "Suspender de formato automático as transações comerciais ativas de suas agências varejo."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Transparência em captações: o Artigo 9º impõe o gatilho compulsório de Fato Relevante assim que decidida uma emissão pública, detalhando as características financeiras da oferta ao pregão."
    },
    {
      q: "A celebração de contrato de alienação do controle acionário da companhia aberta impõe o dever mandatório de veicular fato relevante contendo quais informações estratégicas?",
      options: [
        "A ata detalhada consolidada de todas as reuniões semanais feitas pela Diretoria Colegiada.",
        "O histórico de balancetes mensais emitidos pelas filiais comerciais nos últimos três anos civis.",
        "Os termos da operação, a identificação do adquirente, o preço por ação e os objetivos do comprador.",
        "A ficha cadastral completa com os CPFs de todos os gerentes seniores operacionais regionais."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Publicidade em M&A: o Artigo 10 impõe que o Fato Relevante de troca de controle traga dados profundos sobre o comprador, preços pactuados, e suas intenções quanto a fechamento de capital em um ano."
    },
    {
      q: "As pessoas naturais eleitas para cargos de administração ou fiscalização ficam obrigadas a informar à companhia a sua posição inicial de ações em qual marco temporal?",
      options: [
        "No prazo de até dez dias úteis contados da data de homologação do pleito pela AGO.",
        "No primeiro dia útil após a investidura no cargo.",
        "Na data de encerramento do primeiro trimestre civil do ano fiscal de posse na sede.",
        "Janela aberta de até trinta dias contados da assinatura eletrônica do termo de adesão."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Marco zero patrimonial: o Artigo 11, § 4º, Inciso II obriga o gestor recém-empossado a reportar a sua carteira inicial de ativos à área de RI já no primeiro dia útil subsequente à investidura."
    },
    {
      q: "Os diretores e membros do Conselho de Administração devem efetuar a comunicação interna de suas negociações pessoais com ações da companhia ao DRI em qual prazo?",
      options: [
        "No prazo máximo de quarenta e oito horas contadas da liquidação financeira do pregão.",
        "Até o primeiro dia útil posterior ao término do mês de referência das ordens de compra.",
        "No prazo de cinco dias após a realização de cada negócio.",
        "Janela discricionária de até quinze dias úteis vinculada às comissões de compliance."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Reporte interno: o Artigo 11, § 4º, Inciso I fixa a janela de até 5 dias após a realização da transação na Bolsa para que o gestor envie os dados das movimentações pessoais ao setor de RI."
    },
    {
      q: "A companhia aberta deve enviar à CVM e às entidades administradoras do mercado as informações consolidadas sobre os negócios de seus administradores em qual prazo?",
      options: [
        "No prazo de até três dias úteis contados do encerramento das verificações fiscais.",
        "Em até vinte e quatro horas úteis após receber as planilhas das corretoras de custódia.",
        "No prazo de dez dias após o término do mês em que se verificarem as alterações.",
        "Casado com o fluxo de calendarização de dividendos e JCP mensais programados pela COLED."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Envio de relatórios externos: o Artigo 11, § 6º dita que o DRI tem até 10 dias após o fechamento do mês em que ocorreram as transações para consolidar os dados e transmiti-los eletronicamente à CVM."
    },
    {
      q: "Para fins de monitoramento societário da CVM, as obrigações de informar posições acionárias e negociações de administradores estendem-se também a quem?",
      options: [
        "Aos fornecedores comerciais estratégicos e agências publicitárias contratadas pelo banco.",
        "Aos cônjuges, companheiros, dependentes incluídos na declaração de IR e sociedades controladas.",
        "Aos correntistas varejo detentores de linhas de crédito rotativo de médio porte.",
        "A todos os acionistas minoritários ordinaristas dispersos nas plataformas das clearings."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Exposição indireta: o Artigo 11, § 2º estende de forma mandatória o radar e o compliance cadastral aos cônjuges (não separados), companheiros, dependentes de IR e controladas diretas ou indiretas do executivo."
    },
    {
      q: "Para fins de aplicação das regras de reporte e vedação de negociações, o que se equipara à transação direta com ações de emissão própria da companhia aberta?",
      options: [
        "Aplicações em fundos multimercados globais abertos com proteções baseadas em hedge cambial.",
        "A movimentação de Letras de Crédito Imobiliário (LCI) emitidas com prazos de resgates longos.",
        "A aplicação ou resgate em fundos de investimento cuja carteira seja composta exclusivamente por ações da S.A.",
        "A compra de Certificados de Operações Estruturadas (COE) indexados à taxa de inflação."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Equiparação por derivativos/fundos: o Artigo 11, § 9º equipara à negociação de ações próprias os aportes ou resgates efetuados em fundos de investimento focados de formato exclusivo em papéis da emissora."
    },
    {
      q: "Considera-se negociação relevante, disparando a obrigação de envio de dados e alerta imediato ao DRI por parte de investidores ou blocos de mercado, a transação que ultrapassar:",
      options: [
        "Os limites fixos de um por cento, dois por cento e três por cento de ações preferenciais.",
        "Os patamares de cinco por cento, dez por cento, quinze por cento, e assim sucessivamente, de espécie ou classe.",
        "O teto acumulado bruto de trinta por cento do volume financeiro negociado no pregão diário.",
        "A faixa de dez por cento do capital social autorizado fixado em texto estatutário."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Radar de participação relevante: de acordo com o Artigo 12, § 1º, cruzar os marcos sucessivos de 5%, 10%, 15% (para cima ou para baixo) de qualquer espécie ou classe de ações em circulação ativa exige comunicado imediato."
    },
    {
      q: "Ao computar as ordens para fins de verificação do atingimento de fatias acionárias relevantes (marcos de cinco por cento), como os derivativos de liquidação física são tratados?",
      options: [
        "São desconsiderados do cômputo por se tratarem de opções contratuais futuras de balcão.",
        "As ações diretamente detidas e aquelas referenciadas por derivativos de liquidação física devem ser consideradas em conjunto.",
        "Sofrem abatimento de metade de seu volume bruto caso possuam prazos de vencimento curtos.",
        "As posições vendidas em derivativos anulam e limpam de formato automático as ordens de compra física."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Agregação física: o Artigo 12, § 3º, Inciso I determina a consolidação conjunta das ações detidas em carteira com as ações referenciadas por derivativos que prevejam liquidação física (entrega do ativo)."
    },
    {
      q: "No cálculo de posições acionárias relevantes, qual a vedação imposta pela regulação da CVM sobre a compensação de posições opostas em derivativos pelo investidor?",
      options: [
        "Permite-se abater as posições compradas das vendidas apenas para investidores institucionais.",
        "A compensação ocorre de formato automatizado pelas clearings centrais de compensação da B3.",
        "A quantidade de ações referenciadas em derivativos de exposição comprada não pode ser compensada com posições vendidas.",
        "A compensação é franqueada de forma livre contanto que os contratos usem a mesma corretora."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Proibição de netting compensatório: o Artigo 12, § 3º, Inciso III proíbe abater a exposição comprada da vendida, coibindo manobras que visem a mascarar a transposição do radar regulitário dos 5%."
    },
    {
      q: "As amarras e obrigações de reporte de participações de cinco por cento ficam dispensadas nos casos de fundos de índice (ETFs) ou cestas reguladas onde as ações da S.A. representem:",
      options: [
        "Menos de trinta por cento do mix total de ativos contidos no portfólio estruturado.",
        "Peso inferior a vinte por cento do índice ou fundo de investimento.",
        "Fatia financeira abaixo de cem mil reais convertidos por pregão diário de Bolsa.",
        "Participação menor do que dez por cento calculada sobre o valor contábil líquido."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Isenção por diluição: o Artigo 12, § 3º, Inciso IV desobriga o reporte caso a exposição ocorra por meio de índices amplos ou carteiras diversificadas onde o papel alvo possua peso menor que 20% do mix."
    },
    {
      q: "Caso a montagem de uma posição relevante de cinco por cento seja realizada com a meta explícita de alterar o controle ou a estrutura administrativa da S.A., o adquirente deve:",
      options: [
        "Interromper suas ordens de compra no pregão da B3 por quarentena compulsória de noventa dias.",
        "Promover a divulgação de aviso contendo os seus termos e objetivos pelos mesmos canais da companhia.",
        "Solicitar referendo técnico prévio e unânime por parte dos integrantes do conselho fiscal.",
        "Alienar metade de seu lote de ações nas plataformas de pregão aberto em até quarenta e oito horas."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Aviso ostensivo: o Artigo 12, § 5º dita que se a captação de lote relevante (5%+) tiver fins de alteração de comando ou bloco de controle, exige-se publicar um aviso detalhando as intenções ao mercado."
    },
    {
      q: "A trava regulatória objetiva de calendário chamada blackout period proíbe negociações com ações de emissão da própria companhia em qual período?",
      options: [
        "Nos trinta dias posteriores à data de ocorrência da Assembleia Geral Ordinária anual.",
        "No período de quinze dias que anteceder a data da divulgação das informações contábeis trimestrais e anuais.",
        "Durante as janelas de recesso civil das atividades do Conselho de Administração bancário.",
        "Nos cinco dias úteis subsequentes à declaração de dividendos intermediários intercalares."
      ],
      correct: 1,
      theme: "cvm44",
      feedback: "Blackout dos 15 dias: o Artigo 14 positiva uma vedação objetiva de negociações na quinzena que antecede a liberação do ITR (trimestral) e DFP (anual), aplicando-se a administradores e controladores."
    },
    {
      q: "Sobre a vedação de negociação na quinzena que antecede a liberação das informações contábeis trimestrais e anuais da S.A. aberta, a CVM estabelece que o impedimento:",
      options: [
        "Independe do conhecimento, por parte das pessoas referidas, do conteúdo das informações contábeis correspondentes.",
        "Aplica-se apenas se o gestor tiver participado de formato ativo da auditoria dos balancetes.",
        "Pode ser flexibilizado se o volume financeiro diário da transação for de pequeno porte monetário.",
        "Torna-se nulo caso a auditoria independente externa já tenha emitido parecer sem ressalvas."
      ],
      correct: 0,
      theme: "cvm44",
      feedback: "Presunção absoluta de calendário: o parágrafo único do Artigo 14 determina que a trava dos 15 dias opera de forma puramente cronológica e cega, independente de o gestor ter tido acesso ou não aos dados prévios."
    },
    {
      q: "A CVM presume de forma relativa o uso ilícito de informação privilegiada não divulgada se o ex-administrador que se desligou da companhia aberta negociar valores mobiliários de sua emissão dentro de qual intervalo de tempo?",
      options: [
        "No prazo de até trinta dias corridos contados do registro de sua saída na Junta Comercial.",
        "Na janela de trinta dias úteis de calendário subsequentes à AGO que tomou as contas do ano.",
        "No período de 3 (três) meses contados do seu desligamento dispondo de dado não divulgado.",
        "A presunção é perpétua enquanto a informação mantida em segredo corporativo não for revelada."
      ],
      correct: 2,
      theme: "cvm44",
      feedback: "Janela pós-desligamento: o Artigo 13, § 1º, Inciso IV estipula o prazo de presunção de 3 meses para blindar o mercado de negociações oportunas conduzidas por ex-gestores portando dados sigilosos da S.A."
    },
    {
      q: "Nos termos das presunções da norma, a partir de qual marco exato as informações relativas a operações de fusão, incorporação, cisão ou reorganização societária passam a ser consideradas juridicamente relevantes para fins de vedação de negociação?",
      options: [
        "Apenas a partir do dia em que a Assembleia Geral homologar a assinatura dos protocolos finais.",
        "Logo após o Conselho de Administração aprovar o rateio de custos orçamentários da fusão.",
        "No momento em que as firmas independentes externas iniciarem a auditoria de laudos econômicos.",
        "A partir do momento em que tenham início os estudos ou análises relativas às referidas operações."
      ],
      correct: 3,
      theme: "cvm44",
      feedback: "Estudos preliminares (M&A): o Artigo 13, § 1º, Inciso V fixa que análises iniciais, rascunhos de propostas ou estudos prévios de fusões e cisões societárias já configuram dado relevante impeditivo."
    }
    
];
