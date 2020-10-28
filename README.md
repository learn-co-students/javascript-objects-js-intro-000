# JavaScript Objects

## Overview

In this lesson, we'll introduce, define, and work with objects. 

## Objectives
+ Create an object in JS
+ Access a value from an object
+ Add a key-value pair to an object
+ Delete a key-value pair from an object

## Introduction 

When we run across a word that we don't know, we often consult a dictionary. A dictionary is, at its core, a list of words; below each word is a definition or set of definitions. If we know the word that we're looking for, we can just look it up in the dictionary and get all its information.

To offer another example, imagine a planner. The planner has a list of dates, and each date has a list of times; at each time, there's an event (or not). The planner gives us a way of _associating_ what's happening with the time when it happens. If we look up a given time, we will see what (if anything) is happening then.

In programming, structures like dictionaries are called "associative data structures": they contain pairs of keys (words in our dictionary analogy) and values (definitions in our dictionary analogy).

In JavaScript, the barebones associative data structure is called an _object_. That means that in an object, you can look something up by its _key_ and get back its _value_ — just like in a dictionary. In fact, you might hear some people refer to objects as "dictionaries." We're going to call them "objects" because they're instances of JavaScript's capital-O `Object`.

## Instructions

1. Open `objects.js`

2. Assign an object to the variable `playlist` and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our `playlist`?)

3. Create a function `updatePlaylist` that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

4. Create a function `removeFromPlaylist` that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.
