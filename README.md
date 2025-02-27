🧭 Navigation (Navegação)
•	menu: '#menu' → Associa um menu ao Fullpage.js para navegação com <a href="#home">.
•	lockAnchors: false → Permite que o usuário mude os anchors manualmente.
•	anchors: ['home', 'about', ...] → Define identificadores para cada seção (#home, #about…).
•	navigation: false → Ativa/desativa a navegação lateral (bolinhas de navegação).
•	navigationPosition: 'right' → Posição da navegação (left, right).
•	navigationTooltips: ['firstSlide', 'secondSlide'] → Tooltips ao passar o mouse nas bolinhas.
•	showActiveTooltip: false → Exibe o tooltip ativo ou não.
•	slidesNavigation: false → Ativa a navegação (setas) para slides dentro de uma seção.
•	slidesNavPosition: 'bottom' → Posição da navegação de slides (top, bottom).

🎡 Scrolling (Rolagem)
•	css3: true → Usa transições CSS3 em vez de JavaScript (mais suave).
•	scrollingSpeed: 700 → Velocidade do scroll (milissegundos).
•	autoScrolling: true → Controla a rolagem automaticamente para cada seção.
•	fitToSection: true → Ajusta a rolagem para encaixar as seções na tela.
•	fitToSectionDelay: 600 → Tempo de espera antes de ajustar a seção (milissegundos).
•	scrollBar: false → Se true, usa a barra de rolagem nativa do navegador.
•	easing: 'easeInOutCubic' → Tipo de animação do scroll (easing).
•	easingcss3: 'ease' → Tipo de easing para transições CSS3.
•	loopBottom: false → Se true, rola para o topo ao chegar no fim.
•	loopTop: false → Se true, rola para o fim ao chegar no topo.
•	loopHorizontal: true → Se true, permite loop nos slides dentro de uma seção.
•	continuousVertical: false → Permite rolagem infinita entre a primeira e última seção.
•	continuousHorizontal: false → Permite rolagem infinita nos slides horizontais.
•	scrollHorizontally: false → Ativa a rolagem horizontal.
•	interlockedSlides: false → Bloqueia a rolagem de slides até que o usuário ative.
•	dragAndMove: false → Permite arrastar com o mouse/touch para mover as seções.
•	offsetSections: false → Permite deslocar seções (pode ser útil para cabeçalhos fixos).
•	resetSliders: false → Reseta os slides ao sair da seção.
•	fadingEffect: false → Ativa um efeito de fade ao trocar de seção.
•	normalScrollElements: '#element1, .element2' → Permite scroll normal dentro de certos elementos.
•	scrollOverflow: true → Habilita rolagem dentro de seções que ultrapassam a tela.
•	scrollOverflowMacStyle: false → Ativa estilo de rolagem do MacOS.
•	scrollOverflowReset: false → Reseta a rolagem interna de uma seção ao sair.
•	skipIntermediateItems: false → Se true, permite pular seções intermediárias ao navegar rapidamente.
•	touchSensitivity: 15 → Sensibilidade do touch no mobile.
•	bigSectionsDestination: null → Define para onde rolar quando a seção é maior que a tela (top, bottom).

🦾 Accessibility (Acessibilidade)
•	keyboardScrolling: true → Ativa navegação pelo teclado (Page Up/Down, Setas).
•	animateAnchor: true → Ativa animação ao navegar por anchors (#about).
•	recordHistory: true → Atualiza a URL com o anchor (permite botão “Voltar” no navegador).

🎨 Design
•	controlArrows: true → Mostra setas para navegar entre slides.
•	controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'] → Define HTML personalizado para as setas.
•	verticalCentered: true → Centraliza o conteúdo verticalmente dentro das seções.
•	sectionsColor: ['#ccc', '#fff'] → Define cores diferentes para cada seção.
•	fixedElements: '#header, .footer' → Mantém elementos fixos na tela.
•	responsiveWidth: 0 → Desativa o Fullpage.js abaixo de uma largura específica.
•	responsiveHeight: 0 → Desativa o Fullpage.js abaixo de uma altura específica.
•	responsiveSlides: false → Desativa slides abaixo de um tamanho específico.
•	parallax: false → Ativa efeito parallax nas seções.
•	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'} → Configurações do parallax.
•	dropEffect: false → Adiciona um efeito de queda ao trocar de seção.
•	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999} → Configuração do efeito de queda.
•	waterEffect: false → Ativa efeito de ondulação na rolagem.
•	waterEffectOptions: { animateContent: true, animateOnMouseMove: true} → Configurações do efeito de água.
•	cards: false → Ativa um efeito de cartas ao mudar de seção.
•	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true} → Configuração do efeito de cartas.

🔍 Custom Selectors (Selecionadores personalizados)
•	sectionSelector: '.section' → Define qual classe será tratada como seção.
•	slideSelector: '.slide' → Define qual classe será tratada como slide.

🚀 Outras configurações
•	lazyLoading: true → Ativa carregamento lento de imagens/seções.
•	lazyLoadThreshold: 0 → Define um limite para carregar os elementos antes de entrarem na tela.
•	observer: true → Ativa um MutationObserver para detectar mudanças no DOM.
•	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'} → Exibe um pequeno crédito do Fullpage.js.
