import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, State, Pressable, Image, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
class CustomCalendar extends Component {
    months = ["January", "February", "March", "April", "May", "June", "July", "August", 
              "September", "October", "November", "December"];

    weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat" ];

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    constructor(props) {
        super(props);
        this.state = {
          activeDate: new Date(),
          pressedOrNot: 0,
          pressedItem: [],
          pressedMonth: [],
          pressedYear: [],
        };

        this.selectMount = this.selectMount.bind(this)
      }

    generateMatrix() {
        var matrix = [];
        // Create header
        matrix[0] = this.weekDays;
     
        // More code here
        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();
        
        var firstDay = new Date(year, month, 1).getDay();

        var maxDays = this.nDays[month];
        if (month == 1) { 
            // February
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        var counter = 1;
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                    matrix[row][col] = -1;
                    if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    matrix[row][col] = counter++;
                    } else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    matrix[row][col] = counter++;
                }
            }
        }
        
        return matrix;
    }

    changeMonth = (n) => {
        this.setState(() => {
          this.state.activeDate.setMonth(
            this.state.activeDate.getMonth() + n
          )
          return this.state;
        });
    }

    selectMount = (rowIndex,month,year) => {
        this.setState(prevState => ({
            pressedOrNot: !prevState.pressedOrNot,
        }));

        this.setState({ pressedItem: rowIndex });
        this.setState({ pressedMonth: month });
        this.setState({ pressedYear: year });
        
        //Alert.alert(rowIndex.toString());
    }

    render() {
        var matrix = this.generateMatrix();
        var rows = [];

        var currDay = new Date().getDate();
        var currMonth = new Date().getMonth() + 1;
        var currYear = new Date().getFullYear();
            
        rows = matrix.map((row, rowIndex) => {
            //if that item has not been pressed (not a mount day!)
            if(this.state.pressedOrNot == false) { 
                //if current month and current year... then do this...
                if((this.state.activeDate.getMonth()+1) == currMonth && this.state.activeDate.getFullYear() == currYear) {
                    var rowItems = row.map((item, colIndex) => {
                        return (
                            <Text
                                style={{
                                    flex: 1,
                                    height: 50,
                                    textAlign: 'center',
                                    padding: 10,
                                    backgroundColor: '#1b1b1b',
                                    color: item == this.state.activeDate.getDate() ? '#19afe6' : '#aaa',
                                    fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
                                }}
                            onPress={this.selectMount.bind(rowIndex,item,this.state.activeDate.getMonth()+1,this.state.activeDate.getFullYear())}>
                            {item != -1 ? item : ''}
                            </Text>
                        );
                    });
                }
                //if not current month and not current year... then do this... 
                else {
                    var rowItems = row.map((item, colIndex) => {
                        return (
                            <Text
                                style={{
                                    flex: 1,
                                    height: 50,
                                    textAlign: 'center',
                                    padding: 10,
                                    backgroundColor: '#1b1b1b',
                                    color: '#aaa',
                                }}
                                onPress={this.selectMount.bind(rowIndex,item,this.state.activeDate.getMonth()+1,this.state.activeDate.getFullYear())}>
                                {item != -1 ? item : ''}
                            </Text>
                        );
                    });
                }
            //if that item has been pressed (mount day)
            } else {
                //if pressed item is from the currently displayed month and year (if this if statement is not here... the pressed day will repeat for every month of every year!)...
                if(this.state.pressedMonth == this.state.activeDate.getMonth()+1 && this.state.pressedYear == this.state.activeDate.getFullYear()) {
                    //if current month and current year... then do this...
                    if((this.state.activeDate.getMonth()+1) == currMonth && this.state.activeDate.getFullYear() == currYear) {
                        var rowItems = row.map((item, colIndex) => {
                            return (
                                <Text
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        textAlign: 'center',
                                        padding: 10,
                                        backgroundColor: item == this.state.pressedItem ? '#EB5757' : '#1b1b1b',
                                        color: item == this.state.activeDate.getDate() ? '#19afe6' : item == this.state.pressedItem ? '#000' : '#aaa',
                                        fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
                                    }}
                                onPress={this.selectMount.bind(rowIndex,item,this.state.activeDate.getMonth()+1,this.state.activeDate.getFullYear())}>
                                {item != -1 ? item : ''}
                                </Text>
                            );
                        });
                    }
                    //if not current month and not current year... then do this... 
                    else {
                        var rowItems = row.map((item, colIndex) => {
                            return (
                                <Text
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        textAlign: 'center',
                                        padding: 10,
                                        backgroundColor: item == this.state.pressedItem ? '#EB57576' : '#1b1b1b',
                                        color: '#000',
                                    }}
                                    onPress={this.selectMount.bind(rowIndex,item,this.state.activeDate.getMonth()+1,this.state.activeDate.getFullYear())}>
                                    {item != -1 ? item : ''}
                                </Text>
                            );
                        });
                    }
                //if pressed item is not from the currently displayed month and year...
                } else {
                    //if current month and current year... then do this...
                    if((this.state.activeDate.getMonth()+1) == currMonth && this.state.activeDate.getFullYear() == currYear) {
                        var rowItems = row.map((item, colIndex) => {
                            return (
                                <Text
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        textAlign: 'center',
                                        padding: 10,
                                        backgroundColor: '#1b1b1b',
                                        color: item == this.state.activeDate.getDate() ? '#19afe6' : '#aaa',
                                        fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
                                    }}
                                onPress={this.selectMount.bind(rowIndex,item,this.state.activeDate.getMonth()+1,this.state.activeDate.getFullYear())}>
                                {item != -1 ? item : ''}
                                </Text>
                            );
                        });
                    }
                    //if not current month and not current year... then do this... 
                    else {
                        var rowItems = row.map((item, colIndex) => {
                            return (
                                <Text
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        textAlign: 'center',
                                        padding: 10,
                                        backgroundColor: '#1b1b1b',
                                        color: '#aaa',
                                    }}
                                    onPress={this.selectMount.bind(rowIndex,item,this.state.activeDate.getMonth()+1,this.state.activeDate.getFullYear())}>
                                    {item != -1 ? item : ''}
                                </Text>
                            );
                        });
                    }
                }
            }

            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    {rowItems}
                </View>
            );
        });
        
        return(
            <>
            <Text style={styles.textStyle}>Custom Calendar</Text>
            <Text></Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: '#fff'}}>
                {this.months[this.state.activeDate.getMonth()]} &nbsp;
                {this.state.activeDate.getFullYear()}
            </Text>
            { rows }
            <View style= {{flex: 1, flexDirection:'row', justifyContent:'space-between', paddingBottom: 50,}}>
                <Pressable onPress={() => this.changeMonth(-1)}>
                    <Image style={{tintColor: '#FF3D00'}} source={require('../assets/images/left_arrow.png')}/>
                </Pressable>
                <Pressable onPress={() => this.changeMonth(+1)}>
                    <Image style={{tintColor: '#FF3D00'}} source={require('../assets/images/right_arrow.png')}/>
                </Pressable>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#fff',
    }
})

export default CustomCalendar;