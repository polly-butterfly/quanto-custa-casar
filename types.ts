
export enum WeddingCategory {
  PLANNING_PROFESSIONALS = "Planejamento e Profissionais",
  CEREMONY = "Cerimônia",
  RECEPTION_VENUE_CATERING = "Recepção: Local e Buffet",
  ATTIRE_ACCESSORIES = "Trajes e Acessórios",
  BEAUTY = "Beleza",
  FLOWERS_DECOR = "Flores e Decoração",
  PHOTO_VIDEO = "Fotografia e Vídeo",
  MUSIC_ENTERTAINMENT = "Música e Entretenimento",
  STATIONERY = "Papelaria",
  TRANSPORT = "Transporte",
  FAVORS = "Lembrancinhas",
  HONEYMOON = "Lua de Mel (Opcional)",
  CONTINGENCY_OTHER = "Outros e Contingência",
}

export interface WeddingItem {
  id: string;
  name: string;
  category: WeddingCategory;
  cost: number;
  isSelected: boolean;
  notes?: string; // Optional field for short notes or assumptions like "por pessoa"
}
