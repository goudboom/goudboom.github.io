// Dutch UI copy. Source of truth: bron/TEKSTEN.md (copy it from there verbatim; never edit copy here first).

export const nl = {
  meta: {
    locale: 'nl_NL',
  },
  a11y: {
    skipLink: 'Direct naar de inhoud',
    menuOpen: 'Menu',
    menuClose: 'Sluit menu',
    logoLabel: 'Goudboom Adviesbureau, naar de homepage',
    langSwitchLabel: 'Deze pagina in het Engels',
    mainNav: 'Hoofdmenu',
    breadcrumb: 'Kruimelpad',
  },
  nav: {
    home: 'Home',
    services: 'Diensten',
    inspiration: 'Inspiratiebank',
    contact: 'Over & contact',
  },
  cta: {
    lunch: 'Plan een kennismakingslunch',
    lunchShort: 'Plan een lunch',
    call: 'Bel direct',
    caseStudy: 'Lees een praktijkvoorbeeld',
    lunchSubject: 'Kennismakingslunch',
    lunchBody: 'Hoi Yuri, ik wil graag eens lunchen. Waar het bij ons knelt: …',
  },
  footer: {
    kvkLabel: 'KvK',
    linkedin: 'LinkedIn',
    privacy: 'Privacy',
  },
  services: {
    items: {
      // `problem` and `problemLine` are used in the "Waar zit het probleem?" band on Home,
      // where the visitor reasons from their own problem first and from the service second.
      projectManagement: {
        title: 'Projectmanagement',
        line: 'Projecten die vastzitten of achterlopen weer vlottrekken, en ze laten landen in de organisatie.',
        more: 'Meer over projectmanagement',
        problem: 'Het project loopt vast',
        problemLine:
          'Projectmanagement om weer grip te krijgen op planning, risico\'s, besluitvorming en resultaat.',
      },
      itConsultancy: {
        title: 'IT/IV-consultancy & beheer',
        line: 'Van reactief brandjes blussen naar een beheerorganisatie die grip heeft en houdt.',
        more: 'Meer over IT/IV-consultancy',
        problem: 'Grip op beheer ontbreekt',
        problemLine:
          'IT/IV-consultancy om beheer, processen, informatie en verantwoordelijkheden beter te organiseren.',
      },
      agileCoaching: {
        title: 'Agile coaching & product ownership',
        line: 'Teams die niet alleen "Scrum doen", maar voorspelbaar waarde leveren.',
        more: 'Meer over agile coaching',
        problem: 'Het team levert niet',
        problemLine: 'Agile coaching om samenwerking, eigenaarschap en voorspelbaarheid te verbeteren.',
      },
    },
  },
  inspiration: {
    randomButton: 'Geef me random inspiratie',
    randomMicrocopy: 'Even iets anders om over na te denken.',
    toOverview: 'Naar de Inspiratiebank',
    seo: {
      title: 'Inspiratiebank — denkkaders en reflectievragen | Goudboom',
      description:
        'Ideeën, vragen, denkkaders en observaties om anders naar werk, teams en verandering te kijken.',
    },
    title: 'Inspiratiebank',
    intro:
      'Een verzameling ideeën, vragen, denkkaders en observaties om anders naar werk, teams en verandering te kijken.',
    filters: {
      category: 'Categorie',
      form: 'Vorm',
      all: 'Alle',
      activeLabel: 'Filter: {naam}',
      count: '{n} items',
      empty: 'Geen items in deze combinatie. Probeer een andere vorm of categorie.',
    },
    random: {
      again: 'Nog één',
      view: 'Bekijk en deel',
      close: 'Sluit',
    },
    category: {
      intro: 'Ideeën, vragen, denkkaders en observaties over {categorie}.',
      seoTitle: '{Categorie} — Inspiratiebank | Goudboom',
      allCategories: 'Alle categorieën',
    },
    item: {
      seoTitle: '{Titel} — Inspiratiebank | Goudboom',
      prev: 'Vorige',
      next: 'Volgende',
      random: 'Random',
      share: 'Deel op LinkedIn',
      back: 'Terug naar de Inspiratiebank',
      related: 'Meer in {categorie}',
      askYourself: 'Vraag voor jezelf',
      explanation: 'Waarom ik dit deel',
      // Placeholder shown (on purpose, at Yuri's request) until an item has its own toelichting.
      // Never used in meta description, JSON-LD or llms-full.txt.
      explanationPlaceholder: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
      ],
    },
  },
  home: {
    seo: {
      title: 'Goudboom Adviesbureau — complexe IT- en organisatievraagstukken',
      description:
        'Slagkracht. Transformatie. Impact. Goudboom helpt organisaties met complexe IT- en organisatievraagstukken, van projectmanagement en consultancy tot agile coaching.',
    },
    hero: {
      eyebrow: 'Slagkracht. Transformatie. Impact.',
      // \u00AD = soft hyphen, so the long compound can break on narrow screens
      title: 'Voor organisaties waar projecten vertragen, beheer piept en samen\u00ADwerking schuurt.',
      text: 'Goudboom helpt organisaties bij projecten die vastlopen, beheerorganisaties die grip verliezen en teams die niet meer vooruitkomen. Met structuur waar het nodig is, wendbaarheid waar het kan, en altijd met oog voor wat er daarna nodig is.',
      // Second route for visitors who are not ready to call or mail yet.
      secondary: 'Wil je eerst zien wat ik doe?',
      proof: [
        'Luchtvaart, Defensie, justitie, zorg en publieke sector',
        'Projectmanagement, IT/IV en Agile',
        'PRINCE2 · ITIL · SAFe',
      ],
    },
    recognize: {
      title: 'Herken je dit?',
      items: [
        'Een project loopt maanden achter, en niemand weet nog precies waarom.',
        'Je team blust brandjes in plaats van vooruit te werken.',
        'Klant en leverancier wijzen naar elkaar. De sfeer is verziekt.',
        'Er komt steeds weer een consultant bij, en als die vertrekt, vertrekt de kennis mee.',
      ],
      closing:
        'Ik ben Yuri van der Putten. Managers bellen mij als het vastzit. Ik stuur mee tot het staat, niet tot het rapport af is.',
    },
    results: {
      title: 'Wat het oplevert',
      items: [
        {
          figure: '2 jaar → 4 maanden',
          text: 'Een vastgelopen werkplekmigratie in de zorg, na twee jaar stilstand afgerond in vier maanden',
        },
        {
          figure: '1 jaar → 9 maanden',
          text: 'Een project voor veiligheidssystemen met een jaar vertraging, alsnog opgeleverd in negen maanden',
        },
        {
          figure: '6 maanden',
          text: 'Een nieuw team in de justitiële sector, van nul opgebouwd tot stabiel en voorspelbaar',
        },
        {
          figure: '17 diensten',
          text: 'Bedrijfskritische diensten, 4 teams en 18 fte in één productstream in de luchtvaart',
        },
      ],
    },
    services: {
      title: 'Waar zit het probleem?',
    },
    approach: {
      title: 'Zo werk ik',
      steps: [
        {
          title: 'Kennismaking.',
          text: 'Het liefst tijdens een lunch, op mijn kosten. Jij vertelt waar het knelt, ik stel vragen.',
        },
        {
          title: 'Plan van aanpak.',
          text: 'Een helder beeld van het echte probleem, wat "klaar" betekent en wat de eerste stap is.',
        },
        {
          title: 'Uitvoering & borging.',
          text: 'Ik lever op en bouw ondertussen aan de overdracht, zodat wat ik achterlaat blijft staan.',
        },
      ],
    },
    vision: {
      title: 'De Goudboom-visie',
      items: [
        {
          term: 'Werkplezier',
          text: 'Serieus over werkplezier. Niet als extraatje, maar als voorwaarde voor verandering, verbetering en innovatie die mensen daadwerkelijk dragen.',
        },
        {
          term: 'Fundament',
          text: 'De basis op orde geeft rust én ruimte. Het maakt teams wendbaar en geeft mensen weer regie over hun werk. Samen in control, zonder alles dicht te regelen.',
        },
        {
          term: 'Borging',
          text: 'Wat laat een consultant achter bij vertrek? Een oplossing die werkt én blijft werken. Daarom zorg ik dat kennis, werkwijze en verantwoordelijkheid landen in de organisatie.',
        },
      ],
      more: 'Meer over mij',
      portraitAlt: 'Yuri van der Putten, eigenaar van Goudboom Adviesbureau',
    },
    inspiration: {
      title: 'Inspiratiebank',
      text: 'Ideeën, vragen, denkkaders en observaties om anders naar werk, teams en verandering te kijken.',
    },
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        {
          q: 'Wat doet Goudboom Adviesbureau?',
          a: 'Goudboom Adviesbureau brengt complexe IT- en organisatievraagstukken weer in beweging. Yuri van der Putten werkt als interim projectmanager, IT/IV-consultant en agile coach, en zorgt dat het resultaat blijft staan na zijn vertrek.',
        },
        {
          q: 'Voor welke organisaties werk je?',
          a: 'Voor middelgrote en grote organisaties, vooral in de (semi-)publieke sector: onder meer luchtvaart, justitie, zorg en publieke gezondheid.',
        },
        {
          q: 'Wanneer schakel je Goudboom in?',
          a: 'Als een project vastzit of achterloopt, als leveranciers en organisatie langs elkaar heen werken, of als een beheerorganisatie of team robuuster en voorspelbaarder moet worden.',
        },
        {
          q: 'Wat blijft er achter na een opdracht?',
          a: 'Ik bouw vanaf het begin aan de overdracht: heldere processen, duidelijke rollen, geborgde werkwijzen en teams die zelfstandig verder kunnen.',
        },
        {
          q: 'Werk je klassiek of agile?',
          a: 'Allebei. Klassiek waar het moet, agile waar het kan. De aanpak volgt de context, niet andersom.',
        },
        {
          q: 'Kan ik je ook via een bemiddelaar inhuren?',
          a: 'Ja. Je kunt Goudboom Adviesbureau direct inschakelen of via een bemiddelaar.',
        },
        {
          q: 'Hoe neem ik contact op?',
          a: 'Bel +31 6 508 74 235 of mail naar info@goudboom.nl. Een kennismaking kan ook tijdens een lunch, op kosten van Goudboom.',
        },
      ],
    },
    closing: {
      title: 'Loopt er iets vast? Laten we lunchen.',
    },
  },

  servicesOverview: {
    seo: {
      title: 'Diensten — projectmanagement, IT/IV-consultancy en agile coaching | Goudboom',
      description:
        'Drie invalshoeken op één probleem: complexe IT- en organisatievraagstukken weer in beweging brengen, en zorgen dat het blijft werken.',
    },
    title: 'Eén probleem, drie invalshoeken',
    intro: [
      'Dat iets nodig is, is vaak duidelijk. Maar wat precies? Een schaap met vijf poten?',
      'De diensten van Goudboom zijn daarom apart beschreven, maar in de praktijk niet los van elkaar te zien. Een goede projectmanager heeft gevoel voor techniek én mensen. Een IT-consultant moet kunnen schakelen tussen strategie en operatie. Een agile coach moet begrijpen wat er onder de oppervlakte speelt.',
    ],
    pairsIntro: 'De meerwaarde zit juist in die combinatie:',
    pairs: [
      ['Techniek', 'Mens'],
      ['Analytisch', 'Betrokken'],
      ['Helikopterview', 'Resultaatgericht'],
      ['Discipline', 'Creativiteit'],
      ['Strategisch', 'Operationeel'],
    ],
    outro: 'Hieronder vind je per dienst een korte uitleg en voorbeelden uit de praktijk.',
  },

  serviceLabels: {
    forWhom: 'Voor wie',
    helpWith: 'Waar ik bij kan helpen',
    practice: 'Uit de praktijk',
    situation: 'De situatie',
    approach: 'Mijn aanpak',
    result: 'Het resultaat',
    relevant: 'Relevant:',
    inspiration: 'Inspiratie over dit onderwerp',
  },

  servicePages: {
    projectManagement: {
      seo: {
        title: 'Interim projectmanager voor vastgelopen IT-projecten | Goudboom',
        description:
          'Project dat achterloopt of vastzit? Duidelijke doelen, realistische planning, leveranciers die op afspraken sturen en een resultaat dat landt in de organisatie.',
      },
      title: 'Projectmanagement',
      subtitle: null as string | null,
      positioning: [
        'Een goed project begint niet bij de planning, maar bij de vraag waarom het project nodig is. Wat is het probleem? Wanneer is het resultaat goed genoeg? Wie moet er iets aan hebben, en wie moet het mogelijk maken?',
        'Vanuit daar breng ik structuur aan: duidelijke doelen, realistische planning, risico\'s, besluitvorming en eigenaarschap. Waar de situatie daarom vraagt, werk ik kortcyclisch en stuur ik bij op basis van voortgang en nieuwe inzichten. Het doel is niet alleen een project dat wordt afgerond, maar een resultaat dat ook daadwerkelijk landt in de organisatie.',
      ],
      forWhom:
        'Managers die een project hebben dat vastzit, achterloopt of waarin te veel leveranciers en belangen samenkomen.',
      helpWith: [
        { label: null as string | null, text: 'Vastgelopen of vertraagde projecten weer vlottrekken' },
        { label: null, text: 'Scope, planning en mijlpalen weer realistisch maken' },
        { label: null, text: 'Leveranciers aansturen op heldere afspraken' },
        { label: null, text: 'Meerdere projecten en belangen onder één regie brengen' },
        { label: null, text: 'Risico\'s, budget en voortgang zichtbaar en bestuurbaar maken' },
        { label: null, text: 'Projecten overdragen aan een beheerorganisatie die het kan dragen' },
      ],
      cases: [
        {
          title: 'Twee jaar vast, in vier maanden afgerond',
          situation:
            'Een werkplekmigratie in de zorg liep al twee jaar. Klant en leverancier stonden tegenover elkaar, er was miscommunicatie, en kennis was weggevallen.',
          approach:
            'Ik bracht het project terug naar overzichtelijke onderdelen (hardware, software, uitzonderingen) en fasen (voorbereiding, overgang, nazorg). We begonnen bij hardware, omdat die voorwaardelijk was voor de rest. Door concrete voortgang zichtbaar te maken, ontstond opnieuw vertrouwen en ruimte voor de volgende stappen.',
          result:
            'Realistische deadlines, rust bij de stakeholders, en een project dat binnen vier maanden werd afgerond en overgedragen aan de organisatie.',
        },
        {
          title: 'Een jaar achter, negen maanden later live',
          situation:
            'Binnen het veiligheidsdomein van een grote, sterk gereguleerde organisatie liepen meerdere projecten tegelijk, onder meer nieuwe systemen voor veiligheidsmeldingen en vergunningen. Meerdere leveranciers, vier teams en zeventien diensten die ondertussen gewoon moesten blijven draaien. Eén project had een jaar vertraging.',
          approach:
            'Scope teruggebracht tot wat echt nodig was, prioriteiten expliciet gemaakt en leveranciers aangestuurd op heldere afspraken. Tegelijk bewaakte ik de grens tussen project en beheer, zodat de teams niet werden opgeslokt door de waan van de dag.',
          result:
            'Het vertraagde project werd binnen negen maanden opgeleverd, met een overdraagbare beheerorganisatie die het resultaat kon overnemen.',
        },
        {
          title: 'Twee stromen, één regie',
          situation:
            'Bij een publieke gezondheidsorganisatie zette ik een projectorganisatie op voor onder meer een Exchange-migratie, de invoering van Teams en een nieuwe telecomprovider. Toen brak corona uit: de servicedesk draaide overuren door de versnelde uitrol van thuiswerken, en alle prioriteiten schoven.',
          approach:
            'Niet kiezen tussen project en crisis, maar beide stromen oppakken. Alle projecten kregen één overzicht in Jira, zodat helder bleef wat doorliep en wat kon wachten. Tegelijk coördineerde ik de servicedesk tijdens de piek.',
          result: 'De organisatie kon thuiswerken, én de projecten werden afgerond.',
        },
      ],
      relevant: 'PRINCE2®',
      closing: 'Loopt jouw project vast?',
    },

    itConsultancy: {
      seo: {
        title: 'IT/IV-consultant, functioneel beheer en servicemanagement | Goudboom',
        description:
          'IT moet het werk ondersteunen, niet andersom. Van reactief brandjes blussen naar een beheerorganisatie met regie, die blijft staan na vertrek.',
      },
      title: 'IT/IV-consultancy & beheer',
      subtitle: 'IT/IV-consultancy, functioneel beheer en servicemanagement' as string | null,
      positioning: [
        'IT moet het werk ondersteunen, niet andersom. Ik help organisaties om techniek, informatievoorziening, processen en bedrijfsdoelen weer met elkaar in lijn te brengen. Daarbij beweeg ik tussen verschillende werelden: bedrijfsprocessen, informatie, software, infrastructuur en leveranciers. Ik analyseer wat er speelt, breng belangen bij elkaar en vertaal complexe vraagstukken naar concrete keuzes en acties.',
        'In die rol ben ik kwartiermaker, regisseur en adviseur. De precieze rol verschilt per organisatie en vraagstuk. Soms moet een team opnieuw worden ingericht, soms moet de informatievoorziening beter aansluiten op de organisatie, en soms is vooral regie nodig. Ik neem de rol aan die op dat moment nodig is om samen verder te komen.',
      ],
      forWhom:
        'Organisaties waar beheer reactief is, of waar informatievoorziening, applicaties en leveranciers niet goed op elkaar aansluiten.',
      helpWith: [
        {
          label: 'Regie en management:' as string | null,
          text: 'informatiemanagement, servicemanagement en service delivery, roadmap- en portfoliomanagement',
        },
        {
          label: 'Beheer en operatie:',
          text: 'functioneel beheer, applicatiemanagement, ICT-management en lifecyclemanagement',
        },
        {
          label: 'Analyse en verandering:',
          text: 'businessanalyse, testen en acceptatie, migratie- en implementatietrajecten',
        },
        { label: 'Leveranciers en ketens:', text: 'leveranciers en ketenpartners aansturen op heldere afspraken' },
      ],
      model: {
        title: 'Het 9-vlaksmodel: de positie van functioneel beheer',
        caption:
          'Het model van Rijken verbindt bedrijfs-, informatie- en technologiedomein op strategisch, tactisch en operationeel niveau.',
        columns: ['Bedrijfsdomein', 'Informatiedomein', 'Technologiedomein'],
        rows: [
          { level: 'Strategisch', cells: ['Bedrijfsbeleid', 'Informatiebeleid', 'ICT-beleid'] },
          { level: 'Tactisch', cells: ['Procesmanagement', 'Informatiemanagement', 'ICT-management'] },
          { level: 'Operationeel', cells: ['Procesbeheer', 'Functioneel beheer', 'Systeembeheer'] },
        ],
        highlight: 'Functioneel beheer',
      },
      cases: [
        {
          title: 'Migratie, alles op de schop',
          situation: 'Een stichting wilde via een aanbesteding overstappen van remote desktop naar een M365-werkplek.',
          approach:
            'Niet alleen technisch overgaan, maar de verandering samen met het management gebruiken als katalysator: bedrijfsprocessen aanpakken en met pioniers een cultuur van samenwerking en transparantie neerzetten. Het project werd een programma met lang- en kortlopende projecten, actieve betrokkenheid van stakeholders en tussentijdse opleveringen, binnen een doordacht technisch kader (security first).',
          result: 'De aanbesteding gewonnen, ruimte voor nieuwe wensen, en decharge binnen tijd en budget.',
        },
        {
          title: 'Coördineer de coördinator',
          situation: 'Een team met grote uitdagingen, en slechts 4 uur (0,1 fte) voor het team beschikbaar.',
          approach: 'Een teamlid coördinerende taken gegeven, met handvatten en coaching om die rol te leren dragen.',
          result: 'De rol werd geaccepteerd, en er ontstond orde in de chaos.',
        },
      ],
      relevant: 'BiSL · ITIL',
      closing: 'Blijft je team brandjes blussen?',
    },

    agileCoaching: {
      seo: {
        title: 'Agile coach, scrum master en product owner | Goudboom',
        description:
          'Teams die niet alleen "Scrum doen", maar voorspelbaar waarde leveren. Coaching op team- en organisatieniveau, en product ownership in complexe ketens.',
      },
      title: 'Agile coaching & product ownership',
      subtitle: null as string | null,
      positioning: [
        'Mijn ervaring met agile coaching ligt vooral binnen informatiemanagement en IT-beheer. Juist daar zijn afhankelijkheden, verstoringen en veranderende prioriteiten dagelijkse realiteit. Teams moeten daarmee kunnen omgaan zonder bij iedere verandering opnieuw hun werkwijze uit te vinden. Ik help teams daarom om wendbaarder, zelfstandiger en effectiever te werken.',
        'Waar nodig neem ik ook de rol van product owner op me: de productvisie bewaken, scherpe prioriteiten stellen en stakeholders en leveranciers in lijn brengen, zodat het team aan het juiste werkt.',
      ],
      forWhom:
        'Teams die "Scrum doen" maar niet leveren, een nieuw team dat snel voorspelbaar moet worden, of een productstream waarin meerdere teams van elkaar afhankelijk zijn.',
      helpWith: [
        { label: null as string | null, text: 'Agile werken invoeren en verankeren (Scrum, Kanban, Lean, SAFe)' },
        { label: null, text: 'Teams begeleiden naar zelforganisatie en voorspelbaarheid' },
        { label: null, text: 'Backlog, prioriteiten en werkafspraken (DoR, DoD) die worden nageleefd' },
        { label: null, text: 'Afhankelijkheden tussen teams en leveranciers actief managen' },
        { label: null, text: 'Visueel management dat inzicht geeft' },
        { label: null, text: 'Trainingen en workshops faciliteren' },
        { label: null, text: 'Weerstand ombuigen naar eigenaarschap' },
      ],
      cases: [
        {
          title: 'Van eilandjes naar synergie',
          situation: 'Een beheerafdeling werkte niet samen: geen standaarden, geen kennisdeling, geen synergie.',
          approach:
            'Eerst stilstaan bij visie, missie en strategie. Daarna brachten we stap voor stap een gezamenlijke werkwijze in: backlog, daily, refinement, retro, TOPdesk en Jira.',
          result: 'Binnen zes maanden van een sceptische houding naar samenwerking en flow.',
        },
        {
          title: 'Pretenderen > presteren',
          situation:
            'Ontwikkelteams werkten met Scrum, maar het was vooral een IT-feestje. De business was matig tevreden.',
          approach:
            'De kracht van herhaling en het goede voorbeeld geven. Een uitgeklede definition of done die wél werd toegepast, een summiere definition of ready die wél werd getoetst, en user stories die voor álle stakeholders begrijpelijk waren.',
          result: 'Een positieve spiraal: betere processen, en daardoor waardevoller werk.',
        },
      ],
      relevant: 'SAFe® Agilist · Professional Scrum Master I · Agile Scrum Product Owner',
      closing: 'Levert je team niet wat het belooft?',
    },
  },

  contact: {
    seo: {
      title: 'Over Yuri van der Putten en contact | Goudboom Adviesbureau',
      description:
        'Interim projectmanager en IT/IV-consultant uit Woerden. Complexe uitdaging of veel werkdruk? Bel of plan een kennismakingslunch.',
    },
    hero: {
      title: 'Laten we lunchen.',
      text: 'Bel als het spoed heeft. Anders: plan een lunch, op mijn kosten, en vertel waar het knelt.',
      callPrefix: 'Bel',
      mailPrefix: 'Mail',
    },
    when: {
      title: 'Wanneer contact opnemen?',
      items: [
        'Je hebt een complexe uitdaging: een project dat vastloopt, uitval of een escalatie.',
        'Er is veel werkdruk. Iedereen voelt dat het beter kan, maar niemand weet precies hoe.',
        'Je wilt sparren over een regieorganisatie, beheer dat weer in rustig vaarwater moet komen, kosten die de pan uit rijzen, of een team dat robuuster en zelfstandiger moet worden.',
        'Je hebt zin om op mijn kosten te lunchen en eens te kijken of we iets voor elkaar kunnen betekenen.',
      ],
    },
    about: {
      title: 'Over mij',
      intro:
        'Ik ben Yuri van der Putten: nuchter, positief kritisch en met een gezonde dosis humor. Al ruim negen jaar breng ik orde in projecten, beheerorganisaties en teams waar het vastzat. En ik zorg dat het daarna zonder mij verder kan.',
      portraitAlt: 'Yuri van der Putten in pak',
      fresh: {
        title: 'Frisse blikopener',
        text: [
          'Noem het omdenken, positief kritisch of een vleugje joie de vivre: ik kijk optimistisch vanuit verschillende hoeken. Een bijnaam waar ik trots op ben, is de "frisse blikopener".',
          'Ik plaats informatie altijd in de context van het grotere, werkende geheel. Daardoor zie ik vaak een oplossing of omweg die anderen nog niet zien, en kan ik de gevolgen van keuzes beter overzien. Mijn intuïtie helpt me daarbij, maar ik kan ook uitleggen waar die vandaan komt.',
        ],
        photoAlt: 'Twee honden op de rotsen aan een Schots meer',
      },
      colleague: {
        title: 'Als collega',
        text: [
          'Ik heb me laten vertellen dat ik een leuke collega ben. Dat hoeft niemand zomaar aan te nemen; het mag hopelijk telkens blijken.',
        ],
        listIntro: 'Wat ik in ieder geval meeneem:',
        items: [
          'Een gezonde dosis humor',
          'Rust en relativeringsvermogen, juist als het spannend wordt',
          'Kennis die ik deel in plaats van vasthoud: als opleidingscoördinator leidde ik jarenlang nieuwe consultants op.',
          'Oog voor serieuze thema\'s die verder gaan dan de opdracht',
          'Werkplezier',
        ],
        photoAlt: 'Yuri wandelt met zijn kind in een draagzak door de heuvels van Isle of Skye',
      },
      teaching: {
        title: 'Lesgeven is zelf groeien',
        text: 'Als opleidingscoördinator bij een detacheerder gaf ik trainees het programma "Succesvol in jouw opdracht": de kneepjes van het consultancyvak. Wat is werkelijk onderscheidend vermogen? Hoe lever je snel waarde, en hoe laat je iets waardevols achter? Ik claim veel te weten; mijn publiek weet me vervolgens goed aan de tand te voelen. Geen training is hetzelfde, en ik leer elke keer weer bij.',
      },
      why: {
        title: 'Waarom Goudboom?',
        text: 'Goud en een boom. Goud staat voor waarde, succes en resultaat. Een boom staat voor kracht, groei en verbondenheid met zijn omgeving.',
      },
      slogan: {
        title: 'Slagkracht. Transformatie. Impact.',
        items: [
          {
            term: 'Slagkracht.',
            text: 'Het vermogen om daadwerkelijk iets voor elkaar te krijgen. Potentie benutten, obstakels wegnemen en mensen in beweging krijgen. Zodat een sterker team, een vaardiger individu of een robuuster proces ook echt meer aankan.',
          },
          {
            term: 'Transformatie.',
            text: 'Verandering vraagt meer dan een nieuw plan. Toenemende complexiteit en onvoorspelbaarheid vragen dat mensen, teams en organisaties zich steeds opnieuw kunnen aanpassen. Niet veranderen om het veranderen, maar om verder te kunnen.',
          },
          {
            term: 'Impact.',
            text: 'Het resultaat dat overblijft wanneer de investering stopt. Tijd, geld en energie moeten ergens toe leiden. Daarom gaat impact niet alleen over resultaat, maar ook over draagvlak, kwaliteit en wat een organisatie zelf kan voortzetten.',
          },
        ],
      },
      facts: {
        title: 'In het kort',
        experience: 'Ruim negen jaar ervaring als interim projectmanager, IT/IV-consultant en agile coach',
        sectorsLabel: 'Sectoren',
        sectors: [
          'luchtvaart',
          'justitie',
          'zorg en publieke gezondheid',
          'sociale zekerheid',
          'retail',
          'defensie',
          'IT-dienstverlening',
        ],
        location: 'Gevestigd in Woerden, werkzaam in heel Nederland',
      },
      credentials: {
        title: 'Opleiding & certificeringen',
        intro: 'Een overzicht van mijn relevante opleidingen en certificeringen.',
        educationTitle: 'Opleiding',
        education: [
          { name: 'Verander- en innovatiemanagement', school: 'LOI', years: '2023–2024' },
          { name: 'BSc Communication & Multimedia Design', school: 'Hogeschool Utrecht', years: '2009–2016' },
          { name: 'Minor Charismatisch Leiderschap', school: 'Hogeschool Utrecht', years: '2012–2013' },
        ],
        certificationsTitle: 'Certificeringen',
        fieldLabel: 'Vakgebied',
        certsLabel: 'Certificeringen',
        groups: [
          {
            field: 'Project- en procesmanagement',
            items: ['PRINCE2® (2017)', 'Lean Six Sigma Green Belt (2023)', 'Lean Six Sigma Yellow Belt (2021)'],
          },
          {
            field: 'Agile',
            items: [
              'Professional Scrum Product Owner II (2026)',
              'Professional Agile Leadership – Evidence-Based Management (PAL-EBM) (2026)',
              'Professional Scrum Master II (2026)',
              'SAFe® Agilist (2026)',
              'Agile Scrum Product Owner (2022)',
              'DevOps Foundation (2020)',
              'Professional Scrum Master I (2017)',
            ],
          },
          {
            field: 'Informatie- en servicemanagement',
            items: [
              'Functioneel Beheer Specialist – Business Information Management (2023)',
              'BiSL Foundation (2022)',
              'IREB® CPRE Foundation Level (2022)',
              'ITIL v3 (2017)',
              'TMap NEXT® Foundation Test Engineer (2017)',
            ],
          },
          {
            field: 'Microsoft, data en automatisering',
            items: [
              'PL-7001 Power Apps Canvas Apps (2026)',
              'PL-7002 Power Automate (2025)',
              'PL-900 Power Platform Fundamentals (2025)',
              'DA-100 Power BI Data Analyst Associate (2022)',
              'Microsoft 365 Certified: Teams Administrator Associate (2020)',
              'MCSA: Office 365 (2019)',
              'MCSA Windows 10 (2019)',
            ],
          },
          {
            field: 'Security en compliance',
            items: [
              'SC-400 Information Protection Administrator (2022)',
              'SC-900 Security, Compliance & Identity Fundamentals (2022)',
              'SC-300 Identity & Access Administrator (2021)',
              'ISO/IEC 27001 Information Security (2020)',
            ],
          },
          { field: 'Overig', items: ['Elements of AI (2026)'] },
        ],
      },
    },
  },

  privacy: {
    seo: {
      title: 'Privacy | Goudboom Adviesbureau',
      description: 'Hoe goudboom.nl omgaat met je gegevens: geen cookies, geen tracking van personen.',
    },
    title: 'Privacy',
    text: [
      'Deze site gebruikt geen cookies en volgt je niet.',
      'Mail je naar info@goudboom.nl of bel je, dan gebruik ik je gegevens alleen om je te antwoorden. Ik deel ze niet met anderen.',
    ],
    questionsPrefix: 'Vragen? Mail naar',
  },

  redirect: {
    text: 'Deze pagina is verhuisd. Je wordt doorgestuurd naar {link}.',
  },

  notFound: {
    seoTitle: 'Pagina niet gevonden | Goudboom Adviesbureau',
    title: 'Deze pagina bestaat niet (meer).',
    text: 'Misschien is hij verhuisd tijdens onze transformatie. Ga terug naar de homepage of laat je verrassen door de Inspiratiebank.',
    home: 'Naar Home',
  },
};

export type Dict = typeof nl;
