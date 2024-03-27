// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Giordan Zeina
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates Perimeter of a rectangle.
 */
function calculatePerimeterOfRectangle () {
  // input
  const lengthOfRectangle = parseInt(document.getElementById('length-of-rectangle').value)
  const widthOfRectangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const calculatePerimeterOfRectangle = 2 * (lengthOfRectangle * widthOfRectangle)

  // output
  document.getElementById('perimeter').innerHTML = 'Perimeter is: '+ calculatePerimeterOfRectangle + 'cm'
}
