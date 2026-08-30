let gradesList = [85, 92, 78, 90, 88, 76, 95, 89, 72, 81];

function find_Avg(gradesList){
    let sum = 0;
    for(let i = 0; i < gradesList.length; i++){
        sum += gradesList[i];
    }
    console.log("sum : " + sum);
    console.log("average is " + sum / gradesList.length);
}

find_Avg(gradesList);


/////////////////////