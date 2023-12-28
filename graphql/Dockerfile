# Stage 1: Build
FROM python:3.10 as builder

WORKDIR /app
COPY ./requirements.txt .
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY . .

# Stage 2: Runtime
FROM python:3.10-slim

WORKDIR /app

COPY --from=builder /app /app
COPY --from=builder /usr/local/lib/python3.10 /usr/local/lib/python3.10

CMD ["python", "app.py"]