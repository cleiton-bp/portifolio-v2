// Central translation dictionaries.
// To add a new language: add an entry to `languages` and a matching block in
// `translations` using the same keys. Nothing else in the app needs to change.

export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export const defaultLanguage = "en";

export const translations = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", articles: "Articles", language: "Language" },
    hero: {
      title: "Creating visions into reality.",
      subtitle:
        "As a full-stack developer, I am dedicated to transforming ideas into innovative applications. Explore my projects and articles.",
      resume: "Resume",
      contact: "Contact",
    },
    hireMe: "Hire Me",
    about: {
      title: "Turning logic into experiences.",
      biography: "Biography",
      bio1:
        "Hi, I'm Cleiton, a Software Engineer who loves turning ideas into reliable, well-crafted web and mobile applications. I'm always exploring new technologies and chasing challenges that push me to grow and build better software.",
      bio2:
        "I believe application development is more than just writing code — it's about solving problems and creating intuitive, delightful experiences for users; that's why I constantly try to learn, research best practices and adapt to different demands and challenges.",
      bio3:
        "In any application I work on, whether it's a website, a mobile app, or another digital product, I bring my commitment to quality and performance to every project. I hope to have the opportunity to bring my skills and passion to your next project.",
    },
    skills: { title: "Skills", center: "Web — Mobile" },
    experience: {
      title: "Experience",
      present: "Present",
      itecnoveRole: "Software Engineer",
      itecnoveWork: "Development of web and mobile applications.",
      conectaRole: "Full Stack Developer",
      conectaWork: "Development of web and mobile applications.",
      homeOffice: "Home Office",
    },
    education: {
      title: "Education",
      present: "Present",
      ulbraType: "Analysis and Systems Development",
      ulbraPlace: "Lutheran University of Brazil (Ulbra)",
      ulbraInfo:
        "The Systems Analysis and Development course prepares me to design, develop, test and maintain software systems. It covers subjects such as algorithms, programming, databases, software engineering, networks, artificial intelligence and information security, combining theory with hands-on projects aligned with the demands of the technology job market.",
    },
    projects: {
      title: "Imagination surpasses knowledge!",
      featured: "Featured Project",
      visitProject: "Visit Project",
      visit: "Visit",
      notepad:
        "A digital notepad that turns your voice into text — record an audio note and it's transcribed automatically. Organize notes into folders, mark favorites, search them instantly, and listen back with text-to-speech in the voice you choose, all in a light or dark theme.",
      zippixel:
        "A tool that compresses and shrinks your images right in the browser — free, fast and completely private. Drop in one or several images at once and ZipPixel automatically picks the format that yields the smallest file, showing the original size, the new size and how much you saved in real time. Tweak the quality whenever you like, and rest easy: everything runs locally with the Canvas API, so no image is ever uploaded to a server.",
    },
    articles: { title: "Words can change the world!" },
    footer: { builtWith: "Built with", by: "by", sourceCode: "Source Code" },
  },

  pt: {
    nav: { home: "Início", about: "Sobre", projects: "Projetos", articles: "Artigos", language: "Idioma" },
    hero: {
      title: "Transformando visões em realidade.",
      subtitle:
        "Como desenvolvedor full-stack, sou dedicado a transformar ideias em aplicações inovadoras. Explore meus projetos e artigos.",
      resume: "Currículo",
      contact: "Contato",
    },
    hireMe: "Contrate-me",
    about: {
      title: "Transformando lógica em experiências.",
      biography: "Biografia",
      bio1:
        "Oi, eu sou o Cleiton, um Engenheiro de Software que adora transformar ideias em aplicações web e mobile confiáveis e bem construídas. Estou sempre explorando novas tecnologias e em busca de desafios que me façam crescer e criar um software cada vez melhor.",
      bio2:
        "Acredito que desenvolver aplicações é muito mais do que escrever código — é resolver problemas e criar experiências intuitivas e agradáveis para as pessoas; por isso busco aprender constantemente, pesquisar boas práticas e me adaptar a diferentes demandas e desafios.",
      bio3:
        "Em qualquer aplicação em que trabalho, seja um site, um app mobile ou outro produto digital, levo meu comprometimento com qualidade e performance para cada projeto. Espero ter a oportunidade de levar minhas habilidades e paixão para o seu próximo projeto.",
    },
    skills: { title: "Habilidades", center: "Web — Mobile" },
    experience: {
      title: "Experiência",
      present: "Atual",
      itecnoveRole: "Engenheiro de Software",
      itecnoveWork: "Desenvolvimento de aplicações web e mobile.",
      conectaRole: "Desenvolvedor Full Stack",
      conectaWork: "Desenvolvimento de aplicações web e mobile.",
      homeOffice: "Home Office",
    },
    education: {
      title: "Formação",
      present: "Atual",
      ulbraType: "Análise e Desenvolvimento de Sistemas",
      ulbraPlace: "Universidade Luterana do Brasil (Ulbra)",
      ulbraInfo:
        "O curso de Análise e Desenvolvimento de Sistemas me prepara para projetar, desenvolver, testar e manter sistemas de software. Aborda temas como algoritmos, programação, bancos de dados, engenharia de software, redes, inteligência artificial e segurança da informação, unindo teoria a projetos práticos alinhados às demandas do mercado de tecnologia.",
    },
    projects: {
      title: "A imaginação supera o conhecimento!",
      featured: "Projeto em Destaque",
      visitProject: "Visitar Projeto",
      visit: "Visitar",
      notepad:
        "Um bloco de notas digital que transforma sua voz em texto — grave uma nota em áudio e ela é transcrita automaticamente. Organize as notas em pastas, marque favoritas, busque rapidamente e ouça-as de volta com leitura por voz, escolhendo o locutor, tudo em tema claro ou escuro.",
      zippixel:
        "Uma ferramenta que comprime e reduz suas imagens direto no navegador — grátis, rápida e totalmente privada. Solte uma ou várias imagens de uma vez e o ZipPixel escolhe automaticamente o formato que gera o menor arquivo, mostrando em tempo real o tamanho original, o novo tamanho e quanto você economizou. Ajuste a qualidade quando quiser e fique tranquilo: tudo roda localmente com a Canvas API, sem enviar nenhuma imagem para servidores.",
    },
    articles: { title: "Palavras podem mudar o mundo!" },
    footer: { builtWith: "Feito com", by: "por", sourceCode: "Código-fonte" },
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", articles: "Artículos", language: "Idioma" },
    hero: {
      title: "Convirtiendo visiones en realidad.",
      subtitle:
        "Como desarrollador full-stack, me dedico a transformar ideas en aplicaciones innovadoras. Explora mis proyectos y artículos.",
      resume: "Currículum",
      contact: "Contacto",
    },
    hireMe: "Contrátame",
    about: {
      title: "Convirtiendo la lógica en experiencias.",
      biography: "Biografía",
      bio1:
        "Hola, soy Cleiton, un Ingeniero de Software al que le encanta convertir ideas en aplicaciones web y móviles confiables y bien construidas. Siempre estoy explorando nuevas tecnologías y buscando retos que me impulsen a crecer y a crear mejor software.",
      bio2:
        "Creo que desarrollar aplicaciones es mucho más que escribir código: se trata de resolver problemas y crear experiencias intuitivas y agradables para las personas; por eso intento aprender constantemente, investigar buenas prácticas y adaptarme a distintas demandas y desafíos.",
      bio3:
        "En cualquier aplicación en la que trabajo, ya sea un sitio web, una app móvil u otro producto digital, llevo mi compromiso con la calidad y el rendimiento a cada proyecto. Espero tener la oportunidad de aportar mis habilidades y pasión a tu próximo proyecto.",
    },
    skills: { title: "Habilidades", center: "Web — Móvil" },
    experience: {
      title: "Experiencia",
      present: "Actualidad",
      itecnoveRole: "Ingeniero de Software",
      itecnoveWork: "Desarrollo de aplicaciones web y móviles.",
      conectaRole: "Desarrollador Full Stack",
      conectaWork: "Desarrollo de aplicaciones web y móviles.",
      homeOffice: "Teletrabajo",
    },
    education: {
      title: "Educación",
      present: "Actualidad",
      ulbraType: "Análisis y Desarrollo de Sistemas",
      ulbraPlace: "Universidad Luterana de Brasil (Ulbra)",
      ulbraInfo:
        "El curso de Análisis y Desarrollo de Sistemas me prepara para diseñar, desarrollar, probar y mantener sistemas de software. Abarca temas como algoritmos, programación, bases de datos, ingeniería de software, redes, inteligencia artificial y seguridad de la información, combinando teoría con proyectos prácticos alineados con las demandas del mercado tecnológico.",
    },
    projects: {
      title: "¡La imaginación supera al conocimiento!",
      featured: "Proyecto Destacado",
      visitProject: "Visitar Proyecto",
      visit: "Visitar",
      notepad:
        "Una libreta digital que convierte tu voz en texto: graba una nota de audio y se transcribe automáticamente. Organiza las notas en carpetas, marca favoritas, búscalas al instante y escúchalas con lectura por voz eligiendo el locutor, todo en tema claro u oscuro.",
      zippixel:
        "Una herramienta que comprime y reduce tus imágenes directamente en el navegador: gratis, rápida y totalmente privada. Suelta una o varias imágenes a la vez y ZipPixel elige automáticamente el formato que genera el archivo más pequeño, mostrando en tiempo real el tamaño original, el nuevo tamaño y cuánto ahorraste. Ajusta la calidad cuando quieras y quédate tranquilo: todo se ejecuta localmente con la Canvas API, sin enviar ninguna imagen a servidores.",
    },
    articles: { title: "¡Las palabras pueden cambiar el mundo!" },
    footer: { builtWith: "Hecho con", by: "por", sourceCode: "Código fuente" },
  },

  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", articles: "Articles", language: "Langue" },
    hero: {
      title: "Transformer les visions en réalité.",
      subtitle:
        "En tant que développeur full-stack, je me consacre à transformer les idées en applications innovantes. Découvrez mes projets et mes articles.",
      resume: "CV",
      contact: "Contact",
    },
    hireMe: "Recrutez-moi",
    about: {
      title: "Transformer la logique en expériences.",
      biography: "Biographie",
      bio1:
        "Bonjour, je suis Cleiton, un Ingénieur Logiciel qui adore transformer les idées en applications web et mobiles fiables et soignées. J'explore sans cesse de nouvelles technologies et je recherche des défis qui me poussent à progresser et à créer de meilleurs logiciels.",
      bio2:
        "Je crois que développer des applications va bien au-delà de l'écriture de code — il s'agit de résoudre des problèmes et de créer des expériences intuitives et agréables pour les utilisateurs ; c'est pourquoi j'apprends en permanence, je recherche les bonnes pratiques et je m'adapte à différentes demandes et défis.",
      bio3:
        "Dans chaque application sur laquelle je travaille, qu'il s'agisse d'un site web, d'une application mobile ou d'un autre produit numérique, j'apporte mon engagement envers la qualité et la performance. J'espère avoir l'opportunité de mettre mes compétences et ma passion au service de votre prochain projet.",
    },
    skills: { title: "Compétences", center: "Web — Mobile" },
    experience: {
      title: "Expérience",
      present: "Aujourd'hui",
      itecnoveRole: "Ingénieur Logiciel",
      itecnoveWork: "Développement d'applications web et mobiles.",
      conectaRole: "Développeur Full Stack",
      conectaWork: "Développement d'applications web et mobiles.",
      homeOffice: "Télétravail",
    },
    education: {
      title: "Formation",
      present: "Aujourd'hui",
      ulbraType: "Analyse et Développement de Systèmes",
      ulbraPlace: "Université Luthérienne du Brésil (Ulbra)",
      ulbraInfo:
        "Le cursus Analyse et Développement de Systèmes me prépare à concevoir, développer, tester et maintenir des systèmes logiciels. Il couvre des sujets tels que les algorithmes, la programmation, les bases de données, le génie logiciel, les réseaux, l'intelligence artificielle et la sécurité de l'information, alliant théorie et projets pratiques alignés sur les besoins du marché technologique.",
    },
    projects: {
      title: "L'imagination dépasse le savoir !",
      featured: "Projet à la Une",
      visitProject: "Voir le Projet",
      visit: "Voir",
      notepad:
        "Un bloc-notes numérique qui transforme votre voix en texte : enregistrez une note audio et elle est transcrite automatiquement. Organisez les notes en dossiers, marquez vos favorites, recherchez-les instantanément et réécoutez-les en lecture vocale avec la voix de votre choix, le tout en thème clair ou sombre.",
      zippixel:
        "Un outil qui compresse et réduit vos images directement dans le navigateur — gratuit, rapide et totalement privé. Déposez une ou plusieurs images à la fois et ZipPixel choisit automatiquement le format qui produit le fichier le plus léger, en affichant en temps réel la taille d'origine, la nouvelle taille et le gain réalisé. Ajustez la qualité quand vous le souhaitez et soyez tranquille : tout s'exécute localement avec la Canvas API, aucune image n'est envoyée vers des serveurs.",
    },
    articles: { title: "Les mots peuvent changer le monde !" },
    footer: { builtWith: "Conçu avec", by: "par", sourceCode: "Code source" },
  },

  de: {
    nav: { home: "Start", about: "Über mich", projects: "Projekte", articles: "Artikel", language: "Sprache" },
    hero: {
      title: "Visionen Wirklichkeit werden lassen.",
      subtitle:
        "Als Full-Stack-Entwickler widme ich mich der Umsetzung von Ideen in innovative Anwendungen. Entdecke meine Projekte und Artikel.",
      resume: "Lebenslauf",
      contact: "Kontakt",
    },
    hireMe: "Stell mich ein",
    about: {
      title: "Aus Logik werden Erlebnisse.",
      biography: "Biografie",
      bio1:
        "Hallo, ich bin Cleiton, ein Software Engineer, der es liebt, Ideen in zuverlässige, sauber umgesetzte Web- und Mobile-Anwendungen zu verwandeln. Ich erkunde ständig neue Technologien und suche Herausforderungen, die mich wachsen und bessere Software entwickeln lassen.",
      bio2:
        "Ich bin überzeugt, dass Anwendungsentwicklung mehr ist als nur Code zu schreiben — es geht darum, Probleme zu lösen und intuitive, angenehme Erlebnisse für Nutzer zu schaffen; deshalb lerne ich ständig dazu, recherchiere Best Practices und passe mich unterschiedlichen Anforderungen und Herausforderungen an.",
      bio3:
        "In jeder Anwendung, an der ich arbeite — ob Website, Mobile-App oder anderes digitales Produkt — bringe ich mein Engagement für Qualität und Performance in jedes Projekt ein. Ich hoffe, die Gelegenheit zu bekommen, meine Fähigkeiten und Leidenschaft in Ihr nächstes Projekt einzubringen.",
    },
    skills: { title: "Fähigkeiten", center: "Web — Mobile" },
    experience: {
      title: "Erfahrung",
      present: "Heute",
      itecnoveRole: "Software Engineer",
      itecnoveWork: "Entwicklung von Web- und Mobile-Anwendungen.",
      conectaRole: "Full-Stack-Entwickler",
      conectaWork: "Entwicklung von Web- und Mobile-Anwendungen.",
      homeOffice: "Homeoffice",
    },
    education: {
      title: "Ausbildung",
      present: "Heute",
      ulbraType: "Systemanalyse und -entwicklung",
      ulbraPlace: "Lutherische Universität Brasiliens (Ulbra)",
      ulbraInfo:
        "Das Studium der Systemanalyse und -entwicklung bereitet mich darauf vor, Softwaresysteme zu entwerfen, zu entwickeln, zu testen und zu warten. Es umfasst Themen wie Algorithmen, Programmierung, Datenbanken, Software Engineering, Netzwerke, künstliche Intelligenz und Informationssicherheit und verbindet Theorie mit praktischen Projekten, die auf die Anforderungen des Technologiemarkts abgestimmt sind.",
    },
    projects: {
      title: "Fantasie übertrifft Wissen!",
      featured: "Ausgewähltes Projekt",
      visitProject: "Projekt ansehen",
      visit: "Ansehen",
      notepad:
        "Ein digitaler Notizblock, der deine Stimme in Text verwandelt — nimm eine Audionotiz auf, und sie wird automatisch transkribiert. Organisiere Notizen in Ordnern, markiere Favoriten, durchsuche sie sofort und höre sie dir per Sprachausgabe mit der Stimme deiner Wahl an, alles im hellen oder dunklen Design.",
      zippixel:
        "Ein Tool, das deine Bilder direkt im Browser komprimiert und verkleinert — kostenlos, schnell und vollständig privat. Lege eines oder mehrere Bilder auf einmal ab, und ZipPixel wählt automatisch das Format mit der kleinsten Dateigröße und zeigt in Echtzeit die Originalgröße, die neue Größe und die Ersparnis an. Passe die Qualität jederzeit an und sei beruhigt: Alles läuft lokal mit der Canvas API, kein Bild wird an einen Server gesendet.",
    },
    articles: { title: "Worte können die Welt verändern!" },
    footer: { builtWith: "Erstellt mit", by: "von", sourceCode: "Quellcode" },
  },

  it: {
    nav: { home: "Home", about: "Chi sono", projects: "Progetti", articles: "Articoli", language: "Lingua" },
    hero: {
      title: "Trasformare le visioni in realtà.",
      subtitle:
        "Come sviluppatore full-stack, mi dedico a trasformare le idee in applicazioni innovative. Esplora i miei progetti e articoli.",
      resume: "Curriculum",
      contact: "Contatto",
    },
    hireMe: "Assumimi",
    about: {
      title: "Trasformare la logica in esperienze.",
      biography: "Biografia",
      bio1:
        "Ciao, sono Cleiton, un Software Engineer che ama trasformare le idee in applicazioni web e mobile affidabili e ben realizzate. Esploro costantemente nuove tecnologie e cerco sfide che mi spingano a crescere e a creare software migliore.",
      bio2:
        "Credo che sviluppare applicazioni sia molto più che scrivere codice: significa risolvere problemi e creare esperienze intuitive e piacevoli per le persone; per questo cerco di imparare costantemente, studiare le buone pratiche e adattarmi a esigenze e sfide diverse.",
      bio3:
        "In ogni applicazione su cui lavoro, che si tratti di un sito web, di un'app mobile o di un altro prodotto digitale, porto il mio impegno verso qualità e prestazioni in ogni progetto. Spero di avere l'opportunità di mettere le mie competenze e la mia passione al servizio del tuo prossimo progetto.",
    },
    skills: { title: "Competenze", center: "Web — Mobile" },
    experience: {
      title: "Esperienza",
      present: "Oggi",
      itecnoveRole: "Software Engineer",
      itecnoveWork: "Sviluppo di applicazioni web e mobile.",
      conectaRole: "Sviluppatore Full Stack",
      conectaWork: "Sviluppo di applicazioni web e mobile.",
      homeOffice: "Lavoro da remoto",
    },
    education: {
      title: "Formazione",
      present: "Oggi",
      ulbraType: "Analisi e Sviluppo di Sistemi",
      ulbraPlace: "Università Luterana del Brasile (Ulbra)",
      ulbraInfo:
        "Il corso di Analisi e Sviluppo di Sistemi mi prepara a progettare, sviluppare, testare e mantenere sistemi software. Copre argomenti come algoritmi, programmazione, database, ingegneria del software, reti, intelligenza artificiale e sicurezza informatica, unendo la teoria a progetti pratici allineati alle esigenze del mercato tecnologico.",
    },
    projects: {
      title: "L'immaginazione supera la conoscenza!",
      featured: "Progetto in Evidenza",
      visitProject: "Visita il Progetto",
      visit: "Visita",
      notepad:
        "Un blocco note digitale che trasforma la tua voce in testo: registra una nota audio e viene trascritta automaticamente. Organizza le note in cartelle, segna le preferite, cercale all'istante e riascoltale con la lettura vocale scegliendo la voce, tutto in tema chiaro o scuro.",
      zippixel:
        "Uno strumento che comprime e riduce le tue immagini direttamente nel browser — gratuito, veloce e completamente privato. Trascina una o più immagini alla volta e ZipPixel sceglie automaticamente il formato che produce il file più piccolo, mostrando in tempo reale la dimensione originale, la nuova dimensione e quanto hai risparmiato. Regola la qualità quando vuoi e stai tranquillo: tutto viene eseguito localmente con la Canvas API, nessuna immagine viene inviata a server.",
    },
    articles: { title: "Le parole possono cambiare il mondo!" },
    footer: { builtWith: "Realizzato con", by: "da", sourceCode: "Codice sorgente" },
  },

  ja: {
    nav: { home: "ホーム", about: "プロフィール", projects: "プロジェクト", articles: "記事", language: "言語" },
    hero: {
      title: "ビジョンを現実に。",
      subtitle:
        "フルスタックエンジニアとして、アイデアを革新的なアプリケーションへと変えることに情熱を注いでいます。私のプロジェクトと記事をご覧ください。",
      resume: "履歴書",
      contact: "お問い合わせ",
    },
    hireMe: "採用する",
    about: {
      title: "ロジックを体験に変える。",
      biography: "経歴",
      bio1:
        "こんにちは、Cleitonです。アイデアを信頼性が高く丁寧に作り込まれた Web・モバイルアプリへと変えることが大好きなソフトウェアエンジニアです。常に新しい技術を探求し、自分を成長させ、より良いソフトウェアを生み出せる挑戦を求めています。",
      bio2:
        "アプリケーション開発はコードを書くこと以上のものだと考えています。それは問題を解決し、ユーザーに直感的で心地よい体験を届けることです。だからこそ、私は常に学び、ベストプラクティスを研究し、さまざまな要求や課題に適応するよう努めています。",
      bio3:
        "Web サイト、モバイルアプリ、その他のデジタルプロダクトなど、どんなアプリケーションに取り組むときも、品質とパフォーマンスへのこだわりをすべてのプロジェクトに注ぎます。あなたの次のプロジェクトに、私のスキルと情熱を活かせる機会があれば幸いです。",
    },
    skills: { title: "スキル", center: "Web — モバイル" },
    experience: {
      title: "職歴",
      present: "現在",
      itecnoveRole: "ソフトウェアエンジニア",
      itecnoveWork: "Web およびモバイルアプリケーションの開発。",
      conectaRole: "フルスタック開発者",
      conectaWork: "Web およびモバイルアプリケーションの開発。",
      homeOffice: "リモートワーク",
    },
    education: {
      title: "学歴",
      present: "現在",
      ulbraType: "システム分析・開発",
      ulbraPlace: "ブラジル・ルター派大学 (Ulbra)",
      ulbraInfo:
        "システム分析・開発の課程では、ソフトウェアシステムの設計、開発、テスト、保守を学びます。アルゴリズム、プログラミング、データベース、ソフトウェア工学、ネットワーク、人工知能、情報セキュリティなどを扱い、理論と実践的なプロジェクトを組み合わせ、技術業界のニーズに沿った内容となっています。",
    },
    projects: {
      title: "想像力は知識を超える！",
      featured: "注目のプロジェクト",
      visitProject: "プロジェクトを見る",
      visit: "見る",
      notepad:
        "声をテキストに変えるデジタルメモ帳。音声でメモを録音すると自動で文字起こしされます。メモをフォルダで整理し、お気に入りを登録、すぐに検索でき、好みの声を選んで音声読み上げで聞き返すことも可能。ライト／ダークテーマに対応しています。",
      zippixel:
        "画像をブラウザ上で直接圧縮・縮小できるツール。無料・高速で、完全にプライベートです。1枚でも複数枚でもまとめて読み込むと、ZipPixelが最も小さくなる形式を自動で選び、元のサイズ・圧縮後のサイズ・削減率をリアルタイムで表示します。画質はいつでも調整可能。すべての処理はCanvas APIでローカルに実行されるため、画像がサーバーに送信されることはありません。",
    },
    articles: { title: "言葉は世界を変えられる！" },
    footer: { builtWith: "制作", by: "by", sourceCode: "ソースコード" },
  },

  zh: {
    nav: { home: "首页", about: "关于", projects: "项目", articles: "文章", language: "语言" },
    hero: {
      title: "将愿景变为现实。",
      subtitle:
        "作为一名全栈开发者，我致力于将创意转化为创新的应用程序。欢迎浏览我的项目和文章。",
      resume: "简历",
      contact: "联系",
    },
    hireMe: "聘用我",
    about: {
      title: "将逻辑转化为体验。",
      biography: "简介",
      bio1:
        "你好，我是 Cleiton，一名热爱将创意转化为可靠、精良的 Web 与移动应用的软件工程师。我始终在探索新技术，寻找能推动我成长、打造更优秀软件的挑战。",
      bio2:
        "我相信，开发应用远不止于编写代码——更在于解决问题，为用户创造直观而愉悦的体验；因此我不断学习、研究最佳实践，并适应不同的需求与挑战。",
      bio3:
        "无论是网站、移动应用还是其他数字产品，在我参与的每一个项目中，我都倾注对质量与性能的执着。期待有机会将我的技能与热情投入到您的下一个项目中。",
    },
    skills: { title: "技能", center: "Web — 移动端" },
    experience: {
      title: "工作经历",
      present: "至今",
      itecnoveRole: "软件工程师",
      itecnoveWork: "开发 Web 和移动应用。",
      conectaRole: "全栈开发者",
      conectaWork: "开发 Web 和移动应用。",
      homeOffice: "远程办公",
    },
    education: {
      title: "教育背景",
      present: "至今",
      ulbraType: "系统分析与开发",
      ulbraPlace: "巴西路德大学 (Ulbra)",
      ulbraInfo:
        "系统分析与开发课程让我具备设计、开发、测试和维护软件系统的能力。课程涵盖算法、编程、数据库、软件工程、网络、人工智能和信息安全等内容，将理论与实践项目相结合，紧贴技术行业的市场需求。",
    },
    projects: {
      title: "想象力胜过知识！",
      featured: "精选项目",
      visitProject: "查看项目",
      visit: "查看",
      notepad:
        "一款将语音转为文字的数字记事本——录制语音笔记即可自动转录。可将笔记整理到文件夹、标记收藏、即时搜索，还能选择喜欢的语音通过语音朗读回放收听，并支持浅色与深色主题。",
      zippixel:
        "一款可在浏览器中直接压缩并缩小图片的工具——免费、快速且完全私密。一次拖入一张或多张图片，ZipPixel 会自动选择体积最小的格式，并实时显示原始大小、压缩后大小以及节省的比例。你可以随时调整画质，且尽管放心：所有处理都通过 Canvas API 在本地完成，任何图片都不会上传到服务器。",
    },
    articles: { title: "言语可以改变世界！" },
    footer: { builtWith: "用", by: "打造，作者", sourceCode: "源代码" },
  },
};
