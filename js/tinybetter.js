/*
  Inspired by bling.js from Paul Irish
  https://gist.github.com/paulirish/12fb951a8b893a454b32
  Assembled by Collin Schneider, Twitter: @thinksaydo
  Version 2016.10.16a
*/

// Better queries: all() and one()
window.one = document.querySelector.bind(document)
window.all = document.querySelectorAll.bind(document)

// Better logs: log()
window.log = console.log.bind(console)

// Better object cloning: clone({}, original)
window.clone = function(object) {return Object.assign({}, object);}
//Object.prototype.keys = function() {return Object.keys(this)}

// Better JSON: toJSON() fromJSON()
window.toJSON = JSON.stringify.bind(JSON)
window.fromJSON = JSON.parse.bind(JSON)

// Better AJAX: ajax()
window.ajax = function(method, endpoint, data, callback) {
  var statusCode,
      payload

  method = method || 'POST'
  data = data || {}

  payload = {
    credentials: 'include',
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (['POST','PATCH','PUT'].includes(payload.method)) {
	  payload.body = JSON.stringify(data)
  }

  fetch(endpoint, payload)
    .then(function(response) {
	    statusCode = response.status
      return response.json()
    })
    .then(function(data) {
      if (typeof callback === 'function') {
        callback(data, statusCode)
      }
    })
}

// Better redirects: redirect()
window.redirect = function(url) {
  window.location.href = url
}

/*
  Better events: on() rather than addEventListener()
  document.body.on('dblclick', evt => {})
  all('p').on('click', el => {})
*/
Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn)
}

NodeList.prototype.__proto__ = Array.prototype

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn)
  })
}
