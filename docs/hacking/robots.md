---
sidebar_position: 3
title: "Hacking - Robots"
---

# Hacking - Robots

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Robots"* onder Hacking.

**Moeilijkheid:** ⭐ Makkelijk

## Onderwerp
**robots.txt**

## Beschrijving
Websites gebruiken een speciaal bestand om zoekmachines te vertellen welke pagina's ze wel en niet mogen indexeren. Dit bestand is publiek toegankelijk.

## Hints

:::tip Hint 1
Voeg **`/robots.txt`** toe achter de basis-URL van de challenge-website.
:::

:::tip Hint 2
Het `robots.txt` bestand bevat regels voor webcrawlers. Regels met `Disallow:` geven aan welke paden niet geindexeerd mogen worden - maar dat betekent niet dat je er niet naartoe kunt navigeren!
:::

:::tip Hint 3
Bekijk de `Disallow`-regels in het `robots.txt` bestand. Navigeer vervolgens naar de paden die daar vermeld staan om de flag te vinden.
:::

## Wat je leert
- Wat het `robots.txt` bestand is en waarvoor het dient
- Hoe zoekmachines websites indexeren
- Dat `robots.txt` geen beveiligingsmechanisme is
