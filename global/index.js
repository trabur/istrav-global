const html = `<!DOCTYPE html>
<head>
  <style>
    body {
      margin: 0;
    }
  </style>
  <script src="//unpkg.com/d3"></script>
  <script src="//unpkg.com/d3-dsv"></script>
  <script src="//unpkg.com/globe.gl"></script>
</head>
<body>
  <div id="globeViz"></div>

  <script>
    const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
      .domain([0, 1e7]);

    const world = Globe()
      (document.getElementById('globeViz'))
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .hexBinPointWeight('pop')
      .hexAltitude(d => d.sumWeight * 6e-8)
      .hexBinResolution(4)
      .hexTopColor(d => weightColor(d.sumWeight))
      .hexSideColor(d => weightColor(d.sumWeight))
      .hexBinMerge(true)
      .enablePointerInteraction(false); // performance improvement

    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/world_population.csv').then(res => res.text())
      .then(csv => d3.csvParse(csv, ({ lat, lng, pop }) => ({ lat: +lat, lng: +lng, pop: +pop })))
      .then(data => world.hexBinPointsData(data));

    // Add auto-rotation
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.6;
  </script>
</body>`;

function handleRequest(request) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});
