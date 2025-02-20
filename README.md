# API Routes Documentation

## 1. Login User

### Endpoint:

**POST** `/api/login`

### Description:

Authenticates the user and returns a JWT token.

### Request Body:

```json
{
  "username": "naval.ravikant",
  "password": "05111974"
}
```

### Responses:

- **200 OK**
  ```json
  {
    "JWT": "TOKEN"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "error": "Invalid username or password"
  }
  ```

---

## 2. Enrich Resume

### Endpoint:

**POST** `/api/resume`

### Description:

Uses Gemini LLM to convert raw text into JSON format and stores the result as a new record in the applicants collection in MongoDB.

### Headers:

```json
{
  "Authorization": "Bearer TOKEN"
}
```

### Request Body:

```json
{
  "raw_text": "Applicant paragraph raw text"
}
```

### Responses:

- **200 OK**
  ```json
  {
    "JWT": "TOKEN"
  }
  ```
- **404 Not Found**
  ```json
  {
    "error": "No raw text given"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "error": "Error processing resume"
  }
  ```

---

## Middleware

### Verify User Middleware

### Description:

Middleware function that verifies the JWT token provided in the request's `Authorization` header. If the token is valid, the request proceeds; otherwise, it returns an error response.

### Responses:

- **401 Unauthorized** if no token is provided or if the token is invalid.
- Calls `next()` if the token is valid, allowing the request to continue.
