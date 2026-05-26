const quizQuestions = [
    {
        q: "1. A partir de janeiro do ano-calendário de 2026, com a entrada em vigor do Art. 6º-A da Lei nº 15.270/2025, qual a regra de retenção na fonte (IRRF) sobre dividendos pagos a pessoas físicas por uma mesma PJ?",
        options: [
            "A) Isenção total e irrestrita para qualquer valor distribuído a residentes no país.",
            "B) Retenção fixa de 15% de IRRF sobre a parcela que ultrapassar o teto de R$ 20.000,00 no mês.",
            "C) Retenção na fonte de 10% de IRPF sobre o VALOR TOTAL mensal caso o montante acumulado pago por uma mesma PJ a uma mesma PF ultrapasse R$ 50.000,00 no mesmo mês, vedadas deduções.",
            "D) Retenção progressiva de até 27,5% calculada apenas sobre a parcela excedente a R$ 50.000,00."
        ],
        correct: 2,
        feedback: "O Art. 6º-A da Lei nº 15.270/2025 tributa o valor total mensal em 10% de IRRF caso a soma de dividendos de uma mesma PJ para uma mesma PF ultrapasse R$ 50 mil no mês, sem deduções de base de cálculo."
    },
    {
        q: "2. Segundo o § 2º do Art. 6º-A da Lei nº 15.270/2025, o que deve ser feito se ocorrer mais de um pagamento ou crédito de lucros e dividendos no mesmo mês para a mesma pessoa física?",
        options: [
            "A) O imposto incide de forma isolada sobre cada transação, sem comunicação entre os pagamentos.",
            "B) O valor retido na fonte deve ser recalculado de modo a considerar o total consolidado dos valores entregues no mês.",
            "C) Os pagamentos subsequentes ficam dispensados de retenção se o primeiro já foi tributado.",
            "D) O banco emissor fica obrigado a suspender o segundo pagamento até o ano fiscal seguinte."
        ],
        correct: 1,
        feedback: "O § 2º do Art. 6º-A estabelece o princípio da cumulação mensal: havendo múltiplos créditos no mesmo mês, o RI deve recalcular a retenção considerando o somatório total para aplicar a alíquota de 10%."
    },
    {
        q: "3. No ano-calendário de 2026, qual é a alíquota aplicável de IRRF sobre os pagamentos de Juros sobre o Capital Próprio (JCP) a investidores residentes no país?",
        options: [
            "A) Alíquota de 10%, acompanhando a nova regra dos dividendos de grande porte.",
            "B) Alíquota histórica de 15%, sem alterações regulamentares na fonte.",
            "C) Alíquota de 17,5% sobre o valor bruto declarado.",
            "D) Alíquota de 22,5%, seguindo a tabela regressiva das aplicações de curtíssimo prazo."
        ],
        correct: 2,
        feedback: "No cenário fiscal de 2026, a alíquota de retenção na fonte (IRRF) sobre o montante bruto distribuído a título de Juros sobre o Capital Próprio (JCP) foi fixada em 17,5%."
    },
    {
        q: "4. Diante das restrições de dedutibilidade do JCP consolidadas para 2026 pela Lei nº 14.789/2023, qual das seguintes parcelas patrimoniais NÃO pode integrar a base de cálculo da TJLP pelo Banestes?",
        options: [
            "A) Lucros acumulados de exercícios anteriores devidamente auditados.",
            "B) Reserva de lucros estatutária aprovada em Assembleia Geral.",
            "C) Variações patrimoniais ativas decorrentes de subvenções governamentais de investimento.",
            "D) Capital social totalmente subscrito e integralizado pelos acionistas."
        ],
        correct: 2,
        feedback: "A Lei nº 14.789/2023 proibiu expressamente a inclusion de subvenções públicas de investimento na apuração do Patrimônio Líquido elegível para fins de dedução fiscal do JCP pelo banco emissor."
    },
    {
        q: "5. Qual o tratamento regulamentar exigido pela Instrução Normativa BCB nº 272/2022 para dividendos intermediários declarados após o encerramento do período contábil?",
        options: [
            "A) Devem ser pagos imediatamente ao mercado em até 10 dias úteis.",
            "B) São estornados e incorporados de forma definitiva ao capital social autorizado.",
            "C) Devem ser mantidos no patrimônio líquido do Banco enquanto não forem aprovados pela Assembleia Geral Ordinária (AGO).",
            "D) São transferidos para uma conta de provisão passiva no passivo circulante com correção pela taxa Selic."
        ],
        correct: 2,
        feedback: "Em conformidade com a IN BCB nº 272/2022, transposta para a Política de Dividendos [cite: 22], os proventos declarados pós-fechamento contábil devem ser mantidos no PL até a validação soberana na AGO[cite: 22]."
    },
    {
        q: "6. Qual o quórum de deliberação qualificado exigido no Conselho de Administração (CA) para aprovar a destituição ou a nomeação do Gerente de Auditoria Interna do Banestes?",
        options: [
            "A) Maioria simples dos votos dos conselheiros presentes na sessão ordinária.",
            "B) Unanimidade dos membros, incluindo obrigatoriamente os assentos independentes.",
            "C) Maioria qualificada de no mínimo 2/3 de votos de todos os conselheiros ativos.",
            "D) Aprovação prévia por decreto do Governador do Estado antes da votação do CA."
        ],
        correct: 2,
        feedback: "Conforme o Artigo 34, Parágrafo Único, a movimentação do cargo de chefia da Auditoria Interna exige quórum especial de 2/3 dos votos do CA para blindar a independência da função."
    },
    {
        q: "7. Qual a periodicidade estatutária obrigatória definida para a realização de reuniões ordinárias do Conselho de Administração (CA) do Banestes S.A.?",
        options: [
            "A) Semanal, para acompanhamento diário das metas comerciais executivas.",
            "B) Quinzenal, alternando com as câmaras técnicas de riscos.",
            "C) Mensal, reunindo-se ordinariamente uma vez por mês.",
            "D) Trimestral, focada na revisão dos balancetes contábeis integrados."
        ],
        correct: 2,
        feedback: "O Conselho de Administração reúne-se ordinariamente uma vez por mês e, extraordinariamente, sempre que convocado pelo Presidente ou por 1/3 dos membros."
    },
    {
        q: "8. Para que ocorra a instalação regular de uma reunião ordinária ou extraordinária do Conselho de Administração, qual o quórum mínimo de presença exigido?",
        options: [
            "A) Presença de um terço (1/4) dos conselheiros preenchidos.",
            "B) Presença da maioria absoluta de seus conselheiros ativos em exercício.",
            "C) Presença de pelo menos 2 conselheiros independentes e o Diretor-Presidente.",
            "D) Presença de dois terços (2/3) de todo o colegiado homologado."
        ],
        correct: 1,
        feedback: "O Artigo 31 estabelece que o CA se instala de forma regular apenas com a presença física ou telepresencial da maioria absoluta de seus conselheiros em exercício."
    },
    {
        q: "9. De quem é o voto de desempate (qualidade) em caso de impasse nas votações regulares do Conselho de Administração, respeitadas as exceções de quórum de 2/3?",
        options: [
            "A) Do Diretor-Presidente do Banco, na qualidade de membro nato do conselho.",
            "B) Do Conselheiro Independente mais antigo em exercício.",
            "C) Do Presidente do Conselho de Administração.",
            "D) O projeto empacado é rejeitado sumariamente, sem direito a voto de desempate."
        ],
        correct: 2,
        feedback: "O Artigo 32 determina que as decisões do CA são tomadas por maioria simples de votos, cabendo ao Presidente do Conselho o voto de qualidade (desempate) em impasses."
    },
    {
        q: "10. Qual a frequência regular obrigatória estipulada pelo Estatuto Social para a ocorrência de reuniões da Diretoria Colegiada (COLED)?",
        options: [
            "A) Ocorrem de forma ordinária uma vez por semana.",
            "B) Ocorrem quinzenalmente, integradas às diretorias regionais.",
            "C) Ocorrem mensalmente, logo após a liberação dos balancetes contábeis.",
            "D) Reunida de forma livre, dependendo exclusivamente da pauta do Diretor-Presidente."
        ],
        correct: 0,
        feedback: "A Diretoria Colegiada possui dinâmica operacional contínua e, por força do Artigo 40, reúne-se ordinariamente uma vez por semana."
    },
    {
        q: "11. Para que uma deliberação da Diretoria Colegiada (COLED) seja instalada e votada de forma válida, qual o quórum mínimo de presença exigido na mesa?",
        options: [
            "A) Presença de no mínimo 2 diretores executivos.",
            "B) Presença de dois terços (2/3) de toda a diretoria executiva.",
            "C) Presença da maioria absoluta de seus membros ativos em exercício.",
            "D) Presença unânime de todos os diretores operacionais e de negócios."
        ],
        correct: 2,
        feedback: "O Artigo 40 estipula que as sessões deliberativas da COLED exigem o quórum de instalação composto pela maioria absoluta de seus membros ativos."
    },
    {
        q: "12. Como é decidido um empate nas votações operacionais semanais ocorridas no âmbito das reuniões da Diretoria Colegiada (COLED)?",
        options: [
            "A) A matéria é suspensa e enviada para o crivo do Conselho de Administração na próxima sessão.",
            "B) Cabe ao Diretor de Finanças e Relações com Investidores o voto de minerva contábil.",
            "C) O Diretor-Presidente do Banco possui o voto de qualidade para desempate.",
            "D) A pauta é arquivada e exige nova reapresentação técnica em 90 dias."
        ],
        correct: 2,
        feedback: "Para assegurar a fluidez executiva e operacional do banco, o Artigo 41 confere ao Diretor-Presidente o voto de qualidade em caso de empates na COLED."
    },
    {
        q: "13. Qual a frequência mínima de reuniões ordinárias estabelecida pelo Estatuto Social para o Comitê de Auditoria (COAUD) do Banestes S.A.?",
        options: [
            "A) Bimestral, focada na revisão dos fluxos de caixa de risco.",
            "B) No mínimo uma vez por mês.",
            "C) Trimestral, acompanhando o calendário do Conselho Fiscal.",
            "D) Semestral, concentrada nas Notas Explicativas finais de encerramento."
        ],
        correct: 1,
        feedback: "O Artigo 59 do Estatuto determina que o Comitê de Auditoria (COAUD) deve se reunir ordinariamente no mínimo uma vez por mês."
    },
    {
        q: "14. Com qual periodicidade o Comitê de Auditoria (COAUD) realiza reuniões integradas com a COLED, a Auditoria Interna e os Auditores Independentes?",
        options: [
            "A) Mensalmente, integrando todas as frentes de compliance corporativo.",
            "B) Trimestralmente, para exames das demonstrações contábeis e controles internos.",
            "C) Exclusivamente uma vez por ano, antes do envio do relatório anual à AGO.",
            "D) Livre, dependendo da identificação de erros de lançamentos pelo setor de RI."
        ],
        correct: 1,
        feedback: "De acordo com o Artigo 60, o COAUD realiza reuniões integradas de controle com a COLED, auditores internos e externos a cada trimestre."
    },
    {
        q: "15. Qual a periodicidade regular estipulada para as reuniões ordinárias de fiscalização do Conselho Fiscal (CONFI) do Banestes S.A.?",
        options: [
            "A) Mensal, logo após a consolidação dos balancetes do BACEN.",
            "B) Trimestral, reunindo-se ordinariamente uma vez a cada trimestre.",
            "C) Semestral, acompanhando o rito de distribuição de dividendos obrigatórios.",
            "D) Anual, concentrada exclusivamente no primeiro quadrimestre antes da AGO."
        ],
        correct: 1,
        feedback: "O Conselho Fiscal (CONFI) reúne-se ordinariamente uma vez a cada trimestre para examinar os balancetes contábeis e demonstrativos de resultados semestrais (Art. 78)."
    },
    {
        q: "16. No prazo de até quantos dias úteis contados da identificação do ato o COAUD é obrigado a reportar diretamente ao BACEN fraudes relevantes ou erros materiais?",
        options: [
            "A) No prazo máximo de até 24 horas, via canal de reporte eletrônico sigiloso.",
            "B) No prazo máximo de até 3 (três) dias úteis.",
            "C) No prazo máximo de até 5 dias corridos após a ciência do Conselho.",
            "D) No prazo de até 10 dias úteis, acoplado ao parecer técnico da auditoria."
        ],
        correct: 1,
        feedback: "O Artigo 61, Inciso XIX, fixa o prazo estrito e improrrogável de até 3 dias úteis para o COAUD reportar diretamente ao BACEN fraudes graves da diretoria ou erros materiais significativos."
    },
    {
        q: "17. De acordo com o Artigo 75, §4º, qual entidade regional possui o direito estatutário de indicar uma lista tríplice de contadores habilitados para vaga no Conselho Fiscal?",
        options: [
            "A) O Sindicato dos Bancários do Estado do Espírito Santo.",
            "B) A Secretaria de Estado da Fazenda (SEFAZ-ES).",
            "C) O Conselho Regional de Contabilidade do Espírito Santo (CRC-ES).",
            "D) O Comitê de Elegibilidade e Remuneração (COERE) do banco."
        ],
        correct: 2,
        feedback: "O Estatuto (Art. 75, §4º) confere ao CRC-ES a prerrogativa técnica de indicar uma lista tríplice de profissionais para ocupar assento permanente no Conselho Fiscal."
    },
    {
        q: "18. Qual o limite de prazo máximo regulamentar e improrrogável estabelecido pelo Estatuto para que a Ouvidoria do Banestes apresente resposta conclusiva a reclamações?",
        options: [
            "A) Prazo de até 5 dias úteis, vedada qualquer prorrogação de pauta.",
            "B) Prazo máximo de até 10 (dez) dias úteis.",
            "C) Prazo de até 15 dias corridos integrados ao compliance do SFN.",
            "D) Prazo de até 20 dias úteis para alinhamento com a diretoria operacional."
        ],
        correct: 1,
        feedback: "O Artigo 74 estabelece o limite estrito e regulamentar de 10 dias úteis para o envio de resposta conclusiva e definitiva às manifestações dos clientes na Ouvidoria."
    },
    {
        q: "19. Qual o limite estatutário para a remuneração por Participação nos Lucros e Resultados (PLR) a ser distribuída anualmente aos membros da COLED e do CA?",
        options: [
            "A) Limitada a até 5% do lucro líquido real, distribuída de forma linear.",
            "B) O montante total não pode ultrapassar a sua remuneração anual total acumulada nem 10% dos lucros líquidos ajustados (o que for menor).",
            "C) Trava fixa de até 3 salários base anuais, sem vinculação ao lucro líquido ajustado.",
            "D) Não há limites estatutários, dependendo da deliberação soberana anual da AGO de acionistas."
        ],
        correct: 1,
        feedback: "O Artigo 84, III e IV, limita estritamente o ganho variável dos administradores ao menor valor entre a sua renda anual declarada ou o teto de 10% do lucro líquido ajustado."
    },
    {
        q: "20. O que determina a Cláusula de Indenidade do Banestes (Artigo 101) em favor de seus diretores executivos, conselheiros e comitês estatutários?",
        options: [
            "A) Concessão de bônus financeiro extra por assunção de risco comercial de mercado.",
            "B) Imunidade criminal absoluta perante qualquer investigação do Ministério Público.",
            "C) Garantia de defesa técnica jurídica gratuita em processos administrativos e judiciais por atos regulares de gestão praticados no exercício do mandato.",
            "D) Quitação patrimonial automática de eventuais dívidas pessoais dos gestores junto ao banco."
        ],
        correct: 2,
        feedback: "O princípio da indenidade assegura amparo técnico e defesa jurídica gratuita aos gestores por atos legítimos, regulares e de boa-fé conduzidos no cumprimento do mandato (Art. 101)."
    },
    {
        q: "21. Qual a obrigação estatutária de um administrador do Banestes caso seja condenado em definitivo por atos em que se comprove dolo, fraude ou má-fé?",
        options: [
            "A) O prejuízo financeiro total é absorvido pela apólice corporativa do Seguro D&O.",
            "B) Fica obrigado pessoalmente a ressarcir integralmente o Banestes por todas as despesas incorridas com a sua defesa técnica.",
            "C) Sujeita-se apenas a uma suspensão administrativa interna por até 90 dias.",
            "D) O banco assume os custos finais e amortiza o valor como perda operacional ativa."
        ],
        correct: 1,
        feedback: "O Termo de Indenidade protege atos regulares. Se for comprovado dolo, fraude ou má-fé em trânsito julgado, o profissional perde a blindagem e deve reembolsar todas as despesas ao banco (Art. 101)."
    },
    {
        q: "22. De acordo com o Artigo 5º do Estatuto, como se divide a estrutura de ações representativas do Capital Social integralizado do Banestes S.A.?",
        options: [
            "A) 150.000.000 ações ordinárias e 150.000.000 ações preferenciais.",
            "B) 254.106.600 ações ordinárias (ON) e 93.397.546 ações preferenciais (PN).",
            "C) 300.000.000 ações ordinárias e nenhuma ação preferencial por regras de governança.",
            "D) 347.504.146 ações preferenciais nominativas escriturais sem distinção de classes."
        ],
        correct: 1,
        feedback: "O Capital Social de R$ 1,9 bilhão do banco divide-se exatamente em 254.106.600 ações ON (com direito a voto) e 93.397.546 ações PN (sem direito a voto) (Art. 5º)."
    },
    {
        q: "23. Conforme o Artigo 7º do Estatuto Social, qual a participação mínima com direito a voto (ações ordinárias) que o Estado do Espírito Santo deve manter perpetuamente?",
        options: [
            "A) No mínimo 30% do capital social total disperso na bolsa.",
            "B) No mínimo 50% mais uma ação PN sem direito a voto.",
            "C) No mínimo 51% (cinquenta e um por cento) do capital social com direito a voto.",
            "D) Exclusivamente 100% das ações ordinárias, vedada a venda a entes privados."
        ],
        correct: 2,
        feedback: "O Artigo 7º blinda o controle estatal da companhia, determinando que o Estado do Espírito Santo manterá sempre, no mínimo, 51% do capital social votante."
    },
    {
        q: "24. Qual a proporção mínima e máxima fixada pelo Estatuto para o pagamento do dividendo obrigatório aos acionistas sobre o lucro líquido ajustado?",
        options: [
            "A) Pagamento fixo de 25%, sem margem para retenção de lucros ou reservas adicionais.",
            "B) Pagamento de 10%, no mínimo, não podendo exceder a 30% do balanço semestral.",
            "C) Pagamento de 25%, no mínimo, não podendo exceder a 60% do lucro líquido ajustado nos termos do artigo 202 da LSA.",
            "D) Pagamento livre definido anualmente pelo Comitê de Auditoria (COAUD) conforme o caixa."
        ],
        correct: 2,
        feedback: "O Artigo 85, Inciso II, conjugado com a Política de Dividendos [cite: 17], fixa a banda de payout entre o mínimo de 25% e o máximo prudencial de 60% do lucro ajustado[cite: 17]."
    },
    {
        q: "25. Qual o prazo prescritivo estatutário estabelecido para que o acionista reclame dividendos ou JCP colocados à disposição pelo Banestes?",
        options: [
            "A) Prazo de 1 ano, após o qual os valores migram para o tesouro estadual.",
            "B) Prazo de 3 (três) anos contados da data em que tais créditos forem disponibilizados.",
            "C) Prazo de 5 anos, em alinhamento com o código civil de obrigações ordinárias.",
            "D) Os proventos são perpétuos e nunca prescrevem na estrutura escritural do banco."
        ],
        correct: 1,
        feedback: "Alinhado ao Art. 287 da Lei das S.A., o Item 8.1.3 da Política de Dividendos [cite: 40, 41] fixa em 3 anos o prazo prescritivo de proventos não reclamados, que revertem ao caixa do banco[cite: 40]."
    },
    {
        q: "26. Quem detém a competência estatutária privativa para eleger, empossar, avaliar e destituir os integrantes da Diretoria Colegiada (COLED) do Banestes?",
        options: [
            "A) A Assembleia Geral de acionistas em votação secreta na AGO.",
            "B) O Governador do Estado por decreto administrativo de fomento.",
            "C) O Conselho de Administração (CA).",
            "D) O Comitê de Elegibilidade e Remuneração (COERE)."
        ],
        correct: 2,
        feedback: "O Artigo 34, Inciso II, define como atribuição privativa do CA a eleição, dispensa, avaliação de desempenho e fixação de atribuições dos diretores executivos."
    },
    {
        q: "27. Qual a cota mínima permanente de empregados ativos de carreira garantida pelo Estatuto Social na composição da Diretoria Colegiada (COLED)?",
        options: [
            "A) No mínimo 1 empregado estável de provimento efetivo.",
            "B) No mínimo 2 (dois) empregados ativos de carreira de provimento efetivo do quadro de pessoal do Sistema Banestes.",
            "C) Metade exata de todos os diretores executivos com assento preenchido.",
            "D) Não há cotas de carreira, sendo todos os cargos livres para escolha no mercado de capitais."
        ],
        correct: 1,
        feedback: "O Artigo 35, §6º, blinda o conhecimento histórico da instituição garantindo que no mínimo 2 assentos executivos da COLED pertençam a funcionários estáveis da carreira do banco."
    },
    {
        q: "28. No âmbito do Comitê de Auditoria (COAUD), qual o teto máximo de mandatos sucessivos permitidos e qual a respectiva quarentena de afastamento?",
        options: [
            "A) Mandato de 1 ano, permitidas renovações até o limite de 5 anos consecutivos; quarentena de 3 anos para retorno.",
            "B) Mandato de 2 anos, permitida 1 recondução; quarentena de 1 ano fiscal de afastamento.",
            "C) Mandato de 1 ano, sem direito a reconduções; quarentena compulsória de 5 anos.",
            "D) Mandato perpétuo enquanto durar a independência profissional do membro eleito."
        ],
        correct: 0,
        feedback: "O Artigo 51 preceitua que os assentos do COAUD possuem mandatos anuais de 1 ano, limitando as renovações a 5 anos e exigindo quarentena de 3 anos."
    },
    {
        q: "29. Qual a competência do Comitê de Elegibilidade e Remuneração (COERE) diante de novas indicações para cargos eletivos do Banestes S.A.?",
        options: [
            "A) Detém poder de veto comercial sobre contratação de gerentes operacionais de agências.",
            "B) Analisar de forma prévia a idoneidade, compliance técnico e preenchimento de requisitos dos indicados ao CA, COLED e CONFI.",
            "C) Definir de forma isolada os honorários mensais fixos da diretoria bancária.",
            "D) Conduzir as auditorias contábeis trimestrais exigidas pelo Banco Central do Brasil."
        ],
        correct: 1,
        feedback: "O COERE atua como órgão acessório técnico do CA (Art. 72), verificando se as indicações estão livres das vedações políticas e comerciais contidas no Artigo 18."
    },
    {
        q: "30. O Conselho Fiscal (CONFI) do Banco do Estado do Espírito Santo opera sob qual regime regulamentar de funcionamento permanente corporativo?",
        options: [
            "A) Temporário, instalando-se apenas sob requerimento de minoritários na AGO.",
            "B) Permanente, operando como órgão de funcionamento contínuo e obrigatório.",
            "C) Convocado extraordinariamente apenas se o banco registrar prejuízo operacional.",
            "D) Integrado de forma facultativa pela COLED no encerramento de ciclos contábeis."
        ],
        correct: 1,
        feedback: "Diferente de companhias que instalam o conselho fiscal apenas sob demanda, o Banestes S.A. possui por estatuto um Conselho Fiscal de funcionamento permanente (Art. 75)."
    },
    {
        q: "31. Conforme as vedações do Artigo 18, qual das seguintes pessoas está elegível para assumir cargo de administração ou fiscalização no Banestes?",
        options: [
            "A) Membro ativo de mandato no Poder Legislativo Estadual (Deputado em exercício).",
            "B) Dirigente de estrutura decisória local de partido político ativo.",
            "C) Profissional sem vínculo político-partidário ativo e sem conflito comercial nos últimos 36 meses.",
            "D) Coordenador ativo de campanha eleitoral de pleito municipal recente."
        ],
        correct: 2,
        feedback: "O Artigo 18 (Lei das Estatais) bloqueia indicações de agentes políticos e de campanhas eleitorais nos últimos 36 meses, exigindo independência técnica total do candidato."
    },
    {
        q: "32. Qual é a instância soberana máxima do Banestes S.A. encarregada de reformar o Estatuto Social e tomar anualmente as contas dos administradores?",
        options: [
            "A) O Conselho de Administração (CA).",
            "B) A Assembleia Geral de Acionistas (AGO/AGE).",
            "C) O Comitê de Auditoria (COAUD).",
            "D) A Diretoria Colegiada (COLED) sob homologação do Estado."
        ],
        correct: 1,
        feedback: "A Assembleia Geral de acionistas reúne os detentores do capital votante e opera como o órgão soberano da companhia, detendo competências privativas exclusivas (Art. 14)."
    },
    {
        q: "33. Qual o quórum de deliberação qualificado exigido no Conselho de Administração para aprovar propostas corporativas de fusão, cisão ou incorporação?",
        options: [
            "A) Maioria simples dos votos dos conselheiros presentes na mesa de votação.",
            "B) Unanimidade absoluta do colegiado de administração.",
            "C) Maioria qualificada de no mínimo 2/3 de votos dos conselheiros ativos.",
            "D) Votação livre conduzida em conjunto pelas agências regionais de fomento."
        ],
        correct: 2,
        feedback: "Matérias estruturais de reorganização societária são críticas e dependem do quórum qualificado e especial de 2/3 dos integrantes do Conselho de Administração (Art. 34, Parágrafo Único)."
    },
    {
        q: "34. De acordo com o Artigo 1º do Estatuto, qual a natureza jurídica e forma societária é organizado o Banestes S.A.?",
        options: [
            "A) Empresa pública de capital fechado e fins filantrópicos estaduais.",
            "B) Autarquia estadual de direito público administrativo puro.",
            "C) Sociedade anônima aberta, de economia mista, organizada sob forma de banco múltiplo.",
            "D) Cooperativa de crédito mútuo sob controle dos correntistas públicos."
        ],
        correct: 2,
        feedback: "O Artigo 1º define com clareza a identidade do Banestes: uma sociedade anônima de capital aberto e economia mista estruturada no formato competitivo de banco múltiplo."
    },
    {
        q: "35. A quem compete privativamente a aprovação final do Regulamento Interno de Licitações e Contratos exigido para o Banestes S.A.?",
        options: [
            "A) À Diretoria Executiva através de ato de RH bancário.",
            "B) Ao Conselho de Administração (CA).",
            "C) À Assembleia Legislativa do Estado do Espírito Santo (ALES).",
            "D) Ao Comitê de Auditoria (COAUD) em seu parecer ordinário."
        ],
        correct: 1,
        feedback: "Como sociedade de economia mista regida pela Lei nº 13.303/16, o Banestes possui normativo próprio de compras, cujo aprovação e revisão compete privativamente ao CA (Art. 34)."
    },
    {
        q: "36. Qual o tratamento dado pela nova legislação fiscal em 2026 (Lei nº 15.270/2025) a uma distribuição única mensal de dividendos a uma PF de R$ 48.000,00?",
        options: [
            "A) Retenção na fonte de 10% de imposto por regras cumulativas progressivas.",
            "B) Totalmente isento de Imposto de Renda Retido na Fonte (IRRF) por estar abaixo do teto mensal de R$ 50.000,00 por PJ.",
            "C) Tributação de 15% calculada sobre o montante bruto da liquidação.",
            "D) Sujeito à tabela regressiva de investimentos de renda fixa bancária."
        ],
        correct: 1,
        feedback: "O Art. 6º-A da Lei nº 15.270/2025 fixa em R$ 50.000,00 o teto mensal de isenção por PJ para pessoas físicas. Como o valor de R$ 48.000,00 está abaixo do limite, permanece integralmente isento."
    },
    {
        q: "37. Segundo as regras de assinaturas do Artigo 47, o que confere validade e eficácia legal a obrigações comerciais assumidas pelo banco escriturador?",
        options: [
            "A) Assinatura isolada e unilateral de qualquer gerente de agência regional.",
            "B) Assinatura conjunta de dois Diretores Executivos, ou um Diretor e um Procurador, ou dois Procuradores portando poderes específicos conjuntos.",
            "C) Assinatura eletrônica exclusiva do Diretor de Relações com Investidores.",
            "D) O endosso passivo feito em atas pelo Conselho Fiscal (CONFI)."
        ],
        correct: 1,
        feedback: "O Artigo 47 estabelece um rito rígido de controle e governança interna contra fraudes, exigindo perpetuamente assinaturas em dupla para vincular o banco perante terceiros."
    },
    {
        q: "38. No âmbito das reuniões trimestrais ordinárias do Conselho Fiscal (CONFI), qual o quórum de deliberação exigido para a aprovação de seus pareceres técnicos?",
        options: [
            "A) Exige-se aprovação unânime de todos os fiscais preenchidos.",
            "B) As deliberações e pareceres são aprovados por maioria simples de votos dos membros presentes.",
            "C) Quórum especial qualificado de dois terços (2/3) de todo o colegiado fiscal.",
            "D) Depende de validação prévia em auditoria contábil externa da CVM."
        ],
        correct: 1,
        feedback: "O Conselho Fiscal decide de forma colegiada por maioria simples de votos de seus integrantes presentes, registrando as atas em livro próprio da sede (Art. 78)."
    },
    {
        q: "39. Qual é o papel técnico do Comitê de Auditoria (COAUD) em relação às Demonstrações Financeiras e Notas Explicativas semestrais do Banestes?",
        options: [
            "A) Elaborar os balanços contábeis de forma isolada, substituindo o setor contábil.",
            "B) Auditar e aprovar os salários variáveis individuais dos gerentes regionais do banco.",
            "C) Avaliar a fidedignidade, integridade e conformidade regulatória das demonstrações financeiras antes do envio ao CA.",
            "D) Conduzir os processos seletivos e editais de concursos públicos do banco escriturador."
        ],
        correct: 2,
        feedback: "Compete ao COAUD (Art. 61) a supervisão técnica da contabilidade, avaliando se os relatórios semestrais refletem com precisão e fidedignidade a saúde financeira do banco."
    },
    {
        q: "40. O que determina a Política de Dividendos [cite: 40] sobre valores de proventos depositados a acionistas que não possuam conta cadastrada e percam o prazo de 3 anos?",
        options: [
            "A) Os valores são convertidos de forma automática em novas ações preferenciais nominativas.",
            "B) Os proventos não reclamados prescrevem em 3 anos e revertem de forma definitiva e integral em favor do caixa ordinário do Banestes S.A. [cite: 40]",
            "C) São repassados ao fundo de previdência pessoal da Fundação BANESES.",
            "D) Ficam guardados indefinidamente em uma conta judicial bloqueada no Banco Central."
        ],
        correct: 1,
        feedback: "A Política de Dividendos [cite: 40], alinhada ao Artigo 85 (§5º) do Estatuto e à LSA [cite: 41], dita a prescrição trienal dos proventos esquecidos, com reversão definitiva ao caixa do banco[cite: 40]."
    },
    {
        q: "41. Qual a função estatutária integrada das ações preferenciais (PN) em relação ao reembolso de capital em caso de eventual liquidação do banco?",
        options: [
            "A) Sofrem rateio regressivo após a quitação total das ações ordinárias do bloco.",
            "B) Gozam de prioridade no reembolso do capital em igualdade de condições com as ordinárias na divisão de lucros.",
            "C) Não possuem direito a reembolso por regras de economia mista comercial.",
            "D) O reembolso é convertido compulsoriamente em títulos de dívida pública do Estado."
        ],
        correct: 1,
        feedback: "O Artigo 5º, §2º do Estatuto confere privilégio patrimonial às ações preferenciais (PN), assegurando-lhes prioridade no reembolso de capital em liquidações societárias."
    },
    {
        q: "42. Conforme o Artigo 1º, Parágrafo Único, do Estatuto Social, qual é a meta da função social e do fomento corporativo do Banestes S.A.?",
        options: [
            "A) Maximizar lucros sem qualquer vinculação ao desenvolvimento regional estadual.",
            "B) Gerar valor corporativo sustentável, contribuindo para o desenvolvimento econômico do Espírito Santo, fomento local e democratização do crédito.",
            "C) Operar exclusivamente como braço de repasses de subsídios públicos não reembolsáveis.",
            "D) Financiar projetos de infraestrutura federal fora do território capixaba."
        ],
        correct: 1,
        feedback: "O Estatuto (Art. 1º, P.U.) amarra a operação comercial do banco ao fomento econômico capixaba, exigindo responsabilidade e valor corporativo sustentável regional."
    },
    {
        q: "43. Qual o limite de mandatos consecutivos permitidos para a investidura de um conselheiro eleito no Conselho de Administração do Banestes S.A.?",
        options: [
            "A) Mandato de 2 anos, permitida apenas 1 única recondução sucessiva.",
            "B) Mandato unificado de 2 anos, permitindo-se até 3 reconduções consecutivas.",
            "C) Mandato de 1 ano, permitindo-se reconduções livres sem travas de compliance.",
            "D) Mandato único de 4 anos, vedada qualquer forma de reeleição contínua."
        ],
        correct: 1,
        feedback: "O Artigo 26 estipula que a composição do CA opera com mandatos bienais de 2 anos, limitando as reconduções sucessivas ao teto de até 3 vezes."
    },
    {
        q: "44. Qual dos seguintes membros NÃO é um membro nato ou obrigatório na composição do Conselho de Administração (CA), segundo o Art. 28?",
        options: [
            "A) O Diretor-Presidente em exercício da Diretoria Colegiada.",
            "B) O Presidente em exercício do Conselho de Administração.",
            "C) O representante eleito diretamente pelos empregados ativos.",
            "D) O representante indicado pela Fundação BANESES de Seguridade."
        ],
        correct: 1, 
        feedback: "Pegadinha clássica de concurso! O Diretor-Presidente, o representante da Fund. BANESES e o representante dos empregados são assentos fixos/obrigatórios (Art. 28). Já o Presidente do CA é eleito pelo colegiado e é expressamente proibido acumular essa função com a de Diretor-Presidente do Banco (§3º)."
    },
    {
        q: "45. Conforme o Item 7.1 da Política de Dividendos, os JCP intermediários semestrais (junho/dezembro) devem ser pagos em até quantos dias?",
        options: [
            "A) Em até trinta dias úteis após a homologação formal.",
            "B) Em até trinta dias corridos após a declaração do CA.",
            "C) Em até sessenta dias corridos após o fechamento do PL.",
            "D) Em até sessenta dias úteis após a validação da AGO."
        ],
        correct: 1, 
        feedback: "Muita atenção aos prazos! A Política de Dividendos fala literalmente em 'até 30 dias após serem declarados pelo Conselho de Administração'. Em direito corporativo e regulamentos de RI, quando o texto cita apenas 'dias', refere-se a dias corridos, e não úteis."
    },
    {
        q: "46. Sob o rito do Art. 6º-A da Lei nº 15.270/2025, o recálculo cumulativo mensal de IRRF sobre dividendos de grande porte é acionado se:",
        options: [
            "A) O acionista recebe mais de um pagamento no mesmo mês.",
            "B) O dividendo obrigatório ultrapassa o teto de 60% do PL.",
            "C) A distribuição semestral ocorre antes da auditoria do CA.",
            "D) O investidor estrangeiro retém mais de 15% do valor bruto."
        ],
        correct: 0, 
        feedback: "Cuidado com a interpretação! O § 2º do Art. 6º-A estabelece que se houver mais de um pagamento ou crédito de dividendos no mesmo mês, realizado pela mesma PJ à mesma pessoa física, o IRRF deve ser recalculado considerando o total consolidado do mês."
    },
    {
        q: "47. Compete privativamente à Diretoria Colegiada (COLED) deliberar sobre qual das seguintes matérias de gestão, segundo o Artigo 43?",
        options: [
            "A) A contratação e destituição da firma de Auditoria Independente.",
            "B) A nomeação e a dispensa do Gerente de Auditoria Interna do Banco.",
            "C) A homologação da Carta Anual de Políticas Públicas e Metas do Banco.",
            "D) A abertura, a transferência ou o fechamento de filiais e agências."
        ],
        correct: 3, 
        feedback: "Inversão de competência clássica! As alternativas A, B e C são competências exclusivas e privativas do Conselho de Administração (CA), exigindo inclusive quórum qualificado de 2/3. A gestão de agências e filiais é alçada puramente executiva da COLED."
    },
    {
        q: "48. Conforme o Artigo 74 do Estatuto, o prazo estrito de resposta conclusiva da Ouvidoria do Banestes a reclamações de clientes é de:",
        options: [
            "A) Até dez dias corridos a partir do protocolo.",
            "B) Até dez dias úteis a partir do recebimento.",
            "C) Até vinte dias corridos após a triagem de riscos.",
            "D) Até vinte dias úteis após o reporte do COAUD."
        ],
        correct: 1, 
        feedback: "Não caia na pegadinha dos dias corridos! O Artigo 74 deixa claro que o prazo limite e inflexível para a resposta final da Ouvidoria é de 10 dias úteis, limitando atrasos regulamentares perante o BACEN."
    },
    {
        q: "49. Qual o prazo regulamentar estipulado para o pagamento de dividendos ordinários declarados pelo Banestes, contado de sua homologação pública?",
        options: [
            "A) No prazo limite de até 30 dias corridos pelo setor de RI.",
            "B) No prazo limite de até 60 dias da data em que for aprovado[cite: 21].",
            "C) No prazo máximo de 90 dias úteis integrados ao balanço.",
            "D) Liquidado apenas após o encerramento do trimestre civil subsequente."
        ],
        correct: 1,
        feedback: "O Item 4.1 da Política de Dividendos [cite: 21] determina expressamente que o dividendo deve ficar à disposição dos acionistas em até 60 dias da data de aprovação."
    },
    {
        q: "50. Como se decide um empate nas deliberações ordinárias ocorridas no âmbito do Conselho Fiscal (CONFI) do Banestes S.A.?",
        options: [
            "A) A pauta empacada é suspensa e enviada diretamente para a AGO anual.",
            "B) O fiscal mais idoso na função profere o voto de minerva contábil.",
            "C) A matéria é decidida por maioria simples, e em caso de empate definitivo, a pauta é considerada rejeitada por falta de consenso majoritário.",
            "D) O Diretor de Riscos do banco intervém com peso duplo de voto."
        ],
        correct: 2,
        feedback: "O Conselho Fiscal decide por maioria simples de seus membros presentes (Art. 78). Diferente do CA e da COLED, o estatuto não prevê voto de qualidade (desempate) para o CONFI, sendo o empate sinônimo de não aprovação da matéria."
    },
    {
        q: "51. Qual o total de Capital Social integralizado registrado no Artigo 5º do Estatuto do Banco do Estado do Espírito Santo?",
        options: [
            "A) Um bilhão e duzentos milhões de reais.",
            "B) Um bilhão e quinhentos milhões de reais.",
            "C) Um bilhão e novecentos milhões de reais.",
            "D) Dois bilhões e duzentos milhões de reais."
        ],
        correct: 2,
        feedback: "O Artigo 5º do Estatuto estabelece que o Capital Social integralizado do Banestes S.A. é de R$ 1.900.000.000,00."
    },
    {
        q: "52. No rito contábil do Banestes, as ações mantidas em tesouraria sofrem qual ajuste para fins de cálculo de dedutibilidade de JCP em 2026?",
        options: [
            "A) São somadas integralmente ao Patrimônio Líquido com peso dobrado.",
            "B) Devem ser obrigatoriamente deduzidas do Patrimônio Líquido elegível (Lei 14.789/23).",
            "C) Permanecem neutras, não afetando os limites fiscais de dedutibilidade.",
            "D) São liquidadas de forma compulsória no encerramento de cada trimestre."
        ],
        correct: 1,
        feedback: "Seguindo os limites estritos da Lei nº 14.789/2023, as ações em tesouraria de emissão própria reduzem a base patrimonial real e devem ser excluídas da taxa TJLP."
    },
    {
        q: "53. Para que ocorra a instalação formal das reuniões do Comitê de Auditoria (COAUD), qual o quórum de presença exigido pelo Estatuto?",
        options: [
            "A) Presença isolada e unilateral de seu Coordenador técnico.",
            "B) Presença da maioria absoluta de seus membros eleitos.",
            "C) Presença de dois terços (2/3) de todo o colegiado técnico.",
            "D) Abertura livre com qualquer volume de membros independentes."
        ],
        correct: 1,
        feedback: "O Artigo 59 dita que as reuniões do COAUD são abertas e instaladas regularmente apenas sob a presença verificada da maioria absoluta de seus integrantes."
    },
    {
        q: "54. Quem detém legitimidade e alçada estatutária para convocar extraordinariamente reuniões do Conselho de Administração (CA)?",
        options: [
            "A) Qualquer acionista detentor de no mínimo 1% das ações PN.",
            "B) O Presidente do CA, ou por solicitação de no mínimo um terço (1/3) de seus integrantes ativos.",
            "C) Exclusivamente o Diretor de Riscos e Controles Internos do banco.",
            "D) O Gerente de Auditoria Interna diante de quebras contábeis."
        ],
        correct: 1,
        feedback: "As reuniões extraordinárias do CA são disparadas por convocação de seu Presidente ou mediante requerimento assinado por no mínimo 1/3 do colegiado (Art. 31)."
    },
    {
        q: "55. Qual das condutas eleitorais ou políticas listadas abaixo gera inelegibilidade e bloqueio para cargos diretivos no Banestes (Artigo 18)?",
        options: [
            "A) Ser filiado passivo a partido político sem cargo de direção ativa.",
            "B) Atuação em estrutura decisória de partido político ou em coordenação de campanha eleitoral nos últimos 36 meses.",
            "C) Ter parentesco em quarto grau com funcionários estáveis do banco.",
            "D) Exercer atividades técnicas de consultoria contábil privada local."
        ],
        correct: 1,
        feedback: "O Artigo 18 consolida a Lei das Estatais, exigindo quarentena impeditiva absoluta de 36 meses para profissionais com atuação em cúpula partidária ou campanhas recentes."
    },
    {
        q: "56. É permitido ao Banestes S.A. realizar distribuições mensais antecipadas de proventos aos seus investidores de mercado?",
        options: [
            "A) Não, o estatuto veda distribuições com frequência inferior à semestral.",
            "B) Sim, a sistemática de JCP Mensais é autorizada pela COLED sob o aval do CA[cite: 19].",
            "C) Sim, mas apenas para acionistas controladores detentores de mais de 10%.",
            "D) Permitido apenas sob a forma de dividendos isentos e sem limites."
        ],
        correct: 1,
        feedback: "O Item 6 da Política de Dividendos [cite: 31, 32] institui e regulamenta a distribuição programada de JCP Mensais, conferindo forte previsibilidade de fluxo à base de acionistas."
    },
    {
        q: "57. Caso ocorra vaga definitiva por renúncia no Conselho de Administração, como se dá o preenchimento do assento vago até a próxima Assembleia Geral?",
        options: [
            "A) O assento permanece vago de forma compulsória, reduzindo o quórum.",
            "B) Os conselheiros remanescentes nomearão um substituto temporário até a AGO subsequente.",
            "C) O cargo é preenchido de forma imediata por decreto do Governador.",
            "D) É convocada obrigatoriamente uma AGE de minoritários em 30 dias."
        ],
        correct: 1,
        feedback: "O Artigo 27 estabelece o rito de cooptação: o próprio CA elege um substituto provisório para manter as atividades do conselho até a eleição formal na Assembleia seguinte."
    },
    {
        q: "58. Qual lei federal fundamenta a organização jurídica e os limites contábeis do dividendo mínimo obrigatório fixado no estatuto do Banestes?",
        options: [
            "A) Lei Federal nº 4.595 de 31.12.1964 (Lei Bancária).",
            "B) Lei Federal nº 6.404 de 15.12.1976 (Lei das Sociedades por Ações - LSA).",
            "C) Lei Federal nº 13.303 de 30.06.2016 (Lei das Estatais).",
            "D) Lei Federal nº 9.249 de 26.12.1995 (Lei do JCP)."
        ],
        correct: 1,
        feedback: "O direito ao dividendo mínimo obrigatório e as regras de ajuste de balanço contábil em sociedades anônimas abertas baseiam-se no Artigo 202 da Lei das S.A. (Lei nº 6.404/76)[cite: 7, 17]."
    },
    {
        q: "59. O montante de lucros destinados semestralmente ao fundo de Reserva Legal do banco não pode ultrapassar qual limite em relação ao capital social?",
        options: [
            "A) Não pode ultrapassar 10% do capital subscrito ordinário.",
            "B) Não pode ultrapassar 20% do capital social integralizado.",
            "C) Limitado a até 50% das reservas de lucros operacionais totais.",
            "D) Não possui limites por se tratar de conta de proteção bancária."
        ],
        correct: 1,
        feedback: "O teto de acúmulo da Reserva Legal é fixado em 20% do Capital Social (Art. 85, I). Atingido esse patamar, cessa a obrigatoriedade de retenção dos 5% do lucro líquido."
    },
    {
        q: "60. Qual a alíquota de imposto de renda incidente sobre os dividendos recebidos por pessoa física em 2026, caso o valor mensal seja de R$ 30.000,00?",
        options: [
            "A) Alíquota fixa de 15% retida na fonte pela corretora pagadora.",
            "B) Totalmente isento de Imposto de Renda Retido na Fonte (IRRF).",
            "C) Alíquota progressiva variando entre 7,5% e 27,5% na declaração anual.",
            "D) Alíquota de 10% cobrada de forma regressiva por regras de bolsa."
        ],
        correct: 1,
        feedback: "Mantendo a regra histórica de isenção para o varejo, os dividendos pagos a pessoas físicas continuam isentos se mantidos abaixo do teto mensal de R$ 50 mil da Lei nº 15.270/2025."
    },
    {
        q: "61. As ações ordinárias (ON) emitidas pelo Banestes S.A. conferem quais direitos essenciais aos seus portadores?",
        options: [
            "A) Prioridade no reembolso de capital, mas sem direito a voto.",
            "B) Direito de voto pleno e unitário nas Assembleias Gerais e tag-along de 100%.",
            "C) Rendimento fixo garantido independente de lucro real apurado.",
            "D) Direito exclusivo de vetar a entrada de novos acionistas minoritários."
        ],
        correct: 1,
        feedback: "As ações ordinárias (ON) são os ativos votantes do banco, conferindo 1 voto por ação e participação ativa nas deliberações e eleições da governança (Art. 5º)."
    },
    {
        q: "62. O que estabelece o regimento de governança do Banestes S.A. sobre a concessão de empréstimos a seus diretores executivos ou conselheiros?",
        options: [
            "A) Permitida livremente, com taxas idênticas às praticadas no mercado.",
            "B) É vedada de forma absoluta a concessão de crédito a administradores.",
            "C) Permitida apenas se aprovada em auditoria integrada pelo COAUD.",
            "D) Alçada livre limitada a até 3 vezes os honorários anuais fixados."
        ],
        correct: 1,
        feedback: "Seguindo as regras de governança do SFN e o Art. 34 do estatuto, é expressamente vedado conceder empréstimos ou adiantamentos a membros de seus próprios órgãos de administração."
    },
    {
        q: "63. Qual o prazo limite que o Conselho Fiscal (CONFI) possui para analisar as demonstrações contábeis e emitir seu parecer antes da AGO?",
        options: [
            "A) Até 10 dias antes da data de realização da assembleia geral.",
            "B) Até 30 dias após o fechamento contábil do respectivo período.",
            "C) No rito de até 20 dias da disponibilização dos documentos contábeis.",
            "D) Prazo livre definido em conjunto com a auditoria independente externa."
        ],
        correct: 0,
        feedback: "Para assegurar o acesso prévio dos acionistas às análises fiscais, a Lei das S.A. e o regimento do CONFI impõem o teto de até 10 dias antes da AGO para a entrega do parecer."
    },
    {
        q: "64. Caso o Ouvidor Geral do Banestes venha a falhar reiteradamente em suas funções, a destituição de seu cargo compete a qual órgão?",
        options: [
            "A) À Diretoria Colegiada, por ato executivo de RH bancário.",
            "B) Ao Conselho de Administração (CA), de forma privativa.",
            "C) Ao Comitê de Elegibilidade e Remuneração (COERE).",
            "D) À Assembleia Geral por meio de votação aberta de acionistas."
        ],
        correct: 1,
        feedback: "A nomeação, avaliação e eventual destituição do Ouvidor Geral do banco é matéria de competência exclusiva e privativa do Conselho de Administração (Art. 34)."
    },
    {
        q: "65. Qual o teto máximo permitido de ações preferenciais (PN) em relação ao total do capital social emissível pelo Banestes S.A.?",
        options: [
            "A) Até 25% do total de ações representativas emitidas.",
            "B) Até 50% (metade) do total das ações representativas do capital social.",
            "C) Não há limites estatutários, dependendo da necessidade de caixa.",
            "D) Limite fixado em até um terço (1/3) das ações ordinárias em bolsa."
        ],
        correct: 1,
        feedback: "Em estrita consonância com a Lei das S.A., o Banestes pode emitir ações preferenciais sem direito a voto até o limite máximo de 50% do capital social total do banco."
    },
    {
        q: "66. Qual o quórum de deliberação qualificado exigido no CA do Banestes para aprovar propostas de incorporação, fusão ou cisão societária?",
        options: [
            "A) Maioria simples dos votos dos conselheiros presentes na sessão.",
            "B) Unanimidade do conselho de administração corporativa.",
            "C) Maioria qualificada de no mínimo 2/3 de votos dos conselheiros ativos.",
            "D) Votação livre conduzida pelo comitê consultivo da Fundação."
        ],
        correct: 2,
        feedback: "Operações de reorganização societária são críticas e dependem do quórum qualificado e especial de 2/3 dos integrantes do Conselho de Administração (Art. 34, Parágrafo Único)."
    },
    {
        q: "67. Quem assina a ata de reuniões e responde pela condução das deliberações ocorridas no âmbito do Comitê de Auditoria (COAUD)?",
        options: [
            "A) O Diretor de Relações com Investidores e Finanças.",
            "B) O Coordenador do COAUD, eleito pelo colegiado entre seus membros.",
            "C) O Gerente da Auditoria Interna do banco de forma isolada.",
            "D) O Presidente do Conselho de Administração em sessões integradas."
        ],
        correct: 1,
        feedback: "O Artigo 55 preconiza que os membros do COAUD elegerão, entre seus integrantes independentes, um Coordenador para chefiar os trabalhos e assinar as atas."
    },
    {
        q: "68. Em qual órgão corporativo do Banestes é compulsória a presença de pelo menos um membro técnico com notório saber em contabilidade e auditoria?",
        options: [
            "A) Diretoria Operacional Executiva de crédito.",
            "B) Comitê de Auditoria (COAUD).",
            "C) Conselho de Administração (CA).",
            "D) Comitê de Elegibilidade e Remuneração (COERE)."
        ],
        correct: 1,
        feedback: "Para assegurar a capacidade de revisão contábil das demonstrações financeiras do banco, o Artigo 54 (§1º) obriga que pelo menos 1 membro do COAUD detenha conhecimento contábil."
    },
    {
        q: "69. Se um acionista não tiver conta corrente cadastrada no banco escriturador e não resgatar seus proventos em 3 anos, o saldo sofre qual destino?",
        options: [
            "A) Convertido automaticamente em novas ações preferenciais escriturais.",
            "B) Prescreve e reverte de forma definitiva e integral ao caixa do banco.",
            "C) É transferido para as contas de previdência da Fundação BANESES.",
            "D) Fica retido indefinidamente em conta bloqueada no Banco Central."
        ],
        correct: 1,
        feedback: "A Política de Dividendos (Item 8.1.3) [cite: 40], em linha com a LSA [cite: 41], dita a prescrição trienal dos proventos esquecidos, com reversão definitiva ao caixa do banco[cite: 40]."
    },
    {
        q: "70. A quem compete estatutariamente manifestar-se fundamentadamente e emitir parecer sobre Ofertas Públicas de Aquisição de ações (OPA) contra o banco?",
        options: [
            "A) À Diretoria Colegiada (COLED) através de nota técnica de RI.",
            "B) Ao Conselho de Administração (CA).",
            "C) Ao Comitê de Auditoria (COAUD) em seu relatório integrado.",
            "D) Ao Conselho Fiscal (CONFI) em parecer aos minoritários."
        ],
        correct: 1,
        feedback: "O Artigo 34, Inciso XLI, encarrega formalmente o CA de analisar, emitir parecer fundamentado e defender o interesse social da companhia diante de propostas de OPA."
    },
    {
        q: "71. Qual o total de ações ordinárias (ON) com direito a voto que compõem a estrutura de capital do Banestes, conforme o Artigo 5º?",
        options: [
            "A) 93.397.546 ações ordinárias nominativas.",
            "B) 254.106.600 ações ordinárias (ON) com direito a voto.",
            "C) 347.504.146 ações ordinárias nominativas escriturais.",
            "D) 500.000.000 ações ordinárias sem divisões de classes."
        ],
        correct: 1,
        feedback: "A estrutura de capital do banco possui 254.106.600 ações ordinárias (ON) que conferem o direito político de um voto por ação nas deliberações (Art. 5º)."
    },
    {
        q: "72. Qual diretor executivo possui a atribuição estatutária de reportar e responder pela divulgação de informações financeiras à CVM e ao mercado?",
        options: [
            "A) O Diretor-Presidente do Banco de forma isolada.",
            "B) O Diretor de Finanças e Relações com Investidores (DRI).",
            "C) O Diretor de Riscos e Controles Internos da pasta.",
            "D) O Coordenador de Auditoria Contábil do comitê técnico."
        ],
        correct: 1,
        feedback: "A cadeira executiva de Finanças acumula a função técnica e legal de Diretor de Relações com Investidores (DRI), respondendo civilmente perante a CVM (Art. 36)."
    },
    {
        q: "73. Qual o quórum de instalação exigido para as reuniões semanais da Diretoria Colegiada (COLED) deliberar de forma regular?",
        options: [
            "A) Presença de no mínimo dois diretores quaisquer da pasta.",
            "B) Presença da maioria absoluta de seus diretores executivos em exercício.",
            "C) Unanimidade de toda a diretoria executiva preenchida na mesa.",
            "D) Instalação livre com qualquer volume de diretores operacionais."
        ],
        correct: 1,
        feedback: "Nos termos do Artigo 40, as sessões deliberativas semanais da COLED dependem obrigatoriamente do quórum de instalação composto pela maioria absoluta de seus diretores."
    },
    {
        q: "74. O Comitê de Remuneração e Elegibilidade (COERE) opera sob qual perfil obrigatório de segregação de funções em sua composição?",
        options: [
            "A) Todos os membros devem ser diretores executivos ativos da COLED.",
            "B) Pelo menos um de seus integrantes não pode ser administrador (diretor ou conselheiro) do banco.",
            "C) Composto exclusivamente por auditores externos homologados pela CVM.",
            "D) Vagas de livre escolha preenchidas de forma direta pelas agências."
        ],
        correct: 1,
        feedback: "Para assegurar a transparência e evitar potenciais conflitos de interesse na análise de elegibilidade de cargos, o Artigo 65 exige que no mínimo 1 integrante seja externo à gestão."
    },
    {
        q: "75. O Conselho Fiscal (CONFI) do Banco do Estado do Espírito Santo opera sob qual regime regulamentar de funcionamento corporativo?",
        options: [
            "A) Funciona temporariamente, sendo convocado apenas sob pauta na AGO.",
            "B) Funciona em caráter permanente, atuando de forma contínua e obrigatória.",
            "C) Instalado de forma excepcional se ocorrer prejuízo no balanço.",
            "D) Convocado livremente a critério do comitê da Fundação."
        ],
        correct: 1,
        feedback: "Por força do Artigo 75 do Estatuto Social consolidado, o Conselho Fiscal do Banestes S.A. possui funcionamento permanente como pilar de governança."
    },
    {
        q: "76. Qual das frentes políticas listadas abaixo gera inelegibilidade e bloqueio imediato para investidura em cargos no Banestes (Artigo 18)?",
        options: [
            "A) Ser filiado passivo a partido político sem cargo de direção ativa.",
            "B) Atuação em estrutura decisória de partido político ou em coordenação de campanha eleitoral nos últimos 36 meses.",
            "C) Ter parentesco em quarto grau com funcionários estáveis de carreira.",
            "D) Exercer atividades técnicas de assessoria contábil privada local."
        ],
        correct: 1,
        feedback: "O Artigo 18 transpõe os filtros éticos da Lei das Estatais, exigindo quarentena impeditiva de 36 meses para profissionais com atuação em cúpula partidária ou campanhas."
    },
    {
        q: "77. Qual instância detém a atribuição estatutária de aprovar propostas de aumentos de capital que superem as metas de limite de capital autorizado?",
        options: [
            "A) O Conselho de Administração, por votação sob quórum de 2/3.",
            "B) A Assembleia Geral de Acionistas (AGO/AGE).",
            "C) A Diretoria Colegiada sob homologação por decreto do Governador.",
            "D) O Comitê de Auditoria (COAUD) em seu parecer de riscos."
        ],
        correct: 1,
        feedback: "Qualquer expansão de capital social que demande alteração de limite estatutário autorizado foge da alçada do CA e exige aprovação soberana da Assembleia de acionistas (Art. 14)."
    },
    {
        q: "78. Qual o quórum de deliberação qualificado especial exigido no CA do Banestes para aprovar fusões, cisões ou a incorporação societária?",
        options: [
            "A) Maioria simples dos votos de todos os conselheiros presentes na sessão.",
            "B) Unanimidade do colegiado de administração corporativa.",
            "C) Maioria qualificada de no mínimo 2/3 de votos dos conselheiros ativos.",
            "D) Votação livre definida em conjunto pelas agências regionais."
        ],
        correct: 2,
        feedback: "Decisões de reorganização societária (incorporação/cisão/fusão) exigem crivo e quórum especial qualificado de 2/3 do Conselho de Administração (Art. 34, Parágrafo Único)."
    },
    {
        q: "79. De acordo com o Artigo 1º do Estatuto, qual a natureza jurídica e forma societária do Banestes S.A.?",
        options: [
            "A) Empresa pública estadual de capital fechado e fins de fomento.",
            "B) Sociedade anônima aberta, de economia mista, organizada sob a forma de banco múltiplo.",
            "C) Autarquia estadual de direito público subordinada à SEFAZ-ES.",
            "D) Cooperativa mista de crédito fechado sob controle de servidores."
        ],
        correct: 1,
        feedback: "O Artigo 1º conceitua o banco: uma sociedade anônima de capital aberto e economia mista estruturada no formato competitivo de banco múltiplo."
    },
    {
        q: "80. Quem detém a alçada de competência privativa para a aprovação final do Regulamento Interno de Licitações e Contratos exigido para o Banestes S.A.?",
        options: [
            "A) À Diretoria Colegiada (COLED) através de sua assessoria de contratos.",
            "B) Ao Conselho de Administração (CA).",
            "C) À Assembleia Legislativa do Estado do Espírito Santo (ALES).",
            "D) Ao Comitê de Auditoria (COAUD) em seu relatório de controles internos."
        ],
        correct: 1,
        feedback: "Como sociedade de economia mista sob a Lei das Estatais, o Banestes possui normativo próprio de contratações, cabendo ao CA a aprovação e revisão técnica privativa (Art. 34)."
    },
    {
        q: "81. Qual o tratamento fiscal dado pela Lei nº 15.270/2025 a um crédito mensal individual de dividendos a uma pessoa física no valor consolidado de R$ 55.000,00?",
        options: [
            "A) Isenção total e perene mantida por se tratar de distribuição de lucros.",
            "B) Retenção na fonte (IRRF) à alíquota de 10% calculada sobre o VALOR TOTAL mensal pago, vedadas deduções.",
            "C) Retenção de 15% incidente exclusivamente sobre a parcela que exceder R$ 50 mil.",
            "D) Alíquota progressiva variando entre 7,5% e 27,5% apurada no ano."
        ],
        correct: 1,
        feedback: "A Lei nº 15.270/2025 (Art. 6º-A) estipulou retenção na fonte de 10% de IRRF sobre o valor total mensal caso o recebimento acumulado por PF supere o teto isento de R$ 50 mil."
    },
    {
        q: "82. No âmbito da Política de Dividendos[cite: 38], como se processa a liquidação financeira de proventos de ações custodiadas nas plataformas da bolsa?",
        options: [
            "A) Creditados em conta Banestes de forma individual por ordem de RI.",
            "B) Realizado diretamente à Bolsa por meio da Central Depositária da B3, que se incumbirá de repassá-los aos acionistas através das Corretoras[cite: 38].",
            "C) Retidos sob custódia na tesouraria central por um prazo de 120 dias.",
            "D) Convertidos em bônus automáticos de subscrição de ações PN."
        ],
        correct: 1,
        feedback: "O Item 8.1.1 da política [cite: 38] determina o trâmite padrão de mercado para os ativos de bolsa: repasse centralizado à clearing da B3 para distribuição via corretoras[cite: 38]."
    },
    {
        q: "83. No âmbito do cálculo de dedutibilidade fiscal do JCP pelo Banestes em 2026, as ações de emissão própria mantidas em tesouraria sofrem qual tratamento contábil obrigatório?",
        options: [
            "A) São adicionadas ao Patrimônio Líquido com peso dobrado.",
            "B) Devem ser obrigatoriamente deduzidas da apuração do Patrimônio Líquido elegível para fins de dedução (Lei 14.789/23).",
            "C) Permanecem neutras, não afetando os limites de dedutibilidade.",
            "D) São canceladas automaticamente no encerramento de cada trimestre."
        ],
        correct: 1,
        feedback: "Por força da Lei nº 14.789/2023, as ações em tesouraria reduzem o PL real e devem ser excluídas do cômputo patrimonial da taxa TJLP para dedução fiscal de JCP."
    },
    {
        q: "84. Qual o quórum de deliberação qualificado especial exigido no Conselho de Administração para aprovar a modificação estrutural do apetite a riscos contido no banco?",
        options: [
            "A) Maioria simples dos votos de todos os conselheiros presentes.",
            "B) Unanimidade do colegiado de administração corporativa bancária.",
            "C) Maioria qualificada de no mínimo 2/3 de votos dos conselheiros ativos.",
            "D) Aval unânime em separado emitido pelo Comitê de Elegibilidade (COERE)."
        ],
        correct: 2,
        feedback: "Decisões sensíveis sobre políticas integradas e gestão de riscos exigem o quórum qualificado e especial de 2/3 do CA para sua plena convalidação corporativa (Art. 34)."
    },
    {
        q: "85. Qual órgão corporativo do Banestes S.A. detém a competência privativa de eleger, empossar, avaliar e destituir os integrantes do Comitê de Auditoria (COAUD)?",
        options: [
            "A) A Assembleia Geral de acionistas em votação secreta ordinária.",
            "B) O Conselho de Administração (CA).",
            "C) A Diretoria Colegiada (COLED) por meio de ato executivo integrado de RH.",
            "D) O Comitê de Elegibilidade e Remuneração (COERE) em seu parecer."
        ],
        correct: 1,
        feedback: "O Comitê de Auditoria opera como órgão de assessoramento direto ao Conselho de Administração. Portanto, sua escolha, manutenção e destituição competem privativamente ao CA (Art. 34)."
    },
    {
        q: "86. A quem compete estatutariamente dar cumprimento fiel e executar as diretrizes gerais de negócios e o plano de longo prazo aprovados pelo Conselho de Administração?",
        options: [
            "A) Ao Comitê de Remuneração e Elegibilidade (COERE) através de metas.",
            "B) À Diretoria Colegiada (COLED), atuando como braço executivo de gestão.",
            "C) O Conselho Fiscal (CONFI) em suas auditorias trimestrais.",
            "D) Exclusivamente à empresa de auditoria independente externa."
        ],
        correct: 1,
        feedback: "Enquanto o CA define o direcionamento estratégico, a Diretoria Colegiada (COLED) detém a atribuição estatutária de executar, gerir e fazer cumprir as diretrizes comerciais diárias do banco (Art. 43)."
    },
    {
        q: "87. Caso ocorra uma controvérsia de interpretação contábil societária entre o Conselho Fiscal (CONFI) e a Diretoria Executiva sobre o balanço, qual órgão detém a soberania final de julgamento?",
        options: [
            "A) O Comitê de Auditoria (COAUD) através de parecer vinculante.",
            "B) A Assembleia Geral de acionistas, após a apresentação dos pareceres.",
            "C) O Banco Central do Brasil através de sua assessoria regional.",
            "D) O Conselho Regional de Contabilidade (CRC-ES) por regras profissionais."
        ],
        correct: 1,
        feedback: "A Assembleia Geral de acionistas é a instância soberana máxima da corporação. Diante de impasses contábeis ou relatórios divergentes da administração e conselhos, cabe aos acionistas julgar e aprovar as contas (Art. 14)."
    },
    {
        q: "88. De acordo com o Artigo 5º do Estatuto, as ações preferenciais (PN) emitidas pelo Banestes confiram qual tipo de prerrogativa política nas Assembleias?",
        options: [
            "A) Direito de voto pleno e unitário em igualdade com as ordinárias ON.",
            "B) Não conferem direito de voto, mas gozam de privilégios patrimoniais e tag-along de 100%.",
            "C) Direito de voto limitado às pautas de aprovação de salários.",
            "D) Direito de vetar fusões societárias caso representem mais de 10%."
        ],
        correct: 1,
        feedback: "As ações preferenciais (PN) abrem mão do direito político de voto em troca de privilégios financeiros e proteções patrimoniais, como tag-along de 100% fixado no estatuto (Art. 5º)."
    },
    {
        q: "89. Qual o prazo limite fixado para o cumprimento da quarentena de afastamento de um conselheiro do CA que tenha atingido o teto de 3 reconduções sucessivas?",
        options: [
            "A) Interstício e afastamento compulsório por 6 meses civis.",
            "B) Interstício e afastamento total por 1 ano fiscal contábil.",
            "C) Interstício e afastamento total e obrigatório por 2 anos.",
            "D) Interstício de quarentena de 3 anos de afastamento total."
        ],
        correct: 2,
        feedback: "Atingido o teto de 3 reeleições consecutivas, o conselheiro cumpre quarentena compulsória de 2 anos de afastamento total da administração do banco antes de nova indicação (Art. 26)."
    },
    {
        q: "90. Qual órgão detém a competência estatutária privativa para declarar e pagar dividendos intermediários baseados em reservas acumuladas, após aval do CA?",
        options: [
            "A) A Diretoria Colegiada (COLED).",
            "B) O Comitê de Auditoria (COAUD) em seu parecer integrado.",
            "C) O Conselho Fiscal (CONFI) em ata trimestral.",
            "D) O Comitê de Remuneração e Elegibilidade (COERE)."
        ],
        correct: 0,
        feedback: "O Artigo 85 e o Item 3.1 da Política de Dividendos [cite: 19] autorizam a Diretoria Colegiada (COLED), munida de aprovação do CA, a declarar e pagar dividendos intercalares."
    },
    {
        q: "91. No âmbito das reuniões ordinárias do Conselho Fiscal (CONFI), qual a vaga cativa permanente assegurada ao CRC-ES por regulamento estatutário?",
        options: [
            "A) Indicação de um auditor externo para chefiar a Auditoria Interna.",
            "B) Apresentação de lista tríplice de contadores habilitados para eleição.",
            "C) Assento permanente com direito a veto duplo em pautas de payout.",
            "D) Indicação do Coordenador do Comitê de Auditoria (COAUD)."
        ],
        correct: 1,
        feedback: "O Artigo 75 (§4º) dita o rito: o CRC-ES possui o direito de indicar lista tríplice de profissionais para ocupar uma vaga técnica de fiscalização no Conselho Fiscal."
    },
    {
        q: "92. Qual é a alíquota fixa de retenção de IRRF que incide na fonte sobre o montante bruto de dividendos recebidos por pessoa física em 2026, caso o valor acumulado no mês seja de R$ 65.000,00?",
        options: [
            "A) Incidência de 15% sobre o valor total do repasse ordinário.",
            "B) Incidência fixa de 10% de IRRF sobre o valor TOTAL mensal recebido (Art. 6º-A da Lei nº 15.270/2025).",
            "C) Isenção mantida para os primeiros R$ 50.000,00 e incidência de 27,5% apenas sobre os excessos.",
            "D) Isenção total com base na consolidação de lucros de S.A. antigas."
        ],
        correct: 1,
        feedback: "Diferente das regras tradicionais de faixas progressivas, o Art. 6º-A da Lei nº 15.270/2025 preceitua que, ultrapassado o teto de R$ 50 mil no mês, a alíquota de 10% incide sobre o **valor total** (bruto acumulado) entregue, sem deduções."
    },
    {
        q: "93. As reuniões do Conselho Fiscal (CONFI) necessitam de qual quórum mínimo de instalação para deliberar e registrar atas válidas?",
        options: [
            "A) Presença da maioria absoluta de seus membros efetivos ativos.",
            "B) Presença física unânime de todos os fiscais preenchidos em AGO.",
            "C) Instala-se regularmente com qualquer número de fiscais presentes na sede.",
            "D) Presença obrigatória de pelo menos 2 contadores indicados pelo CRC."
        ],
        correct: 0,
        feedback: "Para conferir validade legal aos seus pareceres de contas e atas de fiscalização trimestrais, as reuniões do CONFI exigem o quórum de instalação composto pela maioria absoluta de seus membros (Art. 78)."
    },
    {
        q: "94. Quem detém a alçada e legitimidade estatutária para convocar extraordinariamente reuniões da Diretoria Colegiada (COLED)?",
        options: [
            "A) O Diretor de Relações com Investidores e Finanças de forma isolada.",
            "B) O Diretor-Presidente do Banco, ou por proposta escrita de no mínimo 2 diretores executivos.",
            "C) O Gerente da Auditoria Interna diante de riscos de compliance.",
            "D) O Coordenador do Comitê de Auditoria (COAUD) por meio de atas."
        ],
        correct: 1,
        feedback: "As reuniões extraordinárias da COLED operam sob convocação de seu Diretor-Presidente ou por requerimento em bloco assinado por pelo menos 2 diretores (Art. 40)."
    },
    {
        q: "95. Qual das frentes de impedimentos comerciais citados abaixo bloqueia de forma absoluta a investidura de qualquer conselheiro no CA ou CONFI (Artigo 18)?",
        options: [
            "A) Possuir parentesco em quarto grau com acionistas minoritários ordinários.",
            "B) Manter situação ativa de insolvência civil, falência decretada ou ser devedor com restrição ativa no Sistema Banestes.",
            "C) Exercer atividades voluntárias não remuneradas em fundações locais.",
            "D) Atuar como perito assistente técnico contábil em comarcas rurais."
        ],
        correct: 1,
        feedback: "O Artigo 18 preserva a solidez e higidez do banco de economia mista, bloqueando de forma absoluta a investidura de insolventes, falidos ou devedores inadimplentes com o próprio Sistema Banestes."
    },
    {
        q: "96. Qual instância detém a competência privativa para aprovar o orçamento anual de despesas operacionais e de investimentos (plano de capital) do banco?",
        options: [
            "A) A Diretoria Colegiada (COLED).",
            "B) O Conselho de Administração (CA).",
            "C) A Assembleia Geral de Acionistas (AGO/AGE).",
            "D) O Comitê de Auditoria (COAUD) em seu parecer de riscos."
        ],
        correct: 1,
        feedback: "O Artigo 34 confere ao Conselho de Administração (CA) a competência privativa de aprovar o orçamento anual e monitorar sua execução executiva pela COLED."
    },
    {
        q: "97. O que determina a Política de Dividendos [cite: 40] sobre os proventos de dividendos e JCP esquecidos e não reclamados por acionistas após o prazo de 3 anos?",
        options: [
            "A) São convertidos de forma compulsória em novas ações ordinárias escriturais.",
            "B) Prescrevem em 3 anos e revertem de forma definitiva e integral em favor do caixa ordinário do Banestes S.A. [cite: 40]",
            "C) São transferidos para o fundo de previdência complementar da Fundação BANESES.",
            "D) Ficam guardados indefinidamente em conta de depósito judicial no Banco Central."
        ],
        correct: 1,
        feedback: "A Política de Dividendos [cite: 40] e o Estatuto dão cumprimento à LSA [cite: 41]: proventos não reclamados em 3 anos prescrevem, retornando ao caixa da companhia[cite: 40]."
    },
    {
        q: "98. Qual o quórum de deliberação qualificado especial exigido no Conselho de Administração para aprovar a Carta Anual de Políticas Públicas e Metas integradas com o Estado?",
        options: [
            "A) Maioria simples dos votos de todos os conselheiros presentes na sessão.",
            "B) Unanimidade do colegiado de administração corporativa.",
            "C) Maioria qualificada de no mínimo 2/3 de votos dos conselheiros ativos.",
            "D) Votação livre definida em conjunto com o Comitê de Elegibilidade."
        ],
        correct: 2,
        feedback: "A homologação da Carta de Metas com o ente controlador público é matéria crítica de governança e exige o quórum qualificado de 2/3 dos conselheiros do CA (Art. 34, Parágrafo Único)."
    },
    {
        q: "99. De quem é a competência estatutária privativa para julgar, avaliar o desempenho anual e fixar a política de remuneração recebida individualmente por cada diretor da COLED?",
        options: [
            "A) Da Assembleia Geral de acionistas de forma direta em AGO.",
            "B) O Conselho de Administração (CA).",
            "C) O Comitê de Elegibilidade e Remuneração (COERE).",
            "D) Do Diretor-Presidente do Banco de forma isolada."
        ],
        correct: 1,
        feedback: "O CA é o órgão supervisor imediato da diretoria. O Artigo 34 confere-lhe a atribuição privativa de conduzir as avaliações de desempenho e ratear a remuneração individual da COLED."
    },
    {
        q: "100. Caso ocorra vacância definitiva abrupta no cargo de Ouvidor Geral do Banco, qual órgão detém a competência estatutária para eleger e empossar o novo titular?",
        options: [
            "A) A Diretoria Colegiada (COLED) através de ato integrado de RH bancário.",
            "B) O Conselho de Administração (CA).",
            "C) A Assembleia Geral de acionistas em votação aberta de minoritários.",
            "D) O Governador do Estado por indicação direta e decreto de fomento."
        ],
        correct: 1,
        feedback: "A Ouvidoria Geral atua como pilar técnico de proteção e compliance. O Artigo 34 confere privativamente ao CA a alçada para eleger, empossar ou destituir o Ouvidor Geral do banco."
    },
  {
    q: "101. De acordo com o Art. 2º do Estatuto Social, qual é o prazo de duração estabelecido para as atividades do Banestes S.A.?",
    options: [
      "A) 50 anos, renováveis por igual período em Assembleia Geral.",
      "B) Vinculado ao prazo dos contratos de concessão estaduais.",
      "C) Prazo de duração indeterminado.",
      "D) 99 anos, conforme o padrão aplicável às S.A. de economia mista sob controle governamental."
    ],
    correct: 2,
    feedback: "Pegadinha comum em provas sobre o Estatuto: apesar de ser uma S.A. de economia mista e banco do Estado, o Artigo 2º determina expressamente que o prazo de duração da Sociedade é indeterminado."
  },
  {
    q: "102. O Banestes S.A. possui autorização estatutária para captar recursos por meio da emissão de debêntures para compor seu fluxo de caixa?",
    options: [
      "A) Sim, mediante autorização privativa do Conselho de Administração com quórum de 2/3.",
      "B) Sim, mas com limite atrelado a 50% do patrimônio de referência do banco.",
      "C) Exclusivamente debêntures conversíveis em ações preferenciais nominativas.",
      "D) Não. O Estatuto veda de forma expressa a emissão de debêntures e partes beneficiárias."
    ],
    correct: 3,
    feedback: "O Artigo 6º, Parágrafo Quarto, do Estatuto Social estabelece uma regra de bloqueio textual: 'É vedado ao Banco emitir debêntures ou partes beneficiárias'."
  },
  {
    q: "103. O Artigo 5º do Estatuto define as vantagens inerentes às ações preferenciais (PN). Qual é o privilégio patrimonial exato garantido a essas ações em caso de liquidação do Banco?",
    options: [
      "A) Prioridade no reembolso de capital, acrescido de um prêmio de 10% sobre as ordinárias.",
      "B) Prioridade no reembolso de capital, sem a incidência de qualquer prêmio.",
      "C) Conversão obrigatória em títulos da dívida pública estadual com deságio pré-fixado.",
      "D) Reembolso estritamente igualitário, sem prioridade de fila em relação aos minoritários de ações ON."
    ],
    correct: 1,
    feedback: "A alínea 'a' do Parágrafo Segundo do Art. 5º assegura às ações preferenciais a 'prioridade no reembolso de capital em caso de liquidação do Banco, sem prêmio'. A menção 'com prêmio' é uma clássica casca de banana."
  },
  {
    q: "104. Sobre o limite do Capital Autorizado, quantas novas ações podem ser emitidas pelo Conselho de Administração de forma ágil, independentemente de reforma estatutária (Art. 6º)?",
    options: [
      "A) Até 50.000.000 de ações exclusivamente ordinárias (ON).",
      "B) Qualquer quantidade livre de teto, desde que mantenha o Estado com 51% dos votos.",
      "C) Até 80.000.000 de novas ações, sendo elas ordinárias ou preferenciais.",
      "D) O Banestes atua com capital social estático; qualquer nova emissão exige reforma em Assembleia Geral."
    ],
    correct: 2,
    feedback: "O Artigo 6º traz celeridade à captação, autorizando o aumento do capital social independentemente de reforma do estatuto no limite de até mais 80.000.000 de ações (ON ou PN), mediante mera deliberação do CA."
  },
  {
    q: "105. Pela sistemática da Instrução Normativa BCB nº 272/2022 refletida na Política de Dividendos do Banestes, qual o tratamento contábil obrigatório dado aos dividendos intermediários declarados APÓS o período contábil?",
    options: [
      "A) São creditados no mês subsequente, sem necessidade de aprovação posterior.",
      "B) Devem ser retidos em contas de liquidação bloqueadas administradas pela B3 S.A.",
      "C) Devem ser mantidos travados no patrimônio líquido do Banco enquanto não ocorrer a aprovação soberana pela Assembleia Geral Ordinária.",
      "D) São compulsoriamente convertidos em Juros sobre Capital Próprio."
    ],
    correct: 2,
    feedback: "Conforme o item 4.1 da Política de Dividendos, para observar normas rigorosas do Banco Central, o dividendo declarado após o período contábil fica 'represado' no PL do Banco até receber validação na Assembleia Geral Ordinária (AGO)."
  },
  {
    q: "106. No que diz respeito à política de cotas afirmativas de diversidade (Art. 17, §4º), o que acontece quando o banco atinge a exigência de reserva de 30% das vagas para mulheres no Conselho de Administração?",
    options: [
      "A) A reserva de vagas femininas extingue-se automaticamente na eleição subsequente.",
      "B) O limite é expandido para 50% de paridade de gênero corporativa total.",
      "C) Pelo menos 30% desse quantitativo feminino passa a ser obrigatoriamente preenchido de forma interseccional por mulheres negras ou com deficiência.",
      "D) As vagas excedentes são repassadas a representantes do sindicato dos bancários."
    ],
    correct: 2,
    feedback: "Regra sofisticada de interseccionalidade no Estatuto: atingidos os 30% de reserva feminina geral, aplica-se a subcota que exige que pelo menos 30% desta fatia específica seja preenchida por mulheres negras ou com deficiência (PCD)."
  },
  {
    q: "107. Qual é o grau de parentesco máximo que atrai a regra de impedimento absoluto para a indicação de uma pessoa a cargos na Administração da Sociedade e de empresas subsidiárias (Art. 18)?",
    options: [
      "A) Proibição de parentesco apenas até o 1º grau (pais e filhos).",
      "B) Proibição de parentesco até o 2º grau (irmãos e avós).",
      "C) Proibição estendida de parentesco colateral ou afim até o 3º (terceiro) grau.",
      "D) O impedimento só ocorre para cônjuges, não alcançando parentes de sangue no mercado financeiro."
    ],
    correct: 2,
    feedback: "Para bloquear esquemas de nepotismo, o Artigo 18, Inciso X, proíbe firmemente a indicação de sócio, ascendente, descendente, parente colateral ou afim até o rigoroso teto do 3º grau em relação aos atuais membros da Administração."
  },
  {
    q: "108. Nas auditorias em que o Comitê de Auditoria (COAUD) ou a área de Compliance identifiquem suspeita de envolvimento do próprio Diretor-Presidente do banco em irregularidades, o reporte deve ser direcionado a quem (Art. 35, §2º)?",
    options: [
      "A) Diretamente ao Governador do Estado do Espírito Santo em até 24 horas.",
      "B) Ao Conselho de Administração (CA).",
      "C) À Assembleia Legislativa do Estado do Espírito Santo (ALES).",
      "D) À Ouvidoria Geral para rito ordinário de processo administrativo."
    ],
    correct: 1,
    feedback: "Se o Chefe do Executivo falha, o compliance sobe um degrau. O Artigo 35, §2º, determina que as áreas de controles devem pular a Diretoria e reportar as suspeitas contra o Diretor-Presidente diretamente ao Conselho de Administração (via COAUD)."
  },
  {
    q: "109. O cargo executivo de Diretor de Relações com Investidores e de Finanças (DIRIF) está sujeito a qual das seguintes flexibilidades estatutárias perante a Diretoria Colegiada?",
    options: [
      "A) Trata-se do único cargo executivo que pode ser ocupado por quem não possui graduação na área financeira.",
      "B) Deve ser obrigatoriamente preenchido por um conselheiro independente cooptado do CA.",
      "C) Possui a prerrogativa legal de ser acumulado pelo mesmo executivo que ocupa o cargo de Diretor-Presidente da Sociedade.",
      "D) Ocupa assento com poder de veto permanente sobre as políticas de crédito estaduais."
    ],
    correct: 2,
    feedback: "Atenção: Enquanto o Presidente do CA não pode ser o Diretor-Presidente do Banco, o Parágrafo 1º do Art. 35 faculta que o cargo de DRI/Finanças (DIRIF) seja cumulado com as funções do próprio Diretor-Presidente da Sociedade."
  },
  {
    q: "110. É de conhecimento notório que as ações abertas ao mercado operam sob o formato puramente digital/eletrônico. Onde ficam depositadas oficialmente as ações escriturais que formam o capital do Banestes S.A. (Art. 8º)?",
    options: [
      "A) Mantidas custodiadas nos cofres centrais do próprio Banestes.",
      "B) Centralizadas em conta de depósito unificada do Banco Central (BACEN).",
      "C) Retidas na Secretaria de Fazenda do Espírito Santo (SEFAZ-ES) para segurança das emissões mistas.",
      "D) Mantidas em conta de depósito em instituição financeira externa escrituradora, designada pelo CA (Itaú Unibanco S.A.)."
    ],
    correct: 3,
    feedback: "Outra excelente pegadinha: apesar de atuar como instituição bancária, o Banestes não escritura as próprias ações no mercado de capitais; o Artigo 8º especifica que elas ficam mantidas em conta de depósito no Itaú Unibanco S.A."
  },
  {
    q: "111. Qual o destino contábil estrito e obrigatório a ser aplicado caso o balanço semestral/anual do Banestes S.A. registre prejuízo no encerramento de um exercício (Art. 83)?",
    options: [
      "A) Diluição emergencial e sumária do capital social com emissão de novas PNs sem direito de preferência.",
      "B) Absorção sequencial e obrigatória primeiramente por lucros acumulados, seguida das reservas de lucros e, por último, sacando o saldo da reserva legal.",
      "C) Acionamento da cláusula de socorro financeiro ao cofre direto do tesouro estadual capixaba.",
      "D) Congelamento provisório em conta de resultados futuros (ativo intangível) para compensação linear por dez anos."
    ],
    correct: 1,
    feedback: "A hierarquia de amortização de rombos bancários obedece regras fixas da LSA (Art. 83): prejuízos consumirão primeiro a 'gordura' dos lucros acumulados, descendo para as reservas de lucros comuns e atingindo a reserva legal em último caso."
  },
  {
    q: "112. Sobre as reservas estatutárias de lucro (Art. 86), a retenção de caixa para a 'Reserva de Equalização de Dividendos' está ancorada a qual teto máximo patrimonial do banco?",
    options: [
      "A) Teto travado em no máximo 20% do valor do capital social da empresa.",
      "B) Teto expansionista de até 80% do patrimônio de referência listado na B3.",
      "C) Limitada a exatos 50% dos lucros líquidos retidos dos últimos três exercícios.",
      "D) Não possui limites por ser conta flexível de garantia ao dividendo mínimo."
    ],
    correct: 0,
    feedback: "Conforme dispõe o Artigo 86, §1º, a Reserva para Equalização de Dividendos (criada para garantir caixa em anos fracos) não é infinita e possui teto rígido atrelado a 20% do valor do capital social subscrito do banco."
  },
  {
    q: "113. Pela regra de formação do Art. 85, a cada exercício o Banestes retém obrigatoriamente 5% de seu lucro para turbinar a Reserva Legal do banco. A partir de que momento essa alocação de 5% cessa a sua obrigatoriedade perante o mercado?",
    options: [
      "A) Quando a soma simples de todo o patrimônio tangível cobrir 50% do capital ordinário flutuante.",
      "B) Quando o Estado do Espírito Santo publicar diretriz isentando o provisionamento para turbinar o repasse de PLR.",
      "C) Quando o saldo da própria Reserva Legal isolada bater o piso fixo de R$ 1 bilhão de reais de retenção contábil.",
      "D) Quando o saldo somado da reserva legal e das demais reservas de capital atingir ou exceder 30% do capital social do Banestes."
    ],
    correct: 3,
    feedback: "O Estatuto (Art. 85, I) acompanha os preceitos clássicos da Lei das S.A., criando uma margem de escape: cessa-se a obrigatoriedade da mordida de 5% quando a musculatura contábil (Reservas Legais + Reservas de Capital) extrapola a marca de 30% do Capital Social."
  },
  {
    q: "114. Caso ocorra uma transação particular onde um player do mercado adquira o Poder de Controle do banco retirando-o do Estado, a que medida extrema o novo gestor estará legalmente obrigado para estabilizar a bolsa de valores nos 6 meses seguintes (Art. 90, III)?",
    options: [
      "A) A cancelar sumariamente e realizar buy-out dos minoritários remanescentes com 10% de prêmio via OPA obrigatória.",
      "B) A pagar multas rescisórias automáticas de PLR vitalícia e estabilidade de dez anos a todo corpo técnico de empregados bancários.",
      "C) A recompor ativamente, no pregão, o percentual de livre negociação (Free Float) para no mínimo 25% de ações ativas em circulação.",
      "D) A converter à força até 100% das ações preferenciais sem voto (PN) em papéis majoritários de peso político (ON)."
    ],
    correct: 2,
    feedback: "Regra protetiva para evitar secagem da liquidez e saída predatória do Nível 1 de Governança B3: o novo Controlador tem o dever de injetar ou diluir mercado para recompor o free float obrigatório de 25% em até seis meses da aquisição (Art. 90, III)."
  },
  {
    q: "115. Os chamados 'membros externos' do Conselho de Administração (independentes indicados ou dos minoritários) possuem a prerrogativa estatutária inusual de realizar reuniões operacionais do colegiado de portas fechadas para outros diretores?",
    options: [
      "A) Sim. O Estatuto lhes assegura sessões exclusivas e restritas sem a presença de Diretores-Presidentes ou conselheiros vinculados, garantindo autonomia na discussão de temas que gerem risco de constrangimento.",
      "B) Não. Como empresa estatal, qualquer reunião de diretiva ou do conselho é obrigatoriamente aberta a todos os conselheiros para resguardar a probidade administrativa.",
      "C) Sim, porém restritas exclusivamente ao ato processual de aprovação secreta de contas no mês de dezembro de cada balanço referencial.",
      "D) Não. Conselheiro ausente da presença do Diretor-Presidente perde automaticamente a pauta para deliberação na sessão ordinária subsequente."
    ],
    correct: 0,
    feedback: "Ferramenta de blindagem corporativa! O Artigo 33 (Parágrafo Oitavo) garante autonomia de controle, permitindo que os membros externos realizem sessões de alinhamento em ambiente isolado e livre de constrangimentos da alta gerência vinculada."
  },
  {
    q: "116. Sobre os prazos para pagamento de Juros sobre o Capital Próprio (JCP Mensais), qual o marco fatal do calendário para a Diretoria apresentar publicamente as métricas e fixar a tabela de fluxos dos pagamentos ao mercado?",
    options: [
      "A) A tabela deve vir acoplada obrigatoriamente ao Formulário de Referência entregue nos primeiros 5 dias úteis de março de cada ciclo.",
      "B) A tabela com os valores fixados ao acionista deverá ser divulgada pela companhia até o dia 30 de janeiro de cada ano.",
      "C) Fica estabelecido o mês de abril, pós-término de auditoria externa sobre a liquidez bancária contábil.",
      "D) Divulgação discricionária livre operando semestre a semestre sem obrigação de antecipação anual completa."
    ],
    correct: 1,
    feedback: "O item 6.2 da Política de Dividendos oferece previsibilidade aos acionistas para os proventos do novo ano: a Diretoria do Banestes crava a divulgação do cronograma total do JCP mensal até o dia 30 de janeiro."
  },
  {
    q: "117. Qual esfera corporativa no organograma do Banestes S.A. define os tetos comerciais de aprovação interna (Valores de Alçada) autorizados para a aquisição ou a venda de bens pertencentes ao ativo circulante e imobilizado (permanente)?",
    options: [
      "A) O comitê de suprimentos e contratos (GEACO) operando de forma monocrática a rotina diária.",
      "B) A Assembleia Geral de Acionistas, mediante votação das planilhas de compra e repasses governamentais.",
      "C) A Diretoria de Riscos através de relatórios e mapeamento semestral de compliance.",
      "D) O Conselho de Administração (CA)."
    ],
    correct: 3,
    feedback: "O controle do cofre pesado e a estipulação dos limites de limite financeiro de poder da Diretoria (Valor de Alçada p/ compras e vendas de ativos) pertencem legalmente à competência do CA, conforme atesta o Artigo 34, Inciso XXIII."
  },
  {
    q: "118. O relatório crítico produzido anualmente pelo 'Comitê de Remuneração e de Elegibilidade' (COERE) após a data-base de dezembro deve permanecer à disposição do BACEN sob guarda da empresa por qual período?",
    options: [
      "A) Prazo de guarda obrigatório atrelado a no mínimo três anos.",
      "B) Apenas pelo ano de prestação das contas subsequente.",
      "C) Prazo contínuo mínimo e documentado de cinco anos.",
      "D) Prescrição decenal de registro corporativo mantido no mínimo por dez anos estritos."
    ],
    correct: 2,
    feedback: "A rastreabilidade dos pagamentos no banco exige arquivos longos. Conforme o Artigo 72 (§1º) do Estatuto, a guarda formal das memórias do Comitê de Remuneração deve permanecer à disposição da autoridade monetária (Bacen) pelo tempo de 5 (cinco) anos."
  },
  {
    q: "119. Como o estatuto veda a cumulação de posições governamentais para limitar trocas de favor, qual o número de conselhos remunerados que um administrador público pode compor de forma simultânea em empresas do Estado?",
    options: [
      "A) O número se restringe estritamente a um cargo, vedada qualquer remuneração acessória de conselhos coligados.",
      "B) É permitida a atuação ativa e cumulativa em até 4 (quatro) comitês e conselhos desde que em estatais de balanços autônomos.",
      "C) Participação remunerada tolerada em no máximo 2 (dois) conselhos, seja de administração ou fiscal, abrangendo economia mista ou públicas locais.",
      "D) Ilimitada legalmente, sob a premissa de que os encontros ocorram após o expediente padrão das empresas."
    ],
    correct: 2,
    feedback: "Tratando as restrições da Lei das Estatais para evitar supersalários acumulados, o Artigo 100 sela o veto formal de atuação técnica e financeira em mais de 2 conselhos diretos de subsidiárias ou matrizes estatais."
  },
  {
    q: "120. Qual a alçada de bloqueio interno da Diretoria Colegiada nas aprovações de 'Transações com Partes Relacionadas' de risco comercial de crédito? A partir de qual ponto o caso exige o voto do Conselho de Administração (Art. 34)?",
    options: [
      "A) Quando os limites tomados superam R$ 5.000.000,00 nos repasses interfinanceiros do Estado.",
      "B) Sempre que a operação abranger taxa fixa em CDI sem amortização progressiva e parcelas moratórias.",
      "C) Quando qualquer empréstimo interno direcionado atingir o piso referencial acima de 0,1% do Patrimônio de Referência - PR do banco.",
      "D) O CA avoca o poder exclusivo em qualquer cifra acima de um salário base da Diretoria da COLED semestral."
    ],
    correct: 2,
    feedback: "A aprovação de liberação de caixa a partes relacionadas atrai risco de compliance elevado; a trava legal prevê que tudo acima da métrica modesta de 0,1% do Patrimônio de Referência escapa das mãos da Diretoria e carece da bênção explícita do Conselho de Administração."
  },
  {
    q: "121. Como é construída na prática financeira a Reserva Estatutária para 'Margem Operacional' do Banestes e a qual teto absoluto ela se subordina (Art. 86)?",
    options: [
      "A) Formada com 25% do lucro residual apurado; limitada ao teto estatutário de 50% do capital social do estado.",
      "B) Formada com recursos flexíveis que podem alcançar até 100% do lucro líquido anual ajustado; ficando legalmente limitada a 80% do valor integral do capital social.",
      "C) Criada exclusivamente sobre valores estornados de PLR dos diretores; e seu limite não pode exceder o patrimônio tangível ativo do último semestre.",
      "D) Formada por até 50% dos dividendos retidos via AGE; limitada perenemente ao teto raso de 20% do capital emitido no ano."
    ],
    correct: 1,
    feedback: "O Art. 86 destrincha o cofre de solidez operacional. Essa reserva 'gigante' ganha estofo por meio da aplicação de até 100% dos lucros ajustados (após distribuir dividendo etc.) e paralisa apenas quando alcança a linha d'água robusta de 80% do Capital Social da Instituição."
  },
  {
    q: "122. Na proteção do tag-along aplicável ao Banestes S.A., em qual posição legal o investidor com ações desprovidas de direito a voto (PN) se resguarda diante da alienação do controle da estatal (OPA)?",
    options: [
      "A) Direito de reter as ações na carteira exigindo dividendos garantidos em caixa com 10% a mais na distribuição de lucros futuros pelo adquirente.",
      "B) Direito líquido e amparado no Nível 1 de inclusão em oferta pública para o resgate vendendo seus papéis pelo valor exato equivalente a 100% do valor da ação ordinária cobrada pelos Controladores (Tag-Along de 100%).",
      "C) Fica totalmente sujeito ao esmagamento legal via fechamento discricionário dos capitais minoritários de ações com prêmio achatado fixado por leilão B3.",
      "D) O acionista de capital sem voto só adquire o direito restrito de repasse comercial pela média da cotação B3 avaliada nos 30 dias que antecedem a negociação de bloco."
    ],
    correct: 1,
    feedback: "O direito protetivo em que pese as PNs é notável no Banestes. O Artigo 5º (§2º, 'c' e §6º) iguala a régua de valor no 'exit event' (saída e alienação de bloco), cobrindo minoritários da classe preferencial com Tag-Along máximo (100% igualitário de preço) diante de vendas governamentais."
  },
  {
    q: "123. A quem pertence o poder executivo final e irrevogável no âmbito interno da companhia para fechar, transferir de endereço, incorporar ao digital ou abrir fisicamente novas Agências ou Postos de Atendimento (Art. 43)?",
    options: [
      "A) Ao Governo do Estado do Espírito Santo através do fundo local de expansão regional.",
      "B) Exclusivamente à Assembleia Geral por alterar impacto geográfico da companhia nos redutos de controle.",
      "C) Ao Conselho de Administração após votação da mesa com quórum qualificado por metas bancárias.",
      "D) Trata-se de atribuição corriqueira de execução operacional privativa do Colegiado da Diretoria (COLED)."
    ],
    correct: 3,
    feedback: "Abertura ou extinção de agências e postos de atendimento são tratadas como atos corriqueiros da gestão administrativa regular. Desse modo, o Artigo 43, Inciso VIII, posiciona a alçada final dessa mobilidade estritamente no crivo ágil da Diretoria Colegiada (COLED)."
  },
  {
    q: "124. Na complexa rotina do Comitê de Auditoria (COAUD) de solicitar suporte a analistas, peritos ou investigadores jurídicos do mercado, o orçamento utilizado advém de qual base?",
    options: [
      "A) Das verbas discricionárias cedidas temporariamente pelo fundo estatutário da Baneses.",
      "B) É exigida uma vaquinha compulsória da COLED ou rateio do colegiado de acionistas para prover isenção ao processo investigativo sigiloso da CVM.",
      "C) O COAUD dispõe de dotação autônoma via orçamento próprio anual alocado especificamente pelo Conselho de Administração para suas consultorias sem burocracia do Executivo.",
      "D) Todos os gastos analíticos demandados devem constar como multas operacionais lançadas contra o Diretor da área averiguada ou julgada nas despesas operacionais da Instituição."
    ],
    correct: 2,
    feedback: "Auditoria sem orçamento é auditoria subordinada. Consequentemente, o Art. 62 sela que o COAUD tem recursos livres aprovados de antemão pelo CA para financiar investigações independentes, permitindo inclusive o aluguel sem percalços de consultores e inteligência técnica independente para varrer o sistema de controles."
  },
  {
    q: "125. De acordo com o Art. 35 do Estatuto do Banestes, o princípio das Três Linhas de Defesa que ancora a solidez e proteção contábil do banco determina que certas atribuições operacionais permaneçam isoladas e proibidas de contato com os formuladores de políticas. Qual exemplo dessa segregação de funções estatutárias está correto?",
    options: [
      "A) As auditorias contábeis devem relatar as ocorrências processuais exclusivamente à mesma equipe que aprova o crédito comercial de grandes contas ativas no governo capixaba.",
      "B) Proibição taxativa e separação incontornável entre as pontas de operações de administração de recursos próprios e o setor de gestão de recursos atrelados a terceiros na instituição.",
      "C) Manutenção das comissões diárias de compliance geridas paralelamente pelos mesmos gerentes das diretorias das plataformas comerciais do aplicativo 'Banestes em sua casa'.",
      "D) Inexistência total de áreas de riscos para a aprovação discricionária de fomento a projetos de infraestrutura agrícola chancelada pelo Banco do Estado de fomento regional (BNDES)."
    ],
    correct: 1,
    feedback: "O §4º do Artigo 35 prescreve três pontos vitais para coibir práticas ilícitas financeiras, entre as quais encontra-se a independência cravada obrigatória e absoluta que separa o setor de 'vendas' das mesas de 'políticas' e afasta a cúpula de manuseio de 'recursos de terceiros' dos caixas com 'recursos próprios'."
  },
  {
    q: "126. A 'Tesouraria' do Banestes é amparada pelo Art. 5º a recomprar do pregão as próprias ações emitidas na Bolsa. Contudo, essa operação possui limitação ou teto estipulado de regimento?",
    options: [
      "A) Só pode atuar após liberação via voto unitário dos conselheiros fiscais com parecer ratificando que tais aquisições anuais servem apenas a alienação de opções a longo prazo aos controladores passivos.",
      "B) É amplamente vedada a atuação agressiva na B3 devido ao viés estatal limitador da Lei das S.A. onde ações preferenciais perdem espaço mercantil nas crises temporárias flutuantes de taxa SELIC.",
      "C) Ocorre livremente mediante aprovação gerencial da Diretoria Executiva desde que resguarde lucros e limite-se as verbas remanescentes nos caixas trimestrais rotativos fixados.",
      "D) A Instituição pode intervir e realizar o buy-back (adquirir suas ações próprias no mercado), mas fica subordinada a exclusiva e obrigatória autorização pelo voto do Conselho de Administração para manutenção técnica ou fim de cancelamento em carteira."
    ],
    correct: 3,
    feedback: "Adquirir ações de si mesmo diminui as cotas no mercado mas também usa dinheiro do caixa. Por conta de impacto na governança, o Artigo 5º, §5º repassa estritamente o poder dessa manobra técnica ('buy-back') de ações do emissor para as mãos criteriosas e plenas do Conselho de Administração."
  },
  {
    q: "127. Como atua a governança perante nomeações da Gerência da Auditoria Interna (Auditor-Chefe), visando protegê-lo de intervenções diretas de diretores avaliados em relatórios da área e blindar as contas?",
    options: [
      "A) Nomeação direta vinculada ao parecer exclusivo subscrito na SEFAZ do Governo do Estado local operando em ciclos de longo preenchimento no conselho regional dos balancetes (BACEN) para afiançar contas governamentais.",
      "B) Fica protegido sob a tutela plena de quórum especial estrito exigindo votação e anuência de pelo menos 2/3 da cúpula pertencente aos membros do Conselho de Administração na validação do posto (Art. 34, P.U.).",
      "C) Funciona sob amparo temporário e indicação da própria Assembleia de Minoritários em separado limitando as atuações conjuntas no crivo da Ouvidoria.",
      "D) Estabilidade conquistada com prazo integral inalterável estendido ao final do mandato das instâncias e gerências na Diretoria Colegiada sem interferências ativas e intervenção governamental do controlador (ES)."
    ],
    correct: 1,
    feedback: "Quem audita não pode ter medo de quem é auditado. O Estatuto resolve isso no Art. 34: O gerente-chefe da auditoria interna é alocado ou dispensado na cadeira única e exclusivamente pelo Conselho de Administração exigindo o quórum de proteção alta (maioria qualificada de 2/3 da mesa diretiva do conselho)."
  },
  {
    q: "128. O Comitê de Remuneração e Elegibilidade (COERE) deve abrigar uma formação rigorosa com membros que possuam conhecimentos analíticos sólidos e independentes do banco. Entre seus perfis obrigatórios de preenchimento de vaga encontra-se qual restrição ou imposição legal estrita?",
    options: [
      "A) Ao menos um terço (1/3) de seu plenário necessita atuar simultaneamente no comitê de Ouvidoria interna do próprio banco ou na CVM local.",
      "B) Ocupação compulsória das vagas exclusivas e obrigatórias ligadas diretamente aos analistas sênior vinculados na agência comercial contábil em vitórias da B3.",
      "C) Para preservar total integridade nos processos seletivos e análises de salários dos dirigentes corporativos, impõe que pelo menos um (1) desses ocupantes técnicos na equipe avaliadora externa da mesa não integre ativamente a administração bancária local (nem como conselheiro nem como diretor).",
      "D) O grupo precisa possuir na base efetiva os próprios diretores em atividade bancária com histórico gerencial e comissão validada para avalizar currículos idôneos em votação trimestral rotativa do colegiado da agência (CONFI)."
    ],
    correct: 2,
    feedback: "Na intenção do regulamento de combater que apenas diretores avaliem o pagamento e a promoção de diretores, o COERE demanda, no Artigo 65 (§2º), que pelo menos um assento permaneça com membros 'desvinculados' e afastados inteiramente da atual diretoria ou do CA ('outsiders' independentes de mercado livre)."
  },
  {
    q: "129. Para ocupar as cadeiras ativas nos comitês do banco, ou nas posições elevadas da Administração do Conglomerado Estadual, o estatuto (na adoção das vedações do Art. 18) exige o preenchimento de requisitos sobre limitação ou tetos etários máximos fixos aos diretores ou conselheiros da ativa?",
    options: [
      "A) Sim. Fica impedido de forma absoluta a investidura de todos e quaisquer executivos aptos em funções com idades superando o limite legal cravado e de aposentadoria funcional da União travado nas idades limítrofes compulsórias do serviço público de fomento atrelado aos 70 anos em diário estadual da governança bancária capixaba (ALES).",
      "B) Sim. Limita e obstrui a manutenção legal das atividades e revalidações operativas estatutárias limitadas ao teto formal para investiduras aos executivos que registrem e superem marca cronológica travada taxativa fixada pela regulação nos de 75 anos de idade do mercado aberto (CVM).",
      "C) Não. É terminantemente livre e sem barreiras cronológicas. O normativo adota filtros diretos apenas sob a base avaliativa com comprovações sólidas vinculadas ao compliance corporativo em mercado sem impôr ou determinar limites absolutos com teto compulsório baseado unicamente em idades avançadas na investidura da função em mesa.",
      "D) Apenas restrito a idosos e profissionais aptos prestando exames contábeis ou exames corporativos práticos sob o rigor e acompanhamentos da equipe clínica especializada na SUSEP."
    ],
    correct: 2,
    feedback: "Este é um ponto que frequentemente confunde quem estuda regulação pública geral versus estatais mistas listadas na Bolsa: O Banestes (através da lista exaustiva do seu Artigo 18) bloqueia corruptos, parentes e filiados partidários — mas, diferentemente de regras da Constituição para juízes e afins — não estipula idade máxima limítrofe compulsória obrigatória aos administradores corporativos eleitos na B3."
  },
  {
    q: "130. Quem possui o dever e as competências rígidas para revisar o 'Estratégico' e autorizar formalmente o 'Plano de Negócios Anual' contendo diretrizes do ano subsequente (como o famoso 'Guidance' do mercado) do Banestes S.A.?",
    options: [
      "A) Validado ex-post pelo Conselho Fiscal (CONFI) em reunião com os gerentes comerciais após o 1º de janeiro do balanço apurado na Bolsa com aprovações em blocos mensais da diretoria técnica contábil e auditoria unida.",
      "B) Deliberado pela COLED executiva e despachado na AGO com validade anual para balizamentos comerciais dos juros das aplicações financeiras e provisões do ano em pauta regional agrícola dos caixas capixabas rurais de fomento e investimentos governamentais públicos livres.",
      "C) Submetido de forma privativa e validado exclusivamente pela mesa dos Diretores que aprovam a estrutura com autonomia estrita dos orçamentos da pasta até o fechamento bimestral sem dependência governamental ou de acionistas locais com controle dos fundos (Baneses).",
      "D) Aprovado obrigatoriamente sob o crivo central analítico e a deliberação votante do Conselho de Administração com fixação do rito de prazo final datado estritamente e sem prorrogação até a última reunião ordinária ativa da mesa diretiva apurada e listada no ano imediatamente anterior."
    ],
    correct: 3,
    feedback: "Sem planejamento, não há navegação técnica e previsibilidade do banco aos acionistas na B3. Diante dessa realidade, os incisos XXVI e XXVII (do Artigo 34) amarram a obrigação à cúpula do CA de aprovar a rota e orçamento estrito com prazo teto travado rigorosamente até o encerramento do exercício 'anterior'."
  },
  {
    q: "131. Pela estrutura de previsibilidade do banco em sua Política de Dividendos, quando recai o marco temporal com 'Posição de Acionistas' da carteira para apuração legal do pagamento das famosas e conhecidas distribuições antecipadas dos proventos JCP Mensais (Juros Sobre o Capital Próprio) do Banestes na B3?",
    options: [
      "A) Limitado na extração consolidada ao 10º (décimo) dia civil fixado em pregão de abertura no mês fechado com base na variação percentual dos dividendos da CVM.",
      "B) Recai na posse registrada validamente e escriturada nos livros pelo investidor posicionado nas datas fixadas ao final da Assembleia do meio do ano de fechamento contábil e nos juros repassados das aplicações em taxa referenciada SELIC interbancária capixaba apurada em bolsa de ações com capital restrito governamental na praça (B3).",
      "C) Adota a posição fixada base dos beneficiários detentores das ações e cotas preenchidas da base na carteira do primeiro dia útil do calendário civil financeiro do próprio mês com o repasse sendo depositado estritamente na data de abertura do 1º (primeiro) dia útil financeiro de pregão do subsequente mês vigente de crédito em conta.",
      "D) Apuração de beneficiários recai cravada obrigatoriamente nas aprovações anuais do fundo estatutário validados apenas por semestre (junho e dezembro) retidos com trinta dias base de tolerância em prazos legais em atraso da corretora escritural com depósitos via cheques ou conta na praça capixaba."
    ],
    correct: 2,
    feedback: "Item 6.1 da Política: A data 'com' do famoso e pontual 'Banestão' segue um roteiro blindado pelo banco — os investidores beneficiários devem portar a ação na data 'posição' no limite estrito do 1º (primeiro) dia útil apurado daquele mês exato em trâmite; sendo que os recursos (JCP liquidado) serão despejados livremente nos caixas bancários na marca de calendário base do primeiro dia útil do período financeiro mensal 'seguinte'."
  },
  {
    q: "132. Para consolidar as balizas de prazos estatuídos em governança corporativa estadual do Banestes S.A. e controlar a transição ativa de cadeiras, a partir de qual marco e evento o lapso temporal unificado ('Ano de Gestão') de dois anos da Diretoria Executiva (COLED) inicia a contagem e apuração de seu cronograma de atuação técnica de assento bancário (Art. 35)?",
    options: [
      "A) Após publicação direta dos relatórios e demonstrativos de balanço contábil em praças públicas chancelados pelos governadores e editados via portaria na CVM paulista local.",
      "B) A contar em cravados dias a partir da eleição procedida na abertura fixada oficial perante Assembleia das cotas da B3 da sede no Espírito Santo ou em cartórios com procuração livre autônoma e votação majoritária nominal.",
      "C) Com vigência base fixada a partir do transcorrer e validação final oficial da primeira Reunião Ordinária subsequente apurada do Conselho de Administração que ocorre ativamente sempre na sequência obrigatória de posse pós encerramentos das Assembleias Gerais Ordinárias validadas em praça financeira local no primeiro quadrimestre anual do exercício no ES.",
      "D) Iniciado ininterruptamente logo após deliberação unitária isolada da equipe contábil do Baneses que fecha os resultados nas urnas no último dia trinta de dezembro e avalia em sessões fechadas em plenário até os dez dias de fevereiro nos anos bissextos da Bolsa B3 capixaba corporativa listada."
    ],
    correct: 2,
    feedback: "No mercado não pode haver vácuo legal de mando. O Estatuto resolve que a COLED é 'medida' com régua própria estipulada em 'Anos', compreendidos exatamente entre a Primeira reunião subsequente apurada do CA após as Assembleias Gerais que deliberam contas bancárias na praça em cadência."
  },
  {
    q: "133. Qual a métrica obrigatória fixada expressamente no Artigo 5º do Estatuto acerca do volume das distribuições apuradas devidas nos formatos retidos de JCP e de Dividendos aos minoritários das ações sem direito de mando governamental (ações da classe preferencial – PN) frente ao acionista da classe votante e ordinária ON?",
    options: [
      "A) Distribuída com o prêmio padrão financeiro acoplado sob cota com dividendos avaliados historicamente em margem embutida de teto com 10% (dez por cento) excedente à cota majoritária ordinária estadual na apuração e conversão unitária B3.",
      "B) Aportados os repasses a depender discricionariamente base das deliberações em cadência flutuantes cravadas ativamente votadas em sede e submetidas nos trimestres avaliados por votos do CRC capixaba.",
      "C) Atuando como garantia plena estatutária legal, as cotas de classe preferenciais se valem da segurança imposta mantendo a estrita base paritária de Igualdade no recebimento financeiro das repartições apuradas de resultados dos dividendos com repasses exatos na praça B3 perante as classes de papeis ordinárias votantes.",
      "D) Distribuições condicionadas apenas aos resultados estaduais se o teto referencial nas cadernetas atingir lucros operacionais não atrelados à LSA limitados pelas métricas com descontos na conversão diária da cotação local e estadual oficial no Espírito Santo capixaba."
    ],
    correct: 2,
    feedback: "Cuidado: há empresas de Bolsa que pagam 10% de prêmio de lucro nas ações PN para compensar a não-votação em governança e manter valor atrativo nos papeis de mercado. O Banestes, por sua vez e expresso na LSA, adotou por estatuto o tratamento equânime com paridade unitária entre PN e ON na fatia do Lucro."
  },
  {
    q: "134. Nas hipóteses ativas em que haja sobras financeiras decorrentes da venda e alienação estratégica das próprias fatias acionárias no mercado da Bolsa de Valores local, o recurso embolsado pela titularidade do Estado controlador tem prerrogativas de que formato (Art. 7)?",
    options: [
      "A) Congela ativamente no fundo cego patrimonial BNDES e repassadas sem ônus ao consórcio misto do governo federal paulista B3 ativado livre.",
      "B) Extraviados obrigatoriamente por caixa passivo da empresa sendo transferidos aos cofres unitários da federação com a liquidez de balanço e lucros em tesouro no Bacen sem retorno de crédito capixaba corporativo investido em papeis listados B3.",
      "C) Poderão ficar isentos do cofre único via destinação escriturada em reserva técnica passível de aplicação contábil imediata investindo tais capitais ativamente sob subscrição estrita acionária em novos aportes perante o Banco estadual.",
      "D) Utilizados legalmente de forma exclusiva sob as apurações retidas limitando os montantes apurados base repassando os ativos na distribuição paralela isenta de IR e retida em fundo das seguradoras do Icatu e Banseg com liquidez diária do SICOOB capixaba sem taxas bancárias extras cobradas do tesouro."
    ],
    correct: 2,
    feedback: "Segundo o Art. 7 (P. Único), o Estado controlador (Estado do ES) poderá reaplicar pontualmente o saldo remanescente das negociações financeiras de venda dos seus papéis sob conta vinculada para subscrição imediata no próprio caixa de injeção e aumento de capital da casa bancária."
  },
  {
    q: "135. Nas previsões legais trabalhistas consolidadas das S.A. vinculadas e estatutárias listadas sobre a composição da administração, incide ou existe regra que obrigue o depósito extra da verba indenizatória rescisória com multa do índice punitivo pautado em 40% incidentes no Fundo de Garantia ao fim dos mandatos dos Diretores da COLED?",
    options: [
      "A) Sim, depositados de antemão pela seguradora Icatu repassando cotas mensais acopladas na indenização e rescisória obrigatória sem ônus judicial com prazo legal estrito validando a convenção de bancários limitando no mínimo cinco anos contratuais a base B3 local da diretiva bancária local.",
      "B) Empregado efetivo concursado eleito tem acoplado ao seu tempo passivo direito contínuo a repasses ativos dos conselheiros que integram mesas na diretoria com estabilização por dez anos recebendo no total todas as provisões retidas com 40% na extinção e demissão discricionária apurada via comitê no tribunal trabalhista TST sem juros limitadores capixabas estaduais mistos apurados.",
      "C) Não. É claro o comando e previsão que exime no estatuto bancário perante executivos; diretores mantêm os fundos depositados normais durante o mês, contudo sem a liberação punitiva governamental fixando no termo que eles de forma alguma fazem jus a percepção comissionada adicional extra dos valores retidos ou penalização indenizatória e multa percentual avaliada estrita nos encerramentos corporativos temporários.",
      "D) Somente se apurados lucros trimestrais validados nos conselhos acoplados nas comissões com quórum unitário do Sindicato das Instituições com o teto balizado nas remunerações e apurado em juízo de comarcas regionais fixando o rito via decretos de conselheiros de oitava instância fiscal ou executivo no BACEN com isenção ativa cravada em carteiras B3 do mercado misto local de ações."
    ],
    correct: 2,
    feedback: "Sendo gestores estatutários sem vínculo celetista convencional nesse posto de chefia transitório eleito com mandato aprazado contínuo, a diretoria do Banestes mantém repasses de FGTS corriqueiros mas o encerramento do biênio não gera quebra por demissão que suscite a temida penalidade do encargo ativo de 40% da caderneta de garantia."
  },
  {
    q: "136. Diante do crivo contábil legal, os processos operacionais sensíveis de agrupamento ('inplit') ou parcelamento fragmentado de ações emitidas pelo Banestes ('split' e desdobramentos de papeis do emissor na listagem na bolsa capixaba de valores) depende invariavelmente da homologação estrita de quem (Art. 14)?",
    options: [
      "A) Decidida com base de estudos via gerências unidas de TI da COLED com os diretores de crédito independentes aprovados livremente em sessões com atas semanais sigilosas arquivadas nos cartórios regionais para controle e proteção em capital pulverizado sem limites capixabas mistos acionários B3.",
      "B) Repassada a aprovação perene e executada à vontade via resoluções ativas exaradas nas presidências estaduais por ordem ativa do chefe de executivo (Governo ES) com publicações diretas nos fóruns de jornais de Vitória editando as cadernetas sem restrição unitária em balcões abertos.",
      "C) Conduzido sem travas pelo conselho fiscal (CONFI) mediante as assinaturas nominais cravadas em atas trimestrais validadas apenas no fim do ano civil que embasa lucros do fundo Baneses sem perdas nominais acopladas a comitê externo capixaba ou nacional do mercado misto oficial na comissão CVM em prazos curtos avaliados.",
      "D) Trata-se de uma prerrogativa estanque amarrada ao crivo votante e autorização colegiada legal e suprema da 'Assembleia Geral' a quem cabe a competência corporativa privativa na praça deliberativa para ditar agrupamentos operacionais de desdobramentos nos quadros das emissões limitadas do Banco ou das S.A. coligadas B3."
    ],
    correct: 3,
    feedback: "Mexer na quantidade de papeis do acionista em sua custódia e fracionar ou aglomerar os lotes emitidos impacta liquidez direta na ponta e, desse modo, somente os acionistas via quórum magno apurado em praça soberana (Assembleia Geral) possuem a caneta legal perante S.A. listada no BACEN e CVM para promover as bonificações de papeis."
  },
  {
    q: "137. Na estrutura funcional hierárquica e complexa de cargos bancários do Banestes, o banco tem diretrizes rígidas sobre as criações de novas pastas operacionais internas. Caso a gestão decida criar, alterar e aprovar a inserção técnica de novo setor ou ramificações operacionais na empresa no 'nível de Superintendência' estadual, a palavra decisória será atribuída a quem (Art. 34)?",
    options: [
      "A) Diretoria Colegiada com base na equipe autônoma via resolução local da praça.",
      "B) Do Comitê Fiscal limitando repasses atrelados e auditando contas locais unidas via fundação Baneses regional unificada contábil sem perdas estaduais capixabas.",
      "C) Competência estrita fixada e cravada por força de regimento nas mãos dos membros efetivos do 'Conselho de Administração'.",
      "D) Governo capixaba publicando resoluções de cargos em portarias diretas de comissões interbancárias no conselho das associações sindicais abertas e ativas na comissão."
    ],
    correct: 2,
    feedback: "A aprovação do organograma estrutural das diretorias do banco ou a de qualquer repartição técnica em escalões qualificados como nível superior ou atrelado hierarquicamente às instâncias e assentos de 'Superintendências', compete única e soberanamente à pauta deliberada e subscrita pelo CA em reuniões de cúpula corporativa."
  },
  {
    q: "138. Para agilizar os processos comerciais, o estatuto delega a contratação direta nas ruas de operadores atrelados ao título de 'Correspondente no País'. Que instância assume essa agilidade comercial (Art. 39)?",
    options: [
      "A) Conselho Consultivo de mercado com aprovações por quorum fechado e subscrito de maioria absoluta estadual com crivo B3.",
      "B) O Governo Estadual de forma unitária avalizado via portaria chancelada no Diário sem restrição a comissões locais do banco central capixaba apurado em mercado externo misto rural.",
      "C) Comitê Fiscal (CONFI) sem limites contábeis atrelados a agências em capitais vizinhas avalizadas no fórum judicial contábil misto e de controladorias regionais unidas do Bacen da sede operando limites livres anuais.",
      "D) Fica restrito de modo ágil sob a gerência e a égide privativa de subscrição legal acoplada às pastas técnicas pertencentes à gestão diária da Diretoria (COLED)."
    ],
    correct: 3,
    feedback: "Abertura de novos mercados comerciais (contratos de correspondente) é rotina ágil. De forma inteligente, a norma atribui tal aprovação executiva direta sob os mantos das delegações flexíveis e operativas pertencentes à engrenagem estrita dos pares da Diretoria Colegiada bancária (COLED)."
  },
  {
    q: "139. Entre os temas que orbitam o pilar do Conselho de Administração (CA) do Banco misto capixaba, existe um documento base de compliance político subscrito pela empresa estadual nomeado 'Carta Anual da Sociedade'. Em que nível essa aprovação está ancorada (Art. 34)?",
    options: [
      "A) Não exige votação, sendo redigida solitariamente no formato ofício chancelado unitariamente com a presidência única autônoma na Diretoria e publicações estaduais estritas limitadas ao tribunal B3 capixaba de mercado no ES unificado de contas operativas na bolsa passiva governamental local mista de balanços oficiais em sigilo contínuo trimestral sem repasses cravados em atas abertas regionais.",
      "B) O documento sela políticas públicas conjuntas do cofre estadual e carece da votação estrita do Colegiado em pauta crítica acionada com aprovação qualificada que exija cravados 2/3 (dois terços) dos membros ativos pertencentes ao Conselho de Administração no quórum cravado da assembleia regional ativa limitando-se ao estado local sem amarras no BACEN B3 ou em comarcas federais ativas nos trimestres.",
      "C) Aprovada majoritariamente nas cadernetas com validações unitárias anuais pela AGO do Comitê Baneses e auditada sem veto perante a equipe SICOOB estadual validados nas praças locais unificadas de conselheiros rurais apurados na governança com balizas externas de comissões contábeis no ES ou repassadas nas auditorias capixabas mistas sem rito contínuo e trimestral base de assinaturas conjuntas no tribunal.",
      "D) O processo demanda que as assembleias públicas locais com presença livre ativada votem secretamente as políticas em fóruns mistos validados sem a equipe executiva com publicação atestada e acompanhada sem ressalvas na comarca unificada capixaba da justiça de Vitoria e no plenário aberto da assembleia estrita das agências rurais de fomento e economia governamental de caixa federal na comissão bancária B3."
    ],
    correct: 1,
    feedback: "As políticas estatais atreladas aos compromissos cravados da economia e interesse coletivo demandam rigor estatutário (Artigo 34, Inciso XXV e P.Ú). Para afiançar a Carta Anual de objetivos públicos conjuntos da empresa, vigora a chancela rigorosa estipulando crivos protetivos com teto de 2/3 nas reuniões do CA."
  },
  {
    q: "140. Como atua o Estatuto em face das ofertas de lançamentos na 'Subscrição Pública' ou no processo acelerado em vendas diretas na B3 quanto a regra limitadora padrão que estipula as restrições da 'Prioridade no direito de preferência' (Art. 15 e Art. 9)?",
    options: [
      "A) Veda inteiramente e condena as supressões e recuos base em subscrições limitadas e exclui o direito sob restrição sumária e ativa das auditorias externas no conselho estadual atestadas em relatórios sem perdas aos fundos Baneses e SICOOB no rito anual passível de compensações limitadas e juros apurados via tesouro.",
      "B) Fica estabelecida a flexibilidade autorizada nas mãos do CA permitindo livremente as reduções parciais ou supressões de prioridade (exclusão pontual de preferência nos ciclos limitados) na hipótese ativa perante a companhia ofertar suas cotas ou lançamentos diretos listados nas mesas do pregão B3.",
      "C) Jamais se aplicam restrições do direito limitando as alienações sob aprovações prévias e unitárias sem quórum ou veto estipulados via portaria federal no conselho contábil regional capixaba do CRC validando a operação via emissões ativas e juros acumulados nos caixas do BACEN local trimestral na comarca unificada estadual.",
      "D) Fixa prazos estritos baseados na LSA com bloqueios em conselhos garantindo as aplicações cravadas nos cofres do estado sem opções de conversões ou recuo e redução de direitos unitários atrelados nas apurações e validações executivas do Banestes ou de controladas mistas subscritas em relatórios da diretoria do tribunal das instâncias federais contábeis de mercado livre do Brasil."
    ],
    correct: 1,
    feedback: "Instrumento padrão do mercado moderno que facilita as injeções velozes de capitais nas estatais negociadas. O Banestes prevê expressamente sob deliberação do CA a faculdade de diminuir (recuar limite) ou extirpar (excluir) o direito original de preferência garantido nos estatutos quando emitidas e ativadas fatias das captações alocadas no pregão por Subscrição e Lotes B3."
  },
  {
    q: "141. Em relação às prerrogativas e condutas de diligência exigíveis aos conselheiros independentes que operam na ala Fiscal do banco (CONFI), em qual momento da gestão os membros efetivos assumem a obrigação compulsória e inarredável de acusar falhas estruturais, fraudes ou omissões gravíssimas da administração executiva perante a Assembleia ou Conselhos diretivos capixabas (Art. 75)?",
    options: [
      "A) Limitam-se apenas a redigir e encaminhar os dossiês restritos sem divulgações internas remetendo às auditorias regionais ou delegacias unificadas ativas federais mantendo omissões pontuais e arquivamentos contínuos de praça comercial B3 em silêncio contábil nos fóruns da tesouraria do comitê estrito regional no tribunal misto de contas base do estado local.",
      "B) O Conselho atua no dever obrigatório cravado e permanente, recaindo na equipe de fiscais a atribuição e função inalienável de procederem denúncia direta, clara e expressa aos órgãos conjuntos da alta gestão gerencial e perante Assembleia Geral em relação aos atos, ilegalidades contábeis, quebras, irregularidades sistêmicas ou fraudes executadas sob o crivo corporativo.",
      "C) Retêm a matéria perante os arquivos sob prazo prescricional limitando repasses ao Conselho Misto da Justiça atrelado à Procuradoria contábil estrita da federação do Espírito Santo na pauta anual cravada ao final dos ciclos de avaliações de desempenho contínuos e anuais na B3 e da Diretoria local validados por decreto estatutário de conselheiro unificado e controladorias estaduais capixabas de comissões contábeis no ES.",
      "D) O órgão funciona restrito às balizas dos apontamentos trimestrais sem exigências de apurações ativas limitadas pelo Comitê contábil local ou por despachos atrelados a diretores e a gerências das sucursais regionais e consórcios bancários do SICOOB no mercado mista capixaba unificado das ações contínuas da comarca civil da secretaria ativa do banco estrito da economia e fazenda governamental (SEFAZ)."
    ],
    correct: 1,
    feedback: "A denúncia interna e apurada aos donos e comandos é pilar máximo da atuação e escopo base das atividades nos assentos mantidos pela gestão do Fiscal (CONFI). No momento e cenário de constatar a irregularidade, os fiscais possuem ordem jurídica incontornável de avisar as falhas de governança internamente ao conselho cúpula ou Assembleia Magna de posse."
  }
    
];
