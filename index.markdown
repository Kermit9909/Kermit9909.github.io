---
layout: home
title: "Kermit's Blog"
excerpt: "Exploring IT networking, security skills, and government security news."
header:
  image: "assets/images/hero-image.jpg"  # No leading slash
  caption: "Welcome to my blog!"
author_profile: true
---

Check out my latest posts below!

{% for post in site.posts %}
  <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
