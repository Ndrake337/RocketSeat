// '?search=Matheus'

export function extractQueryParams(query) {
  // ['search=Matheus', 'page=2']
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=')

    queryParams[key] = value

    return queryParams
  }, {})
}