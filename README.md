# Word_Helper_Website
Word Helper is a simple website that utilizes the Datamuse API to assist with finding word meanings and words pronounced similarly. The website consists of two webpages:

## Word Next
The "Word Next" webpage is accessed by default when you open the website. It uses the Datamuse API's /word endpoint with the query parameter ml. The purpose of this page 
is to help you find a word's meaning related to the input string. To use this feature, simply type in a word, and the API will return words that are related in meaning.

## Word Describe
To access the "Word Describe" webpage, click the button at the bottom of the "Word Next" page. This button toggles between the two pages. The "Word Describe" webpage also 
uses the Datamuse API's /word endpoint, but with the query parameter sl. The goal of this page is to assist you in finding words that are pronounced similarly to the input word. 
To utilize this function, type in a word, and the API will provide a list of words that sound similar.

## General
Both functionalities were implemented using JavaScript promises. The website's purpose is to aid in discovering word meanings and finding words with similar pronunciations using the Datamuse API's features.

Website: https://tynip.github.io/Word_Helper_Website/

### References:
- API
  + [Datamuse](https://www.datamuse.com/api/)
