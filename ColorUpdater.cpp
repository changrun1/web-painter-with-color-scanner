#include "ColorUpdater.h"

ColorUpdater::ColorUpdater() {}

bool ColorUpdater::updateColor(uint8_t red, uint8_t green, uint8_t blue) {
    if (WiFi.status() != WL_CONNECTED) {
        return false; 
    }

    HTTPClient http;
    http.begin(_serverURL);
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");
    
    String postData = "red=" + String(red) + "&green=" + String(green) + "&blue=" + String(blue);
    int httpResponseCode = http.POST(postData);
    
    http.end();

    return (httpResponseCode == 200);
}
