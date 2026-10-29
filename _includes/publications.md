<section class="content-section" aria-labelledby="publications">
  <h2 id="publications" tabindex="-1">Publications</h2>
  <ol class="bibliography" role="list">
    {% for publication in site.data.publications.main %}
    <li class="dated-row">
      <span class="entry-date publication-number" aria-hidden="true">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
      <div class="entry-content">
        <h3 class="publication-title">{{ publication.title | escape }}</h3>
        <p class="publication-authors">{{ publication.authors }}</p>
        {% if publication.conference %}
        <p class="publication-venue">{{ publication.conference | escape }}</p>
        {% endif %}
        {% if publication.topics %}
        <p class="publication-topics">Topics: {{ publication.topics | escape }}</p>
        {% endif %}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
