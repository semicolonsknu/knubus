import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";



const Clock =() =>{
  const [date, setDate] = useState(()=> new Date())

  useEffect(()=>{
    const timeId = setInterval(()=>tick(),1000)

    return() =>{
      clearInterval(timeId)
    }
  })


  const tick =() =>{
    setDate(new Date())
  }

  return(
    <View style={styles.cotainer}>
      <Text style={styles.timeText}>{date.toLocaleTimeString()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  timeText:{
    fontSize:20,
    fontWeight:"bold"
  }
  })

export default Clock;