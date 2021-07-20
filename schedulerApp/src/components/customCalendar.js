import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, State, Pressable, Image } from 'react-native';

class CustomCalendar extends Component {
    months = ["January", "February", "March", "April", "May", "June", "July", "August", 
              "September", "October", "November", "December"];

    weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat" ];

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    state = {
        activeDate: new Date()
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

    render() {
        var matrix = this.generateMatrix();

        var rows = [];
        rows = matrix.map((row, rowIndex) => {
        var rowItems = row.map((item, colIndex) => {
            return (
            <Text
                style={{
                    flex: 1,
                    height: 50,
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: '#1B1B1B',
                    color: '#aaa',
                    // Highlight header
                    //backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
                    // Highlight Sundays
                    //color: colIndex == 0 ? '#a00' : '#000',
                    // Highlight current date
                    //fontWeight: item == this.state.activeDate.getDate() ? 'bold': ''
                }}
                >
                {item != -1 ? item : ''}
            </Text>
            );
        });
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