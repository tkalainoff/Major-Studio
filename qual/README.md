# Qualitative Excercise

## Initial Concept Sketch
![Sketch_1](https://user-images.githubusercontent.com/77869514/196469786-e8bfdc72-358c-4f78-a56b-34eea7d2d809.jpg)

## Data Source + Review
https://www.unhcr.org/refugee-statistics/download/?url=2z1B08

<img width="1420" alt="Screen Shot 2022-10-18 at 12 11 17 PM" src="https://user-images.githubusercontent.com/77869514/196485780-6ba7bbb4-507f-40c0-b03f-578a16909267.png">

## Data Cleaning and Restructuring
https://observablehq.com/d/829a66acf746a618

```json
{
  "source": "Afghanistan"
  "target": "Albania"
  "value": 5
}

{
  "source": "Albania"
  "target": "recognized"
  "value": 5
}

{
  "source": "Austria"
  "target": "protected"
  "value": 1730
}

{
  "source": "Australia"
  "target": "rejected"
  "value": "28"
}

{
  "source": "Armenia"
  "target": "closed"
  "value": "5"
}
```

## Prototype
<img width="659" alt="Screen Shot 2022-10-15 at 1 20 27 AM" src="https://user-images.githubusercontent.com/77869514/196485779-cf02db52-0255-4e87-82aa-03cc90b60956.png">

Using the guided code from here: https://bl.ocks.org/d3noob/06e72deea99e7b4859841f305f63ba85 I was able to use some test data and input into this sankey diagram

Below is an attempt to input the more comprehensive dataset and I broke it :( 
<img width="639" alt="Screen Shot 2022-10-15 at 1 19 30 AM" src="https://user-images.githubusercontent.com/77869514/196485776-6b21ccc5-bb2c-4402-86d1-e3d1dbce85e8.png">

The next challenge will be to edit the code to accomodate for more data

<img width="905" alt="Sankey_Mockup" src="https://user-images.githubusercontent.com/77869514/197786223-23eff82c-f149-428b-97ec-cfba04ddf4dc.png">

<img width="1076" alt="Screen Shot 2022-10-25 at 9 22 19 AM" src="https://user-images.githubusercontent.com/77869514/197786236-9ec6aa8d-20c5-4dda-a41c-c8426334a7a5.png">
