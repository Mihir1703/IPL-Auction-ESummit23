import content from './final_data.json';

let data = JSON.parse(JSON.stringify(content));
const batsman = (data) => {
    let batsman = [["Matches", data['M']], ["Runs", data['Runs']], ["50", data['50']], ["100", data['100']], ["Strike Rate", data['SR']], ["Average", data['Avg_x']], ["4s", data['4s']], ["6s", data['6s']]];
    return batsman;
}
const bowler = (data) => {
    let bowler = [["Matches", data['M']], ["Wickets", data['Wkts']], ["Economy", data['Econ']], ["Average", data['Avg_y']], ["5W", data['5W']], ["10W", data['10W']]];
    return bowler;
}
const allrounder = (data) => {
    let allrounder = [["Matches", data['M']], ["Runs", data['Runs']], ["Wickets", data['Wkts']], ["Strike Rate", data['SR']], ["4s", data['4s']], ["6s", data['6s']], ["Batting Average", data['Avg_x']], ["Bowling Average", data['Avg_y']], ["Economy", data['Econ']], ["5W", data['5W']], ["10W", data['10W']]];
    return allrounder;
}
export const getData = (id) => {
    try {
        if (data[id]['Type'] === 'Batsman') return [batsman(data[id]), data[id]['Type'], data[id]['Name'], data[id]['Image']];
        else if (data[id]['Type'] === 'Bowler') return [bowler(data[id]), data[id]['Type'], data[id]['Name'], data[id]['Image']];
        else if (data[id]['Type'] === 'All Rounder') return [allrounder(data[id]), data[id]['Type'], data[id]['Name'], data[id]['Image']];
        else return [batsman(data[id]), data[id]['Type'], data[id]['Name'], data[id]['Image']];
    } catch (e) {
        console.log(e);
        return -1;
    }
};

getData(0);