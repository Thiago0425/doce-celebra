export const site = {
  name: "Doce Celebra",
  whatsapp: "5511978991224",
  whatsappMessage: "",
  hours: "Seg a sáb, 8h às 19h",
  leadTime: "2 dias de antecedência",
  delivery: "Entrega em Osasco · retirada em Guarulhos",
  makers: "Thiago",
} as const;

export const whatsappUrl = site.whatsappMessage
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : `https://wa.me/${site.whatsapp}`;
