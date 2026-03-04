export const tokens = {

  // --- Base ---
  branco: "#fafafa",
  preto: "#000000",
  cinza: "#c2c7d2",

  // --- Escala escura ---
  escuro1: "#0a0b0e",
  escuro2: "#131519",
  escuro3: "#1c1f25",
  escuro4: "#252931",
  escuro5: "#454649",
  escuro3Transparente: "#1c1f2595",

  // --- Vinho ---
  vinhoEscuro: "#470a24",
  vinhoMedio: "#851e49",
  vinhoClaro: "#b85c83",
  vinhoPrincipal: "#8B0000",
  vinhoEscuroPrincipal: "#600000",

  // --- Bege / Creme ---
  bege: "#f4f2e6",
  cremeFundo: "#F9F8F5",

  // --- Verde ---
  verde: "#00dc82",
  verdeEscuro1: "#071811",
  verdeEscuro2: "#123627",
  verdeEscuro3: "#007646",
  verdeClaro: "#aeffde",

  // --- Dourado ---
  douradoFosco: "#D4AF37",
  douradoClaro: "#F4C430",

  // --- Texto / UI ---
  chumboTexto: "#2C2C2C",
  carvaoEscuro: "#1C1C1C",
  cinzaBorda: "#E0E0E0",

  // --- Vermelho ---
  vermelho: "#c90613",
  vermelhoClaro: "#ffe3e5",
  vermelhoEscuro: "#331218",
  vermelhoEscuro2: "#4a1821",

  // --- Front-end Core ---
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",

  // --- Frameworks & Libs JS ---
  react: "#61DAFB",
  vue: "#4FC08D",
  angular: "#DD0031",
  svelte: "#FF3E00",
  nextjs: "#000000",
  jquery: "#0769AD",
  redux: "#764ABC",

  // --- CSS Frameworks ---
  sass: "#CC6699",
  less: "#1D365D",
  tailwind: "#38B2AC",
  bootstrap: "#7952B3",
  styledComponents: "#DB7093",

  // --- Back-end & Linguagens ---
  nodejs: "#339933",
  python: "#3776AB",
  java: "#007396",
  csharp: "#512BD4",
  php: "#777BB4",
  ruby: "#CC342D",
  go: "#00ADD8",
  rust: "#000000",

  // --- Banco de Dados ---
  mongodb: "#47A248",
  postgresql: "#336791",
  mysql: "#4479A1",
  firebase: "#FFCA28",
  redis: "#DC382D",
  sqlite: "#003B57",

  // --- Ferramentas & DevOps ---
  git: "#F05032",
  github: "#181717",
  gitlab: "#FC6D26",
  docker: "#2496ED",
  aws: "#FF9900",
  linux: "#FCC624",

  // --- Design ---
  figma: "#F24E1E",
  photoshop: "#31A8FF",

  // --- Laranja ---
  laranja: "#ffb12b",
  laranjaEscuro: "#36170c",
  laranjaForte: "#ff662e",

  // --- Azul ---
  azul: "#a1a6ff",
  azulForte: "#050720",
  azulClaro: "#33a0ff",
  azulEscuro: "#1d2637",
  azulDeepSpace: "#020412",
  azulAccent: "#00d4ff",
  azulMuted: "#5c6da3",
  azulGlass: "rgba(51, 160, 255, 0.1)",
  azulFundo: "#000210",

  // --- Amarelo ---
  amarelo: "#ffc42e",
  amareloEscuro: "#342706",

  // --- Roxo ---
  roxo: "#6200ea",
  roxoClaro: "#b077ff",
  roxoEscuro: "#251b44",

  // --- Musgo ---
  musgo: "#a9e336",
  musgoEscuro: "#212c0b",

  // --- Rosa ---
  rosa: "#cd6799",
  rosaEscuro: "#3f1c2d",

  // --- Rosado ---
  rosado: "#cf3659",
  rosadoEscuro: "#470c1a",

  // --- Post-it ---
  postitAmarelo: "#fff9c4",
  postitVerde: "#e8f5e9",
  postitRose: "#ffebee",
  sombraPostit: "2px 4px 8px rgba(0, 0, 0, 0.15)",

  // --- Gradientes ---
  gradienteSkyline: "linear-gradient(0deg, #050720 0%, #1d2637 100%)",

  // --- Easing ---
  easeFluid: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeSoft: "cubic-bezier(0.22, 1, 0.36, 1)",
  delay: "0.3s",

  // --- Fontes ---
  semibold: "'figtree-semibold'",
  light: "'figtree-light'",
  bold: "'figtree-bold'",

  // --- Escala tipográfica (desktop) ---
  f0: "10px",
  f1: "15px",
  f2: "18px",
  f3: "25px",
  f4: "30px",
  f5: "35px",
  f6: "40px",
  f7: "45px",
  f8: "50px",
  f9: "55px",
  f10: "60px",
  f11: "70px",
  f12: "80px",
  f13: "90px",
  f14: "100px",
};

// ------------------------------------------------------------------
// 2. Escala tipográfica responsiva
//    Uso: fontScale.desktop.f3  /  fontScale.mobile.f3
// ------------------------------------------------------------------
export const fontScale = {
  desktop: {
    f0: "10px",  f1: "15px",  f2: "18px",  f3: "25px",
    f4: "30px",  f5: "35px",  f6: "40px",  f7: "45px",
    f8: "50px",  f9: "55px",  f10: "60px", f11: "70px",
    f12: "80px", f13: "90px", f14: "100px",
  },
  mobile: {   // max-width: 1000px
    f0: "9px",  f1: "12px",  f2: "14px",  f3: "20px",
    f4: "24px", f5: "28px",  f6: "32px",  f7: "36px",
    f8: "40px", f9: "44px",  f10: "48px", f11: "52px",
    f12: "56px", f13: "60px", f14: "64px",
  },
};

// ------------------------------------------------------------------
// 3. Objeto `theme` estruturado por categoria (estilo design-system)
// ------------------------------------------------------------------
export const theme = {
  colors: {
    base: {
      white:   tokens.branco,
      black:   tokens.preto,
      gray:    tokens.cinza,
    },
    dark: {
      1: tokens.escuro1,
      2: tokens.escuro2,
      3: tokens.escuro3,
      4: tokens.escuro4,
      5: tokens.escuro5,
      "3transparent": tokens.escuro3Transparente,
    },
    wine: {
      dark:    tokens.vinhoEscuro,
      medium:  tokens.vinhoMedio,
      light:   tokens.vinhoClaro,
      main:    tokens.vinhoPrincipal,
      deepDark: tokens.vinhoEscuroPrincipal,
    },
    green: {
      main:   tokens.verde,
      dark1:  tokens.verdeEscuro1,
      dark2:  tokens.verdeEscuro2,
      dark3:  tokens.verdeEscuro3,
      light:  tokens.verdeClaro,
    },
    gold: {
      matte: tokens.douradoFosco,
      light: tokens.douradoClaro,
    },
    neutral: {
      bege:      tokens.bege,
      cream:     tokens.cremeFundo,
      leadText:  tokens.chumboTexto,
      charcoal:  tokens.carvaoEscuro,
      border:    tokens.cinzaBorda,
    },
    red: {
      main:   tokens.vermelho,
      light:  tokens.vermelhoClaro,
      dark:   tokens.vermelhoEscuro,
      dark2:  tokens.vermelhoEscuro2,
    },
    orange: {
      main:   tokens.laranja,
      dark:   tokens.laranjaEscuro,
      strong: tokens.laranjaForte,
    },
    blue: {
      main:      tokens.azul,
      strong:    tokens.azulForte,
      light:     tokens.azulClaro,
      dark:      tokens.azulEscuro,
      deepSpace: tokens.azulDeepSpace,
      accent:    tokens.azulAccent,
      muted:     tokens.azulMuted,
      glass:     tokens.azulGlass,
      bg:        tokens.azulFundo,
    },
    yellow: {
      main: tokens.amarelo,
      dark: tokens.amareloEscuro,
    },
    purple: {
      main:  tokens.roxo,
      light: tokens.roxoClaro,
      dark:  tokens.roxoEscuro,
    },
    moss: {
      main: tokens.musgo,
      dark: tokens.musgoEscuro,
    },
    pink: {
      main: tokens.rosa,
      dark: tokens.rosaEscuro,
    },
    rose: {
      main: tokens.rosado,
      dark: tokens.rosadoEscuro,
    },
    tech: {
      html:             tokens.html,
      css:              tokens.css,
      javascript:       tokens.javascript,
      typescript:       tokens.typescript,
      react:            tokens.react,
      vue:              tokens.vue,
      angular:          tokens.angular,
      svelte:           tokens.svelte,
      nextjs:           tokens.nextjs,
      jquery:           tokens.jquery,
      redux:            tokens.redux,
      sass:             tokens.sass,
      less:             tokens.less,
      tailwind:         tokens.tailwind,
      bootstrap:        tokens.bootstrap,
      styledComponents: tokens.styledComponents,
      nodejs:           tokens.nodejs,
      python:           tokens.python,
      java:             tokens.java,
      csharp:           tokens.csharp,
      php:              tokens.php,
      ruby:             tokens.ruby,
      go:               tokens.go,
      rust:             tokens.rust,
      mongodb:          tokens.mongodb,
      postgresql:       tokens.postgresql,
      mysql:            tokens.mysql,
      firebase:         tokens.firebase,
      redis:            tokens.redis,
      sqlite:           tokens.sqlite,
      git:              tokens.git,
      github:           tokens.github,
      gitlab:           tokens.gitlab,
      docker:           tokens.docker,
      aws:              tokens.aws,
      linux:            tokens.linux,
      figma:            tokens.figma,
      photoshop:        tokens.photoshop,
    },
    postit: {
      yellow: tokens.postitAmarelo,
      green:  tokens.postitVerde,
      rose:   tokens.postitRose,
      shadow: tokens.sombraPostit,
    },
  },

  gradients: {
    skyline: tokens.gradienteSkyline,
  },

  motion: {
    easeFluid: tokens.easeFluid,
    easeSoft:  tokens.easeSoft,
    delay:     tokens.delay,
  },

  fonts: {
    semibold: tokens.semibold,
    light:    tokens.light,
    bold:     tokens.bold,
  },

  fontSize: fontScale,
};

export function CssVariables() {
  const css = `
    :root {
      --cor-branco: ${tokens.branco};
      --cor-preto: ${tokens.preto};
      --cor-cinza: ${tokens.cinza};
      --cor-escuro-1: ${tokens.escuro1};
      --cor-escuro-2: ${tokens.escuro2};
      --cor-escuro-3: ${tokens.escuro3};
      --cor-escuro-4: ${tokens.escuro4};
      --cor-escuro-5: ${tokens.escuro5};
      --cor-escuro-3-transparente: ${tokens.escuro3Transparente};
      --cor-vinho-escuro: ${tokens.vinhoEscuro};
      --cor-vinho-medio: ${tokens.vinhoMedio};
      --cor-vinho-claro: ${tokens.vinhoClaro};
      --cor-vinho-principal: ${tokens.vinhoPrincipal};
      --cor-bege: ${tokens.bege};
      --cor-verde: ${tokens.verde};
      --cor-verde-escuro-1: ${tokens.verdeEscuro1};
      --cor-verde-escuro-2: ${tokens.verdeEscuro2};
      --cor-verde-escuro-3: ${tokens.verdeEscuro3};
      --cor-verde-claro: ${tokens.verdeClaro};
      --cor-dourado-fosco: ${tokens.douradoFosco};
      --cor-dourado-claro: ${tokens.douradoClaro};
      --cor-creme-fundo: ${tokens.cremeFundo};
      --cor-chumbo-texto: ${tokens.chumboTexto};
      --cor-carvao-escuro: ${tokens.carvaoEscuro};
      --cor-cinza-borda: ${tokens.cinzaBorda};
      --cor-vermelho: ${tokens.vermelho};
      --cor-vermelho-claro: ${tokens.vermelhoClaro};
      --cor-vermelho-escuro: ${tokens.vermelhoEscuro};
      --cor-vermelho-escuro-2: ${tokens.vermelhoEscuro2};
      --cor-html: ${tokens.html};
      --cor-css: ${tokens.css};
      --cor-javascript: ${tokens.javascript};
      --cor-typescript: ${tokens.typescript};
      --cor-react: ${tokens.react};
      --cor-vue: ${tokens.vue};
      --cor-angular: ${tokens.angular};
      --cor-svelte: ${tokens.svelte};
      --cor-nextjs: ${tokens.nextjs};
      --cor-jquery: ${tokens.jquery};
      --cor-redux: ${tokens.redux};
      --cor-sass: ${tokens.sass};
      --cor-less: ${tokens.less};
      --cor-tailwind: ${tokens.tailwind};
      --cor-bootstrap: ${tokens.bootstrap};
      --cor-styledcomponents: ${tokens.styledComponents};
      --cor-nodejs: ${tokens.nodejs};
      --cor-python: ${tokens.python};
      --cor-java: ${tokens.java};
      --cor-csharp: ${tokens.csharp};
      --cor-php: ${tokens.php};
      --cor-ruby: ${tokens.ruby};
      --cor-go: ${tokens.go};
      --cor-rust: ${tokens.rust};
      --cor-mongodb: ${tokens.mongodb};
      --cor-postgresql: ${tokens.postgresql};
      --cor-mysql: ${tokens.mysql};
      --cor-firebase: ${tokens.firebase};
      --cor-redis: ${tokens.redis};
      --cor-sqlite: ${tokens.sqlite};
      --cor-git: ${tokens.git};
      --cor-github: ${tokens.github};
      --cor-gitlab: ${tokens.gitlab};
      --cor-docker: ${tokens.docker};
      --cor-aws: ${tokens.aws};
      --cor-linux: ${tokens.linux};
      --cor-figma: ${tokens.figma};
      --cor-photoshop: ${tokens.photoshop};
      --cor-laranja: ${tokens.laranja};
      --cor-laranja-escuro: ${tokens.laranjaEscuro};
      --cor-laranja-forte: ${tokens.laranjaForte};
      --cor-azul: ${tokens.azul};
      --cor-azul-forte: ${tokens.azulForte};
      --cor-azul-claro: ${tokens.azulClaro};
      --cor-azul-escuro: ${tokens.azulEscuro};
      --cor-azul-deep-space: ${tokens.azulDeepSpace};
      --cor-azul-accent: ${tokens.azulAccent};
      --cor-azul-muted: ${tokens.azulMuted};
      --cor-azul-glass: ${tokens.azulGlass};
      --cor-azul-fundo: ${tokens.azulFundo};
      --gradiente-skyline: ${tokens.gradienteSkyline};
      --cor-amarelo: ${tokens.amarelo};
      --cor-amarelo-escuro: ${tokens.amareloEscuro};
      --cor-roxo: ${tokens.roxo};
      --cor-roxo-claro: ${tokens.roxoClaro};
      --cor-roxo-escuro: ${tokens.roxoEscuro};
      --cor-musgo: ${tokens.musgo};
      --cor-musgo-escuro: ${tokens.musgoEscuro};
      --cor-rosa: ${tokens.rosa};
      --cor-rosa-escuro: ${tokens.rosaEscuro};
      --cor-rosado: ${tokens.rosado};
      --cor-rosado-escuro: ${tokens.rosadoEscuro};
      --postit-amarelo: ${tokens.postitAmarelo};
      --postit-verde: ${tokens.postitVerde};
      --postit-rose: ${tokens.postitRose};
      --sombra-postit: ${tokens.sombraPostit};
      --ease-fluid: ${tokens.easeFluid};
      --ease-soft: ${tokens.easeSoft};
      --delay: ${tokens.delay};
      --semibold: ${tokens.semibold};
      --light: ${tokens.light};
      --bold: ${tokens.bold};
      --f0: ${fontScale.desktop.f0};
      --f1: ${fontScale.desktop.f1};
      --f2: ${fontScale.desktop.f2};
      --f3: ${fontScale.desktop.f3};
      --f4: ${fontScale.desktop.f4};
      --f5: ${fontScale.desktop.f5};
      --f6: ${fontScale.desktop.f6};
      --f7: ${fontScale.desktop.f7};
      --f8: ${fontScale.desktop.f8};
      --f9: ${fontScale.desktop.f9};
      --f10: ${fontScale.desktop.f10};
      --f11: ${fontScale.desktop.f11};
      --f12: ${fontScale.desktop.f12};
      --f13: ${fontScale.desktop.f13};
      --f14: ${fontScale.desktop.f14};
    }

    @media screen and (max-width: 1000px) {
      :root {
        --f0: ${fontScale.mobile.f0};
        --f1: ${fontScale.mobile.f1};
        --f2: ${fontScale.mobile.f2};
        --f3: ${fontScale.mobile.f3};
        --f4: ${fontScale.mobile.f4};
        --f5: ${fontScale.mobile.f5};
        --f6: ${fontScale.mobile.f6};
        --f7: ${fontScale.mobile.f7};
        --f8: ${fontScale.mobile.f8};
        --f9: ${fontScale.mobile.f9};
        --f10: ${fontScale.mobile.f10};
        --f11: ${fontScale.mobile.f11};
        --f12: ${fontScale.mobile.f12};
        --f13: ${fontScale.mobile.f13};
        --f14: ${fontScale.mobile.f14};
      }
    }
  `;

  return <style>{css}</style>;
}

export default theme;