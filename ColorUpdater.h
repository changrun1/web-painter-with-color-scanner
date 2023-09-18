#ifndef ColorUpdater_h
#define ColorUpdater_h

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

class ColorUpdater {
public:
    ColorUpdater();
    bool updateColor(uint8_t red, uint8_t green, uint8_t blue);

private:
    const char* _serverURL = "http://123.194.35.219:8002/color";
};

#endif
