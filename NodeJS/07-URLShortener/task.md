# Custom URL Shortener

Design a URL shortener service that takes in a valid URL and returns a shortened URL, redirecting user to previously provided URL

### Also keep track of total visits and clicks on URL

## Routes

### POST /URL

Generates a new short URL and returns in format example.com/random-id

### GET /:id

Redirects user to Original URL

### GET /URL/analytics/:id

Returns clicks for provided short id
