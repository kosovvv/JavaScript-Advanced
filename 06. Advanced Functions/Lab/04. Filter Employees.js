function solve(data, criteria)
{
    let obj = JSON.parse(data);
    let [key, value] = criteria.split('-');
    let i = 0;
    for (const item of obj) {
        
        if (item[key] == value) {
            
            console.log(`${i}. ${item['first_name']} ${item['last_name']} - ${item['email']}`);
            i++
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,'gender-Female'
)