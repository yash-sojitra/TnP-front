
# JSON Server README

## Introduction

JSON Server is a simple and powerful tool that allows you to create a full fake REST API with zero coding. It's perfect for prototyping and testing front-end applications.

This guide will help you set up and start a JSON Server using a database file `db/data.json` on port 8000.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)

## Installation

1. **Install JSON Server globally**:

   Open your terminal and run:
   ```sh
   npm install -g json-server
   ```

## Setting Up the Database

1. **Create the database file**:

   Make sure you have a `db/data.json` file with the structure you need. Here's an example of how `db/data.json` might look:
   ```json
   {
     "posts": [
       { "id": 1, "title": "Hello World" }
     ],
     "comments": [
       { "id": 1, "body": "Nice post!", "postId": 1 }
     ],
     "profile": { "name": "John Doe" }
   }
   ```

## Starting the Server
**Start JSON Server**:

   Run the following command to start JSON Server using `db/data.json` on port 8000:
   ```sh
   json-server --watch db/data.json --port 8000
   ```

## Accessing the Server

Once the server is running, you can access your fake REST API at `http://localhost:8000`.

Here are some example endpoints based on the `db/data.json` structure:

- `http://localhost:8000/posts`
- `http://localhost:8000/comments`
- `http://localhost:8000/profile`
