# My Multer Project

## Description

This project is a full-stack web application developed with Angular, Ionic, Express, and Sequelize. It provides a user-friendly frontend interface and a powerful backend for managing and uploading images. The project also includes CRUD (Create, Read, Update, Delete) functionality with image upload capabilities.

## Features

- Angular and Ionic for the frontend.
- Express for the backend.
- Sequelize as the database ORM.
- Multer for image upload support.
- CRUD operations for managing data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

## Installation

1. Clone the repository: `git clone https://github.com/leogo22mz/multerProject`
2. Install the necessary dependencies:
   - Frontend (Angular and Ionic): `cd frontend && npm install`
   - Backend (Express and Sequelize): `cd backend && npm install`

## Usage

- Start the frontend: `cd frontend && ionic serve`
- Start the backend: `cd backend && node index.js`
- Access the application at `http://localhost:8100` (but should start automatically)

## API Routes

- `GET /api/items` - Retrieve all resources.
- `GET /api/items/:id` - Retrieve a specific resource.
- `POST /api/items` - Create a new resource with image upload support.
- `PUT /api/items/:id` - Update a resource (Work in Progress).
- `DELETE /api/items/:"id"` - Delete a resource.

## License

This project is licensed under the Leonel Cruz Go
