# Redis Test Project

## Overview

This project is intended solely for testing purposes related to the Redis NoSQL key-value store. It is not associated with any specific architectural or engineering goals. The primary aim is to explore and experiment with Redis as a caching solution.

## Purpose

### Redis as a Key-Value Store

Redis is a powerful in-memory data structure store that can be used as a database, cache, and message broker. In the context of this project, we are utilizing Redis as a key-value store for caching. A key-value store is a type of NoSQL database that stores data as a collection of key-value pairs. Each piece of data (value) is associated with a unique identifier (key), allowing for fast retrieval.

### Project Focus

The focus of this project is on testing and understanding Redis's capabilities as a caching mechanism. It is not designed to demonstrate specific architectural patterns or engineering practices. The primary goal is to gain insights into how Redis efficiently handles key-value data and its performance characteristics in a caching context.

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

To start the Redis container, use the following command:

```bash
docker-compose up -d
