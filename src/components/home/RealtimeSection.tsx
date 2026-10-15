import { RealtimeStage } from '@/components/site/offer/RealtimeScene';

// Estoque em tempo real, numa cena presa à tela (100% visível): o Localizador
// no desenho do Dinn em produção. A cena corre sozinha, pela rolagem ou pelo
// clique. A mesma cena está na página do Localizador.

export function RealtimeSection() {
  return <RealtimeStage heading />;
}
