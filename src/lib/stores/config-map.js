import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "How many people in the EU are going hungry?",
  "subtitle": "As of 2023 in the EU27, 8.5% of people were affected by food poverty, with Romania recording the highest share at 18.1%, followed by Bulgaria with 15.8% and Hungary with 15.1%, while Cyprus had the lowest value at 1.2%.",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo,text_content\nBelgium,BE,0.048,false,\nBulgaria,BG,0.158,false,\nCzechia,CZ,0.057,false,\nDenmark,DK,0.031,false,\nGermany,DE,0.111,false,\nEstonia,EE,0.062,false,\nIreland,IE,0.017,false,\nGreece,EL,0.128,false,\nSpain,ES,0.053,false,\nFrance,FR,0.112,false,\nCroatia,HR,0.047,false,\nItaly,IT,0.093,false,\nCyprus,CY,0.012,false,\nLatvia,LV,0.079,false,\nLithuania,LT,0.089,false,Provisional value\nLuxembourg,LU,0.045,false,Break in time series\nHungary,HU,0.151,false,\nMalta,MT,0.115,false,\nNetherlands,NL,0.025,false,\nAustria,AT,0.033,false,\nPoland,PL,0.03,false,\nPortugal,PT,0.019,false,\nRomania,RO,0.181,false,\nSlovenia,SI,0.044,false,\nSlovakia,SK,0.142,false,\nFinland,FI,0.033,false,\nSweden,SE,0.035,false,",
  "parsedData": [
    {
      "country": "Belgium",
      "id": "BE",
      "value": 0.048,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 0.158,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 0.057,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 0.031,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 0.111,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 0.062,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 0.017,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 0.128,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 0.053,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "France",
      "id": "FR",
      "value": 0.112,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 0.047,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 0.093,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 0.012,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 0.079,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 0.089,
      "extraInfo": false,
      "text_content": "Provisional value"
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 0.045,
      "extraInfo": false,
      "text_content": "Break in time series"
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 0.151,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 0.115,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 0.025,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 0.033,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 0.03,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 0.019,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 0.181,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 0.044,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 0.142,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 0.033,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 0.035,
      "extraInfo": false,
      "text_content": ""
    }
  ],
  "datasetType": "values",
  "datasetUnit": "percent",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "purple-red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": true,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "Eurostat (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "This map visualizes the share of the overall population which is inable to afford a meal with meat, chicken, fish (or vegetarian equivalent) every second day.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://ec.europa.eu/eurostat/databrowser/view/ilc_mdes03/default/table?lang=en",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "0",
  "colorBarLastValue": "0.2",
  "customUnitLabelAvailable": false,
  "customUnitLabel": "",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "How many people in the EU are going hungry?",
    "subtitle": "As of 2023 in the EU27, 8.5% of people were affected by food poverty, with Romania recording the highest share at 18.1%, followed by Bulgaria with 15.8% and Hungary with 15.1%, while Cyprus had the lowest value at 1.2%.",
    "textNoteDescription": "Note",
    "textNote": "This map visualizes the share of the overall population which is inable to afford a meal with meat, chicken, fish (or vegetarian equivalent) every second day.",
    "textSourceDescription": "Source",
    "textSource": "Eurostat (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here",
    "extraInfo_LT": "Provisional value",
    "extraInfo_LU": "Break in time series"
  },
  "clusters": [],
  "colorScale": null,
  "extraInfo_LT": "Provisional value",
  "extraInfo_LU": "Break in time series"
});