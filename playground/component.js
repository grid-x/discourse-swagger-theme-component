window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "./petstore-with-samples.json",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ]
  })

  window.ui = ui
}