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
    }
];
