import http.server
import os

port = int(os.environ.get("PORT", 8001))

handler = http.server.SimpleHTTPRequestHandler
httpd = http.server.HTTPServer(("0.0.0.0", port), handler)
print(f"Serving on :{port}")
httpd.serve_forever()
