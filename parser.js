/**
 * Parse the query params safely
 */
module.exports = (req, res, next) => {
  let parsed = {}, p = req.query
  try {
    for (var key in p) {
      if (p.hasOwnProperty(key)) parsed[key] = JSON.parse(p[key])
    }
  }catch(e) {
    next()
  }
  req.query = parsed
  next()
}
