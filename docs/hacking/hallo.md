---
sidebar_position: 9
title: "Hacking - Hallo"
---

# Hacking - Hallo

> **[Open deze challenge op ctf.hackchallenges.nl](https://ctf.hackchallenges.nl/)** - zoek naar *"Hallo"* onder Hacking.

**Moeilijkheid:** ⭐⭐⭐ Moeilijk

## Beschrijving
Wat mag wel en wat mag niet? Soms accepteert een website invoer die het eigenlijk niet zou moeten accepteren.

## Hints

:::tip Hint 1
Deze challenge gaat waarschijnlijk over **input validatie**. Probeer verschillende soorten invoer in te voeren.
:::

:::tip Hint 2
Denk aan speciale tekens, HTML-tags, of JavaScript-code. Wat gebeurt er als je `<script>alert('hallo')</script>` invoert?
:::

:::tip Hint 3
Dit heet **Cross-Site Scripting (XSS)** - een kwetsbaarheid waarbij je eigen code kunt injecteren in een webpagina. Probeer HTML of JavaScript in te voeren in invoervelden.
:::

## Wat je leert
- Wat Cross-Site Scripting (XSS) is
- Waarom input-validatie cruciaal is
- Hoe aanvallers onveilige invoervelden kunnen misbruiken
