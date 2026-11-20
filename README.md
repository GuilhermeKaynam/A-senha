# A Senha do Leilão — Landing Page

Landing page de vendas para um curso sobre leilões de veículos. Estudo de página de conversão com seções de benefícios, vídeo, oferta e chamadas para ação, construída em React com animações ao rolar a página.

## Funcionalidades

- **Hero** com título, vídeo de apresentação e chamada para ação.
- **Benefícios** do curso em cards (módulos como funcionamento dos leilões, etapas do processo e estratégia de arremate).
- **Player de vídeo** com modal.
- **Bloco de oferta** com preço original e preço promocional.
- **Animações ao rolar** com `IntersectionObserver` (componente `AnimateOnScroll`).
- Layout responsivo.

> **Elementos de demonstração:** o cronômetro de oferta (reinicia em 5 minutos) e as notificações de compra (nomes sorteados de uma lista fixa) são simulados no front-end e não refletem dados reais.

## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Estrutura de diretórios

```
A-senha/
├── public/            # vídeos da página
└── src/
    ├── components/    # Hero, Benefits, BenefitCard, VideoSection, VideoPlayer,
    │                  # VideoModal, OfferBox, TimedOffer, Timer, CallToAction,
    │                  # PurchaseNotification, AnimateOnScroll, Header
    ├── App.tsx
    └── main.tsx
```

## Como executar localmente

Pré-requisito: Node.js 18+.

```bash
git clone https://github.com/GuilhermeKaynam/A-senha.git
cd A-senha
npm install
npm run dev
```

Acesse `http://localhost:5173`. Não há variáveis de ambiente.

## Melhorias futuras

- Hospedar os vídeos (cerca de 39 MB em `public/`) em um serviço externo para reduzir o tamanho do repositório.
