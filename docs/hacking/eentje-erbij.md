---
sidebar_position: 2
title: "Hacking - Eentje erbij"
---

# Hacking - Eentje erbij

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Eentje erbij"* onder Hacking.

**Moeilijkheid:** ⭐ Makkelijk

## Beschrijving
Soms is de oplossing zo simpel als het aanpassen van de URL in je browser.

## Hints

:::tip Hint 1
Bekijk de **URL** in de adresbalk goed. Staat er een getal of parameter in?
:::

:::tip Hint 2
Probeer de waarde in de URL te **veranderen**. Als er bijvoorbeeld een `1` in staat, probeer dan `2`, of als er `page=1` staat, probeer `page=2`.
:::

:::tip Hint 3
Dit heet **IDOR** (Insecure Direct Object Reference) - een veelvoorkomende kwetsbaarheid waarbij je door het aanpassen van een parameter in de URL toegang krijgt tot andere gegevens.
:::

## Wat je leert
- Wat IDOR (Insecure Direct Object Reference) is
- Hoe URL-parameters werken
- Waarom input-validatie belangrijk is aan de serverzijde
