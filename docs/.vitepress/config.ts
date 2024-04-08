import { OramaPlugin } from '@orama/plugin-vitepress';

var options = {
  previewLength: 62,
  buttonLabel: "Pesquisar",
  placeholder: "Pesquisar",
  allow: [],
  ignore: [],
};

export default {
  head: [
    [
      'script defer',
      {
        src: 'https://umami.cyanoptera.org/script.js', 'data-website-id': '3dd72bfe-f84a-4263-8ee3-06ca85ce70b5'
      }
    ],
    [
      'link', 
      { 
        rel: 'icon', type: 'image/x-icon', href: 'public/favicon.ico'
      }
    ],
    [
      'link', 
      { 
        rel: 'icon', href: 'public/favicon.ico'
      }
    ],
  ],
  vite: {
    plugins: [OramaPlugin()],
  },
  lang: "pt-BR",
  title: "Pirataria",
  description: "Esta megathread tem como objetivo atuar como uma valiosa fonte para explorar uma ampla gama de recursos excepcionais, incluindo sites, aplicativos, ferramentas, etc.",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  externalLinkIcon: true,
  themeConfig: {
    lastUpdatedText: 'Última atualização em',
    logo: "/logo.svg",
    siteTitle: "Pirataria",
    // Navbar Link
    nav: [
      { 
        text: "Guias", 
        link: "pages/guias" 
      },
      {
        text: "Privacidade",
        link: "pages/privacidade",
      },
      {
        text: "Sobre",
        link: "pages/sobre",
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/c-pirataria/megathread" },
      {
        icon: {
          svg: '<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" viewBox="0 0 27.9 32"><g transform="translate(-.095 .005)" fill="currentColor"><path d="m27.1 31.2v-30.5h-2.19v-0.732h3.04v32h-3.04v-0.732z"/><path d="m8.23 10.4v1.54h0.044c0.385-0.564 0.893-1.03 1.49-1.37 0.58-0.323 1.25-0.485 1.99-0.485 0.72 0 1.38 0.14 1.97 0.42 0.595 0.279 1.05 0.771 1.36 1.48 0.338-0.5 0.796-0.941 1.38-1.32 0.58-0.383 1.27-0.574 2.06-0.574 0.602 0 1.16 0.074 1.67 0.22 0.514 0.148 0.954 0.383 1.32 0.707 0.366 0.323 0.653 0.746 0.859 1.27 0.205 0.522 0.308 1.15 0.308 1.89v7.63h-3.13v-6.46c0-0.383-0.015-0.743-0.044-1.08-0.0209-0.307-0.103-0.607-0.242-0.882-0.133-0.251-0.336-0.458-0.584-0.596-0.257-0.146-0.606-0.22-1.05-0.22-0.44 0-0.796 0.085-1.07 0.253-0.272 0.17-0.485 0.39-0.639 0.662-0.159 0.287-0.264 0.602-0.308 0.927-0.052 0.347-0.078 0.697-0.078 1.05v6.35h-3.13v-6.4c0-0.338-7e-3 -0.673-0.021-1-0.0114-0.314-0.0749-0.623-0.188-0.916-0.108-0.277-0.3-0.512-0.55-0.673-0.258-0.168-0.636-0.253-1.14-0.253-0.198 0.0083-0.394 0.042-0.584 0.1-0.258 0.0745-0.498 0.202-0.705 0.374-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.36v6.62h-3.13v-11.4z"/><path d="m0.936 0.732v30.5h2.19v0.732h-3.04v-32h3.03v0.732z"/></g></svg>'
        },
        ariaLabel: "Matrix",
        link: "https://matrix.to/#/#deck_pirata:matrix.org",
      },
      {
        icon: {
          svg: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="62.920513mm" height="41.44083mm" viewBox="0 0 951.2393 626.50705" version="1.1" id="svg8" inkscape:version="1.0 (4035a4fb49, 2020-05-01)" inkscape:export-xdpi="300" inkscape:export-ydpi="300" enable-background="new"><defs id="defs2"/><g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-36.380379,-256.78621)" style="display:inline"><path style="display:inline;opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 167.03908,270.78735 c -0.94784,-0.002 -1.8939,0.004 -2.83789,0.0215 -4.31538,0.0778 -8.58934,0.3593 -12.8125,0.8457 -33.78522,3.89116 -64.215716,21.86394 -82.871086,53.27344 -18.27982,30.77718 -22.77749,64.66635 -13.46094,96.06837 9.31655,31.40203 31.88488,59.93174 65.296886,82.5332 0.20163,0.13618 0.40678,0.26709 0.61523,0.39258 28.65434,17.27768 57.18167,28.93179 87.74218,34.95508 -0.74566,12.61339 -0.72532,25.5717 0.082,38.84375 2.43989,40.10943 16.60718,77.03742 38.0957,109.67187 l -77.00781,31.4375 c -8.30605,3.25932 -12.34178,12.68234 -8.96967,20.94324 3.37211,8.2609 12.84919,12.16798 21.06342,8.68371 l 84.69727,-34.57617 c 15.70675,18.72702 33.75346,35.68305 53.12109,50.57032 0.74013,0.56891 1.4904,1.12236 2.23437,1.68554 l -49.61132,65.69141 c -5.45446,7.0474 -4.10058,17.19288 3.01098,22.5634 7.11156,5.37052 17.24028,3.89649 22.52612,-3.27824 l 50.38672,-66.71876 c 27.68572,17.53469 57.07524,31.20388 86.07227,40.25196 14.88153,27.28008 43.96965,44.64648 77.58789,44.64648 33.93762,0 63.04252,-18.68693 77.80082,-45.4375 28.7072,-9.21295 57.7527,-22.93196 85.1484,-40.40234 l 51.0977,67.66016 c 5.2858,7.17473 15.4145,8.64876 22.5261,3.27824 7.1115,-5.37052 8.4654,-15.516 3.011,-22.5634 l -50.3614,-66.68555 c 0.334,-0.25394 0.6727,-0.50077 1.0059,-0.75586 19.1376,-14.64919 37.0259,-31.28581 52.7031,-49.63476 l 82.5625,33.70507 c 8.2143,3.48427 17.6913,-0.42281 21.0634,-8.68371 3.3722,-8.2609 -0.6636,-17.68392 -8.9696,-20.94324 l -74.5391,-30.42773 c 22.1722,-32.82971 37.0383,-70.03397 40.1426,-110.46094 1.0253,-13.35251 1.2292,-26.42535 0.6387,-39.17578 30.3557,-6.05408 58.7164,-17.66833 87.2011,-34.84375 0.2085,-0.12549 0.4136,-0.2564 0.6153,-0.39258 33.412,-22.60147 55.9803,-51.13117 65.2968,-82.5332 9.3166,-31.40202 4.8189,-65.29118 -13.4609,-96.06837 -18.6553,-31.40951 -49.0859,-49.38228 -82.8711,-53.27344 -4.2231,-0.4864 -8.4971,-0.76791 -12.8125,-0.8457 -30.2077,-0.54448 -62.4407,8.82427 -93.4316,26.71484 -22.7976,13.16063 -43.3521,33.31423 -59.4375,55.30469 -44.9968,-25.75094 -103.5444,-40.25065 -175.4785,-41.43945 -6.4522,-0.10663 -13.0125,-0.10696 -19.67974,0.002 -80.18875,1.30929 -144.38284,16.5086 -192.87109,43.9922 -0.11914,-0.19111 -0.24287,-0.37932 -0.37109,-0.56446 -16.29,-22.764 -37.41085,-43.73706 -60.89649,-57.29493 -30.02247,-17.33149 -61.21051,-26.66489 -90.59375,-26.73633 z"/><path id="path1087" style="display:inline;opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 716.85595,362.96478 c 15.29075,-21.36763 35.36198,-41.10921 56.50979,-53.31749 66.66377,-38.48393 137.02617,-33.22172 170.08018,22.43043 33.09493,55.72093 14.98656,117.48866 -47.64399,159.85496 -31.95554,19.26819 -62.93318,30.92309 -97.22892,35.54473 M 307.14407,362.96478 C 291.85332,341.59715 271.78209,321.85557 250.63429,309.64729 183.97051,271.16336 113.60811,276.42557 80.554051,332.07772 47.459131,387.79865 65.56752,449.56638 128.19809,491.93268 c 31.95554,19.26819 62.93319,30.92309 97.22893,35.54473" inkscape:connector-curvature="0" inkscape:label="ears" sodipodi:insensitive="true"/><path style="display:inline;opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 801.23205,576.8699 C 812.73478,427.06971 720.58431,321.98291 511.99999,325.38859 303.41568,328.79426 213.71393,428.0311 222.76794,576.8699 c 8.64289,142.08048 176.80223,246.40388 288.12038,246.40388 111.31815,0 279.45076,-104.5447 290.34373,-246.40388 z" id="path969" inkscape:connector-curvature="0" sodipodi:nodetypes="szszs" inkscape:label="head" sodipodi:insensitive="true"/><path id="path1084" style="display:inline;opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 610.4991,644.28932 c 0,23.11198 18.70595,41.84795 41.78091,41.84795 23.07495,0 41.7809,-18.73597 41.7809,-41.84795 0,-23.112 -18.70594,-41.84796 -41.7809,-41.84796 -23.07496,0 -41.78091,18.73596 -41.78091,41.84796 z m -280.56002,0 c 0,23.32492 18.87829,42.23352 42.16586,42.23352 23.28755,0 42.16585,-18.9086 42.16585,-42.23352 0,-23.32494 -18.87829,-42.23353 -42.16585,-42.23353 -23.28757,0 -42.16586,18.90859 -42.16586,42.23353 z" inkscape:connector-curvature="0" inkscape:label="eyes" sodipodi:nodetypes="ssssssssss" sodipodi:insensitive="true"/><path id="path1008" style="display:inline;opacity:1;fill:none;stroke:#000000;stroke-width:32;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 339.72919,769.2467 -54.54422,72.22481 m 399.08582,-72.22481 54.54423,72.22481 M 263.68341,697.82002 175.92752,733.64353 m 579.85765,-35.82351 87.7559,35.82351" inkscape:connector-curvature="0" inkscape:label="whiskers" sodipodi:nodetypes="cccccccc" sodipodi:insensitive="true"/><path style="display:inline;opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:28;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 512.00082,713.08977 c -45.86417,0 -75.13006,31.84485 -74.14159,71.10084 1.07048,42.51275 32.46865,71.10323 74.14159,71.10323 41.67296,0 74.05118,-32.99608 74.14161,-71.10323 0.0932,-39.26839 -28.27742,-71.10084 -74.14161,-71.10084 z" id="path1115" inkscape:connector-curvature="0" inkscape:label="nose" sodipodi:nodetypes="zszsz" sodipodi:insensitive="true"/></g></svg>'
        },
        ariaLabel: "Lemmy",
        link: "https://lemmy.dbzer0.com/c/pirataria",
      },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Tópicos",
        collapsible: true,
        items: [
          { text: "🧭 Sites de Uso Geral", link: "pages/sites-geral" },
          { text: "⭐ Anime", link: "pages/anime" },
          { text: "📚 Livros", link: "pages/livros" },
          { text: "🧠 Educacional", link: "pages/educacional" },
          { text: "🕹️ Emuladores e ROMs", link: "pages/emuladores-roms" },
          { text: "🎮 Jogos", link: "pages/jogos" },
          { text: "📱 Mobile", link: "pages/mobile" },
          { text: "🎦 Filmes e TV", link: "pages/filmes-tv" },
          { text: "🎹 Música", link: "pages/musica" },
          { text: "⚙️ Softwares", link: "pages/softwares" },
          { text: "👟 Esportes", link: "pages/esportes" },
          { text: "🧰 Ferramentas", link: "pages/ferramentas" },
          { text: "🧵 Trackers", link: "pages/trackers" },
          { text: "☣️ Sites Inseguros", link: "pages/sites-inseguros" },
        ],
      },
      {
        text: "💰 Outros Tesouros",
        collapsible: true,
        items: [
          {
            text: "📁 Awesome Piracy",
            link: "https://shakil-shahadat.github.io/awesome-piracy/",
          },
          {
            text: "📁 Champagne Piracy Wiki",
            link: "https://champagne.pages.dev/",
          },
          { text: "📁 EverythingMoe", link: "https://everythingmoe.com/" },
          { text: "📁 FMHY", link: "https://fmhy.net/" },
          { text: "📁 Ripped", link: "https://ripped.guide/" },
          { text: "📁 The Index", link: "https://theindex.moe/" },
          { text: "📁 Wotaku", link: "https://wotaku.moe/" },
        ],
      },
      {
        text: "📑 Recomendado",
        collapsible: true,
        items: [
          { text: "🪶 Sobre", link: "pages/sobre" },
          { text: "🪶 Dicionário", link: "pages/util/dicionario" },
          { text: "🪶 Glossário", link: "pages/util/glossario" },
          { text: "🪶 Publicações úteis", link: "pages/publicacoes" },
          { text: "🪶 Guias", link: "pages/guias" },
          { text: "🪶 Privacidade", link: "pages/privacidade" }
        ],
      },
    ],
    editLink: {
      pattern:
        "https://github.com/c-pirataria/megathread/edit/main/docs/:path",
      text: "Edite essa página no GitHub",
    },
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      message: "Made in Brazil by c/Pirataria",
    },
    markdown: {
      attrs: false,
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config
    returnToTopLabel: "Voltar para o topo",
    sidebarMenuLabel: "Menu",
  },
};
