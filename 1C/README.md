# Major-Studio

## Assignment 01C

### Code Prototype
- Gather all the data you want to use or build a system to query it using the api
- Make sure the data is structured in the right way for your visualization
- Build a prototype that loads the data and displays it visually on the screen
- Imagine a plan to get to your high fidelity mockup in code

The current dataset pulled as a CSV from the SGD data portal summarizes indicator 3.1.1 Maternal Morality Ratio per 100,000 live births. It contains 185 observations and 89 variables with usable data. It spans over 18 years (from 2000 -2017) and includes 185 countries categorized into 22 global regions are accounted for in the dataset.

Next Steps:
Additional variables/calculations to add
	parentRegion -> as umbrella regions (Europe, Americas, Asia, Africa, Australasia)
	parentRegionAvg -> create mean data points for umbrella regions to plot on line graph
	parentNameAvg -> create mean data points for sub regions to plot on line graph
parentCodeUN -> indicate if the UN considers to be a Least Developed Country (LDC) or a Landlocked Developing Country (LLDC) or Small Island Developing Country (SIDS)

Data structure 
    Array of objects, each object as an individual country
    Each column of the CSV will need to be turned into an array and then looped through in JS to build out an array of objects
	
	Var countries = {
	“Afghanistan”: {

    		ObjectId: 144
    		geoAreaCode: 4
    		parentName: “SouthernAsia”
    		parentRegion: “Asia”
    		parentCodeUN: “LDC”
    		value_2000: 1450
    		value_2001: 1390
    		value_2002: 1300
    		value_2003: 1240
    		value_2004: 1180
    		value_2005: 1140
    		value_2006: 1120
    		value_2007: 1090
    		value_2008: 1030
    		value_2009: 993
    		value_2010: 954
    		value_2011: 905
    		value_2012: 858
    		value_2013: 810
    		value_2014: 786
    		value_2015: 701
    		value_2016: 673
    		value_2017: 638
		}
	}

Additional objects to include

	const colorMap = {

		“Europe”: #3DD0EB
		“Asia”: #E8B458
		“Americas”: #F24435
		“Africa”: #354EF2
		“Australasia”: #C13BDB
	}


### Design Mockup
- Create a high fidelity version of the design you want to create
- Include the data visualization, a title, a legend and the relevant scales and units
- Carefully consider colors, scale, composition and typography
- Be able to answer why you picked any of the above
- All designs should be created with a 16:9 aspect ratio in mind (1920x1080px)

![Maternal Mortality_It1](https://user-images.githubusercontent.com/77869514/191308452-9a96b1eb-f1df-4370-91f6-23eab68ee542.png)


