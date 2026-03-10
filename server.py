import http.server
import os

port = int(os.environ.get("PORT", 8001))

# SPA route prefixes — these are client-side routes, not real files
SPA_ROUTES = (
    "/styleguide/getting-started", "/styleguide/tokens",
    "/styleguide/typography", "/styleguide/colors",
    "/styleguide/spacing", "/styleguide/elevation",
    "/styleguide/motion", "/styleguide/iconography",
    "/styleguide/map", "/styleguide/components",
    "/styleguide/patterns", "/styleguide/guidelines",
    "/styleguide/live-activities",
)


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirect root to styleguide
        if self.path == "/":
            self.send_response(301)
            self.send_header("Location", "/styleguide/")
            self.end_headers()
            return

        # SPA fallback: serve index.html for client-side routes
        clean = self.path.split("?")[0].rstrip("/")
        if clean in SPA_ROUTES or clean == "/styleguide":
            self.path = "/styleguide/index.html"

        return super().do_GET()


httpd = http.server.HTTPServer(("0.0.0.0", port), Handler)
print(f"Serving on :{port}")
httpd.serve_forever()
