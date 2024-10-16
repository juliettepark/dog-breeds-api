# Web Development Project 4 - *Dawg Discovery 🐾*

Submitted by: **Juliette Park**

This web app: **Explore adorable dog breeds!**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [X] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [X] Description of dog's appearance (randomized)
* [X] Remove a breed from the ban list

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://github.com/juliettepark/dog-breeds-api/blob/main/project4_dogAPI.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCap

## Notes
The ban list filtering dogs is a little hard to see, so I wanted to leave a note here!
The app enforces the "ban list" by checking if a newly fetched dog is present in the ban list.
If so, it will fetch a new dog until it gets one that is not in the list.
In the video, this happened when we got a second "Kooikerhondje" dog. The screen quickly refreshes
to grab the next dog that is not an Afghan Hound or Kooikerhondje.

## License

    Copyright 2024 Juliette Park

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
