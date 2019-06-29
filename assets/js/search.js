const search = instantsearch({
  indexName: 'devqa',
  searchClient: algoliasearch(
    'MXVECYJVXO',
    '65a34308cb09a0897ab9e0880c498379'
  ),
  searchParameters: {
    restrictSearchableAttributes: [
      'title',
      'content'
    ]
  },
  routing: true,
  searchFunction(helper) {
    const container = document.querySelector('#hits');
    const content = document.querySelector('.site-content');
    const searchbox = document.querySelector('#searchbox');

    if (helper.state.query === '') {
      container.style.display = 'none';
    } else {
      container.style.display = 'block';
      content.style.display = 'none';
      searchbox.style.display = 'block';
    }

    helper.search();
  }
});

const hitTemplate = function(hit) {

  let url = `{{ site.baseurl }}${hit.url}#${hit.anchor}`;

  const title = hit._highlightResult.title.value;

  let breadcrumbs = '';
  if (hit._highlightResult.headings) {
    breadcrumbs = hit._highlightResult.headings.map(match => {
      return `<span class="post-breadcrumb">${match.value}</span>`
    }).join(' > ')
  }

  const content = hit._highlightResult.html.value;

  return `
    <div class="post-item">
      <h2><a class="post-link" href="${url}">${title}</a></h2>
      {{#breadcrumbs}}<a href="${url}" class="post-breadcrumbs">${breadcrumbs}</a>{{/breadcrumbs}}
      <div class="post-snippet">${content}</div>
    </div>
  `;
}

// instantiate custom widget
search.addWidget(
  instantsearch.widgets.searchBox({
    container:"#searchbox",
    placeholder:"Type to search",
    autofocus: true,
    showSubmit:false,
    showReset:false
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container:"#hits",
    templates:{
      empty:'<div class=""><p>No results found matching <strong>{{query}}</strong>.</p></div>',
      // item:'<a href="{{ url }}" class=""><small>{{type}}</small><h3 class="">{{{_highlightResult.title.value}}}</h3><p class=""><h4>{{{_highlightResult.description.value}}}</h4></p></a>'
      item: `
      <a href={{url}}>
        <small>{{type}}</small>
        <h3 class="font-weight-bold">
          {{{_highlightResult.title.value}}}
        </h3>
        <p>{{{_highlightResult.content.value}}}</p>
      </a>
    `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.poweredBy({
    container: '#powered-by',
  })
);

search.start();

