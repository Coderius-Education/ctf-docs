---
sidebar_position: 8
title: "Hacking - Koekjes 2"
---

# Hacking - Koekjes 2

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Koekjes 2"* onder Hacking.

**Moeilijkheid:** ⭐⭐⭐ Moeilijk

## Onderwerp
**Cookies (wijzigen)**

## Beschrijving
Je kunt cookies niet alleen bekijken, maar ook **wijzigen**. Wat gebeurt er als je de waarde van een cookie aanpast?

## Hints

:::tip Hint 1
Open de **Developer Tools** (F12) en ga naar **Application** > **Cookies**.

Lees meer: [Chrome DevTools - Cookies](https://developer.chrome.com/docs/devtools/application/cookies?hl=nl)
:::

:::tip Hint 2
Je kunt op een cookie-waarde **dubbelklikken** om deze te wijzigen. Probeer de waarde aan te passen en laad de pagina opnieuw.
:::

:::tip Hint 3
Kijk naar de naam van de cookie voor een hint over welke waarde je moet invullen. Denk aan waarden als `true`, `admin`, `1`, of andere logische opties.
:::

## Wat je leert
- Hoe je cookies kunt wijzigen via de Developer Tools
- Waarom je nooit alleen op client-side cookies moet vertrouwen voor beveiliging
- Het gevaar van het opslaan van autorisatie-informatie in cookies
