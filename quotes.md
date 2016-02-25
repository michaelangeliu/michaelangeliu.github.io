---
layout: page
title: Quotes
permalink: /quotes/
---

<ul>
{% for quote in site.data.quotes %}
  <li>
      "{{ quote.text }}"
      {% if quote.attribution %}
        ~ <em>{{ quote.attribution }}</em>
      {% endif %}
      {% if quote.date %}
        ~ {{ quote.date }}
      {% endif %}
  </li>
{% endfor %}
</ul>