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

## Captain Registration

### Endpoint
`POST /captains/register`

### Description
Registers a new captain by accepting their details and returns the captain object along with an authentication token.

### Request Body
```json
{
    "fullname": {
        "firstname": "String",
        "lastname": "String"
    },
    "email": "String",
    "password": "String",
    "license": "String",
    "vehicle": {
        "licencePlate": "String",
        "vehicleType": "String",
        "color": "String",
        "capacity":"Number"
    }
}
```

    - fullname: Object containing captain’s first and last names.
        - firstname: Captain’s first name.
        - lastname: Captain’s last name.
    - email: Captain’s email address.
    - password: Captain’s password.
    - license: Captain’s driving license number.
    - vehicle: Object containing captain’s vehicle details.
        - licencePlate: Vehicle's license plate number.
        - vehicleType: Type of the vehicle.
        - color: Color of the vehicle.
        - capacity: Capacity of the vehicle.

### Response
```json
{
    "captain": {
        "fullname": {
            "firstname": "String",
            "lastname": "String"
        },
        "email": "String",
        "password": "String",
        "license": "String",
        "vehicle": {
                "licencePlate": "String",
                "vehicleType": "String",
                "color": "String",
                "capacity": "Number"
        },
        "_id": "String",
        "__v": "String"
    },
    "token": "String"
}
```

	•	captain: Object containing registered captain’s details.
	•	id: Unique identifier for the captain.
	•	fullname: Object containing captain’s first and last names.
	•	email: Captain’s email address.
	•	license: Captain’s driving license number.
	•	vehicle: Object containing captain’s vehicle details.
	•	token: Authentication token for the captain.

### Status Codes

	•	201 Created: Captain registered successfully.
	•	400 Bad Request: Missing or invalid fields in the request body.

## Captain Login

### Endpoint
`POST /captains/login`

### Description
Authenticates a captain by accepting their email and password and returns the captain object along with an authentication token.

### Request Body
```json
{
    "email": "String",
    "password": "String"
}
```

	•	email: Captain’s email address.
	•	password: Captain’s password.

### Response
```json
{
    "captain": {
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

	•	captain: Object containing authenticated captain’s details.
	•	id: Unique identifier for the captain.
	•	fullname: Object containing captain’s first and last names.
	•	email: Captain’s email address.
	•	token: Authentication token for the captain.

### Status Codes

	•	200 OK: Captain authenticated successfully.
	•	400 Bad Request: Missing or invalid fields in the request body.
	•	401 Unauthorized: Invalid email or password.