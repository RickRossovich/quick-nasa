import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
// import {Feed} from "rss-to-json"
@Injectable({
  providedIn: "root"
})
export class NASAService {
  api_key: string = "AEuFemlzD3eAHquMz4vhphthx6oLpSu9QmiOMoex";
  hd: boolean = false;
  date: string = "";

  patent: string = "patent";
  patent_issued: string = "";
  software: string = "";

  item: string = "";
  link: string = "";

  images: any[] = [];
  constructor(private http: HttpClient) {}

  //   rsFeed.load(baseUrl, function(err, rss){
  //     return this.http.get("https://www.nasa.gov/rss/dyn/earth.rss")
  // }

  getFeed() {
    console.log("what it do, bb");
    return this.http.get("https://api.rss2json.com/v1/api.json", {
      params: { rss_url: "https://www.nasa.gov/rss/dyn/earth.rss" }
    });
  }

  getPictureOfTheDay() {
    return this.http.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        api_key: this.api_key,
        date: this.date,
        hd: `${this.hd}`
      }
    });
  }

  getEpic() {
    return this.http.get(`https://api.nasa.gov/EPIC/api/natural/images?`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getRoverImage(date: string = "2019-01-19", rover: string = "curiosity") {
    return this.http.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
      {
        params: {
          api_key: this.api_key,
          earth_date: date
        }
      }
    );
  }
}
