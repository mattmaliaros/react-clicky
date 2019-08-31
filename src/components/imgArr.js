import React, {Component} from 'react';
import {Container, Row, Col, Grid} from 'react-bootstrap';
import friends from "./components/friends.json";
function ImgArr(arr) {


let i = friends.length;
const newArr = [];
if (arr != null)
while(i--){
    var num = Math.floor(Math.random() * friends.length);
    newArr.push(friends[num]);
    friends.splice(num, 1);
}
return newArr;
}
export default ImgArr;