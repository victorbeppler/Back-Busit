export class BusLine {
    constructor(data) {
      this.Enterprise = data.enterprise;
      this.Country = data.country;
      this.State = data.state;
      this.City = data.city;
      this.Departure_Time = data.departure_time;
      this.Trajectory = data.trajectory;
      this.Price = data.price;
      this.Trajectory_duration = data.trajectory_duration;
    }
  }
  