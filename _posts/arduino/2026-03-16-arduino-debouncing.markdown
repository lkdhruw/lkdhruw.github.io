---
layout: post
title:  "Arduino: Debouncing a Push Button Correctly"
date:   2026-03-16 11:00:00 +0530
categories: Arduino
---

When working with mechanical push buttons or switches in electronics, you'll often encounter a phenomenon called "bouncing." Because the metal contacts inside the switch spring back and forth slightly as they settle into their new position, a microcontroller scanning the pin rapidly will register multiple open and close sequences for a single button press.

If you are trying to toggle an LED state with a button, this results in the LED flickering and ending up in a random state. 

To fix this, we implement **software debouncing**. The concept is simple: once a state change is detected, we start a timer and ignore any subsequent state changes for a small window of time (e.g., 50 milliseconds) until the mechanical contact has settled.

Here is a robust example of doing software debouncing on an Arduino:

{% highlight cpp %}
// Constants won't change
const int buttonPin = 2;    // the number of the pushbutton pin
const int ledPin = 13;      // the number of the LED pin

// Variables will change:
int ledState = HIGH;         // the current state of the output pin
int buttonState;             // the current reading from the input pin
int lastButtonState = LOW;   // the previous reading from the input pin

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);

  // set initial LED state
  digitalWrite(ledPin, ledState);
}

void loop() {
  // read the state of the switch into a local variable:
  int reading = digitalRead(buttonPin);

  // check to see if you just pressed the button
  // (i.e. the input went from LOW to HIGH), and you've waited long enough
  // since the last press to ignore any noise:

  // If the switch changed, due to noise or pressing:
  if (reading != lastButtonState) {
    // reset the debouncing timer
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer than the debounce
    // delay, so take it as the actual current state:

    // if the button state has changed:
    if (reading != buttonState) {
      buttonState = reading;

      // only toggle the LED if the new button state is HIGH
      if (buttonState == HIGH) {
        ledState = !ledState;
      }
    }
  }

  // set the LED:
  digitalWrite(ledPin, ledState);

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButtonState = reading;
}
{% endhighlight %}

### How it works:
1. `millis()` tracks how long the Arduino has been running.
2. Every time a state change occurs on `buttonPin`, `lastDebounceTime` resets to the current `millis()`.
3. We only update `buttonState` if `50ms` have passed without the physical pin changing state again.
4. Using this pattern never blocks your code (unlike using `delay(50)`), meaning your `loop()` can go on doing other things like driving displays or reading sensors seamlessly!
