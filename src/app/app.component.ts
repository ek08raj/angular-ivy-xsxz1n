import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Subject,
  shareReplay,
  map,
  tap,
  multicast,
  interval,
  ConnectableObservable,
  connectable,
} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  httpCall: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    /* Implemeting share replay */
    /*    this.httpCall = this.httpClient
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(
        tap(() => {
          console.log('http call initiated');
        }),
        map((res) => res),
        shareReplay()
      ); */
    /* this.fetchData();
    this.fetchData1();
    this.fetchData2(); */
    //this.fetchData();

    /*  Implementing multicast */
    /* let int1 = interval(1000);
    let ss = interval(1000).pipe(
      multicast(new Subject())
    ) as ConnectableObservable<number>; */
    let conect = connectable(interval(10000));
    /* int1.subscribe((res) => {
      console.log(res);
    }); */

    /*  int1.subscribe((res) => {
      console.log('cold Observable' + res);
    });

    setTimeout(() => {
      int1.subscribe((res) => {
        console.log('cold Observable' + res);
      });
    }, 1000);

    setTimeout(() => {
      int1.subscribe((res) => {
        console.log('cold Observable' + res);
      });
    }, 1000); */

    /*  ss.subscribe((res) => {
      console.log('hot observable' + res);
    });
    setTimeout(() => {
      ss.subscribe((res) => {
        console.log('hot observable1' + res);
      });
    }, 1000);

    setTimeout(() => {
      ss.subscribe((res) => {
        console.log('hot observable-------->' + res);
      });
    }, 1000);

    ss.connect(); */

    conect.subscribe((res) => {
      console.log(res);
    });

    setTimeout(() => {
      conect.subscribe((res) => {
        console.log('<----hot observable connetable-------->' + res);
      });
    }, 50000);
    setTimeout(() => {
      conect.subscribe((res) => {
        console.log('<----hot observable connetable2#####-------->' + res);
      });
    }, 50000);
    setTimeout(() => {
      conect.subscribe((res) => {
        console.log('<----hot observable connetable3#####-------->' + res);
      });
    }, 5000);

    conect.connect();
  }

  fetchData() {
    this.httpCall.subscribe((res) => {
      console.log(res);
    });
  }

  fetchData1() {
    this.httpCall.subscribe((res) => {
      console.log(res);
    });
  }
  fetchData2() {
    this.httpCall.subscribe((res) => {
      console.log(res);
    });
  }
}
