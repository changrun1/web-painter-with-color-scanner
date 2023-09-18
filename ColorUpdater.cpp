<<<<<<< HEAD
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
=======
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
>>>>>>> 10c0f16c68d8ca30e58a6bd7ab020c48224ea069
