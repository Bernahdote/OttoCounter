import os
from flask import Flask, jsonify
import requests
from base64 import b64encode

app = Flask(__name__)

CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")