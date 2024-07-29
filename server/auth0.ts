const { auth, requiredScopes } = require('express-oauth2-jwt-bearer')

const checkJwt = auth({
  audience: 'https://ds1-calculator/api',
  issuerBaseURL: `https://dev-kelly.au.auth0.com/`,
})

export default checkJwt

const checkScopes = requiredScopes('read:messages')
// used with permissions in auth0 api
