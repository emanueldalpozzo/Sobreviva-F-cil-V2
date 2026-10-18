// Deixa só a primeira letra maiúscula ("domingo, 13 de set." → "Domingo, 13 de set.")
export function capitalizar(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
