# AI ChatHub
AI ChatHub is a modern web application that enables seamless communication with an advanced AI model. Built on FastAPI and React, it provides a robust backend for handling API requests and a sleek frontend interface for engaging conversational experiences.

# Prerequisites

Make sure you have the following installed before starting:

- **Docker**: [Installation Guide](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Installation Guide](https://docs.docker.com/compose/install/)


### Configuration

#### Backend (FastAPI)

Ensure any necessary environment variables are set in the `.env` file that contains `OPENAI_API_KEY` in the Backend directory.


#### Frontend (React)

Update any necessary environment variables or configurations in the frontend (Frontend) as per your requirements.

### Running Locally

#### Backend (FastAPI)

##### Setting up Python Environment

1. **Navigate to the Backend directory**:
```bash
cd Backend
```


1. **Install dependencies**:
```bash
pip install -r requirements.txt
```

2. **Run the FastAPI server**:
```bash
uvicorn main:app --reload
```
This starts the FastAPI server locally. By default, it runs at `http://localhost:8000`.

Use `http://localhost:8000/docs` to check and test the `API`.

#### Frontend (React)

##### Setting up React Environment

1. **Navigate to the Frontend directory**:
```bash
cd ../Frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the React development server**:
```bash
npm run dev
```
This starts the React development server locally. By default, it runs at `http://localhost:5173`.

### Running with Docker Compose

**Build and start the containers**:
```bash
docker-compose up --build
```
This command builds the Docker images for the backend and frontend services, starts the containers, and exposes necessary ports.

**Access the application**:

- **Backend API**: `http://localhost:8000`
- **Frontend**: `http://localhost:5173`

### Stopping the Application

**To stop the application and remove containers**:
```bash
docker-compose down
```
This command stops the application and removes the containers.