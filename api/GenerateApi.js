import moment from "moment";
import users from "../assets/data";

const GenerateFilter = (
  Fromdate,
  Todate,
  ActiveToggle,
  SuperActiveToggle,
  BoredToggle
) => {
  //console.log(Fromdate, Todate);
  const date1 = moment(Fromdate);
  const date2 = moment(Todate);

  let FilteredData = [];

  // analyse data for each user
  for (let i = 0; i < users.length; i++) {
    const dateDiff = date2.diff(date1, "days");
    let count = 0;
    let data = "";

    //get count for status calculation between the "FROM" and "to" dates
    for (let j = 0; j < dateDiff; j++) {
      const dateId =
        users[i].calendar.dateToDayId[
          moment(date1).add(j, "days").format("YYYY-MM-DD")
        ];
      if (dateId) {
        count += Object.keys(
          users[i].calendar.daysWithDetails[dateId].details.mealsWithDetails
        ).length;
      }
    }

    //calculate status according to the count
    if (count >= 5 && count <= 10) {
      if (ActiveToggle) {
        data = {
          name: users[i].profile.name,
          pictureUrl: users[i].profile.pictureUrl,
          status: "Active",
        };
        FilteredData.push(data);
        //console.log(users[i].profile.name + " : Active " + count);
      }
    } else if (count > 10) {
      if (SuperActiveToggle) {
        data = {
          name: users[i].profile.name,
          pictureUrl: users[i].profile.pictureUrl,
          status: "SuperActive",
        };
        FilteredData.push(data);
        //console.log(users[i].profile.name + " : SuperActive " + count);
      }
    } else {
      if (BoredToggle) {
        data = {
          name: users[i].profile.name,
          pictureUrl: users[i].profile.pictureUrl,
          status: "Bored",
        };
        FilteredData.push(data);
        //console.log(users[i].profile.name + " : Bored " + count);
      }
    }

    //console.log(users[i].profile.name + " : " + count);
  }

  return FilteredData;
};

export default GenerateFilter;
