---
sidebar_position: 7
title: "Hacking - Headers"
---

# Hacking - Headers

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Headers"* onder Hacking.

**Moeilijkheid:** ⭐⭐ Gemiddeld

## Onderwerp
**HTTP Headers**

## Beschrijving
Elke keer dat je browser een pagina opvraagt, worden er HTTP-headers meegestuurd. Deze bevatten extra informatie over het verzoek en het antwoord.

## Hints

:::tip Hint 1
Open de **Developer Tools** (F12) en ga naar het tabblad **Network**.
:::

:::tip Hint 2
Laad de pagina opnieuw (F5) terwijl het Network-tabblad open is. Klik op het eerste verzoek in de lijst en bekijk de **Response Headers**.
:::

:::tip Hint 3
De flag kan verborgen zijn in een van de **response headers**. Bekijk alle headers goed - er kan een aangepaste header tussen staan met de flag.
:::

## Wat je leert
- Wat HTTP-headers zijn
- Hoe je HTTP-headers kunt bekijken in de Developer Tools
- Welke standaard en aangepaste headers er bestaan
