# settings.py
# Import necessary modules
import os
from dotenv import load_dotenv  # Used for loading environment variables from a .env file
from pathlib import Path  # For working with filesystem paths
from datetime import timedelta  # For time-related settings

# Load environment variables from .env file
load_dotenv()

# Define the base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# Secret key for cryptographic signing, loaded from environment variables for security
SECRET_KEY = os.getenv('your-secret-key')

# Debug mode setting, should be False in production for security
DEBUG = True

# List of allowed hosts that can access the server
ALLOWED_HOSTS = ['127.0.0.1', '10.0.2.2', '192.168.41.113']

# Installed apps required for this project, including Django defaults and third-party packages
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework', # For building REST APIs
    'corsheaders', # To allow Cross-Origin Resource Sharing (CORS)
    'social_django', # For social authentication
    'rest_framework_simplejwt.token_blacklist', # For JWT token management

]

# Middleware for handling requests and responses
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'social_django.middleware.SocialAuthExceptionMiddleware',
]

# Root URL configuration for the project
ROOT_URLCONF = 'myproject3.urls'

# Template settings for rendering HTML
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [], # Directories for custom templates
        'APP_DIRS': True, # Enable automatic template discovery
        'OPTIONS': {
            'context_processors': [ # Add context processors for use in templates
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

# WSGI application for serving the project
WSGI_APPLICATION = 'myproject3.wsgi.application'

# Database configuration, using SQLite as the default
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation settings to ensure strong passwords
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Localization settings
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# URL for serving static files
STATIC_URL = '/static/'

# Default field type for primary keys
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Django REST Framework settings for APIs
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication', # Use JWT for auth
    ],
}

# JWT (JSON Web Token) settings for secure token-based authentication
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}

# CORS settings to allow requests from specific origins
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000', 
    'exp://192.168.41.113:8081',  #This url will be changed as EXPO url
    'http://192.168.1.100',  
]
CORS_ALLOW_CREDENTIALS = True # Allow sending credentials like cookies

# Social authentication settings for Google
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = os.getenv("SOCIAL_AUTH_GOOGLE_OAUTH2_KEY")
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = os.getenv("SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET")
SOCIAL_AUTH_REDIRECT_URI = os.getenv("SOCIAL_AUTH_REDIRECT_URI")
SOCIAL_AUTH_REDIRECT_IS_HTTPS = os.getenv("SOCIAL_AUTH_REDIRECT_IS_HTTPS")
SOCIAL_AUTH_URL_NAMESPACE = os.getenv("SOCIAL_AUTH_URL_NAMESPACE")

SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
    'openid',
    'profile',
    'email'
]

# Authentication backends for login
AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend', # Default Django backend
)

# URL for login and logout redirection
LOGIN_URL = 'login'
LOGOUT_URL = 'logout'
LOGIN_REDIRECT_URL = '127.0.0.1' # Redirect after successful login




