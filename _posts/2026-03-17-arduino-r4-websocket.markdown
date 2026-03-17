---
layout: post
title: "Arduino Uno R4 WiFi: WebSocket Server and Web Client"
date: 2026-03-17 10:00:00 +0530
categories: Arduino
---

The Arduino Uno R4 WiFi comes with an onboard ESP32-S3 co-processor that handles all WiFi connectivity, making it straightforward to run a WebSocket server directly on your board. In this post, we'll set up a simple WebSocket server on the Arduino and build a minimal webpage that connects to it.

---

## What You'll Need

- Arduino Uno R4 WiFi
- Arduino IDE with the **Arduino UNO R4 WiFi** board package installed
- The **ArduinoWebsockets** library (install via Library Manager)
- A computer on the **same local network** as the Arduino

---

## Arduino Sketch

The sketch below:
1. Connects the board to your WiFi network
2. Starts a WebSocket server on port **8080**
3. Echoes back any message it receives (with a prefix) and can broadcast to all connected clients

{% highlight cpp %}
#include <WiFiS3.h>
#include <ArduinoWebsockets.h>

using namespace websockets;

// ── WiFi credentials ──────────────────────────────────────────────────────────
const char* SSID     = "YOUR_SSID";
const char* PASSWORD = "YOUR_PASSWORD";

// ── WebSocket server on port 8080 ─────────────────────────────────────────────
WebsocketsServer wsServer;

void setup() {
  Serial.begin(115200);
  while (!Serial) { ; }

  // Connect to WiFi
  Serial.print("Connecting to WiFi");
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConnected! IP address: ");
  Serial.println(WiFi.localIP());   // <-- note this IP for the webpage

  // Start the WebSocket server
  wsServer.listen(8080);
  Serial.println("WebSocket server listening on port 8080");
}

void loop() {
  // Accept a new incoming connection when available
  if (wsServer.poll()) {
    WebsocketsClient client = wsServer.accept();
    Serial.println("Client connected");

    // Handle messages while the client stays connected
    while (client.available()) {
      WebsocketsMessage msg = client.readBlocking();

      Serial.print("Received: ");
      Serial.println(msg.data());

      // Echo the message back with a prefix
      client.send("Echo: " + msg.data());
    }

    Serial.println("Client disconnected");
  }
}
{% endhighlight %}

> **Tip:** After uploading, open the Serial Monitor at **115200 baud** and note the IP address printed there — you'll need it for the webpage.

---

## Web Client

Save the HTML below as `index.html` and open it in any browser on the **same network** as the Arduino. Replace `192.168.1.XXX` with the IP address shown in the Serial Monitor.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Arduino R4 WebSocket Client</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; }
    #log  { border: 1px solid #ccc; padding: 1rem; height: 200px;
            overflow-y: auto; background: #f9f9f9; margin-bottom: 1rem; }
    input { width: 70%; padding: .5rem; }
    button { padding: .5rem 1rem; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Arduino R4 WebSocket Demo</h1>

  <div id="status">Status: <strong id="statusText">Disconnected</strong></div>
  <br />

  <button id="connectBtn" onclick="connect()">Connect</button>
  <button id="disconnectBtn" onclick="disconnect()" disabled>Disconnect</button>

  <br /><br />
  <div id="log"></div>

  <input  id="msgInput"  type="text" placeholder="Type a message…" />
  <button id="sendBtn"   onclick="sendMessage()" disabled>Send</button>

  <script>
    // ── Change this to your Arduino's IP address ──────────────────────────────
    const ARDUINO_IP   = "192.168.1.XXX";
    const ARDUINO_PORT = 8080;
    // ─────────────────────────────────────────────────────────────────────────

    let ws = null;

    function log(msg) {
      const div = document.getElementById("log");
      div.innerHTML += `<p>${msg}</p>`;
      div.scrollTop = div.scrollHeight;
    }

    function setStatus(text, color) {
      const el = document.getElementById("statusText");
      el.textContent = text;
      el.style.color  = color;
    }

    function connect() {
      ws = new WebSocket(`ws://${ARDUINO_IP}:${ARDUINO_PORT}`);

      ws.onopen = () => {
        setStatus("Connected", "green");
        log("✅ Connected to Arduino");
        document.getElementById("connectBtn").disabled    = true;
        document.getElementById("disconnectBtn").disabled = false;
        document.getElementById("sendBtn").disabled       = false;
      };

      ws.onmessage = (event) => {
        log(`⬅️  ${event.data}`);
      };

      ws.onclose = () => {
        setStatus("Disconnected", "red");
        log("❌ Disconnected from Arduino");
        document.getElementById("connectBtn").disabled    = false;
        document.getElementById("disconnectBtn").disabled = true;
        document.getElementById("sendBtn").disabled       = true;
        ws = null;
      };

      ws.onerror = (err) => {
        log(`⚠️  WebSocket error — check the IP address and port`);
      };
    }

    function disconnect() {
      if (ws) ws.close();
    }

    function sendMessage() {
      const input = document.getElementById("msgInput");
      if (ws && input.value.trim()) {
        ws.send(input.value);
        log(`➡️  ${input.value}`);
        input.value = "";
      }
    }

    // Allow pressing Enter to send
    document.getElementById("msgInput")
      .addEventListener("keydown", (e) => { if (e.key === "Enter") sendMessage(); });
  </script>
</body>
</html>
{% endhighlight %}

---

## How It Works

| Step | What happens |
|------|-------------|
| Arduino boots | Joins your WiFi network and starts listening on port 8080 |
| Webpage loads | You click **Connect** — the browser opens a `ws://` connection to the Arduino |
| You type & send | The message travels over WebSocket to the Arduino |
| Arduino echoes | The board prefixes the message with `"Echo: "` and sends it back |
| Webpage receives | The reply is displayed in the log area |

---

## Things to Try Next

- **Control an LED** — parse incoming messages and toggle `LED_BUILTIN`
- **Push sensor data** — use `client.send(String(analogRead(A0)))` on a timer to stream readings to the browser
- **Multiple clients** — the server can be extended to store clients in a list and broadcast to all of them

---

That's it! You now have a fully bidirectional, real-time link between your Arduino Uno R4 WiFi and any browser on your local network — no extra hardware required.
