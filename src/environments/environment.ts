export const environment = {
  production: false,
  BASE_API_URL:  'http://localhost:8080/',
  KEYCLOAK_URL: 'http://localhost:8084/auth',
  KEYCLOAK_REALM: 'FAB',
  KEYCLOAK_CLIENT_ID: 'ensino-client',
  KEYCLOAK_REDIRECT_URI:
    'http://localhost:4200/app-context/assets/silent-check-sso.html',
  FRONT_URL: 'http://localhost:4200/app-context',
  SHOW_LOGGING_ROUTES: false,
};

