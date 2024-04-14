import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Table, Row } from 'react-native-table-component'
import scheduleData from '../data/schedule.json'

export default class TimeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedule: scheduleData.schedule,
      widthArr: [
        50, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      ],
    }
  }

  render() {
    const { schedule, widthArr } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.header}>운행 시간표</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{ justifyContent: 'center' }}
        >
          <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1 }}>
              {/* Render table headers */}
              <Row
                data={['구분', ...Object.keys(schedule[0].tables)]}
                widthArr={widthArr}
                style={styles.head}
                textStyle={styles.text}
              />
              {/* Render table rows for each round */}
              {schedule.map((round, index) => {
                const rowData = [
                  round.round,
                  ...Object.entries(round.tables).map(([_, value]) => value),
                ]
                return (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[
                      styles.row,
                      {
                        backgroundColor: index % 2 ? '#CEECF5' : 'transparent',
                      },
                    ]}
                    textStyle={styles.text}
                  />
                )
              })}
            </Table>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: { textAlign: 'center', fontSize: 20, marginTop: 30 },
  head: { height: 40, backgroundColor: '#58D3F7' },
  row: { height: 40 },
  text: { textAlign: 'center', fontSize: 16 },
})
