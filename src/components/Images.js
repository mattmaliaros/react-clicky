import React, {Component} from 'react';
import {Container, Row, Col, Grid} from 'react-bootstrap';
import Parser from 'react-html-parser';   
import friends from "./friends.json"
// import imgArr from "./imgArr.js";
import CSS from "./Images.css";
class Images extends Component {
        state = {friends,
            topScore: 0,
            score: 0,
            message: "",
            clickArr: []
        };
        newTop = () => {
            console.log(this.state.topScore);
            if (this.state.score > this.state.topScore)
            {
               
                this.setState({ topScore: this.state.score });
            }
        }
        randomize = array => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          };
       
        clickPicture =  (id) => {
        
        //  let newId = id[0].splice()
       
         if (this.state.clickArr.includes(id)) {
            this.setState({
              score: 0,
              clickArr: [],
              message: "You lose",
            },
            () => this.newTop());
        }
        else {
            this.setState({
                friends: this.randomize(this.state.friends),
                clickArr: [...this.state.clickArr, id],
                score: this.state.score + 1,
                message: "Keep going... don't click any pictures twice!"
            },
            () => this.newTop());
        }
    }
    
    
    render() {
        return(
            
            <div>
                <div>Top Score: {this.state.topScore}</div>
                <div>Current Score: {this.state.score}</div>
                <div>Message: {this.state.message}</div>
                <Container>
                <Row>
                        <img  id = {friends[0].id} onClick={() => this.clickPicture(friends[0].id)}src= {Parser(friends[0].image)}></img>
                        <img  id = {friends[1].id} onClick={() => this.clickPicture(friends[1].id)}src= {Parser(friends[1].image)}></img>
                        <img  id = {friends[2].id} onClick={() => this.clickPicture(friends[2].id)}src= {Parser(friends[2].image)}></img>
                        <img  id = {friends[3].id} onClick={() => this.clickPicture(friends[3].id)}src= {Parser(friends[3].image)}></img>
                        <img  id = {friends[4].id} onClick={() => this.clickPicture(friends[4].id)}src= {Parser(friends[4].image)}></img>
                        <img  id = {friends[5].id} onClick={() => this.clickPicture(friends[5].id)}src= {Parser(friends[5].image)}></img>
                        <img  id = {friends[6].id} onClick={() => this.clickPicture(friends[6].id)}src= {Parser(friends[6].image)}></img>
                        <img  id = {friends[7].id} onClick={() => this.clickPicture(friends[7].id)}src= {Parser(friends[7].image)}></img>
                        <img  id = {friends[8].id} onClick={() => this.clickPicture(friends[8].id)}src= {Parser(friends[8].image)}></img>
                        <img  id = {friends[9].id} onClick={() => this.clickPicture(friends[9].id)}src= {Parser(friends[9].image)}></img>
            
            </Row>
            
            </Container>
            </div>
        )
    }
}

export default Images;