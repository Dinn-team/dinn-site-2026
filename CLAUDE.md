# Dinn site — regras para IA

## Texto do site: Simplified Technical English (ASD-STE100)

Todo texto de interface e de site (`src/i18n/locales/*`) segue o ASD-STE100.
Escreva em EN primeiro. Depois adapte PT e ES com a mesma estrutura e o mesmo tamanho.

Regras:

1. Frase curta: até 20 palavras em instrução, até 25 em descrição.
2. Um assunto por frase. Divida frases com "and", "which", "while".
3. Voz ativa e tempo simples. Evite voz passiva, gerúndio e condicional desnecessário.
4. Verbo simples e concreto: "use", "show", "send", "see". Evite "leverage", "enable", "empower", "streamline", "unlock".
5. Um termo por conceito. Não troque sinônimos. Termos da Dinn: *signal*, *stock-out*, *sell-through*, *coverage*, *source*, *refresh*.
6. Corte adjetivo e advérbio de marketing ("powerful", "seamless", "robust", "real-time" sem dado).
7. Sem metáfora e sem frase retórica. Diga o que o produto faz.
8. Título: até 8 palavras. Botão: 1 a 3 palavras, verbo no início.
9. Mantenha: números, nomes de produto, nomes de empresa, marcação `*destaque*`, `<a>` e placeholders `{x}`.
10. Não reescreva texto jurídico (`privacy`, termos de uso). Só corte erro óbvio.

Regras de estrutura:

- Não mude chaves, ordem das chaves, nem o formato do arquivo.
- PT e ES devem ter a mesma chave que EN. Se o EN mudou, o PT e o ES mudam junto.
- Não invente dado, número ou promessa que o texto original não tinha.
- Mantenha o sentido. Se um corte tirar informação útil, mantenha a informação.
