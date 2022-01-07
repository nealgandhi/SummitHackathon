#include <FastLED.h>
#include <BfButton.h>
#include <time.h>

#define PIN 2
#define TOTAL_LEDS 24
#define BRIGHTNESS 20

double totalExpense = 0;
int numOfLed ;
//int TotalLed = 24;
const int noOfExpense =5;
double valueofEach[5]={20,40,60,80,90}; // the value of each expense can be passed in here I just used some random variable here
long randNum[noOfExpense];

CRGBArray<TOTAL_LEDS> leds;
uint8_t hue[TOTAL_LEDS];

void setup()
{
  FastLED.addLeds<NEOPIXEL, PIN>(leds, TOTAL_LEDS);
  FastLED.setBrightness(BRIGHTNESS);
  randomSeed(analogRead(0));
}

void loop()
{
    for(int i=0;i< noOfExpense;i++){
        randNum[i] = random(0,255);
    }   

  for(int i=0;i<noOfExpense;i++){
      totalExpense += valueofEach[i];
  }
  
  for(int i=0;i<noOfExpense;i++){
    do{
        numOfLed = (valueofEach[i] / totalExpense)* TOTAL_LEDS;
        for(int i=0;i<numOfLed;i++){
          leds[i] = CHSV(randNum[i],255,255);
        }
        i++;
      }while( i < noOfExpense);
  } 
  
  FastLED.show();
  delay(1000000000000000000000000);
}

