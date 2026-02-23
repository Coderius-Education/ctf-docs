---
sidebar_position: 4
title: "Code - Base64"
---

# Code - Base64

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Base64"* onder Code.

**Moeilijkheid:** ⭐⭐ Gemiddeld

## Onderwerp
**Base64 encoding**

## Beschrijving
De flag is gecodeerd in Base64. Kun je het decoderen?

## Wat je leert
- Wat Base64 encoding is en hoe het werkt
- Het verschil tussen encoding en encryptie
- Hoe je Base64 kunt herkennen en decoderen

## Hints

<details>
<summary>Hint 1</summary>

**Base64** is een coderingsmethode die binaire data omzet naar leesbare ASCII-tekens. Het is geen encryptie — het is eenvoudig om te keren.

</details>

<details>
<summary>Hint 2</summary>

Base64-gecodeerde tekst herken je aan:
- Gebruik van letters (a-z, A-Z), cijfers (0-9), en + en /
- Eindigt vaak op = of == (padding)

</details>

<details>
<summary>Hint 3</summary>

Decodeer de tekst met een online tool:
- [base64decode.org](https://www.base64decode.org/)
- De browserconsole: typ atob("gecodeerde_tekst")
- [CyberChef](https://gchq.github.io/CyberChef/) met de "From Base64" operatie

</details>
