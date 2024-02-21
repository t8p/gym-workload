
# Fitness Studio Workload API

This Node.js Express application is designed to fetch and aggregate workload information from multiple fitness studios based on their IDs. It dynamically queries specific endpoints to retrieve current workload data, including terms and percentages of occupancy, and compiles them into a unified response format. This application is currently configured and optimized specifically for retrieving workload data from a single fitness studio chain, and may require adjustments to work with other organizations or data formats.

## Features

- Fetch workload data from multiple studios simultaneously using their unique IDs.
- Aggregate and return a simplified JSON object containing the name, term, and percentage of workload for each queried studio.
- Support for query parameters to dynamically select studios for workload data retrieval.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/t8p/gym-workload-api.git
```

2. Navigate into the project directory:

```bash
cd gym-workload-api
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

### Usage

To fetch workload information from studios, use the following endpoint structure:

```
GET /api/workload?studios=ID1,ID2,ID3
```

Replace `ID1,ID2,ID3` with the actual IDs of the studios you want to query. The response will be a JSON object containing the aggregated workload data for each studio.

## Example Request

```bash
curl http://localhost:3000/api/workload?studios=12,14,16
```

## Response Structure

The response will be a JSON array where each object represents a studio's workload data:

```json
[
  {
    "studioId": "12",
    "name": "Studio Name 1",
    "term": "low",
    "percentage": 24
  },
  {
    "studioId": "14",
    "name": "Studio Name 2",
    "term": "medium",
    "percentage": 50
  }
]
```

## Contributing

Feel free to fork the repository and submit pull requests with improvements or new features.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.
