
import { WeddingCategory, WeddingItem } from './types';

export const INITIAL_WEDDING_ITEMS: WeddingItem[] = [
  // Planejamento e Profissionais
  { id: 'planner', name: 'Cerimonial e Assessoria (Assessoria Completa) - Buttterfly Cerimonial e Eventos (31) 98040-6930', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  { id: 'rsvp-services', name: 'Serviços de RSVP (Ativo e Receptivo)', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  { id: 'wedding-website-gift-list', name: 'Site dos Noivos e Lista de Presentes', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  { id: 'valet-parking', name: 'Manobrista', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  { id: 'doorman', name: 'Porteiro', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  { id: 'security-staff', name: 'Segurança', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  { id: 'restroom-attendant', name: 'Fiscal de Toalete', category: WeddingCategory.PLANNING_PROFESSIONALS, cost: 100, isSelected: false },
  
  // Cerimônia
  { id: 'ceremony-venue-rental', name: 'Aluguel do Local da Cerimônia (se separado)', category: WeddingCategory.CEREMONY, cost: 100, isSelected: false },
  { id: 'church-fees', name: 'Taxas da Igreja/Templo', category: WeddingCategory.CEREMONY, cost: 100, isSelected: false },
  { id: 'celebrant', name: 'Celebrante (Civil ou Religioso)', category: WeddingCategory.CEREMONY, cost: 100, isSelected: false },
  { id: 'ceremony-music', name: 'Música para Cerimônia (Som, Microfones e Sonoplastia)', category: WeddingCategory.CEREMONY, cost: 100, isSelected: false },
  { id: 'registry-office-fees', name: 'Taxas de Cartório (Casamento Civil)', category: WeddingCategory.CEREMONY, cost: 100, isSelected: false },
  { id: 'catholic-documentation', name: 'Documentação Religiosa Católica (Curso, Batistério, etc.)', category: WeddingCategory.CEREMONY, cost: 100, isSelected: false },

  // Recepção: Local e Buffet
  { id: 'reception-venue-rental', name: 'Aluguel do Espaço da Recepção', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false },
  { id: 'catering', name: 'Buffet (por pessoa, ex: 100 convidados)', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false },
  { id: 'drinks-open-bar', name: 'Bebidas (incluindo Open Bar Básico)', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false },
  { id: 'wedding-cake', name: 'Bolo de Casamento', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false },
  { id: 'sweets-desserts', name: 'Doces Finos e Bem-Casados', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false, notes: '1 e meio por convidado' },
  { id: 'power-generator', name: 'Gerador de Energia', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false },
  { id: 'climate-control', name: 'Climatizadores (Ar Condicionado/Aquecedores)', category: WeddingCategory.RECEPTION_VENUE_CATERING, cost: 100, isSelected: false },

  // Trajes e Acessórios
  { id: 'bride-dress', name: 'Vestido da Noiva', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },
  { id: 'bride-accessories', name: 'Véu, Grinalda e Acessórios da Noiva', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },
  { id: 'bride-shoes', name: 'Sapatos da Noiva', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },
  { id: 'groom-suit', name: 'Traje do Noivo', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },
  { id: 'groom-shoes', name: 'Sapatos do Noivo', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },
  { id: 'wedding-rings', name: 'Alianças', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },
  { id: 'personalized-robes', name: 'Robes Personalizados (Noiva, Mães, Madrinhas)', category: WeddingCategory.ATTIRE_ACCESSORIES, cost: 100, isSelected: false },

  // Beleza
  { id: 'bride-hair-makeup', name: 'Cabelo e Maquiagem da Noiva (com teste)', category: WeddingCategory.BEAUTY, cost: 100, isSelected: false },
  { id: 'grooming-groom', name: 'Barbeiro/Cabelo do Noivo', category: WeddingCategory.BEAUTY, cost: 100, isSelected: false },
  { id: 'spa-day-bride', name: 'Dia da Noiva', category: WeddingCategory.BEAUTY, cost: 100, isSelected: false },

  // Flores e Decoração
  { id: 'ceremony-decor', name: 'Decoração da Cerimônia', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'reception-decor', name: 'Decoração da Recepção (mesas, ambiente)', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'decor-furniture', name: 'Mobiliário Decorativo (Lounges, Mesas, etc.)', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'decor-lighting', name: 'Iluminação Decorativa (Varal de Luz, Velas, Cênica, Lustres)', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'decor-aisle-runner', name: 'Passarela para Cerimônia (Madeira ou Espelho)', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'bride-bouquet', name: 'Buquê da Noiva', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'boutonnieres-corsages', name: 'Flores de Lapela e Corsages', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'decor-other-items', name: 'Outros Itens de Decoração (Cantinho Instagramável, Arranjos Extras, Arco de Altar, Aéreo de Bolo)', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  { id: 'decor-setup-takedown-freight', name: 'Montagem, Recolha e Frete (Decoração)', category: WeddingCategory.FLOWERS_DECOR, cost: 100, isSelected: false },
  
  // Fotografia e Vídeo
  { id: 'photographer', name: 'Fotógrafo (Pacote Completo)', category: WeddingCategory.PHOTO_VIDEO, cost: 100, isSelected: false },
  { id: 'videographer', name: 'Videomaker (Pacote Completo)', category: WeddingCategory.PHOTO_VIDEO, cost: 100, isSelected: false },
  { id: 'photo-album', name: 'Álbum de Fotos Impresso', category: WeddingCategory.PHOTO_VIDEO, cost: 100, isSelected: false },
  { id: 'pre-wedding-shoot', name: 'Ensaio Pré-Wedding', category: WeddingCategory.PHOTO_VIDEO, cost: 100, isSelected: false },

  // Música e Entretenimento
  { id: 'dj-reception', name: 'DJ para Recepção', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  { id: 'band-reception', name: 'Banda para Recepção (opcional)', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  { id: 'sound-lighting-equipment', name: 'Equipamento de Som e Iluminação Pista', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  { id: 'specialty-carts', name: 'Carrinhos Especiais (Churros, Sorvete, Cachaça, Brigadeiro, etc.)', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  { id: 'photo-booth', name: 'Cabine de Fotos (Totem, Polaroid, 360)', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  { id: 'choreographer', name: 'Coreógrafo para Dança dos Noivos', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  { id: 'kids-area-recreation', name: 'Espaço Kids e Recreação', category: WeddingCategory.MUSIC_ENTERTAINMENT, cost: 100, isSelected: false },
  
  // Papelaria
  { id: 'invitations', name: 'Convites (100 unidades)', category: WeddingCategory.STATIONERY, cost: 100, isSelected: false }, 
  { id: 'save-the-date', name: 'Save the Date (digital ou impresso)', category: WeddingCategory.STATIONERY, cost: 100, isSelected: false },
  { id: 'menus-place-cards', name: 'Menus e Marcadores de Lugar', category: WeddingCategory.STATIONERY, cost: 100, isSelected: false },
  { id: 'thank-you-cards', name: 'Cartões de Agradecimento', category: WeddingCategory.STATIONERY, cost: 100, isSelected: false },

  // Transporte
  { id: 'bride-groom-car', name: 'Carro para os Noivos', category: WeddingCategory.TRANSPORT, cost: 100, isSelected: false },
  { id: 'guest-transport', name: 'Transporte para Convidados (van, ônibus)', category: WeddingCategory.TRANSPORT, cost: 100, isSelected: false },

  // Lembrancinhas
  { id: 'favors', name: 'Lembrancinhas (100 unidades)', category: WeddingCategory.FAVORS, cost: 100, isSelected: false }, 

  // Lua de Mel (Opcional)
  { id: 'honeymoon-flights', name: 'Passagens Aéreas Lua de Mel', category: WeddingCategory.HONEYMOON, cost: 100, isSelected: false },
  { id: 'honeymoon-accommodation', name: 'Hospedagem Lua de Mel (7 noites)', category: WeddingCategory.HONEYMOON, cost: 100, isSelected: false },
  { id: 'honeymoon-spending', name: 'Gastos Lua de Mel (passeios, alimentação)', category: WeddingCategory.HONEYMOON, cost: 100, isSelected: false },
  
  // Outros e Contingência
  { id: 'wedding-night-hotel', name: 'Noite de Núpcias (Hotel)', category: WeddingCategory.CONTINGENCY_OTHER, cost: 100, isSelected: false },
  { id: 'gifts-parents-bridalparty', name: 'Presentes para Pais e Padrinhos', category: WeddingCategory.CONTINGENCY_OTHER, cost: 100, isSelected: false },
  { id: 'contingency-fund', name: 'Fundo de Contingência (10-15%)', category: WeddingCategory.CONTINGENCY_OTHER, cost: 100, isSelected: false, notes: 'Ajustar conforme o total' },
];

export const CATEGORY_ORDER: WeddingCategory[] = [
  WeddingCategory.PLANNING_PROFESSIONALS,
  WeddingCategory.CEREMONY,
  WeddingCategory.RECEPTION_VENUE_CATERING,
  WeddingCategory.ATTIRE_ACCESSORIES,
  WeddingCategory.BEAUTY,
  WeddingCategory.FLOWERS_DECOR,
  WeddingCategory.PHOTO_VIDEO,
  WeddingCategory.MUSIC_ENTERTAINMENT,
  WeddingCategory.STATIONERY,
  WeddingCategory.TRANSPORT,
  WeddingCategory.FAVORS,
  WeddingCategory.HONEYMOON,
  WeddingCategory.CONTINGENCY_OTHER,
];
