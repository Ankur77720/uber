# Uber clone endpoint

## User Registration

### Endpoint
`POST /users/register`

### Description
Registers a new user by accepting their details and returns the user object along with an authentication token.

### Request Body
```json
{
    "fullname": {
        "firstname": "String",
        "lastname": "String"
    },
    "email": "String",
    "password": "String"
}

```

	•	fullname: Object containing user’s first and last names.
	•	firstname: User’s first name.
	•	lastname: User’s last name.
	•	email: User’s email address.
	•	password: User’s password.

Response

``` json
{
    "user": {
        
        "fullname": {
            "firstname": "String",
            "lastname": "String"
        },
        "email": "String",
        "password":"String",
        "_id": "String",
        "__v":"String",
    },
    "token": "String"
}

```

	•	user: Object containing registered user’s details.
	•	id: Unique identifier for the user.
	•	fullname: Object containing user’s first and last names.
	•	email: User’s email address.
	•	token: Authentication token for the user.

Status Codes

	•	201 Created: User registered successfully.
	•	400 Bad Request: Missing or invalid fields in the request body.

## User Login

### Endpoint
`POST /users/login`

### Description
Authenticates a user by accepting their email and password and returns the user object along with an authentication token.

### Request Body
```json
{
    "email": "String",
    "password": "String"
}
```

	•	email: User’s email address.
	•	password: User’s password.

### Response
```json
{
    "user": {
        "fullname": {
            "firstname": "String",
            "lastname": "String"
        },
        "email": "String",
        "password": "String",
        "_id": "String",
        "__v": "String"
    },
    "token": "String"
}
```

	•	user: Object containing authenticated user’s details.
	•	id: Unique identifier for the user.
	•	fullname: Object containing user’s first and last names.
	•	email: User’s email address.
	•	token: Authentication token for the user.

### Status Codes

	•	200 OK: User authenticated successfully.
	•	400 Bad Request: Missing or invalid fields in the request body.
	•	401 Unauthorized: Invalid email or password.

## User Profile

### Endpoint
`GET /users/profile`

### Description
Fetches the profile of the authenticated user.

### Headers
- `Authorization`: Bearer token for user authentication.

### Response
```json
{
    "user": {
        "fullname": {
            "firstname": "String",
            "lastname": "String"
        },
        "email": "String",
        "_id": "String",
        "__v": "String"
    }
}
```

	•	user: Object containing authenticated user’s details.
	•	id: Unique identifier for the user.
	•	fullname: Object containing user’s first and last names.
	•	email: User’s email address.

### Status Codes

	•	200 OK: User profile fetched successfully.
	•	401 Unauthorized: Invalid or missing authentication token.