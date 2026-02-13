---
sidebar_position: 5
title: "Forensics - Niet gevonden"
---

# Forensics - Niet gevonden

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Niet gevonden"* onder Forensics.

**Moeilijkheid:** ⭐⭐ Gemiddeld

## Beschrijving
Je downloadt een bestand, maar het lijkt niet te openen. Misschien is de bestandsextensie niet correct?

## Hints

:::tip Hint 1
Download het bestand en bekijk het. De huidige extensie klopt mogelijk niet met het werkelijke bestandstype.
:::

:::tip Hint 2
Probeer de **extensie te veranderen** naar veelvoorkomende types zoals `.txt`, `.png`, `.jpg`, `.pdf`, `.zip`, etc. en open het bestand opnieuw.
:::

:::tip Hint 3
Je kunt ook de eerste bytes van een bestand bekijken (de "magic bytes" of "file signature") om te bepalen welk type bestand het is. Een hex editor kan hierbij helpen.
:::

## Wat je leert
- Dat bestandsextensies slechts een label zijn en niet het werkelijke bestandstype bepalen
- Hoe je het werkelijke type van een bestand kunt achterhalen
- Wat magic bytes / file signatures zijn
