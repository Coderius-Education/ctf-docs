---
sidebar_position: 6
title: "Code - Base64"
---

# Code - Base64

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Base64"* onder Code.

**Moeilijkheid:** ⭐⭐ Gemiddeld

## Beschrijving
De flag is gecodeerd in Base64. Kun je het decoderen?

## Hints

:::tip Hint 1
**Base64** is een coderingsmethode die binaire data omzet naar leesbare ASCII-tekens. Het is geen encryptie - het is eenvoudig om te keren.
:::

:::tip Hint 2
Base64-gecodeerde tekst herken je aan:
- Gebruik van letters (a-z, A-Z), cijfers (0-9), en `+` en `/`
- Eindigt vaak op `=` of `==` (padding)
:::

:::tip Hint 3
Decodeer de tekst met een online tool:
- [base64decode.org](https://www.base64decode.org/)
- De browserconsole: `atob("gecodeerde_tekst")`
- [CyberChef](https://gchq.github.io/CyberChef/) met de "From Base64" operatie
:::

## Wat je leert
- Wat Base64 encoding is en hoe het werkt
- Het verschil tussen encoding en encryptie
- Hoe je Base64 kunt herkennen en decoderen
